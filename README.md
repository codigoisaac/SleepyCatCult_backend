# SleepyCatCult_api

> Uma API moderna e escalável para gerenciamento de filmes, desenvolvida com NestJS e TypeScript

## 🎬 Sobre o Projeto

**SleepyCatCult_api** é uma API para gerenciamento de filmes desenvolvida com NestJS e TypeScript. O projeto implementa funcionalidades de cadastro, consulta, atualização e exclusão de filmes, incluindo autenticação de usuários, sistema de cadastro e login, upload de imagens para a nuvem, sistema de filtros e envios programados de email.

A aplicação utiliza tecnologias modernas como Prisma ORM para interação com PostgreSQL, Cloudflare R2 para armazenamento de arquivos e autenticação baseada em JWT, demonstrando a implementação prática de conceitos fundamentais do desenvolvimento backend.

## ✨ Principais Features

### 🔐 **Sistema de Autenticação Robusto**

- Autenticação baseada em JWT com tokens seguros
- Registro e login de usuários com validação avançada
- Proteção de rotas com middleware de autenticação
- Hash seguro de senhas com bcrypt

### 🎭 **Gerenciamento Completo de Filmes**

- CRUD completo para catálogo de filmes
- Upload e gerenciamento de imagens de capa
- Sistema de busca e filtros avançados (título, duração, score, data de lançamento)
- Paginação eficiente para grandes volumes de dados

### ☁️ **Armazenamento em Nuvem**

- Integração com Cloudflare R2 para armazenamento de imagens
- URLs públicas para acesso direto às capas dos filmes
- Sistema de limpeza automática para arquivos órfãos
- Compatibilidade com API S3 para flexibilidade

### 📧 **Sistema de Notificações Inteligente**

- Envio automático de emails na data de lançamento dos filmes
- Sistema de agendamento persistente e resiliente a falhas
- Templates HTML personalizáveis para mensagens
- Integração com Ethereal para testes de desenvolvimento

### 🔧 **Arquitetura Moderna e Escalável**

- Construída com NestJS e TypeScript para type safety
- Arquitetura modular seguindo princípios SOLID
- ORM Prisma para interação tipada com PostgreSQL
- Processo de upload em duas etapas para melhor UX

### 🛡️ **Qualidade e Confiabilidade**

- Validação robusta de dados com class-validator
- Sistema de logs estruturados para debugging
- Jobs automáticos para manutenção da integridade dos dados
- Tratamento de erros padronizado e informativo

## 🚀 Casos de Uso

- **Catálogos Pessoais**: Organize sua coleção de filmes favoritos
- **Aplicações Cinematográficas**: Base sólida para apps de descoberta de filmes
- **Sistemas de Recomendação**: API preparada para integração com algoritmos de ML
- **Plataformas de Streaming**: Gerenciamento de metadados de conteúdo
- **Blogs e Críticas**: Sistema de backend para sites especializados em cinema

## 🏗️ Tecnologias Utilizadas

| Categoria          | Tecnologias                        |
| ------------------ | ---------------------------------- |
| **Backend**        | NestJS, TypeScript, Node.js        |
| **Banco de Dados** | PostgreSQL, Prisma ORM             |
| **Autenticação**   | JWT, Bcrypt                        |
| **Armazenamento**  | Cloudflare R2 (S3 Compatible)      |
| **Email**          | Nodemailer, Ethereal               |
| **Validação**      | Class Validator, Class Transformer |
| **Agendamento**    | NestJS Schedule                    |

---

## 📖 Sumário

### Como utilizar a aplicação

