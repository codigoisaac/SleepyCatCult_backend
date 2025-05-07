
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Movie
 * 
 */
export type Movie = $Result.DefaultSelection<Prisma.$MoviePayload>
/**
 * Model EmailSchedule
 * 
 */
export type EmailSchedule = $Result.DefaultSelection<Prisma.$EmailSchedulePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.MovieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailSchedule`: Exposes CRUD operations for the **EmailSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailSchedules
    * const emailSchedules = await prisma.emailSchedule.findMany()
    * ```
    */
  get emailSchedule(): Prisma.EmailScheduleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Movie: 'Movie',
    EmailSchedule: 'EmailSchedule'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "movie" | "emailSchedule"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Movie: {
        payload: Prisma.$MoviePayload<ExtArgs>
        fields: Prisma.MovieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findFirst: {
            args: Prisma.MovieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findMany: {
            args: Prisma.MovieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          create: {
            args: Prisma.MovieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          createMany: {
            args: Prisma.MovieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          delete: {
            args: Prisma.MovieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          update: {
            args: Prisma.MovieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          deleteMany: {
            args: Prisma.MovieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          upsert: {
            args: Prisma.MovieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovie>
          }
          groupBy: {
            args: Prisma.MovieGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieCountArgs<ExtArgs>
            result: $Utils.Optional<MovieCountAggregateOutputType> | number
          }
        }
      }
      EmailSchedule: {
        payload: Prisma.$EmailSchedulePayload<ExtArgs>
        fields: Prisma.EmailScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSchedulePayload>
          }
          findFirst: {
            args: Prisma.EmailScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSchedulePayload>
          }
          findMany: {
            args: Prisma.EmailScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSchedulePayload>[]
          }
          create: {
            args: Prisma.EmailScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSchedulePayload>
          }
          createMany: {
            args: Prisma.EmailScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSchedulePayload>[]
          }
          delete: {
            args: Prisma.EmailScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSchedulePayload>
          }
          update: {
            args: Prisma.EmailScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSchedulePayload>
          }
          deleteMany: {
            args: Prisma.EmailScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSchedulePayload>[]
          }
          upsert: {
            args: Prisma.EmailScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSchedulePayload>
          }
          aggregate: {
            args: Prisma.EmailScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailSchedule>
          }
          groupBy: {
            args: Prisma.EmailScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<EmailScheduleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    movie?: MovieOmit
    emailSchedule?: EmailScheduleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    movies: number
    emailSchedules: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | UserCountOutputTypeCountMoviesArgs
    emailSchedules?: boolean | UserCountOutputTypeCountEmailSchedulesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmailSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailScheduleWhereInput
  }


  /**
   * Count Type MovieCountOutputType
   */

  export type MovieCountOutputType = {
    emailSchedules: number
  }

  export type MovieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emailSchedules?: boolean | MovieCountOutputTypeCountEmailSchedulesArgs
  }

  // Custom InputTypes
  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCountOutputType
     */
    select?: MovieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountEmailSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailScheduleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movies?: boolean | User$moviesArgs<ExtArgs>
    emailSchedules?: boolean | User$emailSchedulesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | User$moviesArgs<ExtArgs>
    emailSchedules?: boolean | User$emailSchedulesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      movies: Prisma.$MoviePayload<ExtArgs>[]
      emailSchedules: Prisma.$EmailSchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movies<T extends User$moviesArgs<ExtArgs> = {}>(args?: Subset<T, User$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emailSchedules<T extends User$emailSchedulesArgs<ExtArgs> = {}>(args?: Subset<T, User$emailSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.movies
   */
  export type User$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    cursor?: MovieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * User.emailSchedules
   */
  export type User$emailSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSchedule
     */
    select?: EmailScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSchedule
     */
    omit?: EmailScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailScheduleInclude<ExtArgs> | null
    where?: EmailScheduleWhereInput
    orderBy?: EmailScheduleOrderByWithRelationInput | EmailScheduleOrderByWithRelationInput[]
    cursor?: EmailScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailScheduleScalarFieldEnum | EmailScheduleScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  export type MovieAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    popularity: number | null
    voteCount: number | null
    score: number | null
    duration: number | null
    budget: number | null
    revenue: number | null
    profit: number | null
  }

  export type MovieSumAggregateOutputType = {
    id: number | null
    userId: number | null
    popularity: number | null
    voteCount: number | null
    score: number | null
    duration: number | null
    budget: number | null
    revenue: number | null
    profit: number | null
  }

  export type MovieMinAggregateOutputType = {
    id: number | null
    title: string | null
    userId: number | null
    originalTitle: string | null
    coverImageUrl: string | null
    popularity: number | null
    voteCount: number | null
    score: number | null
    tagline: string | null
    synopsis: string | null
    releaseDate: Date | null
    duration: number | null
    status: string | null
    language: string | null
    budget: number | null
    revenue: number | null
    profit: number | null
    trailerUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MovieMaxAggregateOutputType = {
    id: number | null
    title: string | null
    userId: number | null
    originalTitle: string | null
    coverImageUrl: string | null
    popularity: number | null
    voteCount: number | null
    score: number | null
    tagline: string | null
    synopsis: string | null
    releaseDate: Date | null
    duration: number | null
    status: string | null
    language: string | null
    budget: number | null
    revenue: number | null
    profit: number | null
    trailerUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MovieCountAggregateOutputType = {
    id: number
    title: number
    userId: number
    originalTitle: number
    coverImageUrl: number
    popularity: number
    voteCount: number
    score: number
    tagline: number
    synopsis: number
    genres: number
    releaseDate: number
    duration: number
    status: number
    language: number
    budget: number
    revenue: number
    profit: number
    trailerUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MovieAvgAggregateInputType = {
    id?: true
    userId?: true
    popularity?: true
    voteCount?: true
    score?: true
    duration?: true
    budget?: true
    revenue?: true
    profit?: true
  }

  export type MovieSumAggregateInputType = {
    id?: true
    userId?: true
    popularity?: true
    voteCount?: true
    score?: true
    duration?: true
    budget?: true
    revenue?: true
    profit?: true
  }

  export type MovieMinAggregateInputType = {
    id?: true
    title?: true
    userId?: true
    originalTitle?: true
    coverImageUrl?: true
    popularity?: true
    voteCount?: true
    score?: true
    tagline?: true
    synopsis?: true
    releaseDate?: true
    duration?: true
    status?: true
    language?: true
    budget?: true
    revenue?: true
    profit?: true
    trailerUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MovieMaxAggregateInputType = {
    id?: true
    title?: true
    userId?: true
    originalTitle?: true
    coverImageUrl?: true
    popularity?: true
    voteCount?: true
    score?: true
    tagline?: true
    synopsis?: true
    releaseDate?: true
    duration?: true
    status?: true
    language?: true
    budget?: true
    revenue?: true
    profit?: true
    trailerUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MovieCountAggregateInputType = {
    id?: true
    title?: true
    userId?: true
    originalTitle?: true
    coverImageUrl?: true
    popularity?: true
    voteCount?: true
    score?: true
    tagline?: true
    synopsis?: true
    genres?: true
    releaseDate?: true
    duration?: true
    status?: true
    language?: true
    budget?: true
    revenue?: true
    profit?: true
    trailerUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movie to aggregate.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieMaxAggregateInputType
  }

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>
  }




  export type MovieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithAggregationInput | MovieOrderByWithAggregationInput[]
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum
    having?: MovieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCountAggregateInputType | true
    _avg?: MovieAvgAggregateInputType
    _sum?: MovieSumAggregateInputType
    _min?: MovieMinAggregateInputType
    _max?: MovieMaxAggregateInputType
  }

  export type MovieGroupByOutputType = {
    id: number
    title: string
    userId: number
    originalTitle: string
    coverImageUrl: string
    popularity: number
    voteCount: number
    score: number
    tagline: string
    synopsis: string
    genres: string[]
    releaseDate: Date
    duration: number
    status: string
    language: string
    budget: number
    revenue: number
    profit: number
    trailerUrl: string
    createdAt: Date
    updatedAt: Date
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
        }
      >
    >


  export type MovieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    userId?: boolean
    originalTitle?: boolean
    coverImageUrl?: boolean
    popularity?: boolean
    voteCount?: boolean
    score?: boolean
    tagline?: boolean
    synopsis?: boolean
    genres?: boolean
    releaseDate?: boolean
    duration?: boolean
    status?: boolean
    language?: boolean
    budget?: boolean
    revenue?: boolean
    profit?: boolean
    trailerUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    emailSchedules?: boolean | Movie$emailSchedulesArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie"]>

  export type MovieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    userId?: boolean
    originalTitle?: boolean
    coverImageUrl?: boolean
    popularity?: boolean
    voteCount?: boolean
    score?: boolean
    tagline?: boolean
    synopsis?: boolean
    genres?: boolean
    releaseDate?: boolean
    duration?: boolean
    status?: boolean
    language?: boolean
    budget?: boolean
    revenue?: boolean
    profit?: boolean
    trailerUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie"]>

  export type MovieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    userId?: boolean
    originalTitle?: boolean
    coverImageUrl?: boolean
    popularity?: boolean
    voteCount?: boolean
    score?: boolean
    tagline?: boolean
    synopsis?: boolean
    genres?: boolean
    releaseDate?: boolean
    duration?: boolean
    status?: boolean
    language?: boolean
    budget?: boolean
    revenue?: boolean
    profit?: boolean
    trailerUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie"]>

  export type MovieSelectScalar = {
    id?: boolean
    title?: boolean
    userId?: boolean
    originalTitle?: boolean
    coverImageUrl?: boolean
    popularity?: boolean
    voteCount?: boolean
    score?: boolean
    tagline?: boolean
    synopsis?: boolean
    genres?: boolean
    releaseDate?: boolean
    duration?: boolean
    status?: boolean
    language?: boolean
    budget?: boolean
    revenue?: boolean
    profit?: boolean
    trailerUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MovieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "userId" | "originalTitle" | "coverImageUrl" | "popularity" | "voteCount" | "score" | "tagline" | "synopsis" | "genres" | "releaseDate" | "duration" | "status" | "language" | "budget" | "revenue" | "profit" | "trailerUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["movie"]>
  export type MovieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    emailSchedules?: boolean | Movie$emailSchedulesArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MovieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MovieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MoviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movie"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      emailSchedules: Prisma.$EmailSchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      userId: number
      originalTitle: string
      coverImageUrl: string
      popularity: number
      voteCount: number
      score: number
      tagline: string
      synopsis: string
      genres: string[]
      releaseDate: Date
      duration: number
      status: string
      language: string
      budget: number
      revenue: number
      profit: number
      trailerUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["movie"]>
    composites: {}
  }

  type MovieGetPayload<S extends boolean | null | undefined | MovieDefaultArgs> = $Result.GetResult<Prisma.$MoviePayload, S>

  type MovieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovieCountAggregateInputType | true
    }

  export interface MovieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movie'], meta: { name: 'Movie' } }
    /**
     * Find zero or one Movie that matches the filter.
     * @param {MovieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieFindUniqueArgs>(args: SelectSubset<T, MovieFindUniqueArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieFindUniqueOrThrowArgs>(args: SelectSubset<T, MovieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieFindFirstArgs>(args?: SelectSubset<T, MovieFindFirstArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieFindFirstOrThrowArgs>(args?: SelectSubset<T, MovieFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovieFindManyArgs>(args?: SelectSubset<T, MovieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movie.
     * @param {MovieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     * 
     */
    create<T extends MovieCreateArgs>(args: SelectSubset<T, MovieCreateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movies.
     * @param {MovieCreateManyArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovieCreateManyArgs>(args?: SelectSubset<T, MovieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movies and returns the data saved in the database.
     * @param {MovieCreateManyAndReturnArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movies and only return the `id`
     * const movieWithIdOnly = await prisma.movie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovieCreateManyAndReturnArgs>(args?: SelectSubset<T, MovieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Movie.
     * @param {MovieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     * 
     */
    delete<T extends MovieDeleteArgs>(args: SelectSubset<T, MovieDeleteArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movie.
     * @param {MovieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovieUpdateArgs>(args: SelectSubset<T, MovieUpdateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movies.
     * @param {MovieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovieDeleteManyArgs>(args?: SelectSubset<T, MovieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovieUpdateManyArgs>(args: SelectSubset<T, MovieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies and returns the data updated in the database.
     * @param {MovieUpdateManyAndReturnArgs} args - Arguments to update many Movies.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Movies and only return the `id`
     * const movieWithIdOnly = await prisma.movie.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MovieUpdateManyAndReturnArgs>(args: SelectSubset<T, MovieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Movie.
     * @param {MovieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
     */
    upsert<T extends MovieUpsertArgs>(args: SelectSubset<T, MovieUpsertArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MovieCountArgs>(
      args?: Subset<T, MovieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieAggregateArgs>(args: Subset<T, MovieAggregateArgs>): Prisma.PrismaPromise<GetMovieAggregateType<T>>

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGroupByArgs['orderBy'] }
        : { orderBy?: MovieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movie model
   */
  readonly fields: MovieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    emailSchedules<T extends Movie$emailSchedulesArgs<ExtArgs> = {}>(args?: Subset<T, Movie$emailSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Movie model
   */
  interface MovieFieldRefs {
    readonly id: FieldRef<"Movie", 'Int'>
    readonly title: FieldRef<"Movie", 'String'>
    readonly userId: FieldRef<"Movie", 'Int'>
    readonly originalTitle: FieldRef<"Movie", 'String'>
    readonly coverImageUrl: FieldRef<"Movie", 'String'>
    readonly popularity: FieldRef<"Movie", 'Float'>
    readonly voteCount: FieldRef<"Movie", 'Int'>
    readonly score: FieldRef<"Movie", 'Float'>
    readonly tagline: FieldRef<"Movie", 'String'>
    readonly synopsis: FieldRef<"Movie", 'String'>
    readonly genres: FieldRef<"Movie", 'String[]'>
    readonly releaseDate: FieldRef<"Movie", 'DateTime'>
    readonly duration: FieldRef<"Movie", 'Int'>
    readonly status: FieldRef<"Movie", 'String'>
    readonly language: FieldRef<"Movie", 'String'>
    readonly budget: FieldRef<"Movie", 'Float'>
    readonly revenue: FieldRef<"Movie", 'Float'>
    readonly profit: FieldRef<"Movie", 'Float'>
    readonly trailerUrl: FieldRef<"Movie", 'String'>
    readonly createdAt: FieldRef<"Movie", 'DateTime'>
    readonly updatedAt: FieldRef<"Movie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Movie findUnique
   */
  export type MovieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findUniqueOrThrow
   */
  export type MovieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findFirst
   */
  export type MovieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findFirstOrThrow
   */
  export type MovieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findMany
   */
  export type MovieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie create
   */
  export type MovieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to create a Movie.
     */
    data: XOR<MovieCreateInput, MovieUncheckedCreateInput>
  }

  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movie createManyAndReturn
   */
  export type MovieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movie update
   */
  export type MovieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to update a Movie.
     */
    data: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
    /**
     * Choose, which Movie to update.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to update.
     */
    limit?: number
  }

  /**
   * Movie updateManyAndReturn
   */
  export type MovieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movie upsert
   */
  export type MovieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The filter to search for the Movie to update in case it exists.
     */
    where: MovieWhereUniqueInput
    /**
     * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
     */
    create: XOR<MovieCreateInput, MovieUncheckedCreateInput>
    /**
     * In case the Movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
  }

  /**
   * Movie delete
   */
  export type MovieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter which Movie to delete.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to delete.
     */
    limit?: number
  }

  /**
   * Movie.emailSchedules
   */
  export type Movie$emailSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSchedule
     */
    select?: EmailScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSchedule
     */
    omit?: EmailScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailScheduleInclude<ExtArgs> | null
    where?: EmailScheduleWhereInput
    orderBy?: EmailScheduleOrderByWithRelationInput | EmailScheduleOrderByWithRelationInput[]
    cursor?: EmailScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailScheduleScalarFieldEnum | EmailScheduleScalarFieldEnum[]
  }

  /**
   * Movie without action
   */
  export type MovieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
  }


  /**
   * Model EmailSchedule
   */

  export type AggregateEmailSchedule = {
    _count: EmailScheduleCountAggregateOutputType | null
    _avg: EmailScheduleAvgAggregateOutputType | null
    _sum: EmailScheduleSumAggregateOutputType | null
    _min: EmailScheduleMinAggregateOutputType | null
    _max: EmailScheduleMaxAggregateOutputType | null
  }

  export type EmailScheduleAvgAggregateOutputType = {
    id: number | null
    movieId: number | null
    userId: number | null
  }

  export type EmailScheduleSumAggregateOutputType = {
    id: number | null
    movieId: number | null
    userId: number | null
  }

  export type EmailScheduleMinAggregateOutputType = {
    id: number | null
    movieId: number | null
    userId: number | null
    scheduledFor: Date | null
    sent: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailScheduleMaxAggregateOutputType = {
    id: number | null
    movieId: number | null
    userId: number | null
    scheduledFor: Date | null
    sent: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailScheduleCountAggregateOutputType = {
    id: number
    movieId: number
    userId: number
    scheduledFor: number
    sent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmailScheduleAvgAggregateInputType = {
    id?: true
    movieId?: true
    userId?: true
  }

  export type EmailScheduleSumAggregateInputType = {
    id?: true
    movieId?: true
    userId?: true
  }

  export type EmailScheduleMinAggregateInputType = {
    id?: true
    movieId?: true
    userId?: true
    scheduledFor?: true
    sent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailScheduleMaxAggregateInputType = {
    id?: true
    movieId?: true
    userId?: true
    scheduledFor?: true
    sent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailScheduleCountAggregateInputType = {
    id?: true
    movieId?: true
    userId?: true
    scheduledFor?: true
    sent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmailScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailSchedule to aggregate.
     */
    where?: EmailScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailSchedules to fetch.
     */
    orderBy?: EmailScheduleOrderByWithRelationInput | EmailScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailSchedules
    **/
    _count?: true | EmailScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailScheduleMaxAggregateInputType
  }

  export type GetEmailScheduleAggregateType<T extends EmailScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailSchedule[P]>
      : GetScalarType<T[P], AggregateEmailSchedule[P]>
  }




  export type EmailScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailScheduleWhereInput
    orderBy?: EmailScheduleOrderByWithAggregationInput | EmailScheduleOrderByWithAggregationInput[]
    by: EmailScheduleScalarFieldEnum[] | EmailScheduleScalarFieldEnum
    having?: EmailScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailScheduleCountAggregateInputType | true
    _avg?: EmailScheduleAvgAggregateInputType
    _sum?: EmailScheduleSumAggregateInputType
    _min?: EmailScheduleMinAggregateInputType
    _max?: EmailScheduleMaxAggregateInputType
  }

  export type EmailScheduleGroupByOutputType = {
    id: number
    movieId: number
    userId: number
    scheduledFor: Date
    sent: boolean
    createdAt: Date
    updatedAt: Date
    _count: EmailScheduleCountAggregateOutputType | null
    _avg: EmailScheduleAvgAggregateOutputType | null
    _sum: EmailScheduleSumAggregateOutputType | null
    _min: EmailScheduleMinAggregateOutputType | null
    _max: EmailScheduleMaxAggregateOutputType | null
  }

  type GetEmailScheduleGroupByPayload<T extends EmailScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], EmailScheduleGroupByOutputType[P]>
        }
      >
    >


  export type EmailScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieId?: boolean
    userId?: boolean
    scheduledFor?: boolean
    sent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailSchedule"]>

  export type EmailScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieId?: boolean
    userId?: boolean
    scheduledFor?: boolean
    sent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailSchedule"]>

  export type EmailScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieId?: boolean
    userId?: boolean
    scheduledFor?: boolean
    sent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailSchedule"]>

  export type EmailScheduleSelectScalar = {
    id?: boolean
    movieId?: boolean
    userId?: boolean
    scheduledFor?: boolean
    sent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmailScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "movieId" | "userId" | "scheduledFor" | "sent" | "createdAt" | "updatedAt", ExtArgs["result"]["emailSchedule"]>
  export type EmailScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmailSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailSchedule"
    objects: {
      movie: Prisma.$MoviePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      movieId: number
      userId: number
      scheduledFor: Date
      sent: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["emailSchedule"]>
    composites: {}
  }

  type EmailScheduleGetPayload<S extends boolean | null | undefined | EmailScheduleDefaultArgs> = $Result.GetResult<Prisma.$EmailSchedulePayload, S>

  type EmailScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailScheduleCountAggregateInputType | true
    }

  export interface EmailScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailSchedule'], meta: { name: 'EmailSchedule' } }
    /**
     * Find zero or one EmailSchedule that matches the filter.
     * @param {EmailScheduleFindUniqueArgs} args - Arguments to find a EmailSchedule
     * @example
     * // Get one EmailSchedule
     * const emailSchedule = await prisma.emailSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailScheduleFindUniqueArgs>(args: SelectSubset<T, EmailScheduleFindUniqueArgs<ExtArgs>>): Prisma__EmailScheduleClient<$Result.GetResult<Prisma.$EmailSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailScheduleFindUniqueOrThrowArgs} args - Arguments to find a EmailSchedule
     * @example
     * // Get one EmailSchedule
     * const emailSchedule = await prisma.emailSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailScheduleClient<$Result.GetResult<Prisma.$EmailSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailScheduleFindFirstArgs} args - Arguments to find a EmailSchedule
     * @example
     * // Get one EmailSchedule
     * const emailSchedule = await prisma.emailSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailScheduleFindFirstArgs>(args?: SelectSubset<T, EmailScheduleFindFirstArgs<ExtArgs>>): Prisma__EmailScheduleClient<$Result.GetResult<Prisma.$EmailSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailScheduleFindFirstOrThrowArgs} args - Arguments to find a EmailSchedule
     * @example
     * // Get one EmailSchedule
     * const emailSchedule = await prisma.emailSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailScheduleClient<$Result.GetResult<Prisma.$EmailSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailSchedules
     * const emailSchedules = await prisma.emailSchedule.findMany()
     * 
     * // Get first 10 EmailSchedules
     * const emailSchedules = await prisma.emailSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailScheduleWithIdOnly = await prisma.emailSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailScheduleFindManyArgs>(args?: SelectSubset<T, EmailScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailSchedule.
     * @param {EmailScheduleCreateArgs} args - Arguments to create a EmailSchedule.
     * @example
     * // Create one EmailSchedule
     * const EmailSchedule = await prisma.emailSchedule.create({
     *   data: {
     *     // ... data to create a EmailSchedule
     *   }
     * })
     * 
     */
    create<T extends EmailScheduleCreateArgs>(args: SelectSubset<T, EmailScheduleCreateArgs<ExtArgs>>): Prisma__EmailScheduleClient<$Result.GetResult<Prisma.$EmailSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailSchedules.
     * @param {EmailScheduleCreateManyArgs} args - Arguments to create many EmailSchedules.
     * @example
     * // Create many EmailSchedules
     * const emailSchedule = await prisma.emailSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailScheduleCreateManyArgs>(args?: SelectSubset<T, EmailScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailSchedules and returns the data saved in the database.
     * @param {EmailScheduleCreateManyAndReturnArgs} args - Arguments to create many EmailSchedules.
     * @example
     * // Create many EmailSchedules
     * const emailSchedule = await prisma.emailSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailSchedules and only return the `id`
     * const emailScheduleWithIdOnly = await prisma.emailSchedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailSchedule.
     * @param {EmailScheduleDeleteArgs} args - Arguments to delete one EmailSchedule.
     * @example
     * // Delete one EmailSchedule
     * const EmailSchedule = await prisma.emailSchedule.delete({
     *   where: {
     *     // ... filter to delete one EmailSchedule
     *   }
     * })
     * 
     */
    delete<T extends EmailScheduleDeleteArgs>(args: SelectSubset<T, EmailScheduleDeleteArgs<ExtArgs>>): Prisma__EmailScheduleClient<$Result.GetResult<Prisma.$EmailSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailSchedule.
     * @param {EmailScheduleUpdateArgs} args - Arguments to update one EmailSchedule.
     * @example
     * // Update one EmailSchedule
     * const emailSchedule = await prisma.emailSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailScheduleUpdateArgs>(args: SelectSubset<T, EmailScheduleUpdateArgs<ExtArgs>>): Prisma__EmailScheduleClient<$Result.GetResult<Prisma.$EmailSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailSchedules.
     * @param {EmailScheduleDeleteManyArgs} args - Arguments to filter EmailSchedules to delete.
     * @example
     * // Delete a few EmailSchedules
     * const { count } = await prisma.emailSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailScheduleDeleteManyArgs>(args?: SelectSubset<T, EmailScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailSchedules
     * const emailSchedule = await prisma.emailSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailScheduleUpdateManyArgs>(args: SelectSubset<T, EmailScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailSchedules and returns the data updated in the database.
     * @param {EmailScheduleUpdateManyAndReturnArgs} args - Arguments to update many EmailSchedules.
     * @example
     * // Update many EmailSchedules
     * const emailSchedule = await prisma.emailSchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailSchedules and only return the `id`
     * const emailScheduleWithIdOnly = await prisma.emailSchedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailSchedule.
     * @param {EmailScheduleUpsertArgs} args - Arguments to update or create a EmailSchedule.
     * @example
     * // Update or create a EmailSchedule
     * const emailSchedule = await prisma.emailSchedule.upsert({
     *   create: {
     *     // ... data to create a EmailSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailSchedule we want to update
     *   }
     * })
     */
    upsert<T extends EmailScheduleUpsertArgs>(args: SelectSubset<T, EmailScheduleUpsertArgs<ExtArgs>>): Prisma__EmailScheduleClient<$Result.GetResult<Prisma.$EmailSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailScheduleCountArgs} args - Arguments to filter EmailSchedules to count.
     * @example
     * // Count the number of EmailSchedules
     * const count = await prisma.emailSchedule.count({
     *   where: {
     *     // ... the filter for the EmailSchedules we want to count
     *   }
     * })
    **/
    count<T extends EmailScheduleCountArgs>(
      args?: Subset<T, EmailScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailScheduleAggregateArgs>(args: Subset<T, EmailScheduleAggregateArgs>): Prisma.PrismaPromise<GetEmailScheduleAggregateType<T>>

    /**
     * Group by EmailSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailScheduleGroupByArgs['orderBy'] }
        : { orderBy?: EmailScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailSchedule model
   */
  readonly fields: EmailScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailSchedule model
   */
  interface EmailScheduleFieldRefs {
    readonly id: FieldRef<"EmailSchedule", 'Int'>
    readonly movieId: FieldRef<"EmailSchedule", 'Int'>
    readonly userId: FieldRef<"EmailSchedule", 'Int'>
    readonly scheduledFor: FieldRef<"EmailSchedule", 'DateTime'>
    readonly sent: FieldRef<"EmailSchedule", 'Boolean'>
    readonly createdAt: FieldRef<"EmailSchedule", 'DateTime'>
    readonly updatedAt: FieldRef<"EmailSchedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailSchedule findUnique
   */
  export type EmailScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSchedule
     */
    select?: EmailScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSchedule
     */
    omit?: EmailScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailScheduleInclude<ExtArgs> | null
    /**
     * Filter, which EmailSchedule to fetch.
     */
    where: EmailScheduleWhereUniqueInput
  }

  /**
   * EmailSchedule findUniqueOrThrow
   */
  export type EmailScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSchedule
     */
    select?: EmailScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSchedule
     */
    omit?: EmailScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailScheduleInclude<ExtArgs> | null
    /**
     * Filter, which EmailSchedule to fetch.
     */
    where: EmailScheduleWhereUniqueInput
  }

  /**
   * EmailSchedule findFirst
   */
  export type EmailScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSchedule
     */
    select?: EmailScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSchedule
     */
    omit?: EmailScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailScheduleInclude<ExtArgs> | null
    /**
     * Filter, which EmailSchedule to fetch.
     */
    where?: EmailScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailSchedules to fetch.
     */
    orderBy?: EmailScheduleOrderByWithRelationInput | EmailScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailSchedules.
     */
    cursor?: EmailScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailSchedules.
     */
    distinct?: EmailScheduleScalarFieldEnum | EmailScheduleScalarFieldEnum[]
  }

  /**
   * EmailSchedule findFirstOrThrow
   */
  export type EmailScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSchedule
     */
    select?: EmailScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSchedule
     */
    omit?: EmailScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailScheduleInclude<ExtArgs> | null
    /**
     * Filter, which EmailSchedule to fetch.
     */
    where?: EmailScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailSchedules to fetch.
     */
    orderBy?: EmailScheduleOrderByWithRelationInput | EmailScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailSchedules.
     */
    cursor?: EmailScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailSchedules.
     */
    distinct?: EmailScheduleScalarFieldEnum | EmailScheduleScalarFieldEnum[]
  }

  /**
   * EmailSchedule findMany
   */
  export type EmailScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSchedule
     */
    select?: EmailScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSchedule
     */
    omit?: EmailScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailScheduleInclude<ExtArgs> | null
    /**
     * Filter, which EmailSchedules to fetch.
     */
    where?: EmailScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailSchedules to fetch.
     */
    orderBy?: EmailScheduleOrderByWithRelationInput | EmailScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailSchedules.
     */
    cursor?: EmailScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailSchedules.
     */
    skip?: number
    distinct?: EmailScheduleScalarFieldEnum | EmailScheduleScalarFieldEnum[]
  }

  /**
   * EmailSchedule create
   */
  export type EmailScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSchedule
     */
    select?: EmailScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSchedule
     */
    omit?: EmailScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailSchedule.
     */
    data: XOR<EmailScheduleCreateInput, EmailScheduleUncheckedCreateInput>
  }

  /**
   * EmailSchedule createMany
   */
  export type EmailScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailSchedules.
     */
    data: EmailScheduleCreateManyInput | EmailScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailSchedule createManyAndReturn
   */
  export type EmailScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSchedule
     */
    select?: EmailScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSchedule
     */
    omit?: EmailScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many EmailSchedules.
     */
    data: EmailScheduleCreateManyInput | EmailScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailSchedule update
   */
  export type EmailScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSchedule
     */
    select?: EmailScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSchedule
     */
    omit?: EmailScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailSchedule.
     */
    data: XOR<EmailScheduleUpdateInput, EmailScheduleUncheckedUpdateInput>
    /**
     * Choose, which EmailSchedule to update.
     */
    where: EmailScheduleWhereUniqueInput
  }

  /**
   * EmailSchedule updateMany
   */
  export type EmailScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailSchedules.
     */
    data: XOR<EmailScheduleUpdateManyMutationInput, EmailScheduleUncheckedUpdateManyInput>
    /**
     * Filter which EmailSchedules to update
     */
    where?: EmailScheduleWhereInput
    /**
     * Limit how many EmailSchedules to update.
     */
    limit?: number
  }

  /**
   * EmailSchedule updateManyAndReturn
   */
  export type EmailScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSchedule
     */
    select?: EmailScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSchedule
     */
    omit?: EmailScheduleOmit<ExtArgs> | null
    /**
     * The data used to update EmailSchedules.
     */
    data: XOR<EmailScheduleUpdateManyMutationInput, EmailScheduleUncheckedUpdateManyInput>
    /**
     * Filter which EmailSchedules to update
     */
    where?: EmailScheduleWhereInput
    /**
     * Limit how many EmailSchedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailSchedule upsert
   */
  export type EmailScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSchedule
     */
    select?: EmailScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSchedule
     */
    omit?: EmailScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailSchedule to update in case it exists.
     */
    where: EmailScheduleWhereUniqueInput
    /**
     * In case the EmailSchedule found by the `where` argument doesn't exist, create a new EmailSchedule with this data.
     */
    create: XOR<EmailScheduleCreateInput, EmailScheduleUncheckedCreateInput>
    /**
     * In case the EmailSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailScheduleUpdateInput, EmailScheduleUncheckedUpdateInput>
  }

  /**
   * EmailSchedule delete
   */
  export type EmailScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSchedule
     */
    select?: EmailScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSchedule
     */
    omit?: EmailScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailScheduleInclude<ExtArgs> | null
    /**
     * Filter which EmailSchedule to delete.
     */
    where: EmailScheduleWhereUniqueInput
  }

  /**
   * EmailSchedule deleteMany
   */
  export type EmailScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailSchedules to delete
     */
    where?: EmailScheduleWhereInput
    /**
     * Limit how many EmailSchedules to delete.
     */
    limit?: number
  }

  /**
   * EmailSchedule without action
   */
  export type EmailScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSchedule
     */
    select?: EmailScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSchedule
     */
    omit?: EmailScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailScheduleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MovieScalarFieldEnum: {
    id: 'id',
    title: 'title',
    userId: 'userId',
    originalTitle: 'originalTitle',
    coverImageUrl: 'coverImageUrl',
    popularity: 'popularity',
    voteCount: 'voteCount',
    score: 'score',
    tagline: 'tagline',
    synopsis: 'synopsis',
    genres: 'genres',
    releaseDate: 'releaseDate',
    duration: 'duration',
    status: 'status',
    language: 'language',
    budget: 'budget',
    revenue: 'revenue',
    profit: 'profit',
    trailerUrl: 'trailerUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum]


  export const EmailScheduleScalarFieldEnum: {
    id: 'id',
    movieId: 'movieId',
    userId: 'userId',
    scheduledFor: 'scheduledFor',
    sent: 'sent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmailScheduleScalarFieldEnum = (typeof EmailScheduleScalarFieldEnum)[keyof typeof EmailScheduleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    movies?: MovieListRelationFilter
    emailSchedules?: EmailScheduleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movies?: MovieOrderByRelationAggregateInput
    emailSchedules?: EmailScheduleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    movies?: MovieListRelationFilter
    emailSchedules?: EmailScheduleListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MovieWhereInput = {
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    id?: IntFilter<"Movie"> | number
    title?: StringFilter<"Movie"> | string
    userId?: IntFilter<"Movie"> | number
    originalTitle?: StringFilter<"Movie"> | string
    coverImageUrl?: StringFilter<"Movie"> | string
    popularity?: FloatFilter<"Movie"> | number
    voteCount?: IntFilter<"Movie"> | number
    score?: FloatFilter<"Movie"> | number
    tagline?: StringFilter<"Movie"> | string
    synopsis?: StringFilter<"Movie"> | string
    genres?: StringNullableListFilter<"Movie">
    releaseDate?: DateTimeFilter<"Movie"> | Date | string
    duration?: IntFilter<"Movie"> | number
    status?: StringFilter<"Movie"> | string
    language?: StringFilter<"Movie"> | string
    budget?: FloatFilter<"Movie"> | number
    revenue?: FloatFilter<"Movie"> | number
    profit?: FloatFilter<"Movie"> | number
    trailerUrl?: StringFilter<"Movie"> | string
    createdAt?: DateTimeFilter<"Movie"> | Date | string
    updatedAt?: DateTimeFilter<"Movie"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    emailSchedules?: EmailScheduleListRelationFilter
  }

  export type MovieOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    originalTitle?: SortOrder
    coverImageUrl?: SortOrder
    popularity?: SortOrder
    voteCount?: SortOrder
    score?: SortOrder
    tagline?: SortOrder
    synopsis?: SortOrder
    genres?: SortOrder
    releaseDate?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    language?: SortOrder
    budget?: SortOrder
    revenue?: SortOrder
    profit?: SortOrder
    trailerUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    emailSchedules?: EmailScheduleOrderByRelationAggregateInput
  }

  export type MovieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    userId?: IntFilter<"Movie"> | number
    originalTitle?: StringFilter<"Movie"> | string
    coverImageUrl?: StringFilter<"Movie"> | string
    popularity?: FloatFilter<"Movie"> | number
    voteCount?: IntFilter<"Movie"> | number
    score?: FloatFilter<"Movie"> | number
    tagline?: StringFilter<"Movie"> | string
    synopsis?: StringFilter<"Movie"> | string
    genres?: StringNullableListFilter<"Movie">
    releaseDate?: DateTimeFilter<"Movie"> | Date | string
    duration?: IntFilter<"Movie"> | number
    status?: StringFilter<"Movie"> | string
    language?: StringFilter<"Movie"> | string
    budget?: FloatFilter<"Movie"> | number
    revenue?: FloatFilter<"Movie"> | number
    profit?: FloatFilter<"Movie"> | number
    trailerUrl?: StringFilter<"Movie"> | string
    createdAt?: DateTimeFilter<"Movie"> | Date | string
    updatedAt?: DateTimeFilter<"Movie"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    emailSchedules?: EmailScheduleListRelationFilter
  }, "id" | "title">

  export type MovieOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    originalTitle?: SortOrder
    coverImageUrl?: SortOrder
    popularity?: SortOrder
    voteCount?: SortOrder
    score?: SortOrder
    tagline?: SortOrder
    synopsis?: SortOrder
    genres?: SortOrder
    releaseDate?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    language?: SortOrder
    budget?: SortOrder
    revenue?: SortOrder
    profit?: SortOrder
    trailerUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MovieCountOrderByAggregateInput
    _avg?: MovieAvgOrderByAggregateInput
    _max?: MovieMaxOrderByAggregateInput
    _min?: MovieMinOrderByAggregateInput
    _sum?: MovieSumOrderByAggregateInput
  }

  export type MovieScalarWhereWithAggregatesInput = {
    AND?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    OR?: MovieScalarWhereWithAggregatesInput[]
    NOT?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Movie"> | number
    title?: StringWithAggregatesFilter<"Movie"> | string
    userId?: IntWithAggregatesFilter<"Movie"> | number
    originalTitle?: StringWithAggregatesFilter<"Movie"> | string
    coverImageUrl?: StringWithAggregatesFilter<"Movie"> | string
    popularity?: FloatWithAggregatesFilter<"Movie"> | number
    voteCount?: IntWithAggregatesFilter<"Movie"> | number
    score?: FloatWithAggregatesFilter<"Movie"> | number
    tagline?: StringWithAggregatesFilter<"Movie"> | string
    synopsis?: StringWithAggregatesFilter<"Movie"> | string
    genres?: StringNullableListFilter<"Movie">
    releaseDate?: DateTimeWithAggregatesFilter<"Movie"> | Date | string
    duration?: IntWithAggregatesFilter<"Movie"> | number
    status?: StringWithAggregatesFilter<"Movie"> | string
    language?: StringWithAggregatesFilter<"Movie"> | string
    budget?: FloatWithAggregatesFilter<"Movie"> | number
    revenue?: FloatWithAggregatesFilter<"Movie"> | number
    profit?: FloatWithAggregatesFilter<"Movie"> | number
    trailerUrl?: StringWithAggregatesFilter<"Movie"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Movie"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Movie"> | Date | string
  }

  export type EmailScheduleWhereInput = {
    AND?: EmailScheduleWhereInput | EmailScheduleWhereInput[]
    OR?: EmailScheduleWhereInput[]
    NOT?: EmailScheduleWhereInput | EmailScheduleWhereInput[]
    id?: IntFilter<"EmailSchedule"> | number
    movieId?: IntFilter<"EmailSchedule"> | number
    userId?: IntFilter<"EmailSchedule"> | number
    scheduledFor?: DateTimeFilter<"EmailSchedule"> | Date | string
    sent?: BoolFilter<"EmailSchedule"> | boolean
    createdAt?: DateTimeFilter<"EmailSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"EmailSchedule"> | Date | string
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EmailScheduleOrderByWithRelationInput = {
    id?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
    scheduledFor?: SortOrder
    sent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movie?: MovieOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type EmailScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmailScheduleWhereInput | EmailScheduleWhereInput[]
    OR?: EmailScheduleWhereInput[]
    NOT?: EmailScheduleWhereInput | EmailScheduleWhereInput[]
    movieId?: IntFilter<"EmailSchedule"> | number
    userId?: IntFilter<"EmailSchedule"> | number
    scheduledFor?: DateTimeFilter<"EmailSchedule"> | Date | string
    sent?: BoolFilter<"EmailSchedule"> | boolean
    createdAt?: DateTimeFilter<"EmailSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"EmailSchedule"> | Date | string
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EmailScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
    scheduledFor?: SortOrder
    sent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmailScheduleCountOrderByAggregateInput
    _avg?: EmailScheduleAvgOrderByAggregateInput
    _max?: EmailScheduleMaxOrderByAggregateInput
    _min?: EmailScheduleMinOrderByAggregateInput
    _sum?: EmailScheduleSumOrderByAggregateInput
  }

  export type EmailScheduleScalarWhereWithAggregatesInput = {
    AND?: EmailScheduleScalarWhereWithAggregatesInput | EmailScheduleScalarWhereWithAggregatesInput[]
    OR?: EmailScheduleScalarWhereWithAggregatesInput[]
    NOT?: EmailScheduleScalarWhereWithAggregatesInput | EmailScheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EmailSchedule"> | number
    movieId?: IntWithAggregatesFilter<"EmailSchedule"> | number
    userId?: IntWithAggregatesFilter<"EmailSchedule"> | number
    scheduledFor?: DateTimeWithAggregatesFilter<"EmailSchedule"> | Date | string
    sent?: BoolWithAggregatesFilter<"EmailSchedule"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"EmailSchedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmailSchedule"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    movies?: MovieCreateNestedManyWithoutUserInput
    emailSchedules?: EmailScheduleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    movies?: MovieUncheckedCreateNestedManyWithoutUserInput
    emailSchedules?: EmailScheduleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MovieUpdateManyWithoutUserNestedInput
    emailSchedules?: EmailScheduleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MovieUncheckedUpdateManyWithoutUserNestedInput
    emailSchedules?: EmailScheduleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieCreateInput = {
    title: string
    originalTitle: string
    coverImageUrl: string
    popularity: number
    voteCount: number
    score: number
    tagline: string
    synopsis: string
    genres?: MovieCreategenresInput | string[]
    releaseDate: Date | string
    duration: number
    status: string
    language: string
    budget: number
    revenue: number
    profit: number
    trailerUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMoviesInput
    emailSchedules?: EmailScheduleCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateInput = {
    id?: number
    title: string
    userId: number
    originalTitle: string
    coverImageUrl: string
    popularity: number
    voteCount: number
    score: number
    tagline: string
    synopsis: string
    genres?: MovieCreategenresInput | string[]
    releaseDate: Date | string
    duration: number
    status: string
    language: string
    budget: number
    revenue: number
    profit: number
    trailerUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailSchedules?: EmailScheduleUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: FloatFieldUpdateOperationsInput | number
    voteCount?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    tagline?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    genres?: MovieUpdategenresInput | string[]
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    revenue?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    trailerUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMoviesNestedInput
    emailSchedules?: EmailScheduleUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    originalTitle?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: FloatFieldUpdateOperationsInput | number
    voteCount?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    tagline?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    genres?: MovieUpdategenresInput | string[]
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    revenue?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    trailerUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailSchedules?: EmailScheduleUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type MovieCreateManyInput = {
    id?: number
    title: string
    userId: number
    originalTitle: string
    coverImageUrl: string
    popularity: number
    voteCount: number
    score: number
    tagline: string
    synopsis: string
    genres?: MovieCreategenresInput | string[]
    releaseDate: Date | string
    duration: number
    status: string
    language: string
    budget: number
    revenue: number
    profit: number
    trailerUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: FloatFieldUpdateOperationsInput | number
    voteCount?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    tagline?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    genres?: MovieUpdategenresInput | string[]
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    revenue?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    trailerUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    originalTitle?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: FloatFieldUpdateOperationsInput | number
    voteCount?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    tagline?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    genres?: MovieUpdategenresInput | string[]
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    revenue?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    trailerUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailScheduleCreateInput = {
    scheduledFor: Date | string
    sent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    movie: MovieCreateNestedOneWithoutEmailSchedulesInput
    user: UserCreateNestedOneWithoutEmailSchedulesInput
  }

  export type EmailScheduleUncheckedCreateInput = {
    id?: number
    movieId: number
    userId: number
    scheduledFor: Date | string
    sent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailScheduleUpdateInput = {
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutEmailSchedulesNestedInput
    user?: UserUpdateOneRequiredWithoutEmailSchedulesNestedInput
  }

  export type EmailScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailScheduleCreateManyInput = {
    id?: number
    movieId: number
    userId: number
    scheduledFor: Date | string
    sent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailScheduleUpdateManyMutationInput = {
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MovieListRelationFilter = {
    every?: MovieWhereInput
    some?: MovieWhereInput
    none?: MovieWhereInput
  }

  export type EmailScheduleListRelationFilter = {
    every?: EmailScheduleWhereInput
    some?: EmailScheduleWhereInput
    none?: EmailScheduleWhereInput
  }

  export type MovieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmailScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MovieCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    originalTitle?: SortOrder
    coverImageUrl?: SortOrder
    popularity?: SortOrder
    voteCount?: SortOrder
    score?: SortOrder
    tagline?: SortOrder
    synopsis?: SortOrder
    genres?: SortOrder
    releaseDate?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    language?: SortOrder
    budget?: SortOrder
    revenue?: SortOrder
    profit?: SortOrder
    trailerUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovieAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    popularity?: SortOrder
    voteCount?: SortOrder
    score?: SortOrder
    duration?: SortOrder
    budget?: SortOrder
    revenue?: SortOrder
    profit?: SortOrder
  }

  export type MovieMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    originalTitle?: SortOrder
    coverImageUrl?: SortOrder
    popularity?: SortOrder
    voteCount?: SortOrder
    score?: SortOrder
    tagline?: SortOrder
    synopsis?: SortOrder
    releaseDate?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    language?: SortOrder
    budget?: SortOrder
    revenue?: SortOrder
    profit?: SortOrder
    trailerUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovieMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    originalTitle?: SortOrder
    coverImageUrl?: SortOrder
    popularity?: SortOrder
    voteCount?: SortOrder
    score?: SortOrder
    tagline?: SortOrder
    synopsis?: SortOrder
    releaseDate?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    language?: SortOrder
    budget?: SortOrder
    revenue?: SortOrder
    profit?: SortOrder
    trailerUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovieSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    popularity?: SortOrder
    voteCount?: SortOrder
    score?: SortOrder
    duration?: SortOrder
    budget?: SortOrder
    revenue?: SortOrder
    profit?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MovieScalarRelationFilter = {
    is?: MovieWhereInput
    isNot?: MovieWhereInput
  }

  export type EmailScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
    scheduledFor?: SortOrder
    sent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
  }

  export type EmailScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
    scheduledFor?: SortOrder
    sent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
    scheduledFor?: SortOrder
    sent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailScheduleSumOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MovieCreateNestedManyWithoutUserInput = {
    create?: XOR<MovieCreateWithoutUserInput, MovieUncheckedCreateWithoutUserInput> | MovieCreateWithoutUserInput[] | MovieUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutUserInput | MovieCreateOrConnectWithoutUserInput[]
    createMany?: MovieCreateManyUserInputEnvelope
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type EmailScheduleCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailScheduleCreateWithoutUserInput, EmailScheduleUncheckedCreateWithoutUserInput> | EmailScheduleCreateWithoutUserInput[] | EmailScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailScheduleCreateOrConnectWithoutUserInput | EmailScheduleCreateOrConnectWithoutUserInput[]
    createMany?: EmailScheduleCreateManyUserInputEnvelope
    connect?: EmailScheduleWhereUniqueInput | EmailScheduleWhereUniqueInput[]
  }

  export type MovieUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MovieCreateWithoutUserInput, MovieUncheckedCreateWithoutUserInput> | MovieCreateWithoutUserInput[] | MovieUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutUserInput | MovieCreateOrConnectWithoutUserInput[]
    createMany?: MovieCreateManyUserInputEnvelope
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type EmailScheduleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailScheduleCreateWithoutUserInput, EmailScheduleUncheckedCreateWithoutUserInput> | EmailScheduleCreateWithoutUserInput[] | EmailScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailScheduleCreateOrConnectWithoutUserInput | EmailScheduleCreateOrConnectWithoutUserInput[]
    createMany?: EmailScheduleCreateManyUserInputEnvelope
    connect?: EmailScheduleWhereUniqueInput | EmailScheduleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MovieUpdateManyWithoutUserNestedInput = {
    create?: XOR<MovieCreateWithoutUserInput, MovieUncheckedCreateWithoutUserInput> | MovieCreateWithoutUserInput[] | MovieUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutUserInput | MovieCreateOrConnectWithoutUserInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutUserInput | MovieUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MovieCreateManyUserInputEnvelope
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutUserInput | MovieUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutUserInput | MovieUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type EmailScheduleUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailScheduleCreateWithoutUserInput, EmailScheduleUncheckedCreateWithoutUserInput> | EmailScheduleCreateWithoutUserInput[] | EmailScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailScheduleCreateOrConnectWithoutUserInput | EmailScheduleCreateOrConnectWithoutUserInput[]
    upsert?: EmailScheduleUpsertWithWhereUniqueWithoutUserInput | EmailScheduleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailScheduleCreateManyUserInputEnvelope
    set?: EmailScheduleWhereUniqueInput | EmailScheduleWhereUniqueInput[]
    disconnect?: EmailScheduleWhereUniqueInput | EmailScheduleWhereUniqueInput[]
    delete?: EmailScheduleWhereUniqueInput | EmailScheduleWhereUniqueInput[]
    connect?: EmailScheduleWhereUniqueInput | EmailScheduleWhereUniqueInput[]
    update?: EmailScheduleUpdateWithWhereUniqueWithoutUserInput | EmailScheduleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailScheduleUpdateManyWithWhereWithoutUserInput | EmailScheduleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailScheduleScalarWhereInput | EmailScheduleScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MovieUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MovieCreateWithoutUserInput, MovieUncheckedCreateWithoutUserInput> | MovieCreateWithoutUserInput[] | MovieUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutUserInput | MovieCreateOrConnectWithoutUserInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutUserInput | MovieUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MovieCreateManyUserInputEnvelope
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutUserInput | MovieUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutUserInput | MovieUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type EmailScheduleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailScheduleCreateWithoutUserInput, EmailScheduleUncheckedCreateWithoutUserInput> | EmailScheduleCreateWithoutUserInput[] | EmailScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailScheduleCreateOrConnectWithoutUserInput | EmailScheduleCreateOrConnectWithoutUserInput[]
    upsert?: EmailScheduleUpsertWithWhereUniqueWithoutUserInput | EmailScheduleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailScheduleCreateManyUserInputEnvelope
    set?: EmailScheduleWhereUniqueInput | EmailScheduleWhereUniqueInput[]
    disconnect?: EmailScheduleWhereUniqueInput | EmailScheduleWhereUniqueInput[]
    delete?: EmailScheduleWhereUniqueInput | EmailScheduleWhereUniqueInput[]
    connect?: EmailScheduleWhereUniqueInput | EmailScheduleWhereUniqueInput[]
    update?: EmailScheduleUpdateWithWhereUniqueWithoutUserInput | EmailScheduleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailScheduleUpdateManyWithWhereWithoutUserInput | EmailScheduleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailScheduleScalarWhereInput | EmailScheduleScalarWhereInput[]
  }

  export type MovieCreategenresInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutMoviesInput = {
    create?: XOR<UserCreateWithoutMoviesInput, UserUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMoviesInput
    connect?: UserWhereUniqueInput
  }

  export type EmailScheduleCreateNestedManyWithoutMovieInput = {
    create?: XOR<EmailScheduleCreateWithoutMovieInput, EmailScheduleUncheckedCreateWithoutMovieInput> | EmailScheduleCreateWithoutMovieInput[] | EmailScheduleUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: EmailScheduleCreateOrConnectWithoutMovieInput | EmailScheduleCreateOrConnectWithoutMovieInput[]
    createMany?: EmailScheduleCreateManyMovieInputEnvelope
    connect?: EmailScheduleWhereUniqueInput | EmailScheduleWhereUniqueInput[]
  }

  export type EmailScheduleUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<EmailScheduleCreateWithoutMovieInput, EmailScheduleUncheckedCreateWithoutMovieInput> | EmailScheduleCreateWithoutMovieInput[] | EmailScheduleUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: EmailScheduleCreateOrConnectWithoutMovieInput | EmailScheduleCreateOrConnectWithoutMovieInput[]
    createMany?: EmailScheduleCreateManyMovieInputEnvelope
    connect?: EmailScheduleWhereUniqueInput | EmailScheduleWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MovieUpdategenresInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutMoviesNestedInput = {
    create?: XOR<UserCreateWithoutMoviesInput, UserUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMoviesInput
    upsert?: UserUpsertWithoutMoviesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMoviesInput, UserUpdateWithoutMoviesInput>, UserUncheckedUpdateWithoutMoviesInput>
  }

  export type EmailScheduleUpdateManyWithoutMovieNestedInput = {
    create?: XOR<EmailScheduleCreateWithoutMovieInput, EmailScheduleUncheckedCreateWithoutMovieInput> | EmailScheduleCreateWithoutMovieInput[] | EmailScheduleUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: EmailScheduleCreateOrConnectWithoutMovieInput | EmailScheduleCreateOrConnectWithoutMovieInput[]
    upsert?: EmailScheduleUpsertWithWhereUniqueWithoutMovieInput | EmailScheduleUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: EmailScheduleCreateManyMovieInputEnvelope
    set?: EmailScheduleWhereUniqueInput | EmailScheduleWhereUniqueInput[]
    disconnect?: EmailScheduleWhereUniqueInput | EmailScheduleWhereUniqueInput[]
    delete?: EmailScheduleWhereUniqueInput | EmailScheduleWhereUniqueInput[]
    connect?: EmailScheduleWhereUniqueInput | EmailScheduleWhereUniqueInput[]
    update?: EmailScheduleUpdateWithWhereUniqueWithoutMovieInput | EmailScheduleUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: EmailScheduleUpdateManyWithWhereWithoutMovieInput | EmailScheduleUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: EmailScheduleScalarWhereInput | EmailScheduleScalarWhereInput[]
  }

  export type EmailScheduleUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<EmailScheduleCreateWithoutMovieInput, EmailScheduleUncheckedCreateWithoutMovieInput> | EmailScheduleCreateWithoutMovieInput[] | EmailScheduleUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: EmailScheduleCreateOrConnectWithoutMovieInput | EmailScheduleCreateOrConnectWithoutMovieInput[]
    upsert?: EmailScheduleUpsertWithWhereUniqueWithoutMovieInput | EmailScheduleUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: EmailScheduleCreateManyMovieInputEnvelope
    set?: EmailScheduleWhereUniqueInput | EmailScheduleWhereUniqueInput[]
    disconnect?: EmailScheduleWhereUniqueInput | EmailScheduleWhereUniqueInput[]
    delete?: EmailScheduleWhereUniqueInput | EmailScheduleWhereUniqueInput[]
    connect?: EmailScheduleWhereUniqueInput | EmailScheduleWhereUniqueInput[]
    update?: EmailScheduleUpdateWithWhereUniqueWithoutMovieInput | EmailScheduleUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: EmailScheduleUpdateManyWithWhereWithoutMovieInput | EmailScheduleUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: EmailScheduleScalarWhereInput | EmailScheduleScalarWhereInput[]
  }

  export type MovieCreateNestedOneWithoutEmailSchedulesInput = {
    create?: XOR<MovieCreateWithoutEmailSchedulesInput, MovieUncheckedCreateWithoutEmailSchedulesInput>
    connectOrCreate?: MovieCreateOrConnectWithoutEmailSchedulesInput
    connect?: MovieWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEmailSchedulesInput = {
    create?: XOR<UserCreateWithoutEmailSchedulesInput, UserUncheckedCreateWithoutEmailSchedulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailSchedulesInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type MovieUpdateOneRequiredWithoutEmailSchedulesNestedInput = {
    create?: XOR<MovieCreateWithoutEmailSchedulesInput, MovieUncheckedCreateWithoutEmailSchedulesInput>
    connectOrCreate?: MovieCreateOrConnectWithoutEmailSchedulesInput
    upsert?: MovieUpsertWithoutEmailSchedulesInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutEmailSchedulesInput, MovieUpdateWithoutEmailSchedulesInput>, MovieUncheckedUpdateWithoutEmailSchedulesInput>
  }

  export type UserUpdateOneRequiredWithoutEmailSchedulesNestedInput = {
    create?: XOR<UserCreateWithoutEmailSchedulesInput, UserUncheckedCreateWithoutEmailSchedulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailSchedulesInput
    upsert?: UserUpsertWithoutEmailSchedulesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmailSchedulesInput, UserUpdateWithoutEmailSchedulesInput>, UserUncheckedUpdateWithoutEmailSchedulesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MovieCreateWithoutUserInput = {
    title: string
    originalTitle: string
    coverImageUrl: string
    popularity: number
    voteCount: number
    score: number
    tagline: string
    synopsis: string
    genres?: MovieCreategenresInput | string[]
    releaseDate: Date | string
    duration: number
    status: string
    language: string
    budget: number
    revenue: number
    profit: number
    trailerUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailSchedules?: EmailScheduleCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    originalTitle: string
    coverImageUrl: string
    popularity: number
    voteCount: number
    score: number
    tagline: string
    synopsis: string
    genres?: MovieCreategenresInput | string[]
    releaseDate: Date | string
    duration: number
    status: string
    language: string
    budget: number
    revenue: number
    profit: number
    trailerUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailSchedules?: EmailScheduleUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutUserInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutUserInput, MovieUncheckedCreateWithoutUserInput>
  }

  export type MovieCreateManyUserInputEnvelope = {
    data: MovieCreateManyUserInput | MovieCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmailScheduleCreateWithoutUserInput = {
    scheduledFor: Date | string
    sent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    movie: MovieCreateNestedOneWithoutEmailSchedulesInput
  }

  export type EmailScheduleUncheckedCreateWithoutUserInput = {
    id?: number
    movieId: number
    scheduledFor: Date | string
    sent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailScheduleCreateOrConnectWithoutUserInput = {
    where: EmailScheduleWhereUniqueInput
    create: XOR<EmailScheduleCreateWithoutUserInput, EmailScheduleUncheckedCreateWithoutUserInput>
  }

  export type EmailScheduleCreateManyUserInputEnvelope = {
    data: EmailScheduleCreateManyUserInput | EmailScheduleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MovieUpsertWithWhereUniqueWithoutUserInput = {
    where: MovieWhereUniqueInput
    update: XOR<MovieUpdateWithoutUserInput, MovieUncheckedUpdateWithoutUserInput>
    create: XOR<MovieCreateWithoutUserInput, MovieUncheckedCreateWithoutUserInput>
  }

  export type MovieUpdateWithWhereUniqueWithoutUserInput = {
    where: MovieWhereUniqueInput
    data: XOR<MovieUpdateWithoutUserInput, MovieUncheckedUpdateWithoutUserInput>
  }

  export type MovieUpdateManyWithWhereWithoutUserInput = {
    where: MovieScalarWhereInput
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyWithoutUserInput>
  }

  export type MovieScalarWhereInput = {
    AND?: MovieScalarWhereInput | MovieScalarWhereInput[]
    OR?: MovieScalarWhereInput[]
    NOT?: MovieScalarWhereInput | MovieScalarWhereInput[]
    id?: IntFilter<"Movie"> | number
    title?: StringFilter<"Movie"> | string
    userId?: IntFilter<"Movie"> | number
    originalTitle?: StringFilter<"Movie"> | string
    coverImageUrl?: StringFilter<"Movie"> | string
    popularity?: FloatFilter<"Movie"> | number
    voteCount?: IntFilter<"Movie"> | number
    score?: FloatFilter<"Movie"> | number
    tagline?: StringFilter<"Movie"> | string
    synopsis?: StringFilter<"Movie"> | string
    genres?: StringNullableListFilter<"Movie">
    releaseDate?: DateTimeFilter<"Movie"> | Date | string
    duration?: IntFilter<"Movie"> | number
    status?: StringFilter<"Movie"> | string
    language?: StringFilter<"Movie"> | string
    budget?: FloatFilter<"Movie"> | number
    revenue?: FloatFilter<"Movie"> | number
    profit?: FloatFilter<"Movie"> | number
    trailerUrl?: StringFilter<"Movie"> | string
    createdAt?: DateTimeFilter<"Movie"> | Date | string
    updatedAt?: DateTimeFilter<"Movie"> | Date | string
  }

  export type EmailScheduleUpsertWithWhereUniqueWithoutUserInput = {
    where: EmailScheduleWhereUniqueInput
    update: XOR<EmailScheduleUpdateWithoutUserInput, EmailScheduleUncheckedUpdateWithoutUserInput>
    create: XOR<EmailScheduleCreateWithoutUserInput, EmailScheduleUncheckedCreateWithoutUserInput>
  }

  export type EmailScheduleUpdateWithWhereUniqueWithoutUserInput = {
    where: EmailScheduleWhereUniqueInput
    data: XOR<EmailScheduleUpdateWithoutUserInput, EmailScheduleUncheckedUpdateWithoutUserInput>
  }

  export type EmailScheduleUpdateManyWithWhereWithoutUserInput = {
    where: EmailScheduleScalarWhereInput
    data: XOR<EmailScheduleUpdateManyMutationInput, EmailScheduleUncheckedUpdateManyWithoutUserInput>
  }

  export type EmailScheduleScalarWhereInput = {
    AND?: EmailScheduleScalarWhereInput | EmailScheduleScalarWhereInput[]
    OR?: EmailScheduleScalarWhereInput[]
    NOT?: EmailScheduleScalarWhereInput | EmailScheduleScalarWhereInput[]
    id?: IntFilter<"EmailSchedule"> | number
    movieId?: IntFilter<"EmailSchedule"> | number
    userId?: IntFilter<"EmailSchedule"> | number
    scheduledFor?: DateTimeFilter<"EmailSchedule"> | Date | string
    sent?: BoolFilter<"EmailSchedule"> | boolean
    createdAt?: DateTimeFilter<"EmailSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"EmailSchedule"> | Date | string
  }

  export type UserCreateWithoutMoviesInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailSchedules?: EmailScheduleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMoviesInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailSchedules?: EmailScheduleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMoviesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMoviesInput, UserUncheckedCreateWithoutMoviesInput>
  }

  export type EmailScheduleCreateWithoutMovieInput = {
    scheduledFor: Date | string
    sent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEmailSchedulesInput
  }

  export type EmailScheduleUncheckedCreateWithoutMovieInput = {
    id?: number
    userId: number
    scheduledFor: Date | string
    sent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailScheduleCreateOrConnectWithoutMovieInput = {
    where: EmailScheduleWhereUniqueInput
    create: XOR<EmailScheduleCreateWithoutMovieInput, EmailScheduleUncheckedCreateWithoutMovieInput>
  }

  export type EmailScheduleCreateManyMovieInputEnvelope = {
    data: EmailScheduleCreateManyMovieInput | EmailScheduleCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMoviesInput = {
    update: XOR<UserUpdateWithoutMoviesInput, UserUncheckedUpdateWithoutMoviesInput>
    create: XOR<UserCreateWithoutMoviesInput, UserUncheckedCreateWithoutMoviesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMoviesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMoviesInput, UserUncheckedUpdateWithoutMoviesInput>
  }

  export type UserUpdateWithoutMoviesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailSchedules?: EmailScheduleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMoviesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailSchedules?: EmailScheduleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EmailScheduleUpsertWithWhereUniqueWithoutMovieInput = {
    where: EmailScheduleWhereUniqueInput
    update: XOR<EmailScheduleUpdateWithoutMovieInput, EmailScheduleUncheckedUpdateWithoutMovieInput>
    create: XOR<EmailScheduleCreateWithoutMovieInput, EmailScheduleUncheckedCreateWithoutMovieInput>
  }

  export type EmailScheduleUpdateWithWhereUniqueWithoutMovieInput = {
    where: EmailScheduleWhereUniqueInput
    data: XOR<EmailScheduleUpdateWithoutMovieInput, EmailScheduleUncheckedUpdateWithoutMovieInput>
  }

  export type EmailScheduleUpdateManyWithWhereWithoutMovieInput = {
    where: EmailScheduleScalarWhereInput
    data: XOR<EmailScheduleUpdateManyMutationInput, EmailScheduleUncheckedUpdateManyWithoutMovieInput>
  }

  export type MovieCreateWithoutEmailSchedulesInput = {
    title: string
    originalTitle: string
    coverImageUrl: string
    popularity: number
    voteCount: number
    score: number
    tagline: string
    synopsis: string
    genres?: MovieCreategenresInput | string[]
    releaseDate: Date | string
    duration: number
    status: string
    language: string
    budget: number
    revenue: number
    profit: number
    trailerUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMoviesInput
  }

  export type MovieUncheckedCreateWithoutEmailSchedulesInput = {
    id?: number
    title: string
    userId: number
    originalTitle: string
    coverImageUrl: string
    popularity: number
    voteCount: number
    score: number
    tagline: string
    synopsis: string
    genres?: MovieCreategenresInput | string[]
    releaseDate: Date | string
    duration: number
    status: string
    language: string
    budget: number
    revenue: number
    profit: number
    trailerUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieCreateOrConnectWithoutEmailSchedulesInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutEmailSchedulesInput, MovieUncheckedCreateWithoutEmailSchedulesInput>
  }

  export type UserCreateWithoutEmailSchedulesInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    movies?: MovieCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmailSchedulesInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    movies?: MovieUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmailSchedulesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmailSchedulesInput, UserUncheckedCreateWithoutEmailSchedulesInput>
  }

  export type MovieUpsertWithoutEmailSchedulesInput = {
    update: XOR<MovieUpdateWithoutEmailSchedulesInput, MovieUncheckedUpdateWithoutEmailSchedulesInput>
    create: XOR<MovieCreateWithoutEmailSchedulesInput, MovieUncheckedCreateWithoutEmailSchedulesInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutEmailSchedulesInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutEmailSchedulesInput, MovieUncheckedUpdateWithoutEmailSchedulesInput>
  }

  export type MovieUpdateWithoutEmailSchedulesInput = {
    title?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: FloatFieldUpdateOperationsInput | number
    voteCount?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    tagline?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    genres?: MovieUpdategenresInput | string[]
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    revenue?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    trailerUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type MovieUncheckedUpdateWithoutEmailSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    originalTitle?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: FloatFieldUpdateOperationsInput | number
    voteCount?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    tagline?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    genres?: MovieUpdategenresInput | string[]
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    revenue?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    trailerUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutEmailSchedulesInput = {
    update: XOR<UserUpdateWithoutEmailSchedulesInput, UserUncheckedUpdateWithoutEmailSchedulesInput>
    create: XOR<UserCreateWithoutEmailSchedulesInput, UserUncheckedCreateWithoutEmailSchedulesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmailSchedulesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmailSchedulesInput, UserUncheckedUpdateWithoutEmailSchedulesInput>
  }

  export type UserUpdateWithoutEmailSchedulesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MovieUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmailSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MovieUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MovieCreateManyUserInput = {
    id?: number
    title: string
    originalTitle: string
    coverImageUrl: string
    popularity: number
    voteCount: number
    score: number
    tagline: string
    synopsis: string
    genres?: MovieCreategenresInput | string[]
    releaseDate: Date | string
    duration: number
    status: string
    language: string
    budget: number
    revenue: number
    profit: number
    trailerUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailScheduleCreateManyUserInput = {
    id?: number
    movieId: number
    scheduledFor: Date | string
    sent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: FloatFieldUpdateOperationsInput | number
    voteCount?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    tagline?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    genres?: MovieUpdategenresInput | string[]
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    revenue?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    trailerUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailSchedules?: EmailScheduleUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: FloatFieldUpdateOperationsInput | number
    voteCount?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    tagline?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    genres?: MovieUpdategenresInput | string[]
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    revenue?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    trailerUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailSchedules?: EmailScheduleUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: FloatFieldUpdateOperationsInput | number
    voteCount?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    tagline?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    genres?: MovieUpdategenresInput | string[]
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    revenue?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    trailerUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailScheduleUpdateWithoutUserInput = {
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutEmailSchedulesNestedInput
  }

  export type EmailScheduleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailScheduleUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailScheduleCreateManyMovieInput = {
    id?: number
    userId: number
    scheduledFor: Date | string
    sent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailScheduleUpdateWithoutMovieInput = {
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmailSchedulesNestedInput
  }

  export type EmailScheduleUncheckedUpdateWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailScheduleUncheckedUpdateManyWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}