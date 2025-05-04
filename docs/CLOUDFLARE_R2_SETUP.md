# Configuração do Cloudflare R2 para o Cubos Movies

Este guia explica como configurar o Cloudflare R2 para armazenamento das imagens de capa dos filmes.

## 1. Criar conta e acessar o R2

1. Acesse [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Faça login ou crie uma conta
3. No menu lateral, vá para **R2**
4. Se for sua primeira vez, clique em **Get started with R2**

## 2. Criar um bucket

1. Na tela do R2, clique em **Create bucket**
2. Nomeie seu bucket como `cubos-movies` (ou outro nome de sua preferência)
3. Clique em **Create bucket**

## 3. Configurar acesso público (opcional, mas recomendado)

Para permitir acesso público às imagens:

1. Acesse o bucket criado
2. Vá para a aba **Settings**
3. Role até a seção **Public access**
4. Habilite **Allow access from public to objects**
5. Clique em **Save**

## 4. Criar chaves de API

1. Na página principal do R2, clique em **Manage R2 API Tokens**
2. Clique em **Create API token**
3. Selecione **Object Read & Write** para permissões
4. Em **Include bucket**, selecione seu bucket `cubos-movies`
5. Defina um TTL (opcional) - recomendado deixar sem expiração para ambientes de produção
6. Clique em **Create API Token**
7. **IMPORTANTE**: Salve tanto o **Access Key ID** quanto o **Secret Access Key** em um local seguro. O Secret Access Key não será mostrado novamente.

## 5. Configurar variáveis de ambiente

Adicione as seguintes variáveis ao seu arquivo `.env`:

```
R2_ACCESS_KEY_ID=seu-access-key-id
R2_SECRET_ACCESS_KEY=seu-secret-access-key
R2_ENDPOINT=https://xxxxxxxxxxxxxxxxxxxx.r2.cloudflarestorage.com
R2_BUCKET_NAME=cubos-movies
```

O valor do `R2_ENDPOINT` pode ser encontrado na página do seu bucket, na seção **Endpoints** > **S3 API**.

## 6. Configurar CDN (opcional)

Para melhor performance, você pode configurar um domínio personalizado:

1. Vá para **Workers & Pages** no menu lateral
2. Clique em **Create application** > **Create Worker**
3. Dê um nome como `movies-cdn`
4. No editor, cole o seguinte código:

```js
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname.slice(1);

    if (!path) {
      return new Response('Not Found', { status: 404 });
    }

    try {
      const object = await env.BUCKET.get(path);

      if (!object) {
        return new Response('Not Found', { status: 404 });
      }

      const headers = new Headers();
      object.writeHttpMetadata(headers);
      headers.set('etag', object.httpEtag);
      headers.set('Cache-Control', 'public, max-age=31536000');

      return new Response(object.body, {
        headers,
      });
    } catch (error) {
      return new Response('Internal Error', { status: 500 });
    }
  },
};
```

5. Em **Variables** > **Bindings**, adicione uma R2 binding:

   - Variable name: `BUCKET`
   - R2 bucket: `cubos-movies`

6. Salve e implante o worker
7. Configure um domínio personalizado para o worker (opcional)
8. Adicione o domínio como variável de ambiente:
   ```
   R2_CDN_DOMAIN=seu-dominio-personalizado.com
   ```

## 7. Testando a configuração

Após a configuração, você pode testar o upload de arquivos usando o Postman ou outra ferramenta:

1. Faça uma requisição POST para `/movies`
2. Use `multipart/form-data` como Content-Type
3. Adicione os campos necessários para o filme
4. Adicione um arquivo de imagem no campo `coverImage`
5. Certifique-se de incluir o token JWT de autenticação no header `Authorization`