- [Como compilar e executar a aplicação](#como-compilar-e-executar-a-aplicação)
  - [Configuração do cliente de email Ethereal](#configuração-do-cliente-de-email-ethereal)
  - [Configuração do Cloudflare R2 para armazenamento de imagens](#configuração-do-cloudflare-r2-para-armazenamento-de-imagens)

### Sobre a aplicação

- [Visão Geral](#visão-geral)
- [Arquitetura](#arquitetura)
- [Principais Características](#principais-características)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Experiência do Desenvolvedor](#experiência-do-desenvolvedor)
- [Implantação e Escalabilidade](#implantação-e-escalabilidade)
- [Autenticação](#autenticação)
- [Gerenciamento de Filmes](#gerenciamento-de-filmes)
- [Sistema de Notificações por Email](#sistema-de-notificações-por-email)
- [Armazenamento de Imagens em Nuvem](#armazenamento-de-imagens-em-nuvem)

# Como compilar e executar a aplicação

Para executar a SleepyCatCult_api em seu ambiente local, siga os passos abaixo:

### Pré-requisitos

- Node.js (v16 ou superior)
- PostgreSQL (v13 ou superior)
- npm ou yarn

### Configuração inicial

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/sleepycatcult_api.git
cd sleepycatcult_api
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto baseado no exemplo `.env.example` fornecido no projeto
   - Preencha todas as variáveis necessárias conforme documentado abaixo:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/database?schema=public"

# Authentication
JWT_SECRET="sua_chave_secreta_muito_segura"

# Cloudflare R2
R2_ACCESS_KEY_ID="chave_de_acesso_do_cloudflare"
R2_SECRET_ACCESS_KEY="chave_secreta_do_cloudflare"
R2_ENDPOINT="https://seu-account-id.r2.cloudflarestorage.com"
R2_BUCKET_NAME="sleepycatcult-movies"
R2_PUBLIC_DEV_URL="https://seu-bucket.seu-account-id.r2.dev"
```

4. Configure o banco de dados:

   - Certifique-se de que o PostgreSQL esteja em execução
   - Crie um banco de dados PostgreSQL para o projeto:

   ```bash
   createdb sleepycatcult_movies
   # ou use o pgAdmin/DBeaver para criar o banco visualmente
   ```

   - Verifique se a string de conexão em DATABASE_URL no seu arquivo .env está correta:
     - Formato: `postgresql://usuario:senha@host:porta/nome_do_banco`
     - Exemplo: `postgresql://postgres:minhasenha@localhost:5432/sleepycatcult_movies`
   - Execute as migrações para criar as tabelas:

   ```bash
   npx prisma migrate dev
   # ou
   yarn prisma migrate dev
   ```

5. Inicie o servidor de desenvolvimento:

```bash
npm run start:dev
# ou
yarn start:dev
```

[Voltar ao sumário](#sumário)

### Configuração do cliente de email Ethereal

O sistema utiliza o Ethereal Email como serviço de teste para envio de emails. Para configurar o Ethereal:

1. **Acesse o site do Ethereal**:

   - Visite [https://ethereal.email/](https://ethereal.email/)
   - Clique em "Create Account" para gerar uma conta de teste

2. **Configurar as credenciais no .env**:
   Após criar a conta, adicione as credenciais no arquivo `.env`:

   ```env
   # Email Configuration - Ethereal
   EMAIL_HOST="smtp.ethereal.email"
   EMAIL_PORT=587
   EMAIL_USER="usuario_ethereal_gerado"
   EMAIL_PASS="senha_ethereal_gerada"
   ```

3. **Verificar o funcionamento**:
   - Os emails enviados pelo sistema aparecerão na interface web do Ethereal
   - Acesse a conta criada para visualizar os emails de teste

[Voltar ao sumário](#sumário)

### Configuração do Cloudflare R2 para armazenamento de imagens

#### Pré-requisitos

- Conta no Cloudflare (gratuita ou paga)
- Acesso ao painel de controle do Cloudflare

#### Configuração inicial do R2

1. **Ativar o R2**:

   - Acesse o [painel do Cloudflare](https://dash.cloudflare.com/)
   - No menu lateral, procure por "R2 Object Storage"
   - Se ainda não ativou, clique para ativar o serviço (pode exigir cartão de crédito para verificação, mas tem camada gratuita)

2. **Criar um bucket**:
   - Clique em "Create bucket"
   - Nomeie o bucket como `sleepycatcult-movies` (ou ajuste o .env se preferir outro nome)
   - Não é necessário configurações adicionais neste momento

#### Configuração de acesso público

1. **Configurar acesso público ao bucket**:

   - Selecione seu bucket recém-criado
   - Vá para a aba "Settings" e depois "Public access"
   - Ative "Public access" para o bucket

2. **Criar um domínio público usando R2.dev subdomínio**:
   - Vá para a aba "Settings" do seu bucket e ative "R2.dev public endpoint"
   - Seu endpoint público será algo como `https://seu-bucket-nome.seu-id-de-conta.r2.dev`
   - Use este URL no `.env` como `R2_PUBLIC_DEV_URL`

#### Criação de chaves de API

1. **Gerar chaves de API**:

   - No menu lateral vá para "R2" → "Overview" → "Manage R2 API Tokens"
   - Ou acesse diretamente [Tokens da API](https://dash.cloudflare.com/profile/api-tokens)
   - Clique em "Create Token" e selecione o template "R2 Storage"

2. **Configurar permissões**:

   - Conceda permissões para "Object Read" e "Object Write" no bucket específico
   - Restrinja por bucket se desejar limitar o acesso

3. **Obter credenciais**:
   - Após criar o token, você receberá:
     - Access Key ID
     - Secret Access Key
   - Guarde essas informações com segurança e adicione-as ao seu arquivo `.env`

#### Configuração no arquivo .env

Configure as seguintes variáveis no seu arquivo `.env`:

```env
R2_ACCESS_KEY_ID="sua_access_key_id"
R2_SECRET_ACCESS_KEY="sua_secret_access_key"
R2_ENDPOINT="https://seu-account-id.r2.cloudflarestorage.com"
R2_BUCKET_NAME="sleepycatcult-movies"
R2_PUBLIC_DEV_URL="https://seu-bucket.seu-account-id.r2.dev"
```

**Notas:**

- O `R2_ENDPOINT` é o endpoint S3 compatível (não o público), disponível na página do R2
- O `R2_PUBLIC_DEV_URL` é o URL público configurado no passo anterior
- O `R2_BUCKET_NAME` deve corresponder ao nome exato do bucket criado

#### Testando a configuração

Para verificar se a configuração está correta, siga estes passos:

1. Inicie a aplicação
2. Primeiro, crie um filme no banco de dados utilizando o endpoint de criação de filmes
   - O sistema inicialmente criará o filme com um status "pending" para a imagem
   - Observe nos logs a criação do filme com o status "pending\_[timestamp]" para a imagem
3. Em seguida, utilize o endpoint para upload de imagem do filme
   - Este endpoint chamará o método `uploadCoverImage` no MoviesService
   - O sistema fará upload da imagem para o Cloudflare R2 e atualizará o registro do filme
4. Verifique nos logs da aplicação se não há erros relacionados ao upload
5. Confirme que a URL da imagem no registro do filme começa com o valor configurado em `R2_PUBLIC_DEV_URL`
6. Acesse a URL da imagem em seu navegador para confirmar que está acessível publicamente

**Nota:** O sistema possui um mecanismo de limpeza automática que remove filmes que permanecem sem imagem por mais de 1 minuto.

[Voltar ao sumário](#sumário)

# Sobre a aplicação

## Visão Geral

A SleepyCatCult_api é uma solução completa e robusta para gerenciamento de filmes, desenvolvida utilizando práticas modernas de arquitetura de software. Construída com NestJS e TypeScript, a API oferece um conjunto abrangente de funcionalidades para cadastro, consulta, atualização e exclusão de filmes, com recursos avançados de busca, filtros e notificações.

[Voltar ao sumário](#sumário)

## Arquitetura

O projeto segue uma arquitetura modular baseada em princípios SOLID, com clara separação de responsabilidades:

- **Camada de Controladores**: Recebe e valida requisições HTTP
- **Camada de Serviços**: Implementa a lógica de negócio
- **Camada de Persistência**: Gerencia o acesso ao banco de dados PostgreSQL via Prisma ORM
- **Serviços de Infraestrutura**: Módulos especializados para email e armazenamento

Esta organização promove testabilidade, manutenibilidade e extensibilidade do código, permitindo que novos recursos sejam adicionados com mínimo impacto nos componentes existentes.

[Voltar ao sumário](#sumário)

## Principais Características

- **Autenticação Segura**: Sistema baseado em JWT com múltiplas camadas de proteção
- **CRUD Completo de Filmes**: Endpoints bem documentados para todas as operações
- **Upload de Imagens**: Armazenamento em nuvem via Cloudflare R2
- **Filtros Avançados**: Sistema flexível para busca e filtragem de filmes
- **Notificações por Email**: Envio automático de lembretes na data de lançamento dos filmes que o usuário cadastrou
- **Processo em Duas Etapas**: Fluxo otimizado para criação de filmes com upload de imagem
- **Consistência de Dados**: Jobs automáticos para manutenção da integridade do banco

[Voltar ao sumário](#sumário)

## Tecnologias Utilizadas

A aplicação utiliza um conjunto de tecnologias modernas e eficientes:

- **NestJS**: Framework estruturado para APIs Node.js
- **TypeScript**: Tipagem estática para maior segurança e produtividade
- **PostgreSQL**: Banco de dados relacional robusto
- **Prisma ORM**: Acesso tipado ao banco de dados
- **Cloudflare R2**: Armazenamento de imagens compatível com S3
- **JWT**: Autenticação stateless e escalável
- **Nodemailer & Ethereal**: Sistema de emails para notificações
- **Bcrypt**: Hashing seguro de senhas
- **Class Validator**: Validação robusta de dados de entrada

[Voltar ao sumário](#sumário)

## Experiência do Desenvolvedor

A API foi desenvolvida com foco na experiência do desenvolvedor (DX):

- **Mensagens de Erro Claras**: Respostas HTTP informativas
- **Logs Estruturados**: Registro detalhado de operações para fácil depuração
- **Variáveis de Ambiente**: Configuração flexível para diferentes ambientes
- **Migrations**: Gestão de esquema de banco via Prisma
- **DTOs Tipados**: Contratos claros para entrada e saída de dados

[Voltar ao sumário](#sumário)

## Implantação e Escalabilidade

A aplicação foi projetada para ser facilmente implantada e escalada:

- **Stateless**: Arquitetura sem estado que facilita escalabilidade horizontal
- **Persistência Robusta**: Agendamentos e dados críticos persistidos em banco
- **Variáveis de Ambiente**: Configuração flexível para diferentes ambientes
- **Monitoramento**: Logs detalhados para observabilidade

Esta API representa uma solução completa para o gerenciamento de filmes, combinando boas práticas de desenvolvimento, escolhas tecnológicas adequadas e uma arquitetura pensada para evolução contínua.

[Voltar ao sumário](#sumário)

---

# Autenticação

## Visão Geral

O sistema de autenticação implementa uma solução baseada em JWT (JSON Web Tokens), garantindo segurança e controle de acesso eficiente às rotas protegidas da aplicação.

## Arquitetura

A autenticação está organizada em componentes bem definidos, seguindo o princípio de separação de responsabilidades:

- **AuthModule**: Configura e gerencia as dependências relacionadas à autenticação
- **AuthController**: Expõe os endpoints para interação com o cliente
- **AuthService**: Implementa a lógica de negócio e interação com o banco de dados
- **AuthGuard**: Protege as rotas que exigem autenticação

Esta estrutura modular facilita a manutenção e expansão do sistema, permitindo que novos recursos sejam adicionados sem modificar os componentes existentes.

## Segurança

O sistema implementa diversas camadas de segurança:

- Senhas armazenadas com hash bcrypt
- Tokens com expiração de 1 hora
- Validação robusta de credenciais
- Respostas padronizadas que não expõem informações sensíveis

## Endpoints

| Método | Rota           | Descrição                     | Autenticação |
| ------ | -------------- | ----------------------------- | ------------ |
| POST   | `/auth/signup` | Cadastra novo usuário         | Não          |
| POST   | `/auth/login`  | Autentica e retorna token JWT | Não          |
| GET    | `/auth/check`  | Verifica validade do token    | Sim          |

### Requisições e Respostas

Todos os endpoints utilizam formato JSON para comunicação e seguem um padrão consistente:

- **Cadastro (signup)**: Recebe informações do usuário (nome, email, senha, confirmação) e retorna os dados do usuário criado (sem a senha)
- **Login**: Recebe credenciais e retorna token de acesso
- **Verificação (check)**: Valida o token enviado no header `Authorization: Bearer {token}` e retorna dados do usuário

O tratamento de erros é uniforme em todos os endpoints, com mensagens claras e códigos HTTP apropriados para cada situação.

## Fluxo de Autenticação

1. O usuário se cadastra através do endpoint `/auth/signup`
2. Com o email e senha, o usuário obtém um token JWT via `/auth/login`
3. Este token é incluído nas requisições subsequentes para acessar rotas protegidas
4. O AuthGuard verifica a validade do token em cada requisição protegida

Esta abordagem stateless elimina a necessidade de armazenamento de sessões no servidor, facilitando a escalabilidade horizontal da aplicação.

[Voltar ao sumário](#sumário)

---

# Gerenciamento de Filmes

## Visão Geral

O sistema de gerenciamento de filmes implementa uma API completa para criação, leitura, atualização e exclusão (CRUD) de filmes, com recursos adicionais como upload de imagens, filtros avançados e notificações por email.

## Arquitetura

O módulo de filmes segue uma estrutura organizada e modular:

- **MoviesModule**: Configura middlewares de upload e integra os serviços de email e armazenamento
- **MoviesController**: Expõe endpoints RESTful para todas as operações de filmes
- **MoviesService**: Implementa a lógica de negócio e gerencia o ciclo de vida dos filmes
- **DTOs**: Define esquemas de validação para entrada e saída de dados

Esta arquitetura facilita a manutenção e adição de novos recursos, seguindo princípios SOLID.

## Funcionalidades Avançadas

- **Upload de imagens**: Integração com serviço de armazenamento em nuvem (Cloudflare R2)
- **Processo em duas etapas**: Criação de dados e upload de imagem separados para melhor UX
- **Limpeza automática**: Remoção de filmes sem imagens após período de tempo
- **Notificações**: Envio de emails automáticos na data de lançamento dos filmes
- **Sistema de filtros**: Busca por título, duração, data de lançamento e score

## Endpoints

| Método | Rota                      | Descrição                             | Autenticação |
| ------ | ------------------------- | ------------------------------------- | ------------ |
| POST   | `/movies`                 | Cria dados iniciais do filme          | Sim          |
| POST   | `/movies/:id/cover-image` | Faz upload da imagem de capa          | Sim          |
| GET    | `/movies`                 | Lista filmes com filtros e paginação  | Sim          |
| GET    | `/movies/:id`             | Obtém detalhes de um filme específico | Sim          |
| PATCH  | `/movies/:id`             | Atualiza dados do filme               | Sim          |
| PATCH  | `/movies/:id/cover-image` | Atualiza apenas a imagem de capa      | Sim          |
| DELETE | `/movies/:id`             | Remove um filme                       | Sim          |

## Fluxo de Criação de Filmes

O sistema implementa um processo em duas etapas para criação de filmes:

1. **Criação dos dados básicos**: O cliente envia informações textuais do filme
2. **Upload da imagem de capa**: Após receber o ID do filme, o cliente envia a imagem

Esta abordagem oferece maior controle sobre o processo e melhor experiência em conexões lentas, pois separa as operações de dados e de arquivos.

## Sistema de Limpeza

Para garantir a integridade dos dados, um job automático verifica e remove filmes que permanecem sem imagens após o período configurado, evitando filmes incompletos no sistema.

## Filtros e Paginação

A API oferece um sistema completo de filtros e paginação:

- Filtragem por duração (mínima e máxima)
- Filtragem por data de lançamento (período)
- Busca por título (case insensitive)
- Filtragem por score (mínimo e máximo)
- Paginação configurável (página e itens por página)

Esta implementação permite consultas eficientes no banco de dados e um sistema de busca flexível para os usuários.

[Voltar ao sumário](#sumário)

---

# Sistema de Notificações por Email

## Visão Geral

O sistema de notificações implementa um serviço de envio de emails agendados. Os emails são enviados para o usuário que criou o filme, na data de lançamento do filme, lembrando o usuário sobre o evento. A arquitetura utiliza cron jobs e uma fila de emails persistente no banco de dados, garantindo que nenhuma notificação seja perdida mesmo em caso de reinicialização do serviço.

## Arquitetura

A implementação de emails está organizada em componentes especializados:

- **EmailModule**: Configura o agendador de tarefas e expõe o serviço para outros módulos
- **EmailService**: Implementa a lógica de agendamento e envio de emails
- **Modelo de dados**: Utiliza tabela específica no banco para controle de agendamentos

## Tecnologias Utilizadas

O sistema utiliza bibliotecas leves e eficientes:

- **Nodemailer**: Para o envio de emails com suporte a HTML e anexos
- **@nestjs/schedule**: Para configuração de tarefas agendadas via decoradores
- **Ethereal**: Serviço de teste de emails que facilita o desenvolvimento

Estas tecnologias foram escolhidas pela simplicidade de implementação e pelo fato de não exigirem infraestrutura complexa para um projeto deste porte.

## Funcionalidades

- **Agendamento de emails**: Criação de notificações para datas futuras
- **Cancelamento de agendamentos**: Remoção de notificações programadas
- **Verificação periódica**: Execução automática a cada minuto
- **Controle de entrega**: Marcação de emails enviados para evitar duplicações
- **Templates HTML**: Formatação visual das mensagens para melhor experiência

## Fluxo de Funcionamento

1. Quando um filme com data de lançamento futura é criado, um agendamento é registrado no banco
2. A cada minuto, o sistema verifica se há notificações programadas para o momento atual
3. Os emails pendentes são enviados e marcados como entregues
4. Se a data de lançamento de um filme é alterada, o agendamento é atualizado
5. Se um filme é removido, seus agendamentos de email são automaticamente cancelados

## Benefícios da Implementação

A abordagem adotada oferece diversas vantagens:

- Resiliência a falhas: Agendamentos persistidos em banco resistem a reinicializações
- Baixo acoplamento: Serviço isolado que pode ser facilmente estendido
- Auditoria: Registro completo de emails agendados e enviados
- Testabilidade: A integração com Ethereal facilita testes sem enviar emails reais
- Escalabilidade: A estrutura permite fácil migração para serviços como SES ou SendGrid

[Voltar ao sumário](#sumário)

---

# Armazenamento de Imagens em Nuvem

## Visão Geral

O sistema implementa um serviço de armazenamento de imagens na nuvem utilizando o Cloudflare R2, permitindo o upload, acesso e exclusão de capas de filmes de forma eficiente e segura.

## Arquitetura

O módulo de armazenamento segue uma estrutura simples e eficaz:

- **StorageModule**: Configura as dependências e expõe o serviço para outros módulos
- **StorageService**: Implementa a interface de comunicação com o Cloudflare R2
- **Middleware de Upload**: Processa arquivos enviados e os prepara para armazenamento

## Escolha do Cloudflare R2

O Cloudflare R2 foi selecionado por diversos motivos:

- **Compatibilidade com API S3**: Permite utilizar bibliotecas e padrões bem estabelecidos
- **Modelo de custo transparente**: Sem taxas de egress (transferência de saída)
- **Simplicidade de configuração**: Setup rápido, ideal para projetos de menor escala
- **Performance global**: Distribuição via CDN do Cloudflare embutida

Esta solução oferece o equilíbrio perfeito entre simplicidade operacional e performance para um projeto desta natureza.

## Funcionalidades

- **Upload seguro**: Geração de nomes únicos para evitar colisões
- **Metadados adequados**: Configuração de Content-Type e Cache-Control
- **Exclusão automática**: Remoção de imagens quando filmes são excluídos
- **Validação de tipos**: Verificação de formato e propriedades dos arquivos
- **URLs públicas**: Geração de links acessíveis para as imagens armazenadas

## Fluxo de Operação

1. O cliente envia um arquivo de imagem via multipart/form-data
2. O middleware processa o arquivo e o disponibiliza ao controller
3. O serviço de armazenamento gera um nome único para o arquivo
4. O arquivo é enviado para o bucket do R2 com metadados apropriados
5. A URL pública é retornada e armazenada no registro do filme
6. Em caso de atualização ou exclusão, a imagem anterior é removida automaticamente

## Validações e Segurança

- Verificação de tipo MIME para aceitar apenas imagens
- Limitação de tamanho de arquivo para otimizar performance
- Geração de nomes únicos para evitar conflitos e ataques
- URLs públicas seguras que não expõem informações do sistema

[Voltar ao sumário](#sumário)

---

## 🤝 Contribuição

Este projeto está aberto para contribuições! Se você tem ideias para melhorias ou encontrou algum bug, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## 📝 Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

---

**SleepyCatCult_api** - Desenvolvida com ❤️ e muito ☕
