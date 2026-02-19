
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
 * Model Club
 * 
 */
export type Club = $Result.DefaultSelection<Prisma.$ClubPayload>
/**
 * Model Court
 * 
 */
export type Court = $Result.DefaultSelection<Prisma.$CourtPayload>
/**
 * Model StaffUser
 * 
 */
export type StaffUser = $Result.DefaultSelection<Prisma.$StaffUserPayload>
/**
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>
/**
 * Model Block
 * 
 */
export type Block = $Result.DefaultSelection<Prisma.$BlockPayload>
/**
 * Model PricingRule
 * 
 */
export type PricingRule = $Result.DefaultSelection<Prisma.$PricingRulePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model MessageLog
 * 
 */
export type MessageLog = $Result.DefaultSelection<Prisma.$MessageLogPayload>
/**
 * Model License
 * 
 */
export type License = $Result.DefaultSelection<Prisma.$LicensePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StaffRole: {
  SECRETARIO: 'SECRETARIO',
  ADMIN: 'ADMIN'
};

export type StaffRole = (typeof StaffRole)[keyof typeof StaffRole]


export const ReservationStatus: {
  HOLD: 'HOLD',
  CONFIRMED: 'CONFIRMED',
  CANCELED: 'CANCELED',
  NO_SHOW: 'NO_SHOW'
};

export type ReservationStatus = (typeof ReservationStatus)[keyof typeof ReservationStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const CreatedByKind: {
  PUBLIC: 'PUBLIC',
  STAFF: 'STAFF'
};

export type CreatedByKind = (typeof CreatedByKind)[keyof typeof CreatedByKind]

}

export type StaffRole = $Enums.StaffRole

export const StaffRole: typeof $Enums.StaffRole

export type ReservationStatus = $Enums.ReservationStatus

export const ReservationStatus: typeof $Enums.ReservationStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type CreatedByKind = $Enums.CreatedByKind

export const CreatedByKind: typeof $Enums.CreatedByKind

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clubs
 * const clubs = await prisma.club.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Clubs
   * const clubs = await prisma.club.findMany()
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
   * `prisma.club`: Exposes CRUD operations for the **Club** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clubs
    * const clubs = await prisma.club.findMany()
    * ```
    */
  get club(): Prisma.ClubDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.court`: Exposes CRUD operations for the **Court** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courts
    * const courts = await prisma.court.findMany()
    * ```
    */
  get court(): Prisma.CourtDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staffUser`: Exposes CRUD operations for the **StaffUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaffUsers
    * const staffUsers = await prisma.staffUser.findMany()
    * ```
    */
  get staffUser(): Prisma.StaffUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.block`: Exposes CRUD operations for the **Block** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blocks
    * const blocks = await prisma.block.findMany()
    * ```
    */
  get block(): Prisma.BlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pricingRule`: Exposes CRUD operations for the **PricingRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PricingRules
    * const pricingRules = await prisma.pricingRule.findMany()
    * ```
    */
  get pricingRule(): Prisma.PricingRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageLog`: Exposes CRUD operations for the **MessageLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageLogs
    * const messageLogs = await prisma.messageLog.findMany()
    * ```
    */
  get messageLog(): Prisma.MessageLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.license`: Exposes CRUD operations for the **License** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Licenses
    * const licenses = await prisma.license.findMany()
    * ```
    */
  get license(): Prisma.LicenseDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Club: 'Club',
    Court: 'Court',
    StaffUser: 'StaffUser',
    Reservation: 'Reservation',
    Block: 'Block',
    PricingRule: 'PricingRule',
    Payment: 'Payment',
    AuditLog: 'AuditLog',
    MessageLog: 'MessageLog',
    License: 'License'
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
      modelProps: "club" | "court" | "staffUser" | "reservation" | "block" | "pricingRule" | "payment" | "auditLog" | "messageLog" | "license"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Club: {
        payload: Prisma.$ClubPayload<ExtArgs>
        fields: Prisma.ClubFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClubFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClubFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          findFirst: {
            args: Prisma.ClubFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClubFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          findMany: {
            args: Prisma.ClubFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          create: {
            args: Prisma.ClubCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          createMany: {
            args: Prisma.ClubCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClubCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          delete: {
            args: Prisma.ClubDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          update: {
            args: Prisma.ClubUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          deleteMany: {
            args: Prisma.ClubDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClubUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClubUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          upsert: {
            args: Prisma.ClubUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          aggregate: {
            args: Prisma.ClubAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClub>
          }
          groupBy: {
            args: Prisma.ClubGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClubGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClubCountArgs<ExtArgs>
            result: $Utils.Optional<ClubCountAggregateOutputType> | number
          }
        }
      }
      Court: {
        payload: Prisma.$CourtPayload<ExtArgs>
        fields: Prisma.CourtFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourtFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourtFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>
          }
          findFirst: {
            args: Prisma.CourtFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourtFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>
          }
          findMany: {
            args: Prisma.CourtFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>[]
          }
          create: {
            args: Prisma.CourtCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>
          }
          createMany: {
            args: Prisma.CourtCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourtCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>[]
          }
          delete: {
            args: Prisma.CourtDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>
          }
          update: {
            args: Prisma.CourtUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>
          }
          deleteMany: {
            args: Prisma.CourtDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourtUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourtUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>[]
          }
          upsert: {
            args: Prisma.CourtUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>
          }
          aggregate: {
            args: Prisma.CourtAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourt>
          }
          groupBy: {
            args: Prisma.CourtGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourtGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourtCountArgs<ExtArgs>
            result: $Utils.Optional<CourtCountAggregateOutputType> | number
          }
        }
      }
      StaffUser: {
        payload: Prisma.$StaffUserPayload<ExtArgs>
        fields: Prisma.StaffUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffUserPayload>
          }
          findFirst: {
            args: Prisma.StaffUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffUserPayload>
          }
          findMany: {
            args: Prisma.StaffUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffUserPayload>[]
          }
          create: {
            args: Prisma.StaffUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffUserPayload>
          }
          createMany: {
            args: Prisma.StaffUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffUserPayload>[]
          }
          delete: {
            args: Prisma.StaffUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffUserPayload>
          }
          update: {
            args: Prisma.StaffUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffUserPayload>
          }
          deleteMany: {
            args: Prisma.StaffUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffUserPayload>[]
          }
          upsert: {
            args: Prisma.StaffUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffUserPayload>
          }
          aggregate: {
            args: Prisma.StaffUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaffUser>
          }
          groupBy: {
            args: Prisma.StaffUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffUserCountArgs<ExtArgs>
            result: $Utils.Optional<StaffUserCountAggregateOutputType> | number
          }
        }
      }
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
      Block: {
        payload: Prisma.$BlockPayload<ExtArgs>
        fields: Prisma.BlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          findFirst: {
            args: Prisma.BlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          findMany: {
            args: Prisma.BlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>[]
          }
          create: {
            args: Prisma.BlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          createMany: {
            args: Prisma.BlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>[]
          }
          delete: {
            args: Prisma.BlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          update: {
            args: Prisma.BlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          deleteMany: {
            args: Prisma.BlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>[]
          }
          upsert: {
            args: Prisma.BlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          aggregate: {
            args: Prisma.BlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlock>
          }
          groupBy: {
            args: Prisma.BlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockCountArgs<ExtArgs>
            result: $Utils.Optional<BlockCountAggregateOutputType> | number
          }
        }
      }
      PricingRule: {
        payload: Prisma.$PricingRulePayload<ExtArgs>
        fields: Prisma.PricingRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PricingRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PricingRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>
          }
          findFirst: {
            args: Prisma.PricingRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PricingRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>
          }
          findMany: {
            args: Prisma.PricingRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>[]
          }
          create: {
            args: Prisma.PricingRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>
          }
          createMany: {
            args: Prisma.PricingRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PricingRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>[]
          }
          delete: {
            args: Prisma.PricingRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>
          }
          update: {
            args: Prisma.PricingRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>
          }
          deleteMany: {
            args: Prisma.PricingRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PricingRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PricingRuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>[]
          }
          upsert: {
            args: Prisma.PricingRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>
          }
          aggregate: {
            args: Prisma.PricingRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePricingRule>
          }
          groupBy: {
            args: Prisma.PricingRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<PricingRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.PricingRuleCountArgs<ExtArgs>
            result: $Utils.Optional<PricingRuleCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      MessageLog: {
        payload: Prisma.$MessageLogPayload<ExtArgs>
        fields: Prisma.MessageLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>
          }
          findFirst: {
            args: Prisma.MessageLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>
          }
          findMany: {
            args: Prisma.MessageLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>[]
          }
          create: {
            args: Prisma.MessageLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>
          }
          createMany: {
            args: Prisma.MessageLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>[]
          }
          delete: {
            args: Prisma.MessageLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>
          }
          update: {
            args: Prisma.MessageLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>
          }
          deleteMany: {
            args: Prisma.MessageLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>[]
          }
          upsert: {
            args: Prisma.MessageLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>
          }
          aggregate: {
            args: Prisma.MessageLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageLog>
          }
          groupBy: {
            args: Prisma.MessageLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageLogCountArgs<ExtArgs>
            result: $Utils.Optional<MessageLogCountAggregateOutputType> | number
          }
        }
      }
      License: {
        payload: Prisma.$LicensePayload<ExtArgs>
        fields: Prisma.LicenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          findFirst: {
            args: Prisma.LicenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          findMany: {
            args: Prisma.LicenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>[]
          }
          create: {
            args: Prisma.LicenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          createMany: {
            args: Prisma.LicenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LicenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>[]
          }
          delete: {
            args: Prisma.LicenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          update: {
            args: Prisma.LicenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          deleteMany: {
            args: Prisma.LicenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LicenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>[]
          }
          upsert: {
            args: Prisma.LicenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          aggregate: {
            args: Prisma.LicenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicense>
          }
          groupBy: {
            args: Prisma.LicenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.LicenseCountArgs<ExtArgs>
            result: $Utils.Optional<LicenseCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    club?: ClubOmit
    court?: CourtOmit
    staffUser?: StaffUserOmit
    reservation?: ReservationOmit
    block?: BlockOmit
    pricingRule?: PricingRuleOmit
    payment?: PaymentOmit
    auditLog?: AuditLogOmit
    messageLog?: MessageLogOmit
    license?: LicenseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ClubCountOutputType
   */

  export type ClubCountOutputType = {
    courts: number
    reservations: number
    blocks: number
    pricingRules: number
    licenses: number
  }

  export type ClubCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courts?: boolean | ClubCountOutputTypeCountCourtsArgs
    reservations?: boolean | ClubCountOutputTypeCountReservationsArgs
    blocks?: boolean | ClubCountOutputTypeCountBlocksArgs
    pricingRules?: boolean | ClubCountOutputTypeCountPricingRulesArgs
    licenses?: boolean | ClubCountOutputTypeCountLicensesArgs
  }

  // Custom InputTypes
  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClubCountOutputType
     */
    select?: ClubCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeCountCourtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourtWhereInput
  }

  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeCountBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockWhereInput
  }

  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeCountPricingRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingRuleWhereInput
  }

  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeCountLicensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseWhereInput
  }


  /**
   * Count Type CourtCountOutputType
   */

  export type CourtCountOutputType = {
    reservations: number
    blocks: number
  }

  export type CourtCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | CourtCountOutputTypeCountReservationsArgs
    blocks?: boolean | CourtCountOutputTypeCountBlocksArgs
  }

  // Custom InputTypes
  /**
   * CourtCountOutputType without action
   */
  export type CourtCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourtCountOutputType
     */
    select?: CourtCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourtCountOutputType without action
   */
  export type CourtCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * CourtCountOutputType without action
   */
  export type CourtCountOutputTypeCountBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockWhereInput
  }


  /**
   * Count Type StaffUserCountOutputType
   */

  export type StaffUserCountOutputType = {
    audits: number
  }

  export type StaffUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audits?: boolean | StaffUserCountOutputTypeCountAuditsArgs
  }

  // Custom InputTypes
  /**
   * StaffUserCountOutputType without action
   */
  export type StaffUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffUserCountOutputType
     */
    select?: StaffUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaffUserCountOutputType without action
   */
  export type StaffUserCountOutputTypeCountAuditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type ReservationCountOutputType
   */

  export type ReservationCountOutputType = {
    payments: number
    messages: number
  }

  export type ReservationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | ReservationCountOutputTypeCountPaymentsArgs
    messages?: boolean | ReservationCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationCountOutputType
     */
    select?: ReservationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Club
   */

  export type AggregateClub = {
    _count: ClubCountAggregateOutputType | null
    _avg: ClubAvgAggregateOutputType | null
    _sum: ClubSumAggregateOutputType | null
    _min: ClubMinAggregateOutputType | null
    _max: ClubMaxAggregateOutputType | null
  }

  export type ClubAvgAggregateOutputType = {
    slotDurationDefault: number | null
    minAdvanceMinutes: number | null
    maxAdvanceDays: number | null
    cancellationPolicyMin: number | null
  }

  export type ClubSumAggregateOutputType = {
    slotDurationDefault: number | null
    minAdvanceMinutes: number | null
    maxAdvanceDays: number | null
    cancellationPolicyMin: number | null
  }

  export type ClubMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    address: string | null
    whatsapp: string | null
    mapLink: string | null
    transferAlias: string | null
    transferCvuCbu: string | null
    slotDurationDefault: number | null
    minAdvanceMinutes: number | null
    maxAdvanceDays: number | null
    cancellationPolicyMin: number | null
    noShowPolicy: string | null
    holidayJson: string | null
    scheduleJson: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClubMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    address: string | null
    whatsapp: string | null
    mapLink: string | null
    transferAlias: string | null
    transferCvuCbu: string | null
    slotDurationDefault: number | null
    minAdvanceMinutes: number | null
    maxAdvanceDays: number | null
    cancellationPolicyMin: number | null
    noShowPolicy: string | null
    holidayJson: string | null
    scheduleJson: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClubCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    address: number
    whatsapp: number
    mapLink: number
    transferAlias: number
    transferCvuCbu: number
    slotDurationDefault: number
    minAdvanceMinutes: number
    maxAdvanceDays: number
    cancellationPolicyMin: number
    noShowPolicy: number
    holidayJson: number
    scheduleJson: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClubAvgAggregateInputType = {
    slotDurationDefault?: true
    minAdvanceMinutes?: true
    maxAdvanceDays?: true
    cancellationPolicyMin?: true
  }

  export type ClubSumAggregateInputType = {
    slotDurationDefault?: true
    minAdvanceMinutes?: true
    maxAdvanceDays?: true
    cancellationPolicyMin?: true
  }

  export type ClubMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    address?: true
    whatsapp?: true
    mapLink?: true
    transferAlias?: true
    transferCvuCbu?: true
    slotDurationDefault?: true
    minAdvanceMinutes?: true
    maxAdvanceDays?: true
    cancellationPolicyMin?: true
    noShowPolicy?: true
    holidayJson?: true
    scheduleJson?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClubMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    address?: true
    whatsapp?: true
    mapLink?: true
    transferAlias?: true
    transferCvuCbu?: true
    slotDurationDefault?: true
    minAdvanceMinutes?: true
    maxAdvanceDays?: true
    cancellationPolicyMin?: true
    noShowPolicy?: true
    holidayJson?: true
    scheduleJson?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClubCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    address?: true
    whatsapp?: true
    mapLink?: true
    transferAlias?: true
    transferCvuCbu?: true
    slotDurationDefault?: true
    minAdvanceMinutes?: true
    maxAdvanceDays?: true
    cancellationPolicyMin?: true
    noShowPolicy?: true
    holidayJson?: true
    scheduleJson?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClubAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Club to aggregate.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clubs
    **/
    _count?: true | ClubCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClubAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClubSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClubMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClubMaxAggregateInputType
  }

  export type GetClubAggregateType<T extends ClubAggregateArgs> = {
        [P in keyof T & keyof AggregateClub]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClub[P]>
      : GetScalarType<T[P], AggregateClub[P]>
  }




  export type ClubGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClubWhereInput
    orderBy?: ClubOrderByWithAggregationInput | ClubOrderByWithAggregationInput[]
    by: ClubScalarFieldEnum[] | ClubScalarFieldEnum
    having?: ClubScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClubCountAggregateInputType | true
    _avg?: ClubAvgAggregateInputType
    _sum?: ClubSumAggregateInputType
    _min?: ClubMinAggregateInputType
    _max?: ClubMaxAggregateInputType
  }

  export type ClubGroupByOutputType = {
    id: string
    slug: string
    name: string
    address: string | null
    whatsapp: string | null
    mapLink: string | null
    transferAlias: string | null
    transferCvuCbu: string | null
    slotDurationDefault: number
    minAdvanceMinutes: number
    maxAdvanceDays: number
    cancellationPolicyMin: number
    noShowPolicy: string | null
    holidayJson: string
    scheduleJson: string
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: ClubCountAggregateOutputType | null
    _avg: ClubAvgAggregateOutputType | null
    _sum: ClubSumAggregateOutputType | null
    _min: ClubMinAggregateOutputType | null
    _max: ClubMaxAggregateOutputType | null
  }

  type GetClubGroupByPayload<T extends ClubGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClubGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClubGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClubGroupByOutputType[P]>
            : GetScalarType<T[P], ClubGroupByOutputType[P]>
        }
      >
    >


  export type ClubSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    address?: boolean
    whatsapp?: boolean
    mapLink?: boolean
    transferAlias?: boolean
    transferCvuCbu?: boolean
    slotDurationDefault?: boolean
    minAdvanceMinutes?: boolean
    maxAdvanceDays?: boolean
    cancellationPolicyMin?: boolean
    noShowPolicy?: boolean
    holidayJson?: boolean
    scheduleJson?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courts?: boolean | Club$courtsArgs<ExtArgs>
    reservations?: boolean | Club$reservationsArgs<ExtArgs>
    blocks?: boolean | Club$blocksArgs<ExtArgs>
    pricingRules?: boolean | Club$pricingRulesArgs<ExtArgs>
    licenses?: boolean | Club$licensesArgs<ExtArgs>
    _count?: boolean | ClubCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["club"]>

  export type ClubSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    address?: boolean
    whatsapp?: boolean
    mapLink?: boolean
    transferAlias?: boolean
    transferCvuCbu?: boolean
    slotDurationDefault?: boolean
    minAdvanceMinutes?: boolean
    maxAdvanceDays?: boolean
    cancellationPolicyMin?: boolean
    noShowPolicy?: boolean
    holidayJson?: boolean
    scheduleJson?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["club"]>

  export type ClubSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    address?: boolean
    whatsapp?: boolean
    mapLink?: boolean
    transferAlias?: boolean
    transferCvuCbu?: boolean
    slotDurationDefault?: boolean
    minAdvanceMinutes?: boolean
    maxAdvanceDays?: boolean
    cancellationPolicyMin?: boolean
    noShowPolicy?: boolean
    holidayJson?: boolean
    scheduleJson?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["club"]>

  export type ClubSelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    address?: boolean
    whatsapp?: boolean
    mapLink?: boolean
    transferAlias?: boolean
    transferCvuCbu?: boolean
    slotDurationDefault?: boolean
    minAdvanceMinutes?: boolean
    maxAdvanceDays?: boolean
    cancellationPolicyMin?: boolean
    noShowPolicy?: boolean
    holidayJson?: boolean
    scheduleJson?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClubOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "name" | "address" | "whatsapp" | "mapLink" | "transferAlias" | "transferCvuCbu" | "slotDurationDefault" | "minAdvanceMinutes" | "maxAdvanceDays" | "cancellationPolicyMin" | "noShowPolicy" | "holidayJson" | "scheduleJson" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["club"]>
  export type ClubInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courts?: boolean | Club$courtsArgs<ExtArgs>
    reservations?: boolean | Club$reservationsArgs<ExtArgs>
    blocks?: boolean | Club$blocksArgs<ExtArgs>
    pricingRules?: boolean | Club$pricingRulesArgs<ExtArgs>
    licenses?: boolean | Club$licensesArgs<ExtArgs>
    _count?: boolean | ClubCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClubIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClubIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClubPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Club"
    objects: {
      courts: Prisma.$CourtPayload<ExtArgs>[]
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      blocks: Prisma.$BlockPayload<ExtArgs>[]
      pricingRules: Prisma.$PricingRulePayload<ExtArgs>[]
      licenses: Prisma.$LicensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name: string
      address: string | null
      whatsapp: string | null
      mapLink: string | null
      transferAlias: string | null
      transferCvuCbu: string | null
      slotDurationDefault: number
      minAdvanceMinutes: number
      maxAdvanceDays: number
      cancellationPolicyMin: number
      noShowPolicy: string | null
      holidayJson: string
      scheduleJson: string
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["club"]>
    composites: {}
  }

  type ClubGetPayload<S extends boolean | null | undefined | ClubDefaultArgs> = $Result.GetResult<Prisma.$ClubPayload, S>

  type ClubCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClubFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClubCountAggregateInputType | true
    }

  export interface ClubDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Club'], meta: { name: 'Club' } }
    /**
     * Find zero or one Club that matches the filter.
     * @param {ClubFindUniqueArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClubFindUniqueArgs>(args: SelectSubset<T, ClubFindUniqueArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Club that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClubFindUniqueOrThrowArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClubFindUniqueOrThrowArgs>(args: SelectSubset<T, ClubFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Club that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindFirstArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClubFindFirstArgs>(args?: SelectSubset<T, ClubFindFirstArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Club that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindFirstOrThrowArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClubFindFirstOrThrowArgs>(args?: SelectSubset<T, ClubFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clubs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clubs
     * const clubs = await prisma.club.findMany()
     * 
     * // Get first 10 Clubs
     * const clubs = await prisma.club.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clubWithIdOnly = await prisma.club.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClubFindManyArgs>(args?: SelectSubset<T, ClubFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Club.
     * @param {ClubCreateArgs} args - Arguments to create a Club.
     * @example
     * // Create one Club
     * const Club = await prisma.club.create({
     *   data: {
     *     // ... data to create a Club
     *   }
     * })
     * 
     */
    create<T extends ClubCreateArgs>(args: SelectSubset<T, ClubCreateArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clubs.
     * @param {ClubCreateManyArgs} args - Arguments to create many Clubs.
     * @example
     * // Create many Clubs
     * const club = await prisma.club.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClubCreateManyArgs>(args?: SelectSubset<T, ClubCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clubs and returns the data saved in the database.
     * @param {ClubCreateManyAndReturnArgs} args - Arguments to create many Clubs.
     * @example
     * // Create many Clubs
     * const club = await prisma.club.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clubs and only return the `id`
     * const clubWithIdOnly = await prisma.club.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClubCreateManyAndReturnArgs>(args?: SelectSubset<T, ClubCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Club.
     * @param {ClubDeleteArgs} args - Arguments to delete one Club.
     * @example
     * // Delete one Club
     * const Club = await prisma.club.delete({
     *   where: {
     *     // ... filter to delete one Club
     *   }
     * })
     * 
     */
    delete<T extends ClubDeleteArgs>(args: SelectSubset<T, ClubDeleteArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Club.
     * @param {ClubUpdateArgs} args - Arguments to update one Club.
     * @example
     * // Update one Club
     * const club = await prisma.club.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClubUpdateArgs>(args: SelectSubset<T, ClubUpdateArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clubs.
     * @param {ClubDeleteManyArgs} args - Arguments to filter Clubs to delete.
     * @example
     * // Delete a few Clubs
     * const { count } = await prisma.club.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClubDeleteManyArgs>(args?: SelectSubset<T, ClubDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clubs
     * const club = await prisma.club.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClubUpdateManyArgs>(args: SelectSubset<T, ClubUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clubs and returns the data updated in the database.
     * @param {ClubUpdateManyAndReturnArgs} args - Arguments to update many Clubs.
     * @example
     * // Update many Clubs
     * const club = await prisma.club.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clubs and only return the `id`
     * const clubWithIdOnly = await prisma.club.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClubUpdateManyAndReturnArgs>(args: SelectSubset<T, ClubUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Club.
     * @param {ClubUpsertArgs} args - Arguments to update or create a Club.
     * @example
     * // Update or create a Club
     * const club = await prisma.club.upsert({
     *   create: {
     *     // ... data to create a Club
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Club we want to update
     *   }
     * })
     */
    upsert<T extends ClubUpsertArgs>(args: SelectSubset<T, ClubUpsertArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubCountArgs} args - Arguments to filter Clubs to count.
     * @example
     * // Count the number of Clubs
     * const count = await prisma.club.count({
     *   where: {
     *     // ... the filter for the Clubs we want to count
     *   }
     * })
    **/
    count<T extends ClubCountArgs>(
      args?: Subset<T, ClubCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClubCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Club.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClubAggregateArgs>(args: Subset<T, ClubAggregateArgs>): Prisma.PrismaPromise<GetClubAggregateType<T>>

    /**
     * Group by Club.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubGroupByArgs} args - Group by arguments.
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
      T extends ClubGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClubGroupByArgs['orderBy'] }
        : { orderBy?: ClubGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClubGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClubGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Club model
   */
  readonly fields: ClubFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Club.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClubClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courts<T extends Club$courtsArgs<ExtArgs> = {}>(args?: Subset<T, Club$courtsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservations<T extends Club$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Club$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blocks<T extends Club$blocksArgs<ExtArgs> = {}>(args?: Subset<T, Club$blocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pricingRules<T extends Club$pricingRulesArgs<ExtArgs> = {}>(args?: Subset<T, Club$pricingRulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    licenses<T extends Club$licensesArgs<ExtArgs> = {}>(args?: Subset<T, Club$licensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Club model
   */
  interface ClubFieldRefs {
    readonly id: FieldRef<"Club", 'String'>
    readonly slug: FieldRef<"Club", 'String'>
    readonly name: FieldRef<"Club", 'String'>
    readonly address: FieldRef<"Club", 'String'>
    readonly whatsapp: FieldRef<"Club", 'String'>
    readonly mapLink: FieldRef<"Club", 'String'>
    readonly transferAlias: FieldRef<"Club", 'String'>
    readonly transferCvuCbu: FieldRef<"Club", 'String'>
    readonly slotDurationDefault: FieldRef<"Club", 'Int'>
    readonly minAdvanceMinutes: FieldRef<"Club", 'Int'>
    readonly maxAdvanceDays: FieldRef<"Club", 'Int'>
    readonly cancellationPolicyMin: FieldRef<"Club", 'Int'>
    readonly noShowPolicy: FieldRef<"Club", 'String'>
    readonly holidayJson: FieldRef<"Club", 'String'>
    readonly scheduleJson: FieldRef<"Club", 'String'>
    readonly active: FieldRef<"Club", 'Boolean'>
    readonly createdAt: FieldRef<"Club", 'DateTime'>
    readonly updatedAt: FieldRef<"Club", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Club findUnique
   */
  export type ClubFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club findUniqueOrThrow
   */
  export type ClubFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club findFirst
   */
  export type ClubFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clubs.
     */
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club findFirstOrThrow
   */
  export type ClubFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clubs.
     */
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club findMany
   */
  export type ClubFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Clubs to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club create
   */
  export type ClubCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * The data needed to create a Club.
     */
    data: XOR<ClubCreateInput, ClubUncheckedCreateInput>
  }

  /**
   * Club createMany
   */
  export type ClubCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clubs.
     */
    data: ClubCreateManyInput | ClubCreateManyInput[]
  }

  /**
   * Club createManyAndReturn
   */
  export type ClubCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * The data used to create many Clubs.
     */
    data: ClubCreateManyInput | ClubCreateManyInput[]
  }

  /**
   * Club update
   */
  export type ClubUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * The data needed to update a Club.
     */
    data: XOR<ClubUpdateInput, ClubUncheckedUpdateInput>
    /**
     * Choose, which Club to update.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club updateMany
   */
  export type ClubUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clubs.
     */
    data: XOR<ClubUpdateManyMutationInput, ClubUncheckedUpdateManyInput>
    /**
     * Filter which Clubs to update
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to update.
     */
    limit?: number
  }

  /**
   * Club updateManyAndReturn
   */
  export type ClubUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * The data used to update Clubs.
     */
    data: XOR<ClubUpdateManyMutationInput, ClubUncheckedUpdateManyInput>
    /**
     * Filter which Clubs to update
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to update.
     */
    limit?: number
  }

  /**
   * Club upsert
   */
  export type ClubUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * The filter to search for the Club to update in case it exists.
     */
    where: ClubWhereUniqueInput
    /**
     * In case the Club found by the `where` argument doesn't exist, create a new Club with this data.
     */
    create: XOR<ClubCreateInput, ClubUncheckedCreateInput>
    /**
     * In case the Club was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClubUpdateInput, ClubUncheckedUpdateInput>
  }

  /**
   * Club delete
   */
  export type ClubDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter which Club to delete.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club deleteMany
   */
  export type ClubDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clubs to delete
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to delete.
     */
    limit?: number
  }

  /**
   * Club.courts
   */
  export type Club$courtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    where?: CourtWhereInput
    orderBy?: CourtOrderByWithRelationInput | CourtOrderByWithRelationInput[]
    cursor?: CourtWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourtScalarFieldEnum | CourtScalarFieldEnum[]
  }

  /**
   * Club.reservations
   */
  export type Club$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Club.blocks
   */
  export type Club$blocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    where?: BlockWhereInput
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    cursor?: BlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Club.pricingRules
   */
  export type Club$pricingRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    where?: PricingRuleWhereInput
    orderBy?: PricingRuleOrderByWithRelationInput | PricingRuleOrderByWithRelationInput[]
    cursor?: PricingRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PricingRuleScalarFieldEnum | PricingRuleScalarFieldEnum[]
  }

  /**
   * Club.licenses
   */
  export type Club$licensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    where?: LicenseWhereInput
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    cursor?: LicenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * Club without action
   */
  export type ClubDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
  }


  /**
   * Model Court
   */

  export type AggregateCourt = {
    _count: CourtCountAggregateOutputType | null
    _avg: CourtAvgAggregateOutputType | null
    _sum: CourtSumAggregateOutputType | null
    _min: CourtMinAggregateOutputType | null
    _max: CourtMaxAggregateOutputType | null
  }

  export type CourtAvgAggregateOutputType = {
    basePrice: number | null
  }

  export type CourtSumAggregateOutputType = {
    basePrice: number | null
  }

  export type CourtMinAggregateOutputType = {
    id: string | null
    clubId: string | null
    name: string | null
    active: boolean | null
    basePrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourtMaxAggregateOutputType = {
    id: string | null
    clubId: string | null
    name: string | null
    active: boolean | null
    basePrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourtCountAggregateOutputType = {
    id: number
    clubId: number
    name: number
    active: number
    basePrice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourtAvgAggregateInputType = {
    basePrice?: true
  }

  export type CourtSumAggregateInputType = {
    basePrice?: true
  }

  export type CourtMinAggregateInputType = {
    id?: true
    clubId?: true
    name?: true
    active?: true
    basePrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourtMaxAggregateInputType = {
    id?: true
    clubId?: true
    name?: true
    active?: true
    basePrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourtCountAggregateInputType = {
    id?: true
    clubId?: true
    name?: true
    active?: true
    basePrice?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourtAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Court to aggregate.
     */
    where?: CourtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courts to fetch.
     */
    orderBy?: CourtOrderByWithRelationInput | CourtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courts
    **/
    _count?: true | CourtCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourtAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourtSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourtMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourtMaxAggregateInputType
  }

  export type GetCourtAggregateType<T extends CourtAggregateArgs> = {
        [P in keyof T & keyof AggregateCourt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourt[P]>
      : GetScalarType<T[P], AggregateCourt[P]>
  }




  export type CourtGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourtWhereInput
    orderBy?: CourtOrderByWithAggregationInput | CourtOrderByWithAggregationInput[]
    by: CourtScalarFieldEnum[] | CourtScalarFieldEnum
    having?: CourtScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourtCountAggregateInputType | true
    _avg?: CourtAvgAggregateInputType
    _sum?: CourtSumAggregateInputType
    _min?: CourtMinAggregateInputType
    _max?: CourtMaxAggregateInputType
  }

  export type CourtGroupByOutputType = {
    id: string
    clubId: string
    name: string
    active: boolean
    basePrice: number
    createdAt: Date
    updatedAt: Date
    _count: CourtCountAggregateOutputType | null
    _avg: CourtAvgAggregateOutputType | null
    _sum: CourtSumAggregateOutputType | null
    _min: CourtMinAggregateOutputType | null
    _max: CourtMaxAggregateOutputType | null
  }

  type GetCourtGroupByPayload<T extends CourtGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourtGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourtGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourtGroupByOutputType[P]>
            : GetScalarType<T[P], CourtGroupByOutputType[P]>
        }
      >
    >


  export type CourtSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clubId?: boolean
    name?: boolean
    active?: boolean
    basePrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    club?: boolean | ClubDefaultArgs<ExtArgs>
    reservations?: boolean | Court$reservationsArgs<ExtArgs>
    blocks?: boolean | Court$blocksArgs<ExtArgs>
    _count?: boolean | CourtCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["court"]>

  export type CourtSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clubId?: boolean
    name?: boolean
    active?: boolean
    basePrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["court"]>

  export type CourtSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clubId?: boolean
    name?: boolean
    active?: boolean
    basePrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["court"]>

  export type CourtSelectScalar = {
    id?: boolean
    clubId?: boolean
    name?: boolean
    active?: boolean
    basePrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourtOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clubId" | "name" | "active" | "basePrice" | "createdAt" | "updatedAt", ExtArgs["result"]["court"]>
  export type CourtInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | ClubDefaultArgs<ExtArgs>
    reservations?: boolean | Court$reservationsArgs<ExtArgs>
    blocks?: boolean | Court$blocksArgs<ExtArgs>
    _count?: boolean | CourtCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourtIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }
  export type CourtIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }

  export type $CourtPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Court"
    objects: {
      club: Prisma.$ClubPayload<ExtArgs>
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      blocks: Prisma.$BlockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clubId: string
      name: string
      active: boolean
      basePrice: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["court"]>
    composites: {}
  }

  type CourtGetPayload<S extends boolean | null | undefined | CourtDefaultArgs> = $Result.GetResult<Prisma.$CourtPayload, S>

  type CourtCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourtFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourtCountAggregateInputType | true
    }

  export interface CourtDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Court'], meta: { name: 'Court' } }
    /**
     * Find zero or one Court that matches the filter.
     * @param {CourtFindUniqueArgs} args - Arguments to find a Court
     * @example
     * // Get one Court
     * const court = await prisma.court.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourtFindUniqueArgs>(args: SelectSubset<T, CourtFindUniqueArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Court that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourtFindUniqueOrThrowArgs} args - Arguments to find a Court
     * @example
     * // Get one Court
     * const court = await prisma.court.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourtFindUniqueOrThrowArgs>(args: SelectSubset<T, CourtFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Court that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtFindFirstArgs} args - Arguments to find a Court
     * @example
     * // Get one Court
     * const court = await prisma.court.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourtFindFirstArgs>(args?: SelectSubset<T, CourtFindFirstArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Court that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtFindFirstOrThrowArgs} args - Arguments to find a Court
     * @example
     * // Get one Court
     * const court = await prisma.court.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourtFindFirstOrThrowArgs>(args?: SelectSubset<T, CourtFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courts
     * const courts = await prisma.court.findMany()
     * 
     * // Get first 10 Courts
     * const courts = await prisma.court.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courtWithIdOnly = await prisma.court.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourtFindManyArgs>(args?: SelectSubset<T, CourtFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Court.
     * @param {CourtCreateArgs} args - Arguments to create a Court.
     * @example
     * // Create one Court
     * const Court = await prisma.court.create({
     *   data: {
     *     // ... data to create a Court
     *   }
     * })
     * 
     */
    create<T extends CourtCreateArgs>(args: SelectSubset<T, CourtCreateArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courts.
     * @param {CourtCreateManyArgs} args - Arguments to create many Courts.
     * @example
     * // Create many Courts
     * const court = await prisma.court.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourtCreateManyArgs>(args?: SelectSubset<T, CourtCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courts and returns the data saved in the database.
     * @param {CourtCreateManyAndReturnArgs} args - Arguments to create many Courts.
     * @example
     * // Create many Courts
     * const court = await prisma.court.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courts and only return the `id`
     * const courtWithIdOnly = await prisma.court.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourtCreateManyAndReturnArgs>(args?: SelectSubset<T, CourtCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Court.
     * @param {CourtDeleteArgs} args - Arguments to delete one Court.
     * @example
     * // Delete one Court
     * const Court = await prisma.court.delete({
     *   where: {
     *     // ... filter to delete one Court
     *   }
     * })
     * 
     */
    delete<T extends CourtDeleteArgs>(args: SelectSubset<T, CourtDeleteArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Court.
     * @param {CourtUpdateArgs} args - Arguments to update one Court.
     * @example
     * // Update one Court
     * const court = await prisma.court.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourtUpdateArgs>(args: SelectSubset<T, CourtUpdateArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courts.
     * @param {CourtDeleteManyArgs} args - Arguments to filter Courts to delete.
     * @example
     * // Delete a few Courts
     * const { count } = await prisma.court.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourtDeleteManyArgs>(args?: SelectSubset<T, CourtDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courts
     * const court = await prisma.court.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourtUpdateManyArgs>(args: SelectSubset<T, CourtUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courts and returns the data updated in the database.
     * @param {CourtUpdateManyAndReturnArgs} args - Arguments to update many Courts.
     * @example
     * // Update many Courts
     * const court = await prisma.court.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courts and only return the `id`
     * const courtWithIdOnly = await prisma.court.updateManyAndReturn({
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
    updateManyAndReturn<T extends CourtUpdateManyAndReturnArgs>(args: SelectSubset<T, CourtUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Court.
     * @param {CourtUpsertArgs} args - Arguments to update or create a Court.
     * @example
     * // Update or create a Court
     * const court = await prisma.court.upsert({
     *   create: {
     *     // ... data to create a Court
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Court we want to update
     *   }
     * })
     */
    upsert<T extends CourtUpsertArgs>(args: SelectSubset<T, CourtUpsertArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtCountArgs} args - Arguments to filter Courts to count.
     * @example
     * // Count the number of Courts
     * const count = await prisma.court.count({
     *   where: {
     *     // ... the filter for the Courts we want to count
     *   }
     * })
    **/
    count<T extends CourtCountArgs>(
      args?: Subset<T, CourtCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourtCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Court.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourtAggregateArgs>(args: Subset<T, CourtAggregateArgs>): Prisma.PrismaPromise<GetCourtAggregateType<T>>

    /**
     * Group by Court.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtGroupByArgs} args - Group by arguments.
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
      T extends CourtGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourtGroupByArgs['orderBy'] }
        : { orderBy?: CourtGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourtGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourtGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Court model
   */
  readonly fields: CourtFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Court.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourtClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    club<T extends ClubDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClubDefaultArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reservations<T extends Court$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Court$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blocks<T extends Court$blocksArgs<ExtArgs> = {}>(args?: Subset<T, Court$blocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Court model
   */
  interface CourtFieldRefs {
    readonly id: FieldRef<"Court", 'String'>
    readonly clubId: FieldRef<"Court", 'String'>
    readonly name: FieldRef<"Court", 'String'>
    readonly active: FieldRef<"Court", 'Boolean'>
    readonly basePrice: FieldRef<"Court", 'Int'>
    readonly createdAt: FieldRef<"Court", 'DateTime'>
    readonly updatedAt: FieldRef<"Court", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Court findUnique
   */
  export type CourtFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    /**
     * Filter, which Court to fetch.
     */
    where: CourtWhereUniqueInput
  }

  /**
   * Court findUniqueOrThrow
   */
  export type CourtFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    /**
     * Filter, which Court to fetch.
     */
    where: CourtWhereUniqueInput
  }

  /**
   * Court findFirst
   */
  export type CourtFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    /**
     * Filter, which Court to fetch.
     */
    where?: CourtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courts to fetch.
     */
    orderBy?: CourtOrderByWithRelationInput | CourtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courts.
     */
    cursor?: CourtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courts.
     */
    distinct?: CourtScalarFieldEnum | CourtScalarFieldEnum[]
  }

  /**
   * Court findFirstOrThrow
   */
  export type CourtFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    /**
     * Filter, which Court to fetch.
     */
    where?: CourtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courts to fetch.
     */
    orderBy?: CourtOrderByWithRelationInput | CourtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courts.
     */
    cursor?: CourtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courts.
     */
    distinct?: CourtScalarFieldEnum | CourtScalarFieldEnum[]
  }

  /**
   * Court findMany
   */
  export type CourtFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    /**
     * Filter, which Courts to fetch.
     */
    where?: CourtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courts to fetch.
     */
    orderBy?: CourtOrderByWithRelationInput | CourtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courts.
     */
    cursor?: CourtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courts.
     */
    skip?: number
    distinct?: CourtScalarFieldEnum | CourtScalarFieldEnum[]
  }

  /**
   * Court create
   */
  export type CourtCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    /**
     * The data needed to create a Court.
     */
    data: XOR<CourtCreateInput, CourtUncheckedCreateInput>
  }

  /**
   * Court createMany
   */
  export type CourtCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courts.
     */
    data: CourtCreateManyInput | CourtCreateManyInput[]
  }

  /**
   * Court createManyAndReturn
   */
  export type CourtCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * The data used to create many Courts.
     */
    data: CourtCreateManyInput | CourtCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Court update
   */
  export type CourtUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    /**
     * The data needed to update a Court.
     */
    data: XOR<CourtUpdateInput, CourtUncheckedUpdateInput>
    /**
     * Choose, which Court to update.
     */
    where: CourtWhereUniqueInput
  }

  /**
   * Court updateMany
   */
  export type CourtUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courts.
     */
    data: XOR<CourtUpdateManyMutationInput, CourtUncheckedUpdateManyInput>
    /**
     * Filter which Courts to update
     */
    where?: CourtWhereInput
    /**
     * Limit how many Courts to update.
     */
    limit?: number
  }

  /**
   * Court updateManyAndReturn
   */
  export type CourtUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * The data used to update Courts.
     */
    data: XOR<CourtUpdateManyMutationInput, CourtUncheckedUpdateManyInput>
    /**
     * Filter which Courts to update
     */
    where?: CourtWhereInput
    /**
     * Limit how many Courts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Court upsert
   */
  export type CourtUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    /**
     * The filter to search for the Court to update in case it exists.
     */
    where: CourtWhereUniqueInput
    /**
     * In case the Court found by the `where` argument doesn't exist, create a new Court with this data.
     */
    create: XOR<CourtCreateInput, CourtUncheckedCreateInput>
    /**
     * In case the Court was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourtUpdateInput, CourtUncheckedUpdateInput>
  }

  /**
   * Court delete
   */
  export type CourtDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    /**
     * Filter which Court to delete.
     */
    where: CourtWhereUniqueInput
  }

  /**
   * Court deleteMany
   */
  export type CourtDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courts to delete
     */
    where?: CourtWhereInput
    /**
     * Limit how many Courts to delete.
     */
    limit?: number
  }

  /**
   * Court.reservations
   */
  export type Court$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Court.blocks
   */
  export type Court$blocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    where?: BlockWhereInput
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    cursor?: BlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Court without action
   */
  export type CourtDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
  }


  /**
   * Model StaffUser
   */

  export type AggregateStaffUser = {
    _count: StaffUserCountAggregateOutputType | null
    _min: StaffUserMinAggregateOutputType | null
    _max: StaffUserMaxAggregateOutputType | null
  }

  export type StaffUserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    fullName: string | null
    role: $Enums.StaffRole | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    fullName: string | null
    role: $Enums.StaffRole | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffUserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    fullName: number
    role: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StaffUserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    fullName?: true
    role?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffUserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    fullName?: true
    role?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffUserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    fullName?: true
    role?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StaffUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffUser to aggregate.
     */
    where?: StaffUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffUsers to fetch.
     */
    orderBy?: StaffUserOrderByWithRelationInput | StaffUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StaffUsers
    **/
    _count?: true | StaffUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffUserMaxAggregateInputType
  }

  export type GetStaffUserAggregateType<T extends StaffUserAggregateArgs> = {
        [P in keyof T & keyof AggregateStaffUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaffUser[P]>
      : GetScalarType<T[P], AggregateStaffUser[P]>
  }




  export type StaffUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffUserWhereInput
    orderBy?: StaffUserOrderByWithAggregationInput | StaffUserOrderByWithAggregationInput[]
    by: StaffUserScalarFieldEnum[] | StaffUserScalarFieldEnum
    having?: StaffUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffUserCountAggregateInputType | true
    _min?: StaffUserMinAggregateInputType
    _max?: StaffUserMaxAggregateInputType
  }

  export type StaffUserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    fullName: string
    role: $Enums.StaffRole
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: StaffUserCountAggregateOutputType | null
    _min: StaffUserMinAggregateOutputType | null
    _max: StaffUserMaxAggregateOutputType | null
  }

  type GetStaffUserGroupByPayload<T extends StaffUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffUserGroupByOutputType[P]>
            : GetScalarType<T[P], StaffUserGroupByOutputType[P]>
        }
      >
    >


  export type StaffUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    fullName?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    audits?: boolean | StaffUser$auditsArgs<ExtArgs>
    _count?: boolean | StaffUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffUser"]>

  export type StaffUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    fullName?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["staffUser"]>

  export type StaffUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    fullName?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["staffUser"]>

  export type StaffUserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    fullName?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StaffUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "fullName" | "role" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["staffUser"]>
  export type StaffUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audits?: boolean | StaffUser$auditsArgs<ExtArgs>
    _count?: boolean | StaffUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StaffUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StaffUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StaffUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StaffUser"
    objects: {
      audits: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      fullName: string
      role: $Enums.StaffRole
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["staffUser"]>
    composites: {}
  }

  type StaffUserGetPayload<S extends boolean | null | undefined | StaffUserDefaultArgs> = $Result.GetResult<Prisma.$StaffUserPayload, S>

  type StaffUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffUserCountAggregateInputType | true
    }

  export interface StaffUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StaffUser'], meta: { name: 'StaffUser' } }
    /**
     * Find zero or one StaffUser that matches the filter.
     * @param {StaffUserFindUniqueArgs} args - Arguments to find a StaffUser
     * @example
     * // Get one StaffUser
     * const staffUser = await prisma.staffUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffUserFindUniqueArgs>(args: SelectSubset<T, StaffUserFindUniqueArgs<ExtArgs>>): Prisma__StaffUserClient<$Result.GetResult<Prisma.$StaffUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StaffUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffUserFindUniqueOrThrowArgs} args - Arguments to find a StaffUser
     * @example
     * // Get one StaffUser
     * const staffUser = await prisma.staffUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffUserFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffUserClient<$Result.GetResult<Prisma.$StaffUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUserFindFirstArgs} args - Arguments to find a StaffUser
     * @example
     * // Get one StaffUser
     * const staffUser = await prisma.staffUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffUserFindFirstArgs>(args?: SelectSubset<T, StaffUserFindFirstArgs<ExtArgs>>): Prisma__StaffUserClient<$Result.GetResult<Prisma.$StaffUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUserFindFirstOrThrowArgs} args - Arguments to find a StaffUser
     * @example
     * // Get one StaffUser
     * const staffUser = await prisma.staffUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffUserFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffUserClient<$Result.GetResult<Prisma.$StaffUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StaffUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaffUsers
     * const staffUsers = await prisma.staffUser.findMany()
     * 
     * // Get first 10 StaffUsers
     * const staffUsers = await prisma.staffUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffUserWithIdOnly = await prisma.staffUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffUserFindManyArgs>(args?: SelectSubset<T, StaffUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StaffUser.
     * @param {StaffUserCreateArgs} args - Arguments to create a StaffUser.
     * @example
     * // Create one StaffUser
     * const StaffUser = await prisma.staffUser.create({
     *   data: {
     *     // ... data to create a StaffUser
     *   }
     * })
     * 
     */
    create<T extends StaffUserCreateArgs>(args: SelectSubset<T, StaffUserCreateArgs<ExtArgs>>): Prisma__StaffUserClient<$Result.GetResult<Prisma.$StaffUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StaffUsers.
     * @param {StaffUserCreateManyArgs} args - Arguments to create many StaffUsers.
     * @example
     * // Create many StaffUsers
     * const staffUser = await prisma.staffUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffUserCreateManyArgs>(args?: SelectSubset<T, StaffUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaffUsers and returns the data saved in the database.
     * @param {StaffUserCreateManyAndReturnArgs} args - Arguments to create many StaffUsers.
     * @example
     * // Create many StaffUsers
     * const staffUser = await prisma.staffUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaffUsers and only return the `id`
     * const staffUserWithIdOnly = await prisma.staffUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffUserCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StaffUser.
     * @param {StaffUserDeleteArgs} args - Arguments to delete one StaffUser.
     * @example
     * // Delete one StaffUser
     * const StaffUser = await prisma.staffUser.delete({
     *   where: {
     *     // ... filter to delete one StaffUser
     *   }
     * })
     * 
     */
    delete<T extends StaffUserDeleteArgs>(args: SelectSubset<T, StaffUserDeleteArgs<ExtArgs>>): Prisma__StaffUserClient<$Result.GetResult<Prisma.$StaffUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StaffUser.
     * @param {StaffUserUpdateArgs} args - Arguments to update one StaffUser.
     * @example
     * // Update one StaffUser
     * const staffUser = await prisma.staffUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffUserUpdateArgs>(args: SelectSubset<T, StaffUserUpdateArgs<ExtArgs>>): Prisma__StaffUserClient<$Result.GetResult<Prisma.$StaffUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StaffUsers.
     * @param {StaffUserDeleteManyArgs} args - Arguments to filter StaffUsers to delete.
     * @example
     * // Delete a few StaffUsers
     * const { count } = await prisma.staffUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffUserDeleteManyArgs>(args?: SelectSubset<T, StaffUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaffUsers
     * const staffUser = await prisma.staffUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffUserUpdateManyArgs>(args: SelectSubset<T, StaffUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffUsers and returns the data updated in the database.
     * @param {StaffUserUpdateManyAndReturnArgs} args - Arguments to update many StaffUsers.
     * @example
     * // Update many StaffUsers
     * const staffUser = await prisma.staffUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StaffUsers and only return the `id`
     * const staffUserWithIdOnly = await prisma.staffUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends StaffUserUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StaffUser.
     * @param {StaffUserUpsertArgs} args - Arguments to update or create a StaffUser.
     * @example
     * // Update or create a StaffUser
     * const staffUser = await prisma.staffUser.upsert({
     *   create: {
     *     // ... data to create a StaffUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaffUser we want to update
     *   }
     * })
     */
    upsert<T extends StaffUserUpsertArgs>(args: SelectSubset<T, StaffUserUpsertArgs<ExtArgs>>): Prisma__StaffUserClient<$Result.GetResult<Prisma.$StaffUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StaffUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUserCountArgs} args - Arguments to filter StaffUsers to count.
     * @example
     * // Count the number of StaffUsers
     * const count = await prisma.staffUser.count({
     *   where: {
     *     // ... the filter for the StaffUsers we want to count
     *   }
     * })
    **/
    count<T extends StaffUserCountArgs>(
      args?: Subset<T, StaffUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaffUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaffUserAggregateArgs>(args: Subset<T, StaffUserAggregateArgs>): Prisma.PrismaPromise<GetStaffUserAggregateType<T>>

    /**
     * Group by StaffUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUserGroupByArgs} args - Group by arguments.
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
      T extends StaffUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffUserGroupByArgs['orderBy'] }
        : { orderBy?: StaffUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StaffUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StaffUser model
   */
  readonly fields: StaffUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StaffUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    audits<T extends StaffUser$auditsArgs<ExtArgs> = {}>(args?: Subset<T, StaffUser$auditsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the StaffUser model
   */
  interface StaffUserFieldRefs {
    readonly id: FieldRef<"StaffUser", 'String'>
    readonly email: FieldRef<"StaffUser", 'String'>
    readonly passwordHash: FieldRef<"StaffUser", 'String'>
    readonly fullName: FieldRef<"StaffUser", 'String'>
    readonly role: FieldRef<"StaffUser", 'StaffRole'>
    readonly active: FieldRef<"StaffUser", 'Boolean'>
    readonly createdAt: FieldRef<"StaffUser", 'DateTime'>
    readonly updatedAt: FieldRef<"StaffUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StaffUser findUnique
   */
  export type StaffUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffUser
     */
    select?: StaffUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffUser
     */
    omit?: StaffUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffUserInclude<ExtArgs> | null
    /**
     * Filter, which StaffUser to fetch.
     */
    where: StaffUserWhereUniqueInput
  }

  /**
   * StaffUser findUniqueOrThrow
   */
  export type StaffUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffUser
     */
    select?: StaffUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffUser
     */
    omit?: StaffUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffUserInclude<ExtArgs> | null
    /**
     * Filter, which StaffUser to fetch.
     */
    where: StaffUserWhereUniqueInput
  }

  /**
   * StaffUser findFirst
   */
  export type StaffUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffUser
     */
    select?: StaffUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffUser
     */
    omit?: StaffUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffUserInclude<ExtArgs> | null
    /**
     * Filter, which StaffUser to fetch.
     */
    where?: StaffUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffUsers to fetch.
     */
    orderBy?: StaffUserOrderByWithRelationInput | StaffUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffUsers.
     */
    cursor?: StaffUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffUsers.
     */
    distinct?: StaffUserScalarFieldEnum | StaffUserScalarFieldEnum[]
  }

  /**
   * StaffUser findFirstOrThrow
   */
  export type StaffUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffUser
     */
    select?: StaffUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffUser
     */
    omit?: StaffUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffUserInclude<ExtArgs> | null
    /**
     * Filter, which StaffUser to fetch.
     */
    where?: StaffUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffUsers to fetch.
     */
    orderBy?: StaffUserOrderByWithRelationInput | StaffUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffUsers.
     */
    cursor?: StaffUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffUsers.
     */
    distinct?: StaffUserScalarFieldEnum | StaffUserScalarFieldEnum[]
  }

  /**
   * StaffUser findMany
   */
  export type StaffUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffUser
     */
    select?: StaffUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffUser
     */
    omit?: StaffUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffUserInclude<ExtArgs> | null
    /**
     * Filter, which StaffUsers to fetch.
     */
    where?: StaffUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffUsers to fetch.
     */
    orderBy?: StaffUserOrderByWithRelationInput | StaffUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StaffUsers.
     */
    cursor?: StaffUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffUsers.
     */
    skip?: number
    distinct?: StaffUserScalarFieldEnum | StaffUserScalarFieldEnum[]
  }

  /**
   * StaffUser create
   */
  export type StaffUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffUser
     */
    select?: StaffUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffUser
     */
    omit?: StaffUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffUserInclude<ExtArgs> | null
    /**
     * The data needed to create a StaffUser.
     */
    data: XOR<StaffUserCreateInput, StaffUserUncheckedCreateInput>
  }

  /**
   * StaffUser createMany
   */
  export type StaffUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaffUsers.
     */
    data: StaffUserCreateManyInput | StaffUserCreateManyInput[]
  }

  /**
   * StaffUser createManyAndReturn
   */
  export type StaffUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffUser
     */
    select?: StaffUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffUser
     */
    omit?: StaffUserOmit<ExtArgs> | null
    /**
     * The data used to create many StaffUsers.
     */
    data: StaffUserCreateManyInput | StaffUserCreateManyInput[]
  }

  /**
   * StaffUser update
   */
  export type StaffUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffUser
     */
    select?: StaffUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffUser
     */
    omit?: StaffUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffUserInclude<ExtArgs> | null
    /**
     * The data needed to update a StaffUser.
     */
    data: XOR<StaffUserUpdateInput, StaffUserUncheckedUpdateInput>
    /**
     * Choose, which StaffUser to update.
     */
    where: StaffUserWhereUniqueInput
  }

  /**
   * StaffUser updateMany
   */
  export type StaffUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StaffUsers.
     */
    data: XOR<StaffUserUpdateManyMutationInput, StaffUserUncheckedUpdateManyInput>
    /**
     * Filter which StaffUsers to update
     */
    where?: StaffUserWhereInput
    /**
     * Limit how many StaffUsers to update.
     */
    limit?: number
  }

  /**
   * StaffUser updateManyAndReturn
   */
  export type StaffUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffUser
     */
    select?: StaffUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffUser
     */
    omit?: StaffUserOmit<ExtArgs> | null
    /**
     * The data used to update StaffUsers.
     */
    data: XOR<StaffUserUpdateManyMutationInput, StaffUserUncheckedUpdateManyInput>
    /**
     * Filter which StaffUsers to update
     */
    where?: StaffUserWhereInput
    /**
     * Limit how many StaffUsers to update.
     */
    limit?: number
  }

  /**
   * StaffUser upsert
   */
  export type StaffUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffUser
     */
    select?: StaffUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffUser
     */
    omit?: StaffUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffUserInclude<ExtArgs> | null
    /**
     * The filter to search for the StaffUser to update in case it exists.
     */
    where: StaffUserWhereUniqueInput
    /**
     * In case the StaffUser found by the `where` argument doesn't exist, create a new StaffUser with this data.
     */
    create: XOR<StaffUserCreateInput, StaffUserUncheckedCreateInput>
    /**
     * In case the StaffUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffUserUpdateInput, StaffUserUncheckedUpdateInput>
  }

  /**
   * StaffUser delete
   */
  export type StaffUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffUser
     */
    select?: StaffUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffUser
     */
    omit?: StaffUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffUserInclude<ExtArgs> | null
    /**
     * Filter which StaffUser to delete.
     */
    where: StaffUserWhereUniqueInput
  }

  /**
   * StaffUser deleteMany
   */
  export type StaffUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffUsers to delete
     */
    where?: StaffUserWhereInput
    /**
     * Limit how many StaffUsers to delete.
     */
    limit?: number
  }

  /**
   * StaffUser.audits
   */
  export type StaffUser$auditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * StaffUser without action
   */
  export type StaffUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffUser
     */
    select?: StaffUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffUser
     */
    omit?: StaffUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffUserInclude<ExtArgs> | null
  }


  /**
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationAvgAggregateOutputType = {
    amount: number | null
  }

  export type ReservationSumAggregateOutputType = {
    amount: number | null
  }

  export type ReservationMinAggregateOutputType = {
    id: string | null
    clubId: string | null
    courtId: string | null
    status: $Enums.ReservationStatus | null
    startAt: Date | null
    endAt: Date | null
    holdExpiresAt: Date | null
    customerName: string | null
    customerWhatsapp: string | null
    customerEmail: string | null
    note: string | null
    amount: number | null
    createdByKind: $Enums.CreatedByKind | null
    createdByStaffId: string | null
    manageTokenHash: string | null
    manageTokenLastRotatedAt: Date | null
    canceledAt: Date | null
    canceledReason: string | null
    noShowMarkedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationMaxAggregateOutputType = {
    id: string | null
    clubId: string | null
    courtId: string | null
    status: $Enums.ReservationStatus | null
    startAt: Date | null
    endAt: Date | null
    holdExpiresAt: Date | null
    customerName: string | null
    customerWhatsapp: string | null
    customerEmail: string | null
    note: string | null
    amount: number | null
    createdByKind: $Enums.CreatedByKind | null
    createdByStaffId: string | null
    manageTokenHash: string | null
    manageTokenLastRotatedAt: Date | null
    canceledAt: Date | null
    canceledReason: string | null
    noShowMarkedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationCountAggregateOutputType = {
    id: number
    clubId: number
    courtId: number
    status: number
    startAt: number
    endAt: number
    holdExpiresAt: number
    customerName: number
    customerWhatsapp: number
    customerEmail: number
    note: number
    amount: number
    createdByKind: number
    createdByStaffId: number
    manageTokenHash: number
    manageTokenLastRotatedAt: number
    canceledAt: number
    canceledReason: number
    noShowMarkedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    amount?: true
  }

  export type ReservationSumAggregateInputType = {
    amount?: true
  }

  export type ReservationMinAggregateInputType = {
    id?: true
    clubId?: true
    courtId?: true
    status?: true
    startAt?: true
    endAt?: true
    holdExpiresAt?: true
    customerName?: true
    customerWhatsapp?: true
    customerEmail?: true
    note?: true
    amount?: true
    createdByKind?: true
    createdByStaffId?: true
    manageTokenHash?: true
    manageTokenLastRotatedAt?: true
    canceledAt?: true
    canceledReason?: true
    noShowMarkedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationMaxAggregateInputType = {
    id?: true
    clubId?: true
    courtId?: true
    status?: true
    startAt?: true
    endAt?: true
    holdExpiresAt?: true
    customerName?: true
    customerWhatsapp?: true
    customerEmail?: true
    note?: true
    amount?: true
    createdByKind?: true
    createdByStaffId?: true
    manageTokenHash?: true
    manageTokenLastRotatedAt?: true
    canceledAt?: true
    canceledReason?: true
    noShowMarkedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationCountAggregateInputType = {
    id?: true
    clubId?: true
    courtId?: true
    status?: true
    startAt?: true
    endAt?: true
    holdExpiresAt?: true
    customerName?: true
    customerWhatsapp?: true
    customerEmail?: true
    note?: true
    amount?: true
    createdByKind?: true
    createdByStaffId?: true
    manageTokenHash?: true
    manageTokenLastRotatedAt?: true
    canceledAt?: true
    canceledReason?: true
    noShowMarkedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _avg?: ReservationAvgAggregateInputType
    _sum?: ReservationSumAggregateInputType
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    id: string
    clubId: string
    courtId: string
    status: $Enums.ReservationStatus
    startAt: Date
    endAt: Date
    holdExpiresAt: Date | null
    customerName: string
    customerWhatsapp: string
    customerEmail: string | null
    note: string | null
    amount: number
    createdByKind: $Enums.CreatedByKind
    createdByStaffId: string | null
    manageTokenHash: string
    manageTokenLastRotatedAt: Date
    canceledAt: Date | null
    canceledReason: string | null
    noShowMarkedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clubId?: boolean
    courtId?: boolean
    status?: boolean
    startAt?: boolean
    endAt?: boolean
    holdExpiresAt?: boolean
    customerName?: boolean
    customerWhatsapp?: boolean
    customerEmail?: boolean
    note?: boolean
    amount?: boolean
    createdByKind?: boolean
    createdByStaffId?: boolean
    manageTokenHash?: boolean
    manageTokenLastRotatedAt?: boolean
    canceledAt?: boolean
    canceledReason?: boolean
    noShowMarkedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    club?: boolean | ClubDefaultArgs<ExtArgs>
    court?: boolean | CourtDefaultArgs<ExtArgs>
    payments?: boolean | Reservation$paymentsArgs<ExtArgs>
    messages?: boolean | Reservation$messagesArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clubId?: boolean
    courtId?: boolean
    status?: boolean
    startAt?: boolean
    endAt?: boolean
    holdExpiresAt?: boolean
    customerName?: boolean
    customerWhatsapp?: boolean
    customerEmail?: boolean
    note?: boolean
    amount?: boolean
    createdByKind?: boolean
    createdByStaffId?: boolean
    manageTokenHash?: boolean
    manageTokenLastRotatedAt?: boolean
    canceledAt?: boolean
    canceledReason?: boolean
    noShowMarkedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    club?: boolean | ClubDefaultArgs<ExtArgs>
    court?: boolean | CourtDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clubId?: boolean
    courtId?: boolean
    status?: boolean
    startAt?: boolean
    endAt?: boolean
    holdExpiresAt?: boolean
    customerName?: boolean
    customerWhatsapp?: boolean
    customerEmail?: boolean
    note?: boolean
    amount?: boolean
    createdByKind?: boolean
    createdByStaffId?: boolean
    manageTokenHash?: boolean
    manageTokenLastRotatedAt?: boolean
    canceledAt?: boolean
    canceledReason?: boolean
    noShowMarkedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    club?: boolean | ClubDefaultArgs<ExtArgs>
    court?: boolean | CourtDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectScalar = {
    id?: boolean
    clubId?: boolean
    courtId?: boolean
    status?: boolean
    startAt?: boolean
    endAt?: boolean
    holdExpiresAt?: boolean
    customerName?: boolean
    customerWhatsapp?: boolean
    customerEmail?: boolean
    note?: boolean
    amount?: boolean
    createdByKind?: boolean
    createdByStaffId?: boolean
    manageTokenHash?: boolean
    manageTokenLastRotatedAt?: boolean
    canceledAt?: boolean
    canceledReason?: boolean
    noShowMarkedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clubId" | "courtId" | "status" | "startAt" | "endAt" | "holdExpiresAt" | "customerName" | "customerWhatsapp" | "customerEmail" | "note" | "amount" | "createdByKind" | "createdByStaffId" | "manageTokenHash" | "manageTokenLastRotatedAt" | "canceledAt" | "canceledReason" | "noShowMarkedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["reservation"]>
  export type ReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | ClubDefaultArgs<ExtArgs>
    court?: boolean | CourtDefaultArgs<ExtArgs>
    payments?: boolean | Reservation$paymentsArgs<ExtArgs>
    messages?: boolean | Reservation$messagesArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | ClubDefaultArgs<ExtArgs>
    court?: boolean | CourtDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | ClubDefaultArgs<ExtArgs>
    court?: boolean | CourtDefaultArgs<ExtArgs>
  }

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      club: Prisma.$ClubPayload<ExtArgs>
      court: Prisma.$CourtPayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      messages: Prisma.$MessageLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clubId: string
      courtId: string
      status: $Enums.ReservationStatus
      startAt: Date
      endAt: Date
      holdExpiresAt: Date | null
      customerName: string
      customerWhatsapp: string
      customerEmail: string | null
      note: string | null
      amount: number
      createdByKind: $Enums.CreatedByKind
      createdByStaffId: string | null
      manageTokenHash: string
      manageTokenLastRotatedAt: Date
      canceledAt: Date | null
      canceledReason: string | null
      noShowMarkedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationFindUniqueArgs>(args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationFindFirstArgs>(args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationWithIdOnly = await prisma.reservation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationFindManyArgs>(args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
     */
    create<T extends ReservationCreateArgs>(args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservations.
     * @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationCreateManyArgs>(args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservations and returns the data saved in the database.
     * @param {ReservationCreateManyAndReturnArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
     */
    delete<T extends ReservationDeleteArgs>(args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationUpdateArgs>(args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationDeleteManyArgs>(args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationUpdateManyArgs>(args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations and returns the data updated in the database.
     * @param {ReservationUpdateManyAndReturnArgs} args - Arguments to update many Reservations.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReservationUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
     */
    upsert<T extends ReservationUpsertArgs>(args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
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
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    club<T extends ClubDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClubDefaultArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    court<T extends CourtDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourtDefaultArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Reservation$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Reservation$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Reservation model
   */
  interface ReservationFieldRefs {
    readonly id: FieldRef<"Reservation", 'String'>
    readonly clubId: FieldRef<"Reservation", 'String'>
    readonly courtId: FieldRef<"Reservation", 'String'>
    readonly status: FieldRef<"Reservation", 'ReservationStatus'>
    readonly startAt: FieldRef<"Reservation", 'DateTime'>
    readonly endAt: FieldRef<"Reservation", 'DateTime'>
    readonly holdExpiresAt: FieldRef<"Reservation", 'DateTime'>
    readonly customerName: FieldRef<"Reservation", 'String'>
    readonly customerWhatsapp: FieldRef<"Reservation", 'String'>
    readonly customerEmail: FieldRef<"Reservation", 'String'>
    readonly note: FieldRef<"Reservation", 'String'>
    readonly amount: FieldRef<"Reservation", 'Int'>
    readonly createdByKind: FieldRef<"Reservation", 'CreatedByKind'>
    readonly createdByStaffId: FieldRef<"Reservation", 'String'>
    readonly manageTokenHash: FieldRef<"Reservation", 'String'>
    readonly manageTokenLastRotatedAt: FieldRef<"Reservation", 'DateTime'>
    readonly canceledAt: FieldRef<"Reservation", 'DateTime'>
    readonly canceledReason: FieldRef<"Reservation", 'String'>
    readonly noShowMarkedAt: FieldRef<"Reservation", 'DateTime'>
    readonly createdAt: FieldRef<"Reservation", 'DateTime'>
    readonly updatedAt: FieldRef<"Reservation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }

  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
  }

  /**
   * Reservation createManyAndReturn
   */
  export type ReservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
  }

  /**
   * Reservation updateManyAndReturn
   */
  export type ReservationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }

  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to delete.
     */
    limit?: number
  }

  /**
   * Reservation.payments
   */
  export type Reservation$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Reservation.messages
   */
  export type Reservation$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    where?: MessageLogWhereInput
    orderBy?: MessageLogOrderByWithRelationInput | MessageLogOrderByWithRelationInput[]
    cursor?: MessageLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageLogScalarFieldEnum | MessageLogScalarFieldEnum[]
  }

  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
  }


  /**
   * Model Block
   */

  export type AggregateBlock = {
    _count: BlockCountAggregateOutputType | null
    _min: BlockMinAggregateOutputType | null
    _max: BlockMaxAggregateOutputType | null
  }

  export type BlockMinAggregateOutputType = {
    id: string | null
    clubId: string | null
    courtId: string | null
    startAt: Date | null
    endAt: Date | null
    reason: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlockMaxAggregateOutputType = {
    id: string | null
    clubId: string | null
    courtId: string | null
    startAt: Date | null
    endAt: Date | null
    reason: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlockCountAggregateOutputType = {
    id: number
    clubId: number
    courtId: number
    startAt: number
    endAt: number
    reason: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlockMinAggregateInputType = {
    id?: true
    clubId?: true
    courtId?: true
    startAt?: true
    endAt?: true
    reason?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlockMaxAggregateInputType = {
    id?: true
    clubId?: true
    courtId?: true
    startAt?: true
    endAt?: true
    reason?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlockCountAggregateInputType = {
    id?: true
    clubId?: true
    courtId?: true
    startAt?: true
    endAt?: true
    reason?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Block to aggregate.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blocks
    **/
    _count?: true | BlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockMaxAggregateInputType
  }

  export type GetBlockAggregateType<T extends BlockAggregateArgs> = {
        [P in keyof T & keyof AggregateBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlock[P]>
      : GetScalarType<T[P], AggregateBlock[P]>
  }




  export type BlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockWhereInput
    orderBy?: BlockOrderByWithAggregationInput | BlockOrderByWithAggregationInput[]
    by: BlockScalarFieldEnum[] | BlockScalarFieldEnum
    having?: BlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockCountAggregateInputType | true
    _min?: BlockMinAggregateInputType
    _max?: BlockMaxAggregateInputType
  }

  export type BlockGroupByOutputType = {
    id: string
    clubId: string
    courtId: string
    startAt: Date
    endAt: Date
    reason: string
    createdById: string | null
    createdAt: Date
    updatedAt: Date
    _count: BlockCountAggregateOutputType | null
    _min: BlockMinAggregateOutputType | null
    _max: BlockMaxAggregateOutputType | null
  }

  type GetBlockGroupByPayload<T extends BlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockGroupByOutputType[P]>
            : GetScalarType<T[P], BlockGroupByOutputType[P]>
        }
      >
    >


  export type BlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clubId?: boolean
    courtId?: boolean
    startAt?: boolean
    endAt?: boolean
    reason?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    club?: boolean | ClubDefaultArgs<ExtArgs>
    court?: boolean | CourtDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["block"]>

  export type BlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clubId?: boolean
    courtId?: boolean
    startAt?: boolean
    endAt?: boolean
    reason?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    club?: boolean | ClubDefaultArgs<ExtArgs>
    court?: boolean | CourtDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["block"]>

  export type BlockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clubId?: boolean
    courtId?: boolean
    startAt?: boolean
    endAt?: boolean
    reason?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    club?: boolean | ClubDefaultArgs<ExtArgs>
    court?: boolean | CourtDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["block"]>

  export type BlockSelectScalar = {
    id?: boolean
    clubId?: boolean
    courtId?: boolean
    startAt?: boolean
    endAt?: boolean
    reason?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clubId" | "courtId" | "startAt" | "endAt" | "reason" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["block"]>
  export type BlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | ClubDefaultArgs<ExtArgs>
    court?: boolean | CourtDefaultArgs<ExtArgs>
  }
  export type BlockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | ClubDefaultArgs<ExtArgs>
    court?: boolean | CourtDefaultArgs<ExtArgs>
  }
  export type BlockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | ClubDefaultArgs<ExtArgs>
    court?: boolean | CourtDefaultArgs<ExtArgs>
  }

  export type $BlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Block"
    objects: {
      club: Prisma.$ClubPayload<ExtArgs>
      court: Prisma.$CourtPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clubId: string
      courtId: string
      startAt: Date
      endAt: Date
      reason: string
      createdById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["block"]>
    composites: {}
  }

  type BlockGetPayload<S extends boolean | null | undefined | BlockDefaultArgs> = $Result.GetResult<Prisma.$BlockPayload, S>

  type BlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlockCountAggregateInputType | true
    }

  export interface BlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Block'], meta: { name: 'Block' } }
    /**
     * Find zero or one Block that matches the filter.
     * @param {BlockFindUniqueArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlockFindUniqueArgs>(args: SelectSubset<T, BlockFindUniqueArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Block that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlockFindUniqueOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlockFindUniqueOrThrowArgs>(args: SelectSubset<T, BlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Block that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlockFindFirstArgs>(args?: SelectSubset<T, BlockFindFirstArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Block that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlockFindFirstOrThrowArgs>(args?: SelectSubset<T, BlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blocks
     * const blocks = await prisma.block.findMany()
     * 
     * // Get first 10 Blocks
     * const blocks = await prisma.block.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockWithIdOnly = await prisma.block.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlockFindManyArgs>(args?: SelectSubset<T, BlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Block.
     * @param {BlockCreateArgs} args - Arguments to create a Block.
     * @example
     * // Create one Block
     * const Block = await prisma.block.create({
     *   data: {
     *     // ... data to create a Block
     *   }
     * })
     * 
     */
    create<T extends BlockCreateArgs>(args: SelectSubset<T, BlockCreateArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blocks.
     * @param {BlockCreateManyArgs} args - Arguments to create many Blocks.
     * @example
     * // Create many Blocks
     * const block = await prisma.block.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlockCreateManyArgs>(args?: SelectSubset<T, BlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blocks and returns the data saved in the database.
     * @param {BlockCreateManyAndReturnArgs} args - Arguments to create many Blocks.
     * @example
     * // Create many Blocks
     * const block = await prisma.block.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blocks and only return the `id`
     * const blockWithIdOnly = await prisma.block.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlockCreateManyAndReturnArgs>(args?: SelectSubset<T, BlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Block.
     * @param {BlockDeleteArgs} args - Arguments to delete one Block.
     * @example
     * // Delete one Block
     * const Block = await prisma.block.delete({
     *   where: {
     *     // ... filter to delete one Block
     *   }
     * })
     * 
     */
    delete<T extends BlockDeleteArgs>(args: SelectSubset<T, BlockDeleteArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Block.
     * @param {BlockUpdateArgs} args - Arguments to update one Block.
     * @example
     * // Update one Block
     * const block = await prisma.block.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlockUpdateArgs>(args: SelectSubset<T, BlockUpdateArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blocks.
     * @param {BlockDeleteManyArgs} args - Arguments to filter Blocks to delete.
     * @example
     * // Delete a few Blocks
     * const { count } = await prisma.block.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlockDeleteManyArgs>(args?: SelectSubset<T, BlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blocks
     * const block = await prisma.block.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlockUpdateManyArgs>(args: SelectSubset<T, BlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blocks and returns the data updated in the database.
     * @param {BlockUpdateManyAndReturnArgs} args - Arguments to update many Blocks.
     * @example
     * // Update many Blocks
     * const block = await prisma.block.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blocks and only return the `id`
     * const blockWithIdOnly = await prisma.block.updateManyAndReturn({
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
    updateManyAndReturn<T extends BlockUpdateManyAndReturnArgs>(args: SelectSubset<T, BlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Block.
     * @param {BlockUpsertArgs} args - Arguments to update or create a Block.
     * @example
     * // Update or create a Block
     * const block = await prisma.block.upsert({
     *   create: {
     *     // ... data to create a Block
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Block we want to update
     *   }
     * })
     */
    upsert<T extends BlockUpsertArgs>(args: SelectSubset<T, BlockUpsertArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCountArgs} args - Arguments to filter Blocks to count.
     * @example
     * // Count the number of Blocks
     * const count = await prisma.block.count({
     *   where: {
     *     // ... the filter for the Blocks we want to count
     *   }
     * })
    **/
    count<T extends BlockCountArgs>(
      args?: Subset<T, BlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlockAggregateArgs>(args: Subset<T, BlockAggregateArgs>): Prisma.PrismaPromise<GetBlockAggregateType<T>>

    /**
     * Group by Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockGroupByArgs} args - Group by arguments.
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
      T extends BlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockGroupByArgs['orderBy'] }
        : { orderBy?: BlockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Block model
   */
  readonly fields: BlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Block.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    club<T extends ClubDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClubDefaultArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    court<T extends CourtDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourtDefaultArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Block model
   */
  interface BlockFieldRefs {
    readonly id: FieldRef<"Block", 'String'>
    readonly clubId: FieldRef<"Block", 'String'>
    readonly courtId: FieldRef<"Block", 'String'>
    readonly startAt: FieldRef<"Block", 'DateTime'>
    readonly endAt: FieldRef<"Block", 'DateTime'>
    readonly reason: FieldRef<"Block", 'String'>
    readonly createdById: FieldRef<"Block", 'String'>
    readonly createdAt: FieldRef<"Block", 'DateTime'>
    readonly updatedAt: FieldRef<"Block", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Block findUnique
   */
  export type BlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block findUniqueOrThrow
   */
  export type BlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block findFirst
   */
  export type BlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Block findFirstOrThrow
   */
  export type BlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Block findMany
   */
  export type BlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Blocks to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Block create
   */
  export type BlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The data needed to create a Block.
     */
    data: XOR<BlockCreateInput, BlockUncheckedCreateInput>
  }

  /**
   * Block createMany
   */
  export type BlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blocks.
     */
    data: BlockCreateManyInput | BlockCreateManyInput[]
  }

  /**
   * Block createManyAndReturn
   */
  export type BlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * The data used to create many Blocks.
     */
    data: BlockCreateManyInput | BlockCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Block update
   */
  export type BlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The data needed to update a Block.
     */
    data: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>
    /**
     * Choose, which Block to update.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block updateMany
   */
  export type BlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blocks.
     */
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyInput>
    /**
     * Filter which Blocks to update
     */
    where?: BlockWhereInput
    /**
     * Limit how many Blocks to update.
     */
    limit?: number
  }

  /**
   * Block updateManyAndReturn
   */
  export type BlockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * The data used to update Blocks.
     */
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyInput>
    /**
     * Filter which Blocks to update
     */
    where?: BlockWhereInput
    /**
     * Limit how many Blocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Block upsert
   */
  export type BlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The filter to search for the Block to update in case it exists.
     */
    where: BlockWhereUniqueInput
    /**
     * In case the Block found by the `where` argument doesn't exist, create a new Block with this data.
     */
    create: XOR<BlockCreateInput, BlockUncheckedCreateInput>
    /**
     * In case the Block was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>
  }

  /**
   * Block delete
   */
  export type BlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter which Block to delete.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block deleteMany
   */
  export type BlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blocks to delete
     */
    where?: BlockWhereInput
    /**
     * Limit how many Blocks to delete.
     */
    limit?: number
  }

  /**
   * Block without action
   */
  export type BlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
  }


  /**
   * Model PricingRule
   */

  export type AggregatePricingRule = {
    _count: PricingRuleCountAggregateOutputType | null
    _avg: PricingRuleAvgAggregateOutputType | null
    _sum: PricingRuleSumAggregateOutputType | null
    _min: PricingRuleMinAggregateOutputType | null
    _max: PricingRuleMaxAggregateOutputType | null
  }

  export type PricingRuleAvgAggregateOutputType = {
    dayOfWeek: number | null
    startMinute: number | null
    endMinute: number | null
    multiplier: number | null
    fixedPrice: number | null
  }

  export type PricingRuleSumAggregateOutputType = {
    dayOfWeek: number | null
    startMinute: number | null
    endMinute: number | null
    multiplier: number | null
    fixedPrice: number | null
  }

  export type PricingRuleMinAggregateOutputType = {
    id: string | null
    clubId: string | null
    courtId: string | null
    dayOfWeek: number | null
    startMinute: number | null
    endMinute: number | null
    multiplier: number | null
    fixedPrice: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PricingRuleMaxAggregateOutputType = {
    id: string | null
    clubId: string | null
    courtId: string | null
    dayOfWeek: number | null
    startMinute: number | null
    endMinute: number | null
    multiplier: number | null
    fixedPrice: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PricingRuleCountAggregateOutputType = {
    id: number
    clubId: number
    courtId: number
    dayOfWeek: number
    startMinute: number
    endMinute: number
    multiplier: number
    fixedPrice: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PricingRuleAvgAggregateInputType = {
    dayOfWeek?: true
    startMinute?: true
    endMinute?: true
    multiplier?: true
    fixedPrice?: true
  }

  export type PricingRuleSumAggregateInputType = {
    dayOfWeek?: true
    startMinute?: true
    endMinute?: true
    multiplier?: true
    fixedPrice?: true
  }

  export type PricingRuleMinAggregateInputType = {
    id?: true
    clubId?: true
    courtId?: true
    dayOfWeek?: true
    startMinute?: true
    endMinute?: true
    multiplier?: true
    fixedPrice?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PricingRuleMaxAggregateInputType = {
    id?: true
    clubId?: true
    courtId?: true
    dayOfWeek?: true
    startMinute?: true
    endMinute?: true
    multiplier?: true
    fixedPrice?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PricingRuleCountAggregateInputType = {
    id?: true
    clubId?: true
    courtId?: true
    dayOfWeek?: true
    startMinute?: true
    endMinute?: true
    multiplier?: true
    fixedPrice?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PricingRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingRule to aggregate.
     */
    where?: PricingRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingRules to fetch.
     */
    orderBy?: PricingRuleOrderByWithRelationInput | PricingRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PricingRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PricingRules
    **/
    _count?: true | PricingRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PricingRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PricingRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PricingRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PricingRuleMaxAggregateInputType
  }

  export type GetPricingRuleAggregateType<T extends PricingRuleAggregateArgs> = {
        [P in keyof T & keyof AggregatePricingRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePricingRule[P]>
      : GetScalarType<T[P], AggregatePricingRule[P]>
  }




  export type PricingRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingRuleWhereInput
    orderBy?: PricingRuleOrderByWithAggregationInput | PricingRuleOrderByWithAggregationInput[]
    by: PricingRuleScalarFieldEnum[] | PricingRuleScalarFieldEnum
    having?: PricingRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PricingRuleCountAggregateInputType | true
    _avg?: PricingRuleAvgAggregateInputType
    _sum?: PricingRuleSumAggregateInputType
    _min?: PricingRuleMinAggregateInputType
    _max?: PricingRuleMaxAggregateInputType
  }

  export type PricingRuleGroupByOutputType = {
    id: string
    clubId: string
    courtId: string | null
    dayOfWeek: number
    startMinute: number
    endMinute: number
    multiplier: number
    fixedPrice: number | null
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: PricingRuleCountAggregateOutputType | null
    _avg: PricingRuleAvgAggregateOutputType | null
    _sum: PricingRuleSumAggregateOutputType | null
    _min: PricingRuleMinAggregateOutputType | null
    _max: PricingRuleMaxAggregateOutputType | null
  }

  type GetPricingRuleGroupByPayload<T extends PricingRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PricingRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PricingRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PricingRuleGroupByOutputType[P]>
            : GetScalarType<T[P], PricingRuleGroupByOutputType[P]>
        }
      >
    >


  export type PricingRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clubId?: boolean
    courtId?: boolean
    dayOfWeek?: boolean
    startMinute?: boolean
    endMinute?: boolean
    multiplier?: boolean
    fixedPrice?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pricingRule"]>

  export type PricingRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clubId?: boolean
    courtId?: boolean
    dayOfWeek?: boolean
    startMinute?: boolean
    endMinute?: boolean
    multiplier?: boolean
    fixedPrice?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pricingRule"]>

  export type PricingRuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clubId?: boolean
    courtId?: boolean
    dayOfWeek?: boolean
    startMinute?: boolean
    endMinute?: boolean
    multiplier?: boolean
    fixedPrice?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pricingRule"]>

  export type PricingRuleSelectScalar = {
    id?: boolean
    clubId?: boolean
    courtId?: boolean
    dayOfWeek?: boolean
    startMinute?: boolean
    endMinute?: boolean
    multiplier?: boolean
    fixedPrice?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PricingRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clubId" | "courtId" | "dayOfWeek" | "startMinute" | "endMinute" | "multiplier" | "fixedPrice" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["pricingRule"]>
  export type PricingRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }
  export type PricingRuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }
  export type PricingRuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }

  export type $PricingRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PricingRule"
    objects: {
      club: Prisma.$ClubPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clubId: string
      courtId: string | null
      dayOfWeek: number
      startMinute: number
      endMinute: number
      multiplier: number
      fixedPrice: number | null
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pricingRule"]>
    composites: {}
  }

  type PricingRuleGetPayload<S extends boolean | null | undefined | PricingRuleDefaultArgs> = $Result.GetResult<Prisma.$PricingRulePayload, S>

  type PricingRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PricingRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PricingRuleCountAggregateInputType | true
    }

  export interface PricingRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PricingRule'], meta: { name: 'PricingRule' } }
    /**
     * Find zero or one PricingRule that matches the filter.
     * @param {PricingRuleFindUniqueArgs} args - Arguments to find a PricingRule
     * @example
     * // Get one PricingRule
     * const pricingRule = await prisma.pricingRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PricingRuleFindUniqueArgs>(args: SelectSubset<T, PricingRuleFindUniqueArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PricingRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PricingRuleFindUniqueOrThrowArgs} args - Arguments to find a PricingRule
     * @example
     * // Get one PricingRule
     * const pricingRule = await prisma.pricingRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PricingRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, PricingRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PricingRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleFindFirstArgs} args - Arguments to find a PricingRule
     * @example
     * // Get one PricingRule
     * const pricingRule = await prisma.pricingRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PricingRuleFindFirstArgs>(args?: SelectSubset<T, PricingRuleFindFirstArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PricingRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleFindFirstOrThrowArgs} args - Arguments to find a PricingRule
     * @example
     * // Get one PricingRule
     * const pricingRule = await prisma.pricingRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PricingRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, PricingRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PricingRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PricingRules
     * const pricingRules = await prisma.pricingRule.findMany()
     * 
     * // Get first 10 PricingRules
     * const pricingRules = await prisma.pricingRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pricingRuleWithIdOnly = await prisma.pricingRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PricingRuleFindManyArgs>(args?: SelectSubset<T, PricingRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PricingRule.
     * @param {PricingRuleCreateArgs} args - Arguments to create a PricingRule.
     * @example
     * // Create one PricingRule
     * const PricingRule = await prisma.pricingRule.create({
     *   data: {
     *     // ... data to create a PricingRule
     *   }
     * })
     * 
     */
    create<T extends PricingRuleCreateArgs>(args: SelectSubset<T, PricingRuleCreateArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PricingRules.
     * @param {PricingRuleCreateManyArgs} args - Arguments to create many PricingRules.
     * @example
     * // Create many PricingRules
     * const pricingRule = await prisma.pricingRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PricingRuleCreateManyArgs>(args?: SelectSubset<T, PricingRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PricingRules and returns the data saved in the database.
     * @param {PricingRuleCreateManyAndReturnArgs} args - Arguments to create many PricingRules.
     * @example
     * // Create many PricingRules
     * const pricingRule = await prisma.pricingRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PricingRules and only return the `id`
     * const pricingRuleWithIdOnly = await prisma.pricingRule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PricingRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, PricingRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PricingRule.
     * @param {PricingRuleDeleteArgs} args - Arguments to delete one PricingRule.
     * @example
     * // Delete one PricingRule
     * const PricingRule = await prisma.pricingRule.delete({
     *   where: {
     *     // ... filter to delete one PricingRule
     *   }
     * })
     * 
     */
    delete<T extends PricingRuleDeleteArgs>(args: SelectSubset<T, PricingRuleDeleteArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PricingRule.
     * @param {PricingRuleUpdateArgs} args - Arguments to update one PricingRule.
     * @example
     * // Update one PricingRule
     * const pricingRule = await prisma.pricingRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PricingRuleUpdateArgs>(args: SelectSubset<T, PricingRuleUpdateArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PricingRules.
     * @param {PricingRuleDeleteManyArgs} args - Arguments to filter PricingRules to delete.
     * @example
     * // Delete a few PricingRules
     * const { count } = await prisma.pricingRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PricingRuleDeleteManyArgs>(args?: SelectSubset<T, PricingRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PricingRules
     * const pricingRule = await prisma.pricingRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PricingRuleUpdateManyArgs>(args: SelectSubset<T, PricingRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingRules and returns the data updated in the database.
     * @param {PricingRuleUpdateManyAndReturnArgs} args - Arguments to update many PricingRules.
     * @example
     * // Update many PricingRules
     * const pricingRule = await prisma.pricingRule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PricingRules and only return the `id`
     * const pricingRuleWithIdOnly = await prisma.pricingRule.updateManyAndReturn({
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
    updateManyAndReturn<T extends PricingRuleUpdateManyAndReturnArgs>(args: SelectSubset<T, PricingRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PricingRule.
     * @param {PricingRuleUpsertArgs} args - Arguments to update or create a PricingRule.
     * @example
     * // Update or create a PricingRule
     * const pricingRule = await prisma.pricingRule.upsert({
     *   create: {
     *     // ... data to create a PricingRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PricingRule we want to update
     *   }
     * })
     */
    upsert<T extends PricingRuleUpsertArgs>(args: SelectSubset<T, PricingRuleUpsertArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PricingRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleCountArgs} args - Arguments to filter PricingRules to count.
     * @example
     * // Count the number of PricingRules
     * const count = await prisma.pricingRule.count({
     *   where: {
     *     // ... the filter for the PricingRules we want to count
     *   }
     * })
    **/
    count<T extends PricingRuleCountArgs>(
      args?: Subset<T, PricingRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PricingRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PricingRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PricingRuleAggregateArgs>(args: Subset<T, PricingRuleAggregateArgs>): Prisma.PrismaPromise<GetPricingRuleAggregateType<T>>

    /**
     * Group by PricingRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleGroupByArgs} args - Group by arguments.
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
      T extends PricingRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PricingRuleGroupByArgs['orderBy'] }
        : { orderBy?: PricingRuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PricingRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPricingRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PricingRule model
   */
  readonly fields: PricingRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PricingRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PricingRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    club<T extends ClubDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClubDefaultArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PricingRule model
   */
  interface PricingRuleFieldRefs {
    readonly id: FieldRef<"PricingRule", 'String'>
    readonly clubId: FieldRef<"PricingRule", 'String'>
    readonly courtId: FieldRef<"PricingRule", 'String'>
    readonly dayOfWeek: FieldRef<"PricingRule", 'Int'>
    readonly startMinute: FieldRef<"PricingRule", 'Int'>
    readonly endMinute: FieldRef<"PricingRule", 'Int'>
    readonly multiplier: FieldRef<"PricingRule", 'Float'>
    readonly fixedPrice: FieldRef<"PricingRule", 'Int'>
    readonly active: FieldRef<"PricingRule", 'Boolean'>
    readonly createdAt: FieldRef<"PricingRule", 'DateTime'>
    readonly updatedAt: FieldRef<"PricingRule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PricingRule findUnique
   */
  export type PricingRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * Filter, which PricingRule to fetch.
     */
    where: PricingRuleWhereUniqueInput
  }

  /**
   * PricingRule findUniqueOrThrow
   */
  export type PricingRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * Filter, which PricingRule to fetch.
     */
    where: PricingRuleWhereUniqueInput
  }

  /**
   * PricingRule findFirst
   */
  export type PricingRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * Filter, which PricingRule to fetch.
     */
    where?: PricingRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingRules to fetch.
     */
    orderBy?: PricingRuleOrderByWithRelationInput | PricingRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingRules.
     */
    cursor?: PricingRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingRules.
     */
    distinct?: PricingRuleScalarFieldEnum | PricingRuleScalarFieldEnum[]
  }

  /**
   * PricingRule findFirstOrThrow
   */
  export type PricingRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * Filter, which PricingRule to fetch.
     */
    where?: PricingRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingRules to fetch.
     */
    orderBy?: PricingRuleOrderByWithRelationInput | PricingRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingRules.
     */
    cursor?: PricingRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingRules.
     */
    distinct?: PricingRuleScalarFieldEnum | PricingRuleScalarFieldEnum[]
  }

  /**
   * PricingRule findMany
   */
  export type PricingRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * Filter, which PricingRules to fetch.
     */
    where?: PricingRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingRules to fetch.
     */
    orderBy?: PricingRuleOrderByWithRelationInput | PricingRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PricingRules.
     */
    cursor?: PricingRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingRules.
     */
    skip?: number
    distinct?: PricingRuleScalarFieldEnum | PricingRuleScalarFieldEnum[]
  }

  /**
   * PricingRule create
   */
  export type PricingRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a PricingRule.
     */
    data: XOR<PricingRuleCreateInput, PricingRuleUncheckedCreateInput>
  }

  /**
   * PricingRule createMany
   */
  export type PricingRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PricingRules.
     */
    data: PricingRuleCreateManyInput | PricingRuleCreateManyInput[]
  }

  /**
   * PricingRule createManyAndReturn
   */
  export type PricingRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * The data used to create many PricingRules.
     */
    data: PricingRuleCreateManyInput | PricingRuleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PricingRule update
   */
  export type PricingRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a PricingRule.
     */
    data: XOR<PricingRuleUpdateInput, PricingRuleUncheckedUpdateInput>
    /**
     * Choose, which PricingRule to update.
     */
    where: PricingRuleWhereUniqueInput
  }

  /**
   * PricingRule updateMany
   */
  export type PricingRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PricingRules.
     */
    data: XOR<PricingRuleUpdateManyMutationInput, PricingRuleUncheckedUpdateManyInput>
    /**
     * Filter which PricingRules to update
     */
    where?: PricingRuleWhereInput
    /**
     * Limit how many PricingRules to update.
     */
    limit?: number
  }

  /**
   * PricingRule updateManyAndReturn
   */
  export type PricingRuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * The data used to update PricingRules.
     */
    data: XOR<PricingRuleUpdateManyMutationInput, PricingRuleUncheckedUpdateManyInput>
    /**
     * Filter which PricingRules to update
     */
    where?: PricingRuleWhereInput
    /**
     * Limit how many PricingRules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PricingRule upsert
   */
  export type PricingRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the PricingRule to update in case it exists.
     */
    where: PricingRuleWhereUniqueInput
    /**
     * In case the PricingRule found by the `where` argument doesn't exist, create a new PricingRule with this data.
     */
    create: XOR<PricingRuleCreateInput, PricingRuleUncheckedCreateInput>
    /**
     * In case the PricingRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PricingRuleUpdateInput, PricingRuleUncheckedUpdateInput>
  }

  /**
   * PricingRule delete
   */
  export type PricingRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * Filter which PricingRule to delete.
     */
    where: PricingRuleWhereUniqueInput
  }

  /**
   * PricingRule deleteMany
   */
  export type PricingRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingRules to delete
     */
    where?: PricingRuleWhereInput
    /**
     * Limit how many PricingRules to delete.
     */
    limit?: number
  }

  /**
   * PricingRule without action
   */
  export type PricingRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    reservationId: string | null
    amount: number | null
    method: string | null
    status: $Enums.PaymentStatus | null
    note: string | null
    registeredById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    reservationId: string | null
    amount: number | null
    method: string | null
    status: $Enums.PaymentStatus | null
    note: string | null
    registeredById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    reservationId: number
    amount: number
    method: number
    status: number
    note: number
    registeredById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    reservationId?: true
    amount?: true
    method?: true
    status?: true
    note?: true
    registeredById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    reservationId?: true
    amount?: true
    method?: true
    status?: true
    note?: true
    registeredById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    reservationId?: true
    amount?: true
    method?: true
    status?: true
    note?: true
    registeredById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    reservationId: string
    amount: number
    method: string
    status: $Enums.PaymentStatus
    note: string | null
    registeredById: string | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    note?: boolean
    registeredById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    note?: boolean
    registeredById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    note?: boolean
    registeredById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    reservationId?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    note?: boolean
    registeredById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reservationId" | "amount" | "method" | "status" | "note" | "registeredById" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      reservation: Prisma.$ReservationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reservationId: string
      amount: number
      method: string
      status: $Enums.PaymentStatus
      note: string | null
      registeredById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservation<T extends ReservationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservationDefaultArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly reservationId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Int'>
    readonly method: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly note: FieldRef<"Payment", 'String'>
    readonly registeredById: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    actorUserId: string | null
    entity: string | null
    entityId: string | null
    action: string | null
    beforeJson: string | null
    afterJson: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    actorUserId: string | null
    entity: string | null
    entityId: string | null
    action: string | null
    beforeJson: string | null
    afterJson: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    actorUserId: number
    entity: number
    entityId: number
    action: number
    beforeJson: number
    afterJson: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    actorUserId?: true
    entity?: true
    entityId?: true
    action?: true
    beforeJson?: true
    afterJson?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    actorUserId?: true
    entity?: true
    entityId?: true
    action?: true
    beforeJson?: true
    afterJson?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    actorUserId?: true
    entity?: true
    entityId?: true
    action?: true
    beforeJson?: true
    afterJson?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    actorUserId: string | null
    entity: string
    entityId: string
    action: string
    beforeJson: string | null
    afterJson: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorUserId?: boolean
    entity?: boolean
    entityId?: boolean
    action?: boolean
    beforeJson?: boolean
    afterJson?: boolean
    createdAt?: boolean
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorUserId?: boolean
    entity?: boolean
    entityId?: boolean
    action?: boolean
    beforeJson?: boolean
    afterJson?: boolean
    createdAt?: boolean
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorUserId?: boolean
    entity?: boolean
    entityId?: boolean
    action?: boolean
    beforeJson?: boolean
    afterJson?: boolean
    createdAt?: boolean
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    actorUserId?: boolean
    entity?: boolean
    entityId?: boolean
    action?: boolean
    beforeJson?: boolean
    afterJson?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actorUserId" | "entity" | "entityId" | "action" | "beforeJson" | "afterJson" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      actor: Prisma.$StaffUserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actorUserId: string | null
      entity: string
      entityId: string
      action: string
      beforeJson: string | null
      afterJson: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actor<T extends AuditLog$actorArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$actorArgs<ExtArgs>>): Prisma__StaffUserClient<$Result.GetResult<Prisma.$StaffUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly actorUserId: FieldRef<"AuditLog", 'String'>
    readonly entity: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly beforeJson: FieldRef<"AuditLog", 'String'>
    readonly afterJson: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog.actor
   */
  export type AuditLog$actorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffUser
     */
    select?: StaffUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffUser
     */
    omit?: StaffUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffUserInclude<ExtArgs> | null
    where?: StaffUserWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model MessageLog
   */

  export type AggregateMessageLog = {
    _count: MessageLogCountAggregateOutputType | null
    _min: MessageLogMinAggregateOutputType | null
    _max: MessageLogMaxAggregateOutputType | null
  }

  export type MessageLogMinAggregateOutputType = {
    id: string | null
    reservationId: string | null
    channel: string | null
    destination: string | null
    payload: string | null
    success: boolean | null
    createdAt: Date | null
  }

  export type MessageLogMaxAggregateOutputType = {
    id: string | null
    reservationId: string | null
    channel: string | null
    destination: string | null
    payload: string | null
    success: boolean | null
    createdAt: Date | null
  }

  export type MessageLogCountAggregateOutputType = {
    id: number
    reservationId: number
    channel: number
    destination: number
    payload: number
    success: number
    createdAt: number
    _all: number
  }


  export type MessageLogMinAggregateInputType = {
    id?: true
    reservationId?: true
    channel?: true
    destination?: true
    payload?: true
    success?: true
    createdAt?: true
  }

  export type MessageLogMaxAggregateInputType = {
    id?: true
    reservationId?: true
    channel?: true
    destination?: true
    payload?: true
    success?: true
    createdAt?: true
  }

  export type MessageLogCountAggregateInputType = {
    id?: true
    reservationId?: true
    channel?: true
    destination?: true
    payload?: true
    success?: true
    createdAt?: true
    _all?: true
  }

  export type MessageLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageLog to aggregate.
     */
    where?: MessageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLogs to fetch.
     */
    orderBy?: MessageLogOrderByWithRelationInput | MessageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageLogs
    **/
    _count?: true | MessageLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageLogMaxAggregateInputType
  }

  export type GetMessageLogAggregateType<T extends MessageLogAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageLog[P]>
      : GetScalarType<T[P], AggregateMessageLog[P]>
  }




  export type MessageLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageLogWhereInput
    orderBy?: MessageLogOrderByWithAggregationInput | MessageLogOrderByWithAggregationInput[]
    by: MessageLogScalarFieldEnum[] | MessageLogScalarFieldEnum
    having?: MessageLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageLogCountAggregateInputType | true
    _min?: MessageLogMinAggregateInputType
    _max?: MessageLogMaxAggregateInputType
  }

  export type MessageLogGroupByOutputType = {
    id: string
    reservationId: string
    channel: string
    destination: string
    payload: string
    success: boolean
    createdAt: Date
    _count: MessageLogCountAggregateOutputType | null
    _min: MessageLogMinAggregateOutputType | null
    _max: MessageLogMaxAggregateOutputType | null
  }

  type GetMessageLogGroupByPayload<T extends MessageLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageLogGroupByOutputType[P]>
            : GetScalarType<T[P], MessageLogGroupByOutputType[P]>
        }
      >
    >


  export type MessageLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    channel?: boolean
    destination?: boolean
    payload?: boolean
    success?: boolean
    createdAt?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageLog"]>

  export type MessageLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    channel?: boolean
    destination?: boolean
    payload?: boolean
    success?: boolean
    createdAt?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageLog"]>

  export type MessageLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    channel?: boolean
    destination?: boolean
    payload?: boolean
    success?: boolean
    createdAt?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageLog"]>

  export type MessageLogSelectScalar = {
    id?: boolean
    reservationId?: boolean
    channel?: boolean
    destination?: boolean
    payload?: boolean
    success?: boolean
    createdAt?: boolean
  }

  export type MessageLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reservationId" | "channel" | "destination" | "payload" | "success" | "createdAt", ExtArgs["result"]["messageLog"]>
  export type MessageLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }
  export type MessageLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }
  export type MessageLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }

  export type $MessageLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageLog"
    objects: {
      reservation: Prisma.$ReservationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reservationId: string
      channel: string
      destination: string
      payload: string
      success: boolean
      createdAt: Date
    }, ExtArgs["result"]["messageLog"]>
    composites: {}
  }

  type MessageLogGetPayload<S extends boolean | null | undefined | MessageLogDefaultArgs> = $Result.GetResult<Prisma.$MessageLogPayload, S>

  type MessageLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageLogCountAggregateInputType | true
    }

  export interface MessageLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageLog'], meta: { name: 'MessageLog' } }
    /**
     * Find zero or one MessageLog that matches the filter.
     * @param {MessageLogFindUniqueArgs} args - Arguments to find a MessageLog
     * @example
     * // Get one MessageLog
     * const messageLog = await prisma.messageLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageLogFindUniqueArgs>(args: SelectSubset<T, MessageLogFindUniqueArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageLogFindUniqueOrThrowArgs} args - Arguments to find a MessageLog
     * @example
     * // Get one MessageLog
     * const messageLog = await prisma.messageLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageLogFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogFindFirstArgs} args - Arguments to find a MessageLog
     * @example
     * // Get one MessageLog
     * const messageLog = await prisma.messageLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageLogFindFirstArgs>(args?: SelectSubset<T, MessageLogFindFirstArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogFindFirstOrThrowArgs} args - Arguments to find a MessageLog
     * @example
     * // Get one MessageLog
     * const messageLog = await prisma.messageLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageLogFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageLogs
     * const messageLogs = await prisma.messageLog.findMany()
     * 
     * // Get first 10 MessageLogs
     * const messageLogs = await prisma.messageLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageLogWithIdOnly = await prisma.messageLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageLogFindManyArgs>(args?: SelectSubset<T, MessageLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageLog.
     * @param {MessageLogCreateArgs} args - Arguments to create a MessageLog.
     * @example
     * // Create one MessageLog
     * const MessageLog = await prisma.messageLog.create({
     *   data: {
     *     // ... data to create a MessageLog
     *   }
     * })
     * 
     */
    create<T extends MessageLogCreateArgs>(args: SelectSubset<T, MessageLogCreateArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageLogs.
     * @param {MessageLogCreateManyArgs} args - Arguments to create many MessageLogs.
     * @example
     * // Create many MessageLogs
     * const messageLog = await prisma.messageLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageLogCreateManyArgs>(args?: SelectSubset<T, MessageLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageLogs and returns the data saved in the database.
     * @param {MessageLogCreateManyAndReturnArgs} args - Arguments to create many MessageLogs.
     * @example
     * // Create many MessageLogs
     * const messageLog = await prisma.messageLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageLogs and only return the `id`
     * const messageLogWithIdOnly = await prisma.messageLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageLogCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessageLog.
     * @param {MessageLogDeleteArgs} args - Arguments to delete one MessageLog.
     * @example
     * // Delete one MessageLog
     * const MessageLog = await prisma.messageLog.delete({
     *   where: {
     *     // ... filter to delete one MessageLog
     *   }
     * })
     * 
     */
    delete<T extends MessageLogDeleteArgs>(args: SelectSubset<T, MessageLogDeleteArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageLog.
     * @param {MessageLogUpdateArgs} args - Arguments to update one MessageLog.
     * @example
     * // Update one MessageLog
     * const messageLog = await prisma.messageLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageLogUpdateArgs>(args: SelectSubset<T, MessageLogUpdateArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageLogs.
     * @param {MessageLogDeleteManyArgs} args - Arguments to filter MessageLogs to delete.
     * @example
     * // Delete a few MessageLogs
     * const { count } = await prisma.messageLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageLogDeleteManyArgs>(args?: SelectSubset<T, MessageLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageLogs
     * const messageLog = await prisma.messageLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageLogUpdateManyArgs>(args: SelectSubset<T, MessageLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageLogs and returns the data updated in the database.
     * @param {MessageLogUpdateManyAndReturnArgs} args - Arguments to update many MessageLogs.
     * @example
     * // Update many MessageLogs
     * const messageLog = await prisma.messageLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessageLogs and only return the `id`
     * const messageLogWithIdOnly = await prisma.messageLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageLogUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessageLog.
     * @param {MessageLogUpsertArgs} args - Arguments to update or create a MessageLog.
     * @example
     * // Update or create a MessageLog
     * const messageLog = await prisma.messageLog.upsert({
     *   create: {
     *     // ... data to create a MessageLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageLog we want to update
     *   }
     * })
     */
    upsert<T extends MessageLogUpsertArgs>(args: SelectSubset<T, MessageLogUpsertArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogCountArgs} args - Arguments to filter MessageLogs to count.
     * @example
     * // Count the number of MessageLogs
     * const count = await prisma.messageLog.count({
     *   where: {
     *     // ... the filter for the MessageLogs we want to count
     *   }
     * })
    **/
    count<T extends MessageLogCountArgs>(
      args?: Subset<T, MessageLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageLogAggregateArgs>(args: Subset<T, MessageLogAggregateArgs>): Prisma.PrismaPromise<GetMessageLogAggregateType<T>>

    /**
     * Group by MessageLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogGroupByArgs} args - Group by arguments.
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
      T extends MessageLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageLogGroupByArgs['orderBy'] }
        : { orderBy?: MessageLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageLog model
   */
  readonly fields: MessageLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservation<T extends ReservationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservationDefaultArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MessageLog model
   */
  interface MessageLogFieldRefs {
    readonly id: FieldRef<"MessageLog", 'String'>
    readonly reservationId: FieldRef<"MessageLog", 'String'>
    readonly channel: FieldRef<"MessageLog", 'String'>
    readonly destination: FieldRef<"MessageLog", 'String'>
    readonly payload: FieldRef<"MessageLog", 'String'>
    readonly success: FieldRef<"MessageLog", 'Boolean'>
    readonly createdAt: FieldRef<"MessageLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MessageLog findUnique
   */
  export type MessageLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * Filter, which MessageLog to fetch.
     */
    where: MessageLogWhereUniqueInput
  }

  /**
   * MessageLog findUniqueOrThrow
   */
  export type MessageLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * Filter, which MessageLog to fetch.
     */
    where: MessageLogWhereUniqueInput
  }

  /**
   * MessageLog findFirst
   */
  export type MessageLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * Filter, which MessageLog to fetch.
     */
    where?: MessageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLogs to fetch.
     */
    orderBy?: MessageLogOrderByWithRelationInput | MessageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageLogs.
     */
    cursor?: MessageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageLogs.
     */
    distinct?: MessageLogScalarFieldEnum | MessageLogScalarFieldEnum[]
  }

  /**
   * MessageLog findFirstOrThrow
   */
  export type MessageLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * Filter, which MessageLog to fetch.
     */
    where?: MessageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLogs to fetch.
     */
    orderBy?: MessageLogOrderByWithRelationInput | MessageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageLogs.
     */
    cursor?: MessageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageLogs.
     */
    distinct?: MessageLogScalarFieldEnum | MessageLogScalarFieldEnum[]
  }

  /**
   * MessageLog findMany
   */
  export type MessageLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * Filter, which MessageLogs to fetch.
     */
    where?: MessageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLogs to fetch.
     */
    orderBy?: MessageLogOrderByWithRelationInput | MessageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageLogs.
     */
    cursor?: MessageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLogs.
     */
    skip?: number
    distinct?: MessageLogScalarFieldEnum | MessageLogScalarFieldEnum[]
  }

  /**
   * MessageLog create
   */
  export type MessageLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageLog.
     */
    data: XOR<MessageLogCreateInput, MessageLogUncheckedCreateInput>
  }

  /**
   * MessageLog createMany
   */
  export type MessageLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageLogs.
     */
    data: MessageLogCreateManyInput | MessageLogCreateManyInput[]
  }

  /**
   * MessageLog createManyAndReturn
   */
  export type MessageLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * The data used to create many MessageLogs.
     */
    data: MessageLogCreateManyInput | MessageLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageLog update
   */
  export type MessageLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageLog.
     */
    data: XOR<MessageLogUpdateInput, MessageLogUncheckedUpdateInput>
    /**
     * Choose, which MessageLog to update.
     */
    where: MessageLogWhereUniqueInput
  }

  /**
   * MessageLog updateMany
   */
  export type MessageLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageLogs.
     */
    data: XOR<MessageLogUpdateManyMutationInput, MessageLogUncheckedUpdateManyInput>
    /**
     * Filter which MessageLogs to update
     */
    where?: MessageLogWhereInput
    /**
     * Limit how many MessageLogs to update.
     */
    limit?: number
  }

  /**
   * MessageLog updateManyAndReturn
   */
  export type MessageLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * The data used to update MessageLogs.
     */
    data: XOR<MessageLogUpdateManyMutationInput, MessageLogUncheckedUpdateManyInput>
    /**
     * Filter which MessageLogs to update
     */
    where?: MessageLogWhereInput
    /**
     * Limit how many MessageLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageLog upsert
   */
  export type MessageLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageLog to update in case it exists.
     */
    where: MessageLogWhereUniqueInput
    /**
     * In case the MessageLog found by the `where` argument doesn't exist, create a new MessageLog with this data.
     */
    create: XOR<MessageLogCreateInput, MessageLogUncheckedCreateInput>
    /**
     * In case the MessageLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageLogUpdateInput, MessageLogUncheckedUpdateInput>
  }

  /**
   * MessageLog delete
   */
  export type MessageLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * Filter which MessageLog to delete.
     */
    where: MessageLogWhereUniqueInput
  }

  /**
   * MessageLog deleteMany
   */
  export type MessageLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageLogs to delete
     */
    where?: MessageLogWhereInput
    /**
     * Limit how many MessageLogs to delete.
     */
    limit?: number
  }

  /**
   * MessageLog without action
   */
  export type MessageLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
  }


  /**
   * Model License
   */

  export type AggregateLicense = {
    _count: LicenseCountAggregateOutputType | null
    _min: LicenseMinAggregateOutputType | null
    _max: LicenseMaxAggregateOutputType | null
  }

  export type LicenseMinAggregateOutputType = {
    id: string | null
    clubId: string | null
    machineHash: string | null
    licenseKey: string | null
    validUntil: Date | null
    active: boolean | null
    metadataJson: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LicenseMaxAggregateOutputType = {
    id: string | null
    clubId: string | null
    machineHash: string | null
    licenseKey: string | null
    validUntil: Date | null
    active: boolean | null
    metadataJson: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LicenseCountAggregateOutputType = {
    id: number
    clubId: number
    machineHash: number
    licenseKey: number
    validUntil: number
    active: number
    metadataJson: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LicenseMinAggregateInputType = {
    id?: true
    clubId?: true
    machineHash?: true
    licenseKey?: true
    validUntil?: true
    active?: true
    metadataJson?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LicenseMaxAggregateInputType = {
    id?: true
    clubId?: true
    machineHash?: true
    licenseKey?: true
    validUntil?: true
    active?: true
    metadataJson?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LicenseCountAggregateInputType = {
    id?: true
    clubId?: true
    machineHash?: true
    licenseKey?: true
    validUntil?: true
    active?: true
    metadataJson?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LicenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which License to aggregate.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Licenses
    **/
    _count?: true | LicenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicenseMaxAggregateInputType
  }

  export type GetLicenseAggregateType<T extends LicenseAggregateArgs> = {
        [P in keyof T & keyof AggregateLicense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicense[P]>
      : GetScalarType<T[P], AggregateLicense[P]>
  }




  export type LicenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseWhereInput
    orderBy?: LicenseOrderByWithAggregationInput | LicenseOrderByWithAggregationInput[]
    by: LicenseScalarFieldEnum[] | LicenseScalarFieldEnum
    having?: LicenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicenseCountAggregateInputType | true
    _min?: LicenseMinAggregateInputType
    _max?: LicenseMaxAggregateInputType
  }

  export type LicenseGroupByOutputType = {
    id: string
    clubId: string | null
    machineHash: string
    licenseKey: string
    validUntil: Date | null
    active: boolean
    metadataJson: string | null
    createdAt: Date
    updatedAt: Date
    _count: LicenseCountAggregateOutputType | null
    _min: LicenseMinAggregateOutputType | null
    _max: LicenseMaxAggregateOutputType | null
  }

  type GetLicenseGroupByPayload<T extends LicenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicenseGroupByOutputType[P]>
            : GetScalarType<T[P], LicenseGroupByOutputType[P]>
        }
      >
    >


  export type LicenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clubId?: boolean
    machineHash?: boolean
    licenseKey?: boolean
    validUntil?: boolean
    active?: boolean
    metadataJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    club?: boolean | License$clubArgs<ExtArgs>
  }, ExtArgs["result"]["license"]>

  export type LicenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clubId?: boolean
    machineHash?: boolean
    licenseKey?: boolean
    validUntil?: boolean
    active?: boolean
    metadataJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    club?: boolean | License$clubArgs<ExtArgs>
  }, ExtArgs["result"]["license"]>

  export type LicenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clubId?: boolean
    machineHash?: boolean
    licenseKey?: boolean
    validUntil?: boolean
    active?: boolean
    metadataJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    club?: boolean | License$clubArgs<ExtArgs>
  }, ExtArgs["result"]["license"]>

  export type LicenseSelectScalar = {
    id?: boolean
    clubId?: boolean
    machineHash?: boolean
    licenseKey?: boolean
    validUntil?: boolean
    active?: boolean
    metadataJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LicenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clubId" | "machineHash" | "licenseKey" | "validUntil" | "active" | "metadataJson" | "createdAt" | "updatedAt", ExtArgs["result"]["license"]>
  export type LicenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | License$clubArgs<ExtArgs>
  }
  export type LicenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | License$clubArgs<ExtArgs>
  }
  export type LicenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | License$clubArgs<ExtArgs>
  }

  export type $LicensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "License"
    objects: {
      club: Prisma.$ClubPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clubId: string | null
      machineHash: string
      licenseKey: string
      validUntil: Date | null
      active: boolean
      metadataJson: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["license"]>
    composites: {}
  }

  type LicenseGetPayload<S extends boolean | null | undefined | LicenseDefaultArgs> = $Result.GetResult<Prisma.$LicensePayload, S>

  type LicenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LicenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LicenseCountAggregateInputType | true
    }

  export interface LicenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['License'], meta: { name: 'License' } }
    /**
     * Find zero or one License that matches the filter.
     * @param {LicenseFindUniqueArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicenseFindUniqueArgs>(args: SelectSubset<T, LicenseFindUniqueArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one License that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LicenseFindUniqueOrThrowArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicenseFindUniqueOrThrowArgs>(args: SelectSubset<T, LicenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first License that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindFirstArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicenseFindFirstArgs>(args?: SelectSubset<T, LicenseFindFirstArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first License that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindFirstOrThrowArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicenseFindFirstOrThrowArgs>(args?: SelectSubset<T, LicenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Licenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Licenses
     * const licenses = await prisma.license.findMany()
     * 
     * // Get first 10 Licenses
     * const licenses = await prisma.license.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licenseWithIdOnly = await prisma.license.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LicenseFindManyArgs>(args?: SelectSubset<T, LicenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a License.
     * @param {LicenseCreateArgs} args - Arguments to create a License.
     * @example
     * // Create one License
     * const License = await prisma.license.create({
     *   data: {
     *     // ... data to create a License
     *   }
     * })
     * 
     */
    create<T extends LicenseCreateArgs>(args: SelectSubset<T, LicenseCreateArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Licenses.
     * @param {LicenseCreateManyArgs} args - Arguments to create many Licenses.
     * @example
     * // Create many Licenses
     * const license = await prisma.license.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicenseCreateManyArgs>(args?: SelectSubset<T, LicenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Licenses and returns the data saved in the database.
     * @param {LicenseCreateManyAndReturnArgs} args - Arguments to create many Licenses.
     * @example
     * // Create many Licenses
     * const license = await prisma.license.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Licenses and only return the `id`
     * const licenseWithIdOnly = await prisma.license.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LicenseCreateManyAndReturnArgs>(args?: SelectSubset<T, LicenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a License.
     * @param {LicenseDeleteArgs} args - Arguments to delete one License.
     * @example
     * // Delete one License
     * const License = await prisma.license.delete({
     *   where: {
     *     // ... filter to delete one License
     *   }
     * })
     * 
     */
    delete<T extends LicenseDeleteArgs>(args: SelectSubset<T, LicenseDeleteArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one License.
     * @param {LicenseUpdateArgs} args - Arguments to update one License.
     * @example
     * // Update one License
     * const license = await prisma.license.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicenseUpdateArgs>(args: SelectSubset<T, LicenseUpdateArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Licenses.
     * @param {LicenseDeleteManyArgs} args - Arguments to filter Licenses to delete.
     * @example
     * // Delete a few Licenses
     * const { count } = await prisma.license.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicenseDeleteManyArgs>(args?: SelectSubset<T, LicenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Licenses
     * const license = await prisma.license.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicenseUpdateManyArgs>(args: SelectSubset<T, LicenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licenses and returns the data updated in the database.
     * @param {LicenseUpdateManyAndReturnArgs} args - Arguments to update many Licenses.
     * @example
     * // Update many Licenses
     * const license = await prisma.license.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Licenses and only return the `id`
     * const licenseWithIdOnly = await prisma.license.updateManyAndReturn({
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
    updateManyAndReturn<T extends LicenseUpdateManyAndReturnArgs>(args: SelectSubset<T, LicenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one License.
     * @param {LicenseUpsertArgs} args - Arguments to update or create a License.
     * @example
     * // Update or create a License
     * const license = await prisma.license.upsert({
     *   create: {
     *     // ... data to create a License
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the License we want to update
     *   }
     * })
     */
    upsert<T extends LicenseUpsertArgs>(args: SelectSubset<T, LicenseUpsertArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseCountArgs} args - Arguments to filter Licenses to count.
     * @example
     * // Count the number of Licenses
     * const count = await prisma.license.count({
     *   where: {
     *     // ... the filter for the Licenses we want to count
     *   }
     * })
    **/
    count<T extends LicenseCountArgs>(
      args?: Subset<T, LicenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a License.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LicenseAggregateArgs>(args: Subset<T, LicenseAggregateArgs>): Prisma.PrismaPromise<GetLicenseAggregateType<T>>

    /**
     * Group by License.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseGroupByArgs} args - Group by arguments.
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
      T extends LicenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicenseGroupByArgs['orderBy'] }
        : { orderBy?: LicenseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LicenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the License model
   */
  readonly fields: LicenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for License.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    club<T extends License$clubArgs<ExtArgs> = {}>(args?: Subset<T, License$clubArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the License model
   */
  interface LicenseFieldRefs {
    readonly id: FieldRef<"License", 'String'>
    readonly clubId: FieldRef<"License", 'String'>
    readonly machineHash: FieldRef<"License", 'String'>
    readonly licenseKey: FieldRef<"License", 'String'>
    readonly validUntil: FieldRef<"License", 'DateTime'>
    readonly active: FieldRef<"License", 'Boolean'>
    readonly metadataJson: FieldRef<"License", 'String'>
    readonly createdAt: FieldRef<"License", 'DateTime'>
    readonly updatedAt: FieldRef<"License", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * License findUnique
   */
  export type LicenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License findUniqueOrThrow
   */
  export type LicenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License findFirst
   */
  export type LicenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licenses.
     */
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License findFirstOrThrow
   */
  export type LicenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licenses.
     */
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License findMany
   */
  export type LicenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which Licenses to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License create
   */
  export type LicenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The data needed to create a License.
     */
    data: XOR<LicenseCreateInput, LicenseUncheckedCreateInput>
  }

  /**
   * License createMany
   */
  export type LicenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Licenses.
     */
    data: LicenseCreateManyInput | LicenseCreateManyInput[]
  }

  /**
   * License createManyAndReturn
   */
  export type LicenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * The data used to create many Licenses.
     */
    data: LicenseCreateManyInput | LicenseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * License update
   */
  export type LicenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The data needed to update a License.
     */
    data: XOR<LicenseUpdateInput, LicenseUncheckedUpdateInput>
    /**
     * Choose, which License to update.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License updateMany
   */
  export type LicenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Licenses.
     */
    data: XOR<LicenseUpdateManyMutationInput, LicenseUncheckedUpdateManyInput>
    /**
     * Filter which Licenses to update
     */
    where?: LicenseWhereInput
    /**
     * Limit how many Licenses to update.
     */
    limit?: number
  }

  /**
   * License updateManyAndReturn
   */
  export type LicenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * The data used to update Licenses.
     */
    data: XOR<LicenseUpdateManyMutationInput, LicenseUncheckedUpdateManyInput>
    /**
     * Filter which Licenses to update
     */
    where?: LicenseWhereInput
    /**
     * Limit how many Licenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * License upsert
   */
  export type LicenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The filter to search for the License to update in case it exists.
     */
    where: LicenseWhereUniqueInput
    /**
     * In case the License found by the `where` argument doesn't exist, create a new License with this data.
     */
    create: XOR<LicenseCreateInput, LicenseUncheckedCreateInput>
    /**
     * In case the License was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicenseUpdateInput, LicenseUncheckedUpdateInput>
  }

  /**
   * License delete
   */
  export type LicenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter which License to delete.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License deleteMany
   */
  export type LicenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Licenses to delete
     */
    where?: LicenseWhereInput
    /**
     * Limit how many Licenses to delete.
     */
    limit?: number
  }

  /**
   * License.club
   */
  export type License$clubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    where?: ClubWhereInput
  }

  /**
   * License without action
   */
  export type LicenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClubScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    address: 'address',
    whatsapp: 'whatsapp',
    mapLink: 'mapLink',
    transferAlias: 'transferAlias',
    transferCvuCbu: 'transferCvuCbu',
    slotDurationDefault: 'slotDurationDefault',
    minAdvanceMinutes: 'minAdvanceMinutes',
    maxAdvanceDays: 'maxAdvanceDays',
    cancellationPolicyMin: 'cancellationPolicyMin',
    noShowPolicy: 'noShowPolicy',
    holidayJson: 'holidayJson',
    scheduleJson: 'scheduleJson',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClubScalarFieldEnum = (typeof ClubScalarFieldEnum)[keyof typeof ClubScalarFieldEnum]


  export const CourtScalarFieldEnum: {
    id: 'id',
    clubId: 'clubId',
    name: 'name',
    active: 'active',
    basePrice: 'basePrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourtScalarFieldEnum = (typeof CourtScalarFieldEnum)[keyof typeof CourtScalarFieldEnum]


  export const StaffUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    fullName: 'fullName',
    role: 'role',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StaffUserScalarFieldEnum = (typeof StaffUserScalarFieldEnum)[keyof typeof StaffUserScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    id: 'id',
    clubId: 'clubId',
    courtId: 'courtId',
    status: 'status',
    startAt: 'startAt',
    endAt: 'endAt',
    holdExpiresAt: 'holdExpiresAt',
    customerName: 'customerName',
    customerWhatsapp: 'customerWhatsapp',
    customerEmail: 'customerEmail',
    note: 'note',
    amount: 'amount',
    createdByKind: 'createdByKind',
    createdByStaffId: 'createdByStaffId',
    manageTokenHash: 'manageTokenHash',
    manageTokenLastRotatedAt: 'manageTokenLastRotatedAt',
    canceledAt: 'canceledAt',
    canceledReason: 'canceledReason',
    noShowMarkedAt: 'noShowMarkedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const BlockScalarFieldEnum: {
    id: 'id',
    clubId: 'clubId',
    courtId: 'courtId',
    startAt: 'startAt',
    endAt: 'endAt',
    reason: 'reason',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlockScalarFieldEnum = (typeof BlockScalarFieldEnum)[keyof typeof BlockScalarFieldEnum]


  export const PricingRuleScalarFieldEnum: {
    id: 'id',
    clubId: 'clubId',
    courtId: 'courtId',
    dayOfWeek: 'dayOfWeek',
    startMinute: 'startMinute',
    endMinute: 'endMinute',
    multiplier: 'multiplier',
    fixedPrice: 'fixedPrice',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PricingRuleScalarFieldEnum = (typeof PricingRuleScalarFieldEnum)[keyof typeof PricingRuleScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    reservationId: 'reservationId',
    amount: 'amount',
    method: 'method',
    status: 'status',
    note: 'note',
    registeredById: 'registeredById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    actorUserId: 'actorUserId',
    entity: 'entity',
    entityId: 'entityId',
    action: 'action',
    beforeJson: 'beforeJson',
    afterJson: 'afterJson',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const MessageLogScalarFieldEnum: {
    id: 'id',
    reservationId: 'reservationId',
    channel: 'channel',
    destination: 'destination',
    payload: 'payload',
    success: 'success',
    createdAt: 'createdAt'
  };

  export type MessageLogScalarFieldEnum = (typeof MessageLogScalarFieldEnum)[keyof typeof MessageLogScalarFieldEnum]


  export const LicenseScalarFieldEnum: {
    id: 'id',
    clubId: 'clubId',
    machineHash: 'machineHash',
    licenseKey: 'licenseKey',
    validUntil: 'validUntil',
    active: 'active',
    metadataJson: 'metadataJson',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LicenseScalarFieldEnum = (typeof LicenseScalarFieldEnum)[keyof typeof LicenseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'StaffRole'
   */
  export type EnumStaffRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StaffRole'>
    


  /**
   * Reference to a field of type 'ReservationStatus'
   */
  export type EnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus'>
    


  /**
   * Reference to a field of type 'CreatedByKind'
   */
  export type EnumCreatedByKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CreatedByKind'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    
  /**
   * Deep Input Types
   */


  export type ClubWhereInput = {
    AND?: ClubWhereInput | ClubWhereInput[]
    OR?: ClubWhereInput[]
    NOT?: ClubWhereInput | ClubWhereInput[]
    id?: StringFilter<"Club"> | string
    slug?: StringFilter<"Club"> | string
    name?: StringFilter<"Club"> | string
    address?: StringNullableFilter<"Club"> | string | null
    whatsapp?: StringNullableFilter<"Club"> | string | null
    mapLink?: StringNullableFilter<"Club"> | string | null
    transferAlias?: StringNullableFilter<"Club"> | string | null
    transferCvuCbu?: StringNullableFilter<"Club"> | string | null
    slotDurationDefault?: IntFilter<"Club"> | number
    minAdvanceMinutes?: IntFilter<"Club"> | number
    maxAdvanceDays?: IntFilter<"Club"> | number
    cancellationPolicyMin?: IntFilter<"Club"> | number
    noShowPolicy?: StringNullableFilter<"Club"> | string | null
    holidayJson?: StringFilter<"Club"> | string
    scheduleJson?: StringFilter<"Club"> | string
    active?: BoolFilter<"Club"> | boolean
    createdAt?: DateTimeFilter<"Club"> | Date | string
    updatedAt?: DateTimeFilter<"Club"> | Date | string
    courts?: CourtListRelationFilter
    reservations?: ReservationListRelationFilter
    blocks?: BlockListRelationFilter
    pricingRules?: PricingRuleListRelationFilter
    licenses?: LicenseListRelationFilter
  }

  export type ClubOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    mapLink?: SortOrderInput | SortOrder
    transferAlias?: SortOrderInput | SortOrder
    transferCvuCbu?: SortOrderInput | SortOrder
    slotDurationDefault?: SortOrder
    minAdvanceMinutes?: SortOrder
    maxAdvanceDays?: SortOrder
    cancellationPolicyMin?: SortOrder
    noShowPolicy?: SortOrderInput | SortOrder
    holidayJson?: SortOrder
    scheduleJson?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courts?: CourtOrderByRelationAggregateInput
    reservations?: ReservationOrderByRelationAggregateInput
    blocks?: BlockOrderByRelationAggregateInput
    pricingRules?: PricingRuleOrderByRelationAggregateInput
    licenses?: LicenseOrderByRelationAggregateInput
  }

  export type ClubWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ClubWhereInput | ClubWhereInput[]
    OR?: ClubWhereInput[]
    NOT?: ClubWhereInput | ClubWhereInput[]
    name?: StringFilter<"Club"> | string
    address?: StringNullableFilter<"Club"> | string | null
    whatsapp?: StringNullableFilter<"Club"> | string | null
    mapLink?: StringNullableFilter<"Club"> | string | null
    transferAlias?: StringNullableFilter<"Club"> | string | null
    transferCvuCbu?: StringNullableFilter<"Club"> | string | null
    slotDurationDefault?: IntFilter<"Club"> | number
    minAdvanceMinutes?: IntFilter<"Club"> | number
    maxAdvanceDays?: IntFilter<"Club"> | number
    cancellationPolicyMin?: IntFilter<"Club"> | number
    noShowPolicy?: StringNullableFilter<"Club"> | string | null
    holidayJson?: StringFilter<"Club"> | string
    scheduleJson?: StringFilter<"Club"> | string
    active?: BoolFilter<"Club"> | boolean
    createdAt?: DateTimeFilter<"Club"> | Date | string
    updatedAt?: DateTimeFilter<"Club"> | Date | string
    courts?: CourtListRelationFilter
    reservations?: ReservationListRelationFilter
    blocks?: BlockListRelationFilter
    pricingRules?: PricingRuleListRelationFilter
    licenses?: LicenseListRelationFilter
  }, "id" | "slug">

  export type ClubOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    mapLink?: SortOrderInput | SortOrder
    transferAlias?: SortOrderInput | SortOrder
    transferCvuCbu?: SortOrderInput | SortOrder
    slotDurationDefault?: SortOrder
    minAdvanceMinutes?: SortOrder
    maxAdvanceDays?: SortOrder
    cancellationPolicyMin?: SortOrder
    noShowPolicy?: SortOrderInput | SortOrder
    holidayJson?: SortOrder
    scheduleJson?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClubCountOrderByAggregateInput
    _avg?: ClubAvgOrderByAggregateInput
    _max?: ClubMaxOrderByAggregateInput
    _min?: ClubMinOrderByAggregateInput
    _sum?: ClubSumOrderByAggregateInput
  }

  export type ClubScalarWhereWithAggregatesInput = {
    AND?: ClubScalarWhereWithAggregatesInput | ClubScalarWhereWithAggregatesInput[]
    OR?: ClubScalarWhereWithAggregatesInput[]
    NOT?: ClubScalarWhereWithAggregatesInput | ClubScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Club"> | string
    slug?: StringWithAggregatesFilter<"Club"> | string
    name?: StringWithAggregatesFilter<"Club"> | string
    address?: StringNullableWithAggregatesFilter<"Club"> | string | null
    whatsapp?: StringNullableWithAggregatesFilter<"Club"> | string | null
    mapLink?: StringNullableWithAggregatesFilter<"Club"> | string | null
    transferAlias?: StringNullableWithAggregatesFilter<"Club"> | string | null
    transferCvuCbu?: StringNullableWithAggregatesFilter<"Club"> | string | null
    slotDurationDefault?: IntWithAggregatesFilter<"Club"> | number
    minAdvanceMinutes?: IntWithAggregatesFilter<"Club"> | number
    maxAdvanceDays?: IntWithAggregatesFilter<"Club"> | number
    cancellationPolicyMin?: IntWithAggregatesFilter<"Club"> | number
    noShowPolicy?: StringNullableWithAggregatesFilter<"Club"> | string | null
    holidayJson?: StringWithAggregatesFilter<"Club"> | string
    scheduleJson?: StringWithAggregatesFilter<"Club"> | string
    active?: BoolWithAggregatesFilter<"Club"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Club"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Club"> | Date | string
  }

  export type CourtWhereInput = {
    AND?: CourtWhereInput | CourtWhereInput[]
    OR?: CourtWhereInput[]
    NOT?: CourtWhereInput | CourtWhereInput[]
    id?: StringFilter<"Court"> | string
    clubId?: StringFilter<"Court"> | string
    name?: StringFilter<"Court"> | string
    active?: BoolFilter<"Court"> | boolean
    basePrice?: IntFilter<"Court"> | number
    createdAt?: DateTimeFilter<"Court"> | Date | string
    updatedAt?: DateTimeFilter<"Court"> | Date | string
    club?: XOR<ClubScalarRelationFilter, ClubWhereInput>
    reservations?: ReservationListRelationFilter
    blocks?: BlockListRelationFilter
  }

  export type CourtOrderByWithRelationInput = {
    id?: SortOrder
    clubId?: SortOrder
    name?: SortOrder
    active?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    club?: ClubOrderByWithRelationInput
    reservations?: ReservationOrderByRelationAggregateInput
    blocks?: BlockOrderByRelationAggregateInput
  }

  export type CourtWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourtWhereInput | CourtWhereInput[]
    OR?: CourtWhereInput[]
    NOT?: CourtWhereInput | CourtWhereInput[]
    clubId?: StringFilter<"Court"> | string
    name?: StringFilter<"Court"> | string
    active?: BoolFilter<"Court"> | boolean
    basePrice?: IntFilter<"Court"> | number
    createdAt?: DateTimeFilter<"Court"> | Date | string
    updatedAt?: DateTimeFilter<"Court"> | Date | string
    club?: XOR<ClubScalarRelationFilter, ClubWhereInput>
    reservations?: ReservationListRelationFilter
    blocks?: BlockListRelationFilter
  }, "id">

  export type CourtOrderByWithAggregationInput = {
    id?: SortOrder
    clubId?: SortOrder
    name?: SortOrder
    active?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourtCountOrderByAggregateInput
    _avg?: CourtAvgOrderByAggregateInput
    _max?: CourtMaxOrderByAggregateInput
    _min?: CourtMinOrderByAggregateInput
    _sum?: CourtSumOrderByAggregateInput
  }

  export type CourtScalarWhereWithAggregatesInput = {
    AND?: CourtScalarWhereWithAggregatesInput | CourtScalarWhereWithAggregatesInput[]
    OR?: CourtScalarWhereWithAggregatesInput[]
    NOT?: CourtScalarWhereWithAggregatesInput | CourtScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Court"> | string
    clubId?: StringWithAggregatesFilter<"Court"> | string
    name?: StringWithAggregatesFilter<"Court"> | string
    active?: BoolWithAggregatesFilter<"Court"> | boolean
    basePrice?: IntWithAggregatesFilter<"Court"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Court"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Court"> | Date | string
  }

  export type StaffUserWhereInput = {
    AND?: StaffUserWhereInput | StaffUserWhereInput[]
    OR?: StaffUserWhereInput[]
    NOT?: StaffUserWhereInput | StaffUserWhereInput[]
    id?: StringFilter<"StaffUser"> | string
    email?: StringFilter<"StaffUser"> | string
    passwordHash?: StringFilter<"StaffUser"> | string
    fullName?: StringFilter<"StaffUser"> | string
    role?: EnumStaffRoleFilter<"StaffUser"> | $Enums.StaffRole
    active?: BoolFilter<"StaffUser"> | boolean
    createdAt?: DateTimeFilter<"StaffUser"> | Date | string
    updatedAt?: DateTimeFilter<"StaffUser"> | Date | string
    audits?: AuditLogListRelationFilter
  }

  export type StaffUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    audits?: AuditLogOrderByRelationAggregateInput
  }

  export type StaffUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: StaffUserWhereInput | StaffUserWhereInput[]
    OR?: StaffUserWhereInput[]
    NOT?: StaffUserWhereInput | StaffUserWhereInput[]
    passwordHash?: StringFilter<"StaffUser"> | string
    fullName?: StringFilter<"StaffUser"> | string
    role?: EnumStaffRoleFilter<"StaffUser"> | $Enums.StaffRole
    active?: BoolFilter<"StaffUser"> | boolean
    createdAt?: DateTimeFilter<"StaffUser"> | Date | string
    updatedAt?: DateTimeFilter<"StaffUser"> | Date | string
    audits?: AuditLogListRelationFilter
  }, "id" | "email">

  export type StaffUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StaffUserCountOrderByAggregateInput
    _max?: StaffUserMaxOrderByAggregateInput
    _min?: StaffUserMinOrderByAggregateInput
  }

  export type StaffUserScalarWhereWithAggregatesInput = {
    AND?: StaffUserScalarWhereWithAggregatesInput | StaffUserScalarWhereWithAggregatesInput[]
    OR?: StaffUserScalarWhereWithAggregatesInput[]
    NOT?: StaffUserScalarWhereWithAggregatesInput | StaffUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StaffUser"> | string
    email?: StringWithAggregatesFilter<"StaffUser"> | string
    passwordHash?: StringWithAggregatesFilter<"StaffUser"> | string
    fullName?: StringWithAggregatesFilter<"StaffUser"> | string
    role?: EnumStaffRoleWithAggregatesFilter<"StaffUser"> | $Enums.StaffRole
    active?: BoolWithAggregatesFilter<"StaffUser"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"StaffUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StaffUser"> | Date | string
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    id?: StringFilter<"Reservation"> | string
    clubId?: StringFilter<"Reservation"> | string
    courtId?: StringFilter<"Reservation"> | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    startAt?: DateTimeFilter<"Reservation"> | Date | string
    endAt?: DateTimeFilter<"Reservation"> | Date | string
    holdExpiresAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    customerName?: StringFilter<"Reservation"> | string
    customerWhatsapp?: StringFilter<"Reservation"> | string
    customerEmail?: StringNullableFilter<"Reservation"> | string | null
    note?: StringNullableFilter<"Reservation"> | string | null
    amount?: IntFilter<"Reservation"> | number
    createdByKind?: EnumCreatedByKindFilter<"Reservation"> | $Enums.CreatedByKind
    createdByStaffId?: StringNullableFilter<"Reservation"> | string | null
    manageTokenHash?: StringFilter<"Reservation"> | string
    manageTokenLastRotatedAt?: DateTimeFilter<"Reservation"> | Date | string
    canceledAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    canceledReason?: StringNullableFilter<"Reservation"> | string | null
    noShowMarkedAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    club?: XOR<ClubScalarRelationFilter, ClubWhereInput>
    court?: XOR<CourtScalarRelationFilter, CourtWhereInput>
    payments?: PaymentListRelationFilter
    messages?: MessageLogListRelationFilter
  }

  export type ReservationOrderByWithRelationInput = {
    id?: SortOrder
    clubId?: SortOrder
    courtId?: SortOrder
    status?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    holdExpiresAt?: SortOrderInput | SortOrder
    customerName?: SortOrder
    customerWhatsapp?: SortOrder
    customerEmail?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    amount?: SortOrder
    createdByKind?: SortOrder
    createdByStaffId?: SortOrderInput | SortOrder
    manageTokenHash?: SortOrder
    manageTokenLastRotatedAt?: SortOrder
    canceledAt?: SortOrderInput | SortOrder
    canceledReason?: SortOrderInput | SortOrder
    noShowMarkedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    club?: ClubOrderByWithRelationInput
    court?: CourtOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
    messages?: MessageLogOrderByRelationAggregateInput
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    clubId?: StringFilter<"Reservation"> | string
    courtId?: StringFilter<"Reservation"> | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    startAt?: DateTimeFilter<"Reservation"> | Date | string
    endAt?: DateTimeFilter<"Reservation"> | Date | string
    holdExpiresAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    customerName?: StringFilter<"Reservation"> | string
    customerWhatsapp?: StringFilter<"Reservation"> | string
    customerEmail?: StringNullableFilter<"Reservation"> | string | null
    note?: StringNullableFilter<"Reservation"> | string | null
    amount?: IntFilter<"Reservation"> | number
    createdByKind?: EnumCreatedByKindFilter<"Reservation"> | $Enums.CreatedByKind
    createdByStaffId?: StringNullableFilter<"Reservation"> | string | null
    manageTokenHash?: StringFilter<"Reservation"> | string
    manageTokenLastRotatedAt?: DateTimeFilter<"Reservation"> | Date | string
    canceledAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    canceledReason?: StringNullableFilter<"Reservation"> | string | null
    noShowMarkedAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    club?: XOR<ClubScalarRelationFilter, ClubWhereInput>
    court?: XOR<CourtScalarRelationFilter, CourtWhereInput>
    payments?: PaymentListRelationFilter
    messages?: MessageLogListRelationFilter
  }, "id">

  export type ReservationOrderByWithAggregationInput = {
    id?: SortOrder
    clubId?: SortOrder
    courtId?: SortOrder
    status?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    holdExpiresAt?: SortOrderInput | SortOrder
    customerName?: SortOrder
    customerWhatsapp?: SortOrder
    customerEmail?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    amount?: SortOrder
    createdByKind?: SortOrder
    createdByStaffId?: SortOrderInput | SortOrder
    manageTokenHash?: SortOrder
    manageTokenLastRotatedAt?: SortOrder
    canceledAt?: SortOrderInput | SortOrder
    canceledReason?: SortOrderInput | SortOrder
    noShowMarkedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _avg?: ReservationAvgOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
    _sum?: ReservationSumOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reservation"> | string
    clubId?: StringWithAggregatesFilter<"Reservation"> | string
    courtId?: StringWithAggregatesFilter<"Reservation"> | string
    status?: EnumReservationStatusWithAggregatesFilter<"Reservation"> | $Enums.ReservationStatus
    startAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    endAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    holdExpiresAt?: DateTimeNullableWithAggregatesFilter<"Reservation"> | Date | string | null
    customerName?: StringWithAggregatesFilter<"Reservation"> | string
    customerWhatsapp?: StringWithAggregatesFilter<"Reservation"> | string
    customerEmail?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    note?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    amount?: IntWithAggregatesFilter<"Reservation"> | number
    createdByKind?: EnumCreatedByKindWithAggregatesFilter<"Reservation"> | $Enums.CreatedByKind
    createdByStaffId?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    manageTokenHash?: StringWithAggregatesFilter<"Reservation"> | string
    manageTokenLastRotatedAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    canceledAt?: DateTimeNullableWithAggregatesFilter<"Reservation"> | Date | string | null
    canceledReason?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    noShowMarkedAt?: DateTimeNullableWithAggregatesFilter<"Reservation"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
  }

  export type BlockWhereInput = {
    AND?: BlockWhereInput | BlockWhereInput[]
    OR?: BlockWhereInput[]
    NOT?: BlockWhereInput | BlockWhereInput[]
    id?: StringFilter<"Block"> | string
    clubId?: StringFilter<"Block"> | string
    courtId?: StringFilter<"Block"> | string
    startAt?: DateTimeFilter<"Block"> | Date | string
    endAt?: DateTimeFilter<"Block"> | Date | string
    reason?: StringFilter<"Block"> | string
    createdById?: StringNullableFilter<"Block"> | string | null
    createdAt?: DateTimeFilter<"Block"> | Date | string
    updatedAt?: DateTimeFilter<"Block"> | Date | string
    club?: XOR<ClubScalarRelationFilter, ClubWhereInput>
    court?: XOR<CourtScalarRelationFilter, CourtWhereInput>
  }

  export type BlockOrderByWithRelationInput = {
    id?: SortOrder
    clubId?: SortOrder
    courtId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    reason?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    club?: ClubOrderByWithRelationInput
    court?: CourtOrderByWithRelationInput
  }

  export type BlockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlockWhereInput | BlockWhereInput[]
    OR?: BlockWhereInput[]
    NOT?: BlockWhereInput | BlockWhereInput[]
    clubId?: StringFilter<"Block"> | string
    courtId?: StringFilter<"Block"> | string
    startAt?: DateTimeFilter<"Block"> | Date | string
    endAt?: DateTimeFilter<"Block"> | Date | string
    reason?: StringFilter<"Block"> | string
    createdById?: StringNullableFilter<"Block"> | string | null
    createdAt?: DateTimeFilter<"Block"> | Date | string
    updatedAt?: DateTimeFilter<"Block"> | Date | string
    club?: XOR<ClubScalarRelationFilter, ClubWhereInput>
    court?: XOR<CourtScalarRelationFilter, CourtWhereInput>
  }, "id">

  export type BlockOrderByWithAggregationInput = {
    id?: SortOrder
    clubId?: SortOrder
    courtId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    reason?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlockCountOrderByAggregateInput
    _max?: BlockMaxOrderByAggregateInput
    _min?: BlockMinOrderByAggregateInput
  }

  export type BlockScalarWhereWithAggregatesInput = {
    AND?: BlockScalarWhereWithAggregatesInput | BlockScalarWhereWithAggregatesInput[]
    OR?: BlockScalarWhereWithAggregatesInput[]
    NOT?: BlockScalarWhereWithAggregatesInput | BlockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Block"> | string
    clubId?: StringWithAggregatesFilter<"Block"> | string
    courtId?: StringWithAggregatesFilter<"Block"> | string
    startAt?: DateTimeWithAggregatesFilter<"Block"> | Date | string
    endAt?: DateTimeWithAggregatesFilter<"Block"> | Date | string
    reason?: StringWithAggregatesFilter<"Block"> | string
    createdById?: StringNullableWithAggregatesFilter<"Block"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Block"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Block"> | Date | string
  }

  export type PricingRuleWhereInput = {
    AND?: PricingRuleWhereInput | PricingRuleWhereInput[]
    OR?: PricingRuleWhereInput[]
    NOT?: PricingRuleWhereInput | PricingRuleWhereInput[]
    id?: StringFilter<"PricingRule"> | string
    clubId?: StringFilter<"PricingRule"> | string
    courtId?: StringNullableFilter<"PricingRule"> | string | null
    dayOfWeek?: IntFilter<"PricingRule"> | number
    startMinute?: IntFilter<"PricingRule"> | number
    endMinute?: IntFilter<"PricingRule"> | number
    multiplier?: FloatFilter<"PricingRule"> | number
    fixedPrice?: IntNullableFilter<"PricingRule"> | number | null
    active?: BoolFilter<"PricingRule"> | boolean
    createdAt?: DateTimeFilter<"PricingRule"> | Date | string
    updatedAt?: DateTimeFilter<"PricingRule"> | Date | string
    club?: XOR<ClubScalarRelationFilter, ClubWhereInput>
  }

  export type PricingRuleOrderByWithRelationInput = {
    id?: SortOrder
    clubId?: SortOrder
    courtId?: SortOrderInput | SortOrder
    dayOfWeek?: SortOrder
    startMinute?: SortOrder
    endMinute?: SortOrder
    multiplier?: SortOrder
    fixedPrice?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    club?: ClubOrderByWithRelationInput
  }

  export type PricingRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PricingRuleWhereInput | PricingRuleWhereInput[]
    OR?: PricingRuleWhereInput[]
    NOT?: PricingRuleWhereInput | PricingRuleWhereInput[]
    clubId?: StringFilter<"PricingRule"> | string
    courtId?: StringNullableFilter<"PricingRule"> | string | null
    dayOfWeek?: IntFilter<"PricingRule"> | number
    startMinute?: IntFilter<"PricingRule"> | number
    endMinute?: IntFilter<"PricingRule"> | number
    multiplier?: FloatFilter<"PricingRule"> | number
    fixedPrice?: IntNullableFilter<"PricingRule"> | number | null
    active?: BoolFilter<"PricingRule"> | boolean
    createdAt?: DateTimeFilter<"PricingRule"> | Date | string
    updatedAt?: DateTimeFilter<"PricingRule"> | Date | string
    club?: XOR<ClubScalarRelationFilter, ClubWhereInput>
  }, "id">

  export type PricingRuleOrderByWithAggregationInput = {
    id?: SortOrder
    clubId?: SortOrder
    courtId?: SortOrderInput | SortOrder
    dayOfWeek?: SortOrder
    startMinute?: SortOrder
    endMinute?: SortOrder
    multiplier?: SortOrder
    fixedPrice?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PricingRuleCountOrderByAggregateInput
    _avg?: PricingRuleAvgOrderByAggregateInput
    _max?: PricingRuleMaxOrderByAggregateInput
    _min?: PricingRuleMinOrderByAggregateInput
    _sum?: PricingRuleSumOrderByAggregateInput
  }

  export type PricingRuleScalarWhereWithAggregatesInput = {
    AND?: PricingRuleScalarWhereWithAggregatesInput | PricingRuleScalarWhereWithAggregatesInput[]
    OR?: PricingRuleScalarWhereWithAggregatesInput[]
    NOT?: PricingRuleScalarWhereWithAggregatesInput | PricingRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PricingRule"> | string
    clubId?: StringWithAggregatesFilter<"PricingRule"> | string
    courtId?: StringNullableWithAggregatesFilter<"PricingRule"> | string | null
    dayOfWeek?: IntWithAggregatesFilter<"PricingRule"> | number
    startMinute?: IntWithAggregatesFilter<"PricingRule"> | number
    endMinute?: IntWithAggregatesFilter<"PricingRule"> | number
    multiplier?: FloatWithAggregatesFilter<"PricingRule"> | number
    fixedPrice?: IntNullableWithAggregatesFilter<"PricingRule"> | number | null
    active?: BoolWithAggregatesFilter<"PricingRule"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PricingRule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PricingRule"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    reservationId?: StringFilter<"Payment"> | string
    amount?: IntFilter<"Payment"> | number
    method?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    note?: StringNullableFilter<"Payment"> | string | null
    registeredById?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    registeredById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reservation?: ReservationOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    reservationId?: StringFilter<"Payment"> | string
    amount?: IntFilter<"Payment"> | number
    method?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    note?: StringNullableFilter<"Payment"> | string | null
    registeredById?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    registeredById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    reservationId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: IntWithAggregatesFilter<"Payment"> | number
    method?: StringWithAggregatesFilter<"Payment"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    note?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    registeredById?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    actorUserId?: StringNullableFilter<"AuditLog"> | string | null
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    beforeJson?: StringNullableFilter<"AuditLog"> | string | null
    afterJson?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    actor?: XOR<StaffUserNullableScalarRelationFilter, StaffUserWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    actorUserId?: SortOrderInput | SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    beforeJson?: SortOrderInput | SortOrder
    afterJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    actor?: StaffUserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    actorUserId?: StringNullableFilter<"AuditLog"> | string | null
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    beforeJson?: StringNullableFilter<"AuditLog"> | string | null
    afterJson?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    actor?: XOR<StaffUserNullableScalarRelationFilter, StaffUserWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    actorUserId?: SortOrderInput | SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    beforeJson?: SortOrderInput | SortOrder
    afterJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    actorUserId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    entity?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    beforeJson?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    afterJson?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type MessageLogWhereInput = {
    AND?: MessageLogWhereInput | MessageLogWhereInput[]
    OR?: MessageLogWhereInput[]
    NOT?: MessageLogWhereInput | MessageLogWhereInput[]
    id?: StringFilter<"MessageLog"> | string
    reservationId?: StringFilter<"MessageLog"> | string
    channel?: StringFilter<"MessageLog"> | string
    destination?: StringFilter<"MessageLog"> | string
    payload?: StringFilter<"MessageLog"> | string
    success?: BoolFilter<"MessageLog"> | boolean
    createdAt?: DateTimeFilter<"MessageLog"> | Date | string
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
  }

  export type MessageLogOrderByWithRelationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    channel?: SortOrder
    destination?: SortOrder
    payload?: SortOrder
    success?: SortOrder
    createdAt?: SortOrder
    reservation?: ReservationOrderByWithRelationInput
  }

  export type MessageLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageLogWhereInput | MessageLogWhereInput[]
    OR?: MessageLogWhereInput[]
    NOT?: MessageLogWhereInput | MessageLogWhereInput[]
    reservationId?: StringFilter<"MessageLog"> | string
    channel?: StringFilter<"MessageLog"> | string
    destination?: StringFilter<"MessageLog"> | string
    payload?: StringFilter<"MessageLog"> | string
    success?: BoolFilter<"MessageLog"> | boolean
    createdAt?: DateTimeFilter<"MessageLog"> | Date | string
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
  }, "id">

  export type MessageLogOrderByWithAggregationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    channel?: SortOrder
    destination?: SortOrder
    payload?: SortOrder
    success?: SortOrder
    createdAt?: SortOrder
    _count?: MessageLogCountOrderByAggregateInput
    _max?: MessageLogMaxOrderByAggregateInput
    _min?: MessageLogMinOrderByAggregateInput
  }

  export type MessageLogScalarWhereWithAggregatesInput = {
    AND?: MessageLogScalarWhereWithAggregatesInput | MessageLogScalarWhereWithAggregatesInput[]
    OR?: MessageLogScalarWhereWithAggregatesInput[]
    NOT?: MessageLogScalarWhereWithAggregatesInput | MessageLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MessageLog"> | string
    reservationId?: StringWithAggregatesFilter<"MessageLog"> | string
    channel?: StringWithAggregatesFilter<"MessageLog"> | string
    destination?: StringWithAggregatesFilter<"MessageLog"> | string
    payload?: StringWithAggregatesFilter<"MessageLog"> | string
    success?: BoolWithAggregatesFilter<"MessageLog"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MessageLog"> | Date | string
  }

  export type LicenseWhereInput = {
    AND?: LicenseWhereInput | LicenseWhereInput[]
    OR?: LicenseWhereInput[]
    NOT?: LicenseWhereInput | LicenseWhereInput[]
    id?: StringFilter<"License"> | string
    clubId?: StringNullableFilter<"License"> | string | null
    machineHash?: StringFilter<"License"> | string
    licenseKey?: StringFilter<"License"> | string
    validUntil?: DateTimeNullableFilter<"License"> | Date | string | null
    active?: BoolFilter<"License"> | boolean
    metadataJson?: StringNullableFilter<"License"> | string | null
    createdAt?: DateTimeFilter<"License"> | Date | string
    updatedAt?: DateTimeFilter<"License"> | Date | string
    club?: XOR<ClubNullableScalarRelationFilter, ClubWhereInput> | null
  }

  export type LicenseOrderByWithRelationInput = {
    id?: SortOrder
    clubId?: SortOrderInput | SortOrder
    machineHash?: SortOrder
    licenseKey?: SortOrder
    validUntil?: SortOrderInput | SortOrder
    active?: SortOrder
    metadataJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    club?: ClubOrderByWithRelationInput
  }

  export type LicenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LicenseWhereInput | LicenseWhereInput[]
    OR?: LicenseWhereInput[]
    NOT?: LicenseWhereInput | LicenseWhereInput[]
    clubId?: StringNullableFilter<"License"> | string | null
    machineHash?: StringFilter<"License"> | string
    licenseKey?: StringFilter<"License"> | string
    validUntil?: DateTimeNullableFilter<"License"> | Date | string | null
    active?: BoolFilter<"License"> | boolean
    metadataJson?: StringNullableFilter<"License"> | string | null
    createdAt?: DateTimeFilter<"License"> | Date | string
    updatedAt?: DateTimeFilter<"License"> | Date | string
    club?: XOR<ClubNullableScalarRelationFilter, ClubWhereInput> | null
  }, "id">

  export type LicenseOrderByWithAggregationInput = {
    id?: SortOrder
    clubId?: SortOrderInput | SortOrder
    machineHash?: SortOrder
    licenseKey?: SortOrder
    validUntil?: SortOrderInput | SortOrder
    active?: SortOrder
    metadataJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LicenseCountOrderByAggregateInput
    _max?: LicenseMaxOrderByAggregateInput
    _min?: LicenseMinOrderByAggregateInput
  }

  export type LicenseScalarWhereWithAggregatesInput = {
    AND?: LicenseScalarWhereWithAggregatesInput | LicenseScalarWhereWithAggregatesInput[]
    OR?: LicenseScalarWhereWithAggregatesInput[]
    NOT?: LicenseScalarWhereWithAggregatesInput | LicenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"License"> | string
    clubId?: StringNullableWithAggregatesFilter<"License"> | string | null
    machineHash?: StringWithAggregatesFilter<"License"> | string
    licenseKey?: StringWithAggregatesFilter<"License"> | string
    validUntil?: DateTimeNullableWithAggregatesFilter<"License"> | Date | string | null
    active?: BoolWithAggregatesFilter<"License"> | boolean
    metadataJson?: StringNullableWithAggregatesFilter<"License"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"License"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"License"> | Date | string
  }

  export type ClubCreateInput = {
    id?: string
    slug: string
    name: string
    address?: string | null
    whatsapp?: string | null
    mapLink?: string | null
    transferAlias?: string | null
    transferCvuCbu?: string | null
    slotDurationDefault?: number
    minAdvanceMinutes?: number
    maxAdvanceDays?: number
    cancellationPolicyMin?: number
    noShowPolicy?: string | null
    holidayJson?: string
    scheduleJson?: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    courts?: CourtCreateNestedManyWithoutClubInput
    reservations?: ReservationCreateNestedManyWithoutClubInput
    blocks?: BlockCreateNestedManyWithoutClubInput
    pricingRules?: PricingRuleCreateNestedManyWithoutClubInput
    licenses?: LicenseCreateNestedManyWithoutClubInput
  }

  export type ClubUncheckedCreateInput = {
    id?: string
    slug: string
    name: string
    address?: string | null
    whatsapp?: string | null
    mapLink?: string | null
    transferAlias?: string | null
    transferCvuCbu?: string | null
    slotDurationDefault?: number
    minAdvanceMinutes?: number
    maxAdvanceDays?: number
    cancellationPolicyMin?: number
    noShowPolicy?: string | null
    holidayJson?: string
    scheduleJson?: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    courts?: CourtUncheckedCreateNestedManyWithoutClubInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutClubInput
    blocks?: BlockUncheckedCreateNestedManyWithoutClubInput
    pricingRules?: PricingRuleUncheckedCreateNestedManyWithoutClubInput
    licenses?: LicenseUncheckedCreateNestedManyWithoutClubInput
  }

  export type ClubUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    mapLink?: NullableStringFieldUpdateOperationsInput | string | null
    transferAlias?: NullableStringFieldUpdateOperationsInput | string | null
    transferCvuCbu?: NullableStringFieldUpdateOperationsInput | string | null
    slotDurationDefault?: IntFieldUpdateOperationsInput | number
    minAdvanceMinutes?: IntFieldUpdateOperationsInput | number
    maxAdvanceDays?: IntFieldUpdateOperationsInput | number
    cancellationPolicyMin?: IntFieldUpdateOperationsInput | number
    noShowPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    holidayJson?: StringFieldUpdateOperationsInput | string
    scheduleJson?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courts?: CourtUpdateManyWithoutClubNestedInput
    reservations?: ReservationUpdateManyWithoutClubNestedInput
    blocks?: BlockUpdateManyWithoutClubNestedInput
    pricingRules?: PricingRuleUpdateManyWithoutClubNestedInput
    licenses?: LicenseUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    mapLink?: NullableStringFieldUpdateOperationsInput | string | null
    transferAlias?: NullableStringFieldUpdateOperationsInput | string | null
    transferCvuCbu?: NullableStringFieldUpdateOperationsInput | string | null
    slotDurationDefault?: IntFieldUpdateOperationsInput | number
    minAdvanceMinutes?: IntFieldUpdateOperationsInput | number
    maxAdvanceDays?: IntFieldUpdateOperationsInput | number
    cancellationPolicyMin?: IntFieldUpdateOperationsInput | number
    noShowPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    holidayJson?: StringFieldUpdateOperationsInput | string
    scheduleJson?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courts?: CourtUncheckedUpdateManyWithoutClubNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutClubNestedInput
    blocks?: BlockUncheckedUpdateManyWithoutClubNestedInput
    pricingRules?: PricingRuleUncheckedUpdateManyWithoutClubNestedInput
    licenses?: LicenseUncheckedUpdateManyWithoutClubNestedInput
  }

  export type ClubCreateManyInput = {
    id?: string
    slug: string
    name: string
    address?: string | null
    whatsapp?: string | null
    mapLink?: string | null
    transferAlias?: string | null
    transferCvuCbu?: string | null
    slotDurationDefault?: number
    minAdvanceMinutes?: number
    maxAdvanceDays?: number
    cancellationPolicyMin?: number
    noShowPolicy?: string | null
    holidayJson?: string
    scheduleJson?: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClubUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    mapLink?: NullableStringFieldUpdateOperationsInput | string | null
    transferAlias?: NullableStringFieldUpdateOperationsInput | string | null
    transferCvuCbu?: NullableStringFieldUpdateOperationsInput | string | null
    slotDurationDefault?: IntFieldUpdateOperationsInput | number
    minAdvanceMinutes?: IntFieldUpdateOperationsInput | number
    maxAdvanceDays?: IntFieldUpdateOperationsInput | number
    cancellationPolicyMin?: IntFieldUpdateOperationsInput | number
    noShowPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    holidayJson?: StringFieldUpdateOperationsInput | string
    scheduleJson?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClubUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    mapLink?: NullableStringFieldUpdateOperationsInput | string | null
    transferAlias?: NullableStringFieldUpdateOperationsInput | string | null
    transferCvuCbu?: NullableStringFieldUpdateOperationsInput | string | null
    slotDurationDefault?: IntFieldUpdateOperationsInput | number
    minAdvanceMinutes?: IntFieldUpdateOperationsInput | number
    maxAdvanceDays?: IntFieldUpdateOperationsInput | number
    cancellationPolicyMin?: IntFieldUpdateOperationsInput | number
    noShowPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    holidayJson?: StringFieldUpdateOperationsInput | string
    scheduleJson?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourtCreateInput = {
    id?: string
    name: string
    active?: boolean
    basePrice?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    club: ClubCreateNestedOneWithoutCourtsInput
    reservations?: ReservationCreateNestedManyWithoutCourtInput
    blocks?: BlockCreateNestedManyWithoutCourtInput
  }

  export type CourtUncheckedCreateInput = {
    id?: string
    clubId: string
    name: string
    active?: boolean
    basePrice?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutCourtInput
    blocks?: BlockUncheckedCreateNestedManyWithoutCourtInput
  }

  export type CourtUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    basePrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    club?: ClubUpdateOneRequiredWithoutCourtsNestedInput
    reservations?: ReservationUpdateManyWithoutCourtNestedInput
    blocks?: BlockUpdateManyWithoutCourtNestedInput
  }

  export type CourtUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    basePrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutCourtNestedInput
    blocks?: BlockUncheckedUpdateManyWithoutCourtNestedInput
  }

  export type CourtCreateManyInput = {
    id?: string
    clubId: string
    name: string
    active?: boolean
    basePrice?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourtUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    basePrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourtUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    basePrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    role: $Enums.StaffRole
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    audits?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type StaffUserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    role: $Enums.StaffRole
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    audits?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type StaffUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audits?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type StaffUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audits?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type StaffUserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    role: $Enums.StaffRole
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateInput = {
    id?: string
    status?: $Enums.ReservationStatus
    startAt: Date | string
    endAt: Date | string
    holdExpiresAt?: Date | string | null
    customerName: string
    customerWhatsapp: string
    customerEmail?: string | null
    note?: string | null
    amount?: number
    createdByKind?: $Enums.CreatedByKind
    createdByStaffId?: string | null
    manageTokenHash: string
    manageTokenLastRotatedAt?: Date | string
    canceledAt?: Date | string | null
    canceledReason?: string | null
    noShowMarkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    club: ClubCreateNestedOneWithoutReservationsInput
    court: CourtCreateNestedOneWithoutReservationsInput
    payments?: PaymentCreateNestedManyWithoutReservationInput
    messages?: MessageLogCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateInput = {
    id?: string
    clubId: string
    courtId: string
    status?: $Enums.ReservationStatus
    startAt: Date | string
    endAt: Date | string
    holdExpiresAt?: Date | string | null
    customerName: string
    customerWhatsapp: string
    customerEmail?: string | null
    note?: string | null
    amount?: number
    createdByKind?: $Enums.CreatedByKind
    createdByStaffId?: string | null
    manageTokenHash: string
    manageTokenLastRotatedAt?: Date | string
    canceledAt?: Date | string | null
    canceledReason?: string | null
    noShowMarkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutReservationInput
    messages?: MessageLogUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerWhatsapp?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    createdByKind?: EnumCreatedByKindFieldUpdateOperationsInput | $Enums.CreatedByKind
    createdByStaffId?: NullableStringFieldUpdateOperationsInput | string | null
    manageTokenHash?: StringFieldUpdateOperationsInput | string
    manageTokenLastRotatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
    noShowMarkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    club?: ClubUpdateOneRequiredWithoutReservationsNestedInput
    court?: CourtUpdateOneRequiredWithoutReservationsNestedInput
    payments?: PaymentUpdateManyWithoutReservationNestedInput
    messages?: MessageLogUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    courtId?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerWhatsapp?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    createdByKind?: EnumCreatedByKindFieldUpdateOperationsInput | $Enums.CreatedByKind
    createdByStaffId?: NullableStringFieldUpdateOperationsInput | string | null
    manageTokenHash?: StringFieldUpdateOperationsInput | string
    manageTokenLastRotatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
    noShowMarkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutReservationNestedInput
    messages?: MessageLogUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationCreateManyInput = {
    id?: string
    clubId: string
    courtId: string
    status?: $Enums.ReservationStatus
    startAt: Date | string
    endAt: Date | string
    holdExpiresAt?: Date | string | null
    customerName: string
    customerWhatsapp: string
    customerEmail?: string | null
    note?: string | null
    amount?: number
    createdByKind?: $Enums.CreatedByKind
    createdByStaffId?: string | null
    manageTokenHash: string
    manageTokenLastRotatedAt?: Date | string
    canceledAt?: Date | string | null
    canceledReason?: string | null
    noShowMarkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerWhatsapp?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    createdByKind?: EnumCreatedByKindFieldUpdateOperationsInput | $Enums.CreatedByKind
    createdByStaffId?: NullableStringFieldUpdateOperationsInput | string | null
    manageTokenHash?: StringFieldUpdateOperationsInput | string
    manageTokenLastRotatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
    noShowMarkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    courtId?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerWhatsapp?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    createdByKind?: EnumCreatedByKindFieldUpdateOperationsInput | $Enums.CreatedByKind
    createdByStaffId?: NullableStringFieldUpdateOperationsInput | string | null
    manageTokenHash?: StringFieldUpdateOperationsInput | string
    manageTokenLastRotatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
    noShowMarkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockCreateInput = {
    id?: string
    startAt: Date | string
    endAt: Date | string
    reason: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    club: ClubCreateNestedOneWithoutBlocksInput
    court: CourtCreateNestedOneWithoutBlocksInput
  }

  export type BlockUncheckedCreateInput = {
    id?: string
    clubId: string
    courtId: string
    startAt: Date | string
    endAt: Date | string
    reason: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    club?: ClubUpdateOneRequiredWithoutBlocksNestedInput
    court?: CourtUpdateOneRequiredWithoutBlocksNestedInput
  }

  export type BlockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    courtId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockCreateManyInput = {
    id?: string
    clubId: string
    courtId: string
    startAt: Date | string
    endAt: Date | string
    reason: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    courtId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingRuleCreateInput = {
    id?: string
    courtId?: string | null
    dayOfWeek: number
    startMinute: number
    endMinute: number
    multiplier?: number
    fixedPrice?: number | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    club: ClubCreateNestedOneWithoutPricingRulesInput
  }

  export type PricingRuleUncheckedCreateInput = {
    id?: string
    clubId: string
    courtId?: string | null
    dayOfWeek: number
    startMinute: number
    endMinute: number
    multiplier?: number
    fixedPrice?: number | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courtId?: NullableStringFieldUpdateOperationsInput | string | null
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startMinute?: IntFieldUpdateOperationsInput | number
    endMinute?: IntFieldUpdateOperationsInput | number
    multiplier?: FloatFieldUpdateOperationsInput | number
    fixedPrice?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    club?: ClubUpdateOneRequiredWithoutPricingRulesNestedInput
  }

  export type PricingRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    courtId?: NullableStringFieldUpdateOperationsInput | string | null
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startMinute?: IntFieldUpdateOperationsInput | number
    endMinute?: IntFieldUpdateOperationsInput | number
    multiplier?: FloatFieldUpdateOperationsInput | number
    fixedPrice?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingRuleCreateManyInput = {
    id?: string
    clubId: string
    courtId?: string | null
    dayOfWeek: number
    startMinute: number
    endMinute: number
    multiplier?: number
    fixedPrice?: number | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    courtId?: NullableStringFieldUpdateOperationsInput | string | null
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startMinute?: IntFieldUpdateOperationsInput | number
    endMinute?: IntFieldUpdateOperationsInput | number
    multiplier?: FloatFieldUpdateOperationsInput | number
    fixedPrice?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    courtId?: NullableStringFieldUpdateOperationsInput | string | null
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startMinute?: IntFieldUpdateOperationsInput | number
    endMinute?: IntFieldUpdateOperationsInput | number
    multiplier?: FloatFieldUpdateOperationsInput | number
    fixedPrice?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    method: string
    status?: $Enums.PaymentStatus
    note?: string | null
    registeredById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservation: ReservationCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    reservationId: string
    amount: number
    method: string
    status?: $Enums.PaymentStatus
    note?: string | null
    registeredById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    registeredById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservation?: ReservationUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    registeredById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    reservationId: string
    amount: number
    method: string
    status?: $Enums.PaymentStatus
    note?: string | null
    registeredById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    registeredById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    registeredById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    entity: string
    entityId: string
    action: string
    beforeJson?: string | null
    afterJson?: string | null
    createdAt?: Date | string
    actor?: StaffUserCreateNestedOneWithoutAuditsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    actorUserId?: string | null
    entity: string
    entityId: string
    action: string
    beforeJson?: string | null
    afterJson?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    beforeJson?: NullableStringFieldUpdateOperationsInput | string | null
    afterJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: StaffUserUpdateOneWithoutAuditsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorUserId?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    beforeJson?: NullableStringFieldUpdateOperationsInput | string | null
    afterJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    actorUserId?: string | null
    entity: string
    entityId: string
    action: string
    beforeJson?: string | null
    afterJson?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    beforeJson?: NullableStringFieldUpdateOperationsInput | string | null
    afterJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorUserId?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    beforeJson?: NullableStringFieldUpdateOperationsInput | string | null
    afterJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageLogCreateInput = {
    id?: string
    channel: string
    destination: string
    payload: string
    success?: boolean
    createdAt?: Date | string
    reservation: ReservationCreateNestedOneWithoutMessagesInput
  }

  export type MessageLogUncheckedCreateInput = {
    id?: string
    reservationId: string
    channel: string
    destination: string
    payload: string
    success?: boolean
    createdAt?: Date | string
  }

  export type MessageLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservation?: ReservationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageLogCreateManyInput = {
    id?: string
    reservationId: string
    channel: string
    destination: string
    payload: string
    success?: boolean
    createdAt?: Date | string
  }

  export type MessageLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseCreateInput = {
    id?: string
    machineHash: string
    licenseKey: string
    validUntil?: Date | string | null
    active?: boolean
    metadataJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    club?: ClubCreateNestedOneWithoutLicensesInput
  }

  export type LicenseUncheckedCreateInput = {
    id?: string
    clubId?: string | null
    machineHash: string
    licenseKey: string
    validUntil?: Date | string | null
    active?: boolean
    metadataJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    machineHash?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    metadataJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    club?: ClubUpdateOneWithoutLicensesNestedInput
  }

  export type LicenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    machineHash?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    metadataJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseCreateManyInput = {
    id?: string
    clubId?: string | null
    machineHash: string
    licenseKey: string
    validUntil?: Date | string | null
    active?: boolean
    metadataJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    machineHash?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    metadataJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    machineHash?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    metadataJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CourtListRelationFilter = {
    every?: CourtWhereInput
    some?: CourtWhereInput
    none?: CourtWhereInput
  }

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type BlockListRelationFilter = {
    every?: BlockWhereInput
    some?: BlockWhereInput
    none?: BlockWhereInput
  }

  export type PricingRuleListRelationFilter = {
    every?: PricingRuleWhereInput
    some?: PricingRuleWhereInput
    none?: PricingRuleWhereInput
  }

  export type LicenseListRelationFilter = {
    every?: LicenseWhereInput
    some?: LicenseWhereInput
    none?: LicenseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CourtOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PricingRuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LicenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClubCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    address?: SortOrder
    whatsapp?: SortOrder
    mapLink?: SortOrder
    transferAlias?: SortOrder
    transferCvuCbu?: SortOrder
    slotDurationDefault?: SortOrder
    minAdvanceMinutes?: SortOrder
    maxAdvanceDays?: SortOrder
    cancellationPolicyMin?: SortOrder
    noShowPolicy?: SortOrder
    holidayJson?: SortOrder
    scheduleJson?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClubAvgOrderByAggregateInput = {
    slotDurationDefault?: SortOrder
    minAdvanceMinutes?: SortOrder
    maxAdvanceDays?: SortOrder
    cancellationPolicyMin?: SortOrder
  }

  export type ClubMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    address?: SortOrder
    whatsapp?: SortOrder
    mapLink?: SortOrder
    transferAlias?: SortOrder
    transferCvuCbu?: SortOrder
    slotDurationDefault?: SortOrder
    minAdvanceMinutes?: SortOrder
    maxAdvanceDays?: SortOrder
    cancellationPolicyMin?: SortOrder
    noShowPolicy?: SortOrder
    holidayJson?: SortOrder
    scheduleJson?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClubMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    address?: SortOrder
    whatsapp?: SortOrder
    mapLink?: SortOrder
    transferAlias?: SortOrder
    transferCvuCbu?: SortOrder
    slotDurationDefault?: SortOrder
    minAdvanceMinutes?: SortOrder
    maxAdvanceDays?: SortOrder
    cancellationPolicyMin?: SortOrder
    noShowPolicy?: SortOrder
    holidayJson?: SortOrder
    scheduleJson?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClubSumOrderByAggregateInput = {
    slotDurationDefault?: SortOrder
    minAdvanceMinutes?: SortOrder
    maxAdvanceDays?: SortOrder
    cancellationPolicyMin?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ClubScalarRelationFilter = {
    is?: ClubWhereInput
    isNot?: ClubWhereInput
  }

  export type CourtCountOrderByAggregateInput = {
    id?: SortOrder
    clubId?: SortOrder
    name?: SortOrder
    active?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourtAvgOrderByAggregateInput = {
    basePrice?: SortOrder
  }

  export type CourtMaxOrderByAggregateInput = {
    id?: SortOrder
    clubId?: SortOrder
    name?: SortOrder
    active?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourtMinOrderByAggregateInput = {
    id?: SortOrder
    clubId?: SortOrder
    name?: SortOrder
    active?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourtSumOrderByAggregateInput = {
    basePrice?: SortOrder
  }

  export type EnumStaffRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffRole | EnumStaffRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StaffRole[]
    notIn?: $Enums.StaffRole[]
    not?: NestedEnumStaffRoleFilter<$PrismaModel> | $Enums.StaffRole
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaffUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStaffRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffRole | EnumStaffRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StaffRole[]
    notIn?: $Enums.StaffRole[]
    not?: NestedEnumStaffRoleWithAggregatesFilter<$PrismaModel> | $Enums.StaffRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStaffRoleFilter<$PrismaModel>
    _max?: NestedEnumStaffRoleFilter<$PrismaModel>
  }

  export type EnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[]
    notIn?: $Enums.ReservationStatus[]
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumCreatedByKindFilter<$PrismaModel = never> = {
    equals?: $Enums.CreatedByKind | EnumCreatedByKindFieldRefInput<$PrismaModel>
    in?: $Enums.CreatedByKind[]
    notIn?: $Enums.CreatedByKind[]
    not?: NestedEnumCreatedByKindFilter<$PrismaModel> | $Enums.CreatedByKind
  }

  export type CourtScalarRelationFilter = {
    is?: CourtWhereInput
    isNot?: CourtWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type MessageLogListRelationFilter = {
    every?: MessageLogWhereInput
    some?: MessageLogWhereInput
    none?: MessageLogWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationCountOrderByAggregateInput = {
    id?: SortOrder
    clubId?: SortOrder
    courtId?: SortOrder
    status?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    holdExpiresAt?: SortOrder
    customerName?: SortOrder
    customerWhatsapp?: SortOrder
    customerEmail?: SortOrder
    note?: SortOrder
    amount?: SortOrder
    createdByKind?: SortOrder
    createdByStaffId?: SortOrder
    manageTokenHash?: SortOrder
    manageTokenLastRotatedAt?: SortOrder
    canceledAt?: SortOrder
    canceledReason?: SortOrder
    noShowMarkedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    clubId?: SortOrder
    courtId?: SortOrder
    status?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    holdExpiresAt?: SortOrder
    customerName?: SortOrder
    customerWhatsapp?: SortOrder
    customerEmail?: SortOrder
    note?: SortOrder
    amount?: SortOrder
    createdByKind?: SortOrder
    createdByStaffId?: SortOrder
    manageTokenHash?: SortOrder
    manageTokenLastRotatedAt?: SortOrder
    canceledAt?: SortOrder
    canceledReason?: SortOrder
    noShowMarkedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    id?: SortOrder
    clubId?: SortOrder
    courtId?: SortOrder
    status?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    holdExpiresAt?: SortOrder
    customerName?: SortOrder
    customerWhatsapp?: SortOrder
    customerEmail?: SortOrder
    note?: SortOrder
    amount?: SortOrder
    createdByKind?: SortOrder
    createdByStaffId?: SortOrder
    manageTokenHash?: SortOrder
    manageTokenLastRotatedAt?: SortOrder
    canceledAt?: SortOrder
    canceledReason?: SortOrder
    noShowMarkedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[]
    notIn?: $Enums.ReservationStatus[]
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumCreatedByKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreatedByKind | EnumCreatedByKindFieldRefInput<$PrismaModel>
    in?: $Enums.CreatedByKind[]
    notIn?: $Enums.CreatedByKind[]
    not?: NestedEnumCreatedByKindWithAggregatesFilter<$PrismaModel> | $Enums.CreatedByKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCreatedByKindFilter<$PrismaModel>
    _max?: NestedEnumCreatedByKindFilter<$PrismaModel>
  }

  export type BlockCountOrderByAggregateInput = {
    id?: SortOrder
    clubId?: SortOrder
    courtId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    reason?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlockMaxOrderByAggregateInput = {
    id?: SortOrder
    clubId?: SortOrder
    courtId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    reason?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlockMinOrderByAggregateInput = {
    id?: SortOrder
    clubId?: SortOrder
    courtId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    reason?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PricingRuleCountOrderByAggregateInput = {
    id?: SortOrder
    clubId?: SortOrder
    courtId?: SortOrder
    dayOfWeek?: SortOrder
    startMinute?: SortOrder
    endMinute?: SortOrder
    multiplier?: SortOrder
    fixedPrice?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingRuleAvgOrderByAggregateInput = {
    dayOfWeek?: SortOrder
    startMinute?: SortOrder
    endMinute?: SortOrder
    multiplier?: SortOrder
    fixedPrice?: SortOrder
  }

  export type PricingRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    clubId?: SortOrder
    courtId?: SortOrder
    dayOfWeek?: SortOrder
    startMinute?: SortOrder
    endMinute?: SortOrder
    multiplier?: SortOrder
    fixedPrice?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingRuleMinOrderByAggregateInput = {
    id?: SortOrder
    clubId?: SortOrder
    courtId?: SortOrder
    dayOfWeek?: SortOrder
    startMinute?: SortOrder
    endMinute?: SortOrder
    multiplier?: SortOrder
    fixedPrice?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingRuleSumOrderByAggregateInput = {
    dayOfWeek?: SortOrder
    startMinute?: SortOrder
    endMinute?: SortOrder
    multiplier?: SortOrder
    fixedPrice?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type ReservationScalarRelationFilter = {
    is?: ReservationWhereInput
    isNot?: ReservationWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    note?: SortOrder
    registeredById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    note?: SortOrder
    registeredById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    note?: SortOrder
    registeredById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type StaffUserNullableScalarRelationFilter = {
    is?: StaffUserWhereInput | null
    isNot?: StaffUserWhereInput | null
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    actorUserId?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    beforeJson?: SortOrder
    afterJson?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    actorUserId?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    beforeJson?: SortOrder
    afterJson?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    actorUserId?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    beforeJson?: SortOrder
    afterJson?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageLogCountOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    channel?: SortOrder
    destination?: SortOrder
    payload?: SortOrder
    success?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageLogMaxOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    channel?: SortOrder
    destination?: SortOrder
    payload?: SortOrder
    success?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageLogMinOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    channel?: SortOrder
    destination?: SortOrder
    payload?: SortOrder
    success?: SortOrder
    createdAt?: SortOrder
  }

  export type ClubNullableScalarRelationFilter = {
    is?: ClubWhereInput | null
    isNot?: ClubWhereInput | null
  }

  export type LicenseCountOrderByAggregateInput = {
    id?: SortOrder
    clubId?: SortOrder
    machineHash?: SortOrder
    licenseKey?: SortOrder
    validUntil?: SortOrder
    active?: SortOrder
    metadataJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicenseMaxOrderByAggregateInput = {
    id?: SortOrder
    clubId?: SortOrder
    machineHash?: SortOrder
    licenseKey?: SortOrder
    validUntil?: SortOrder
    active?: SortOrder
    metadataJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicenseMinOrderByAggregateInput = {
    id?: SortOrder
    clubId?: SortOrder
    machineHash?: SortOrder
    licenseKey?: SortOrder
    validUntil?: SortOrder
    active?: SortOrder
    metadataJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourtCreateNestedManyWithoutClubInput = {
    create?: XOR<CourtCreateWithoutClubInput, CourtUncheckedCreateWithoutClubInput> | CourtCreateWithoutClubInput[] | CourtUncheckedCreateWithoutClubInput[]
    connectOrCreate?: CourtCreateOrConnectWithoutClubInput | CourtCreateOrConnectWithoutClubInput[]
    createMany?: CourtCreateManyClubInputEnvelope
    connect?: CourtWhereUniqueInput | CourtWhereUniqueInput[]
  }

  export type ReservationCreateNestedManyWithoutClubInput = {
    create?: XOR<ReservationCreateWithoutClubInput, ReservationUncheckedCreateWithoutClubInput> | ReservationCreateWithoutClubInput[] | ReservationUncheckedCreateWithoutClubInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutClubInput | ReservationCreateOrConnectWithoutClubInput[]
    createMany?: ReservationCreateManyClubInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type BlockCreateNestedManyWithoutClubInput = {
    create?: XOR<BlockCreateWithoutClubInput, BlockUncheckedCreateWithoutClubInput> | BlockCreateWithoutClubInput[] | BlockUncheckedCreateWithoutClubInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutClubInput | BlockCreateOrConnectWithoutClubInput[]
    createMany?: BlockCreateManyClubInputEnvelope
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
  }

  export type PricingRuleCreateNestedManyWithoutClubInput = {
    create?: XOR<PricingRuleCreateWithoutClubInput, PricingRuleUncheckedCreateWithoutClubInput> | PricingRuleCreateWithoutClubInput[] | PricingRuleUncheckedCreateWithoutClubInput[]
    connectOrCreate?: PricingRuleCreateOrConnectWithoutClubInput | PricingRuleCreateOrConnectWithoutClubInput[]
    createMany?: PricingRuleCreateManyClubInputEnvelope
    connect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
  }

  export type LicenseCreateNestedManyWithoutClubInput = {
    create?: XOR<LicenseCreateWithoutClubInput, LicenseUncheckedCreateWithoutClubInput> | LicenseCreateWithoutClubInput[] | LicenseUncheckedCreateWithoutClubInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutClubInput | LicenseCreateOrConnectWithoutClubInput[]
    createMany?: LicenseCreateManyClubInputEnvelope
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
  }

  export type CourtUncheckedCreateNestedManyWithoutClubInput = {
    create?: XOR<CourtCreateWithoutClubInput, CourtUncheckedCreateWithoutClubInput> | CourtCreateWithoutClubInput[] | CourtUncheckedCreateWithoutClubInput[]
    connectOrCreate?: CourtCreateOrConnectWithoutClubInput | CourtCreateOrConnectWithoutClubInput[]
    createMany?: CourtCreateManyClubInputEnvelope
    connect?: CourtWhereUniqueInput | CourtWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutClubInput = {
    create?: XOR<ReservationCreateWithoutClubInput, ReservationUncheckedCreateWithoutClubInput> | ReservationCreateWithoutClubInput[] | ReservationUncheckedCreateWithoutClubInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutClubInput | ReservationCreateOrConnectWithoutClubInput[]
    createMany?: ReservationCreateManyClubInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type BlockUncheckedCreateNestedManyWithoutClubInput = {
    create?: XOR<BlockCreateWithoutClubInput, BlockUncheckedCreateWithoutClubInput> | BlockCreateWithoutClubInput[] | BlockUncheckedCreateWithoutClubInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutClubInput | BlockCreateOrConnectWithoutClubInput[]
    createMany?: BlockCreateManyClubInputEnvelope
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
  }

  export type PricingRuleUncheckedCreateNestedManyWithoutClubInput = {
    create?: XOR<PricingRuleCreateWithoutClubInput, PricingRuleUncheckedCreateWithoutClubInput> | PricingRuleCreateWithoutClubInput[] | PricingRuleUncheckedCreateWithoutClubInput[]
    connectOrCreate?: PricingRuleCreateOrConnectWithoutClubInput | PricingRuleCreateOrConnectWithoutClubInput[]
    createMany?: PricingRuleCreateManyClubInputEnvelope
    connect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
  }

  export type LicenseUncheckedCreateNestedManyWithoutClubInput = {
    create?: XOR<LicenseCreateWithoutClubInput, LicenseUncheckedCreateWithoutClubInput> | LicenseCreateWithoutClubInput[] | LicenseUncheckedCreateWithoutClubInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutClubInput | LicenseCreateOrConnectWithoutClubInput[]
    createMany?: LicenseCreateManyClubInputEnvelope
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CourtUpdateManyWithoutClubNestedInput = {
    create?: XOR<CourtCreateWithoutClubInput, CourtUncheckedCreateWithoutClubInput> | CourtCreateWithoutClubInput[] | CourtUncheckedCreateWithoutClubInput[]
    connectOrCreate?: CourtCreateOrConnectWithoutClubInput | CourtCreateOrConnectWithoutClubInput[]
    upsert?: CourtUpsertWithWhereUniqueWithoutClubInput | CourtUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: CourtCreateManyClubInputEnvelope
    set?: CourtWhereUniqueInput | CourtWhereUniqueInput[]
    disconnect?: CourtWhereUniqueInput | CourtWhereUniqueInput[]
    delete?: CourtWhereUniqueInput | CourtWhereUniqueInput[]
    connect?: CourtWhereUniqueInput | CourtWhereUniqueInput[]
    update?: CourtUpdateWithWhereUniqueWithoutClubInput | CourtUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: CourtUpdateManyWithWhereWithoutClubInput | CourtUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: CourtScalarWhereInput | CourtScalarWhereInput[]
  }

  export type ReservationUpdateManyWithoutClubNestedInput = {
    create?: XOR<ReservationCreateWithoutClubInput, ReservationUncheckedCreateWithoutClubInput> | ReservationCreateWithoutClubInput[] | ReservationUncheckedCreateWithoutClubInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutClubInput | ReservationCreateOrConnectWithoutClubInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutClubInput | ReservationUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: ReservationCreateManyClubInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutClubInput | ReservationUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutClubInput | ReservationUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type BlockUpdateManyWithoutClubNestedInput = {
    create?: XOR<BlockCreateWithoutClubInput, BlockUncheckedCreateWithoutClubInput> | BlockCreateWithoutClubInput[] | BlockUncheckedCreateWithoutClubInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutClubInput | BlockCreateOrConnectWithoutClubInput[]
    upsert?: BlockUpsertWithWhereUniqueWithoutClubInput | BlockUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: BlockCreateManyClubInputEnvelope
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    update?: BlockUpdateWithWhereUniqueWithoutClubInput | BlockUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: BlockUpdateManyWithWhereWithoutClubInput | BlockUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[]
  }

  export type PricingRuleUpdateManyWithoutClubNestedInput = {
    create?: XOR<PricingRuleCreateWithoutClubInput, PricingRuleUncheckedCreateWithoutClubInput> | PricingRuleCreateWithoutClubInput[] | PricingRuleUncheckedCreateWithoutClubInput[]
    connectOrCreate?: PricingRuleCreateOrConnectWithoutClubInput | PricingRuleCreateOrConnectWithoutClubInput[]
    upsert?: PricingRuleUpsertWithWhereUniqueWithoutClubInput | PricingRuleUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: PricingRuleCreateManyClubInputEnvelope
    set?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    disconnect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    delete?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    connect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    update?: PricingRuleUpdateWithWhereUniqueWithoutClubInput | PricingRuleUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: PricingRuleUpdateManyWithWhereWithoutClubInput | PricingRuleUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: PricingRuleScalarWhereInput | PricingRuleScalarWhereInput[]
  }

  export type LicenseUpdateManyWithoutClubNestedInput = {
    create?: XOR<LicenseCreateWithoutClubInput, LicenseUncheckedCreateWithoutClubInput> | LicenseCreateWithoutClubInput[] | LicenseUncheckedCreateWithoutClubInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutClubInput | LicenseCreateOrConnectWithoutClubInput[]
    upsert?: LicenseUpsertWithWhereUniqueWithoutClubInput | LicenseUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: LicenseCreateManyClubInputEnvelope
    set?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    disconnect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    delete?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    update?: LicenseUpdateWithWhereUniqueWithoutClubInput | LicenseUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: LicenseUpdateManyWithWhereWithoutClubInput | LicenseUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
  }

  export type CourtUncheckedUpdateManyWithoutClubNestedInput = {
    create?: XOR<CourtCreateWithoutClubInput, CourtUncheckedCreateWithoutClubInput> | CourtCreateWithoutClubInput[] | CourtUncheckedCreateWithoutClubInput[]
    connectOrCreate?: CourtCreateOrConnectWithoutClubInput | CourtCreateOrConnectWithoutClubInput[]
    upsert?: CourtUpsertWithWhereUniqueWithoutClubInput | CourtUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: CourtCreateManyClubInputEnvelope
    set?: CourtWhereUniqueInput | CourtWhereUniqueInput[]
    disconnect?: CourtWhereUniqueInput | CourtWhereUniqueInput[]
    delete?: CourtWhereUniqueInput | CourtWhereUniqueInput[]
    connect?: CourtWhereUniqueInput | CourtWhereUniqueInput[]
    update?: CourtUpdateWithWhereUniqueWithoutClubInput | CourtUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: CourtUpdateManyWithWhereWithoutClubInput | CourtUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: CourtScalarWhereInput | CourtScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutClubNestedInput = {
    create?: XOR<ReservationCreateWithoutClubInput, ReservationUncheckedCreateWithoutClubInput> | ReservationCreateWithoutClubInput[] | ReservationUncheckedCreateWithoutClubInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutClubInput | ReservationCreateOrConnectWithoutClubInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutClubInput | ReservationUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: ReservationCreateManyClubInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutClubInput | ReservationUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutClubInput | ReservationUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type BlockUncheckedUpdateManyWithoutClubNestedInput = {
    create?: XOR<BlockCreateWithoutClubInput, BlockUncheckedCreateWithoutClubInput> | BlockCreateWithoutClubInput[] | BlockUncheckedCreateWithoutClubInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutClubInput | BlockCreateOrConnectWithoutClubInput[]
    upsert?: BlockUpsertWithWhereUniqueWithoutClubInput | BlockUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: BlockCreateManyClubInputEnvelope
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    update?: BlockUpdateWithWhereUniqueWithoutClubInput | BlockUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: BlockUpdateManyWithWhereWithoutClubInput | BlockUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[]
  }

  export type PricingRuleUncheckedUpdateManyWithoutClubNestedInput = {
    create?: XOR<PricingRuleCreateWithoutClubInput, PricingRuleUncheckedCreateWithoutClubInput> | PricingRuleCreateWithoutClubInput[] | PricingRuleUncheckedCreateWithoutClubInput[]
    connectOrCreate?: PricingRuleCreateOrConnectWithoutClubInput | PricingRuleCreateOrConnectWithoutClubInput[]
    upsert?: PricingRuleUpsertWithWhereUniqueWithoutClubInput | PricingRuleUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: PricingRuleCreateManyClubInputEnvelope
    set?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    disconnect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    delete?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    connect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    update?: PricingRuleUpdateWithWhereUniqueWithoutClubInput | PricingRuleUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: PricingRuleUpdateManyWithWhereWithoutClubInput | PricingRuleUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: PricingRuleScalarWhereInput | PricingRuleScalarWhereInput[]
  }

  export type LicenseUncheckedUpdateManyWithoutClubNestedInput = {
    create?: XOR<LicenseCreateWithoutClubInput, LicenseUncheckedCreateWithoutClubInput> | LicenseCreateWithoutClubInput[] | LicenseUncheckedCreateWithoutClubInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutClubInput | LicenseCreateOrConnectWithoutClubInput[]
    upsert?: LicenseUpsertWithWhereUniqueWithoutClubInput | LicenseUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: LicenseCreateManyClubInputEnvelope
    set?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    disconnect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    delete?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    update?: LicenseUpdateWithWhereUniqueWithoutClubInput | LicenseUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: LicenseUpdateManyWithWhereWithoutClubInput | LicenseUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
  }

  export type ClubCreateNestedOneWithoutCourtsInput = {
    create?: XOR<ClubCreateWithoutCourtsInput, ClubUncheckedCreateWithoutCourtsInput>
    connectOrCreate?: ClubCreateOrConnectWithoutCourtsInput
    connect?: ClubWhereUniqueInput
  }

  export type ReservationCreateNestedManyWithoutCourtInput = {
    create?: XOR<ReservationCreateWithoutCourtInput, ReservationUncheckedCreateWithoutCourtInput> | ReservationCreateWithoutCourtInput[] | ReservationUncheckedCreateWithoutCourtInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutCourtInput | ReservationCreateOrConnectWithoutCourtInput[]
    createMany?: ReservationCreateManyCourtInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type BlockCreateNestedManyWithoutCourtInput = {
    create?: XOR<BlockCreateWithoutCourtInput, BlockUncheckedCreateWithoutCourtInput> | BlockCreateWithoutCourtInput[] | BlockUncheckedCreateWithoutCourtInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutCourtInput | BlockCreateOrConnectWithoutCourtInput[]
    createMany?: BlockCreateManyCourtInputEnvelope
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutCourtInput = {
    create?: XOR<ReservationCreateWithoutCourtInput, ReservationUncheckedCreateWithoutCourtInput> | ReservationCreateWithoutCourtInput[] | ReservationUncheckedCreateWithoutCourtInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutCourtInput | ReservationCreateOrConnectWithoutCourtInput[]
    createMany?: ReservationCreateManyCourtInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type BlockUncheckedCreateNestedManyWithoutCourtInput = {
    create?: XOR<BlockCreateWithoutCourtInput, BlockUncheckedCreateWithoutCourtInput> | BlockCreateWithoutCourtInput[] | BlockUncheckedCreateWithoutCourtInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutCourtInput | BlockCreateOrConnectWithoutCourtInput[]
    createMany?: BlockCreateManyCourtInputEnvelope
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
  }

  export type ClubUpdateOneRequiredWithoutCourtsNestedInput = {
    create?: XOR<ClubCreateWithoutCourtsInput, ClubUncheckedCreateWithoutCourtsInput>
    connectOrCreate?: ClubCreateOrConnectWithoutCourtsInput
    upsert?: ClubUpsertWithoutCourtsInput
    connect?: ClubWhereUniqueInput
    update?: XOR<XOR<ClubUpdateToOneWithWhereWithoutCourtsInput, ClubUpdateWithoutCourtsInput>, ClubUncheckedUpdateWithoutCourtsInput>
  }

  export type ReservationUpdateManyWithoutCourtNestedInput = {
    create?: XOR<ReservationCreateWithoutCourtInput, ReservationUncheckedCreateWithoutCourtInput> | ReservationCreateWithoutCourtInput[] | ReservationUncheckedCreateWithoutCourtInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutCourtInput | ReservationCreateOrConnectWithoutCourtInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutCourtInput | ReservationUpsertWithWhereUniqueWithoutCourtInput[]
    createMany?: ReservationCreateManyCourtInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutCourtInput | ReservationUpdateWithWhereUniqueWithoutCourtInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutCourtInput | ReservationUpdateManyWithWhereWithoutCourtInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type BlockUpdateManyWithoutCourtNestedInput = {
    create?: XOR<BlockCreateWithoutCourtInput, BlockUncheckedCreateWithoutCourtInput> | BlockCreateWithoutCourtInput[] | BlockUncheckedCreateWithoutCourtInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutCourtInput | BlockCreateOrConnectWithoutCourtInput[]
    upsert?: BlockUpsertWithWhereUniqueWithoutCourtInput | BlockUpsertWithWhereUniqueWithoutCourtInput[]
    createMany?: BlockCreateManyCourtInputEnvelope
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    update?: BlockUpdateWithWhereUniqueWithoutCourtInput | BlockUpdateWithWhereUniqueWithoutCourtInput[]
    updateMany?: BlockUpdateManyWithWhereWithoutCourtInput | BlockUpdateManyWithWhereWithoutCourtInput[]
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutCourtNestedInput = {
    create?: XOR<ReservationCreateWithoutCourtInput, ReservationUncheckedCreateWithoutCourtInput> | ReservationCreateWithoutCourtInput[] | ReservationUncheckedCreateWithoutCourtInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutCourtInput | ReservationCreateOrConnectWithoutCourtInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutCourtInput | ReservationUpsertWithWhereUniqueWithoutCourtInput[]
    createMany?: ReservationCreateManyCourtInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutCourtInput | ReservationUpdateWithWhereUniqueWithoutCourtInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutCourtInput | ReservationUpdateManyWithWhereWithoutCourtInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type BlockUncheckedUpdateManyWithoutCourtNestedInput = {
    create?: XOR<BlockCreateWithoutCourtInput, BlockUncheckedCreateWithoutCourtInput> | BlockCreateWithoutCourtInput[] | BlockUncheckedCreateWithoutCourtInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutCourtInput | BlockCreateOrConnectWithoutCourtInput[]
    upsert?: BlockUpsertWithWhereUniqueWithoutCourtInput | BlockUpsertWithWhereUniqueWithoutCourtInput[]
    createMany?: BlockCreateManyCourtInputEnvelope
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    update?: BlockUpdateWithWhereUniqueWithoutCourtInput | BlockUpdateWithWhereUniqueWithoutCourtInput[]
    updateMany?: BlockUpdateManyWithWhereWithoutCourtInput | BlockUpdateManyWithWhereWithoutCourtInput[]
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[]
  }

  export type AuditLogCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type EnumStaffRoleFieldUpdateOperationsInput = {
    set?: $Enums.StaffRole
  }

  export type AuditLogUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorInput | AuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorInput | AuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorInput | AuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorInput | AuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorInput | AuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorInput | AuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type ClubCreateNestedOneWithoutReservationsInput = {
    create?: XOR<ClubCreateWithoutReservationsInput, ClubUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: ClubCreateOrConnectWithoutReservationsInput
    connect?: ClubWhereUniqueInput
  }

  export type CourtCreateNestedOneWithoutReservationsInput = {
    create?: XOR<CourtCreateWithoutReservationsInput, CourtUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: CourtCreateOrConnectWithoutReservationsInput
    connect?: CourtWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutReservationInput = {
    create?: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput> | PaymentCreateWithoutReservationInput[] | PaymentUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutReservationInput | PaymentCreateOrConnectWithoutReservationInput[]
    createMany?: PaymentCreateManyReservationInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type MessageLogCreateNestedManyWithoutReservationInput = {
    create?: XOR<MessageLogCreateWithoutReservationInput, MessageLogUncheckedCreateWithoutReservationInput> | MessageLogCreateWithoutReservationInput[] | MessageLogUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: MessageLogCreateOrConnectWithoutReservationInput | MessageLogCreateOrConnectWithoutReservationInput[]
    createMany?: MessageLogCreateManyReservationInputEnvelope
    connect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutReservationInput = {
    create?: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput> | PaymentCreateWithoutReservationInput[] | PaymentUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutReservationInput | PaymentCreateOrConnectWithoutReservationInput[]
    createMany?: PaymentCreateManyReservationInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type MessageLogUncheckedCreateNestedManyWithoutReservationInput = {
    create?: XOR<MessageLogCreateWithoutReservationInput, MessageLogUncheckedCreateWithoutReservationInput> | MessageLogCreateWithoutReservationInput[] | MessageLogUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: MessageLogCreateOrConnectWithoutReservationInput | MessageLogCreateOrConnectWithoutReservationInput[]
    createMany?: MessageLogCreateManyReservationInputEnvelope
    connect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
  }

  export type EnumReservationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReservationStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumCreatedByKindFieldUpdateOperationsInput = {
    set?: $Enums.CreatedByKind
  }

  export type ClubUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<ClubCreateWithoutReservationsInput, ClubUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: ClubCreateOrConnectWithoutReservationsInput
    upsert?: ClubUpsertWithoutReservationsInput
    connect?: ClubWhereUniqueInput
    update?: XOR<XOR<ClubUpdateToOneWithWhereWithoutReservationsInput, ClubUpdateWithoutReservationsInput>, ClubUncheckedUpdateWithoutReservationsInput>
  }

  export type CourtUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<CourtCreateWithoutReservationsInput, CourtUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: CourtCreateOrConnectWithoutReservationsInput
    upsert?: CourtUpsertWithoutReservationsInput
    connect?: CourtWhereUniqueInput
    update?: XOR<XOR<CourtUpdateToOneWithWhereWithoutReservationsInput, CourtUpdateWithoutReservationsInput>, CourtUncheckedUpdateWithoutReservationsInput>
  }

  export type PaymentUpdateManyWithoutReservationNestedInput = {
    create?: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput> | PaymentCreateWithoutReservationInput[] | PaymentUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutReservationInput | PaymentCreateOrConnectWithoutReservationInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutReservationInput | PaymentUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: PaymentCreateManyReservationInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutReservationInput | PaymentUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutReservationInput | PaymentUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type MessageLogUpdateManyWithoutReservationNestedInput = {
    create?: XOR<MessageLogCreateWithoutReservationInput, MessageLogUncheckedCreateWithoutReservationInput> | MessageLogCreateWithoutReservationInput[] | MessageLogUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: MessageLogCreateOrConnectWithoutReservationInput | MessageLogCreateOrConnectWithoutReservationInput[]
    upsert?: MessageLogUpsertWithWhereUniqueWithoutReservationInput | MessageLogUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: MessageLogCreateManyReservationInputEnvelope
    set?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    disconnect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    delete?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    connect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    update?: MessageLogUpdateWithWhereUniqueWithoutReservationInput | MessageLogUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: MessageLogUpdateManyWithWhereWithoutReservationInput | MessageLogUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: MessageLogScalarWhereInput | MessageLogScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutReservationNestedInput = {
    create?: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput> | PaymentCreateWithoutReservationInput[] | PaymentUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutReservationInput | PaymentCreateOrConnectWithoutReservationInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutReservationInput | PaymentUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: PaymentCreateManyReservationInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutReservationInput | PaymentUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutReservationInput | PaymentUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type MessageLogUncheckedUpdateManyWithoutReservationNestedInput = {
    create?: XOR<MessageLogCreateWithoutReservationInput, MessageLogUncheckedCreateWithoutReservationInput> | MessageLogCreateWithoutReservationInput[] | MessageLogUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: MessageLogCreateOrConnectWithoutReservationInput | MessageLogCreateOrConnectWithoutReservationInput[]
    upsert?: MessageLogUpsertWithWhereUniqueWithoutReservationInput | MessageLogUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: MessageLogCreateManyReservationInputEnvelope
    set?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    disconnect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    delete?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    connect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    update?: MessageLogUpdateWithWhereUniqueWithoutReservationInput | MessageLogUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: MessageLogUpdateManyWithWhereWithoutReservationInput | MessageLogUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: MessageLogScalarWhereInput | MessageLogScalarWhereInput[]
  }

  export type ClubCreateNestedOneWithoutBlocksInput = {
    create?: XOR<ClubCreateWithoutBlocksInput, ClubUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: ClubCreateOrConnectWithoutBlocksInput
    connect?: ClubWhereUniqueInput
  }

  export type CourtCreateNestedOneWithoutBlocksInput = {
    create?: XOR<CourtCreateWithoutBlocksInput, CourtUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: CourtCreateOrConnectWithoutBlocksInput
    connect?: CourtWhereUniqueInput
  }

  export type ClubUpdateOneRequiredWithoutBlocksNestedInput = {
    create?: XOR<ClubCreateWithoutBlocksInput, ClubUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: ClubCreateOrConnectWithoutBlocksInput
    upsert?: ClubUpsertWithoutBlocksInput
    connect?: ClubWhereUniqueInput
    update?: XOR<XOR<ClubUpdateToOneWithWhereWithoutBlocksInput, ClubUpdateWithoutBlocksInput>, ClubUncheckedUpdateWithoutBlocksInput>
  }

  export type CourtUpdateOneRequiredWithoutBlocksNestedInput = {
    create?: XOR<CourtCreateWithoutBlocksInput, CourtUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: CourtCreateOrConnectWithoutBlocksInput
    upsert?: CourtUpsertWithoutBlocksInput
    connect?: CourtWhereUniqueInput
    update?: XOR<XOR<CourtUpdateToOneWithWhereWithoutBlocksInput, CourtUpdateWithoutBlocksInput>, CourtUncheckedUpdateWithoutBlocksInput>
  }

  export type ClubCreateNestedOneWithoutPricingRulesInput = {
    create?: XOR<ClubCreateWithoutPricingRulesInput, ClubUncheckedCreateWithoutPricingRulesInput>
    connectOrCreate?: ClubCreateOrConnectWithoutPricingRulesInput
    connect?: ClubWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClubUpdateOneRequiredWithoutPricingRulesNestedInput = {
    create?: XOR<ClubCreateWithoutPricingRulesInput, ClubUncheckedCreateWithoutPricingRulesInput>
    connectOrCreate?: ClubCreateOrConnectWithoutPricingRulesInput
    upsert?: ClubUpsertWithoutPricingRulesInput
    connect?: ClubWhereUniqueInput
    update?: XOR<XOR<ClubUpdateToOneWithWhereWithoutPricingRulesInput, ClubUpdateWithoutPricingRulesInput>, ClubUncheckedUpdateWithoutPricingRulesInput>
  }

  export type ReservationCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<ReservationCreateWithoutPaymentsInput, ReservationUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutPaymentsInput
    connect?: ReservationWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type ReservationUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<ReservationCreateWithoutPaymentsInput, ReservationUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutPaymentsInput
    upsert?: ReservationUpsertWithoutPaymentsInput
    connect?: ReservationWhereUniqueInput
    update?: XOR<XOR<ReservationUpdateToOneWithWhereWithoutPaymentsInput, ReservationUpdateWithoutPaymentsInput>, ReservationUncheckedUpdateWithoutPaymentsInput>
  }

  export type StaffUserCreateNestedOneWithoutAuditsInput = {
    create?: XOR<StaffUserCreateWithoutAuditsInput, StaffUserUncheckedCreateWithoutAuditsInput>
    connectOrCreate?: StaffUserCreateOrConnectWithoutAuditsInput
    connect?: StaffUserWhereUniqueInput
  }

  export type StaffUserUpdateOneWithoutAuditsNestedInput = {
    create?: XOR<StaffUserCreateWithoutAuditsInput, StaffUserUncheckedCreateWithoutAuditsInput>
    connectOrCreate?: StaffUserCreateOrConnectWithoutAuditsInput
    upsert?: StaffUserUpsertWithoutAuditsInput
    disconnect?: StaffUserWhereInput | boolean
    delete?: StaffUserWhereInput | boolean
    connect?: StaffUserWhereUniqueInput
    update?: XOR<XOR<StaffUserUpdateToOneWithWhereWithoutAuditsInput, StaffUserUpdateWithoutAuditsInput>, StaffUserUncheckedUpdateWithoutAuditsInput>
  }

  export type ReservationCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ReservationCreateWithoutMessagesInput, ReservationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutMessagesInput
    connect?: ReservationWhereUniqueInput
  }

  export type ReservationUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ReservationCreateWithoutMessagesInput, ReservationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutMessagesInput
    upsert?: ReservationUpsertWithoutMessagesInput
    connect?: ReservationWhereUniqueInput
    update?: XOR<XOR<ReservationUpdateToOneWithWhereWithoutMessagesInput, ReservationUpdateWithoutMessagesInput>, ReservationUncheckedUpdateWithoutMessagesInput>
  }

  export type ClubCreateNestedOneWithoutLicensesInput = {
    create?: XOR<ClubCreateWithoutLicensesInput, ClubUncheckedCreateWithoutLicensesInput>
    connectOrCreate?: ClubCreateOrConnectWithoutLicensesInput
    connect?: ClubWhereUniqueInput
  }

  export type ClubUpdateOneWithoutLicensesNestedInput = {
    create?: XOR<ClubCreateWithoutLicensesInput, ClubUncheckedCreateWithoutLicensesInput>
    connectOrCreate?: ClubCreateOrConnectWithoutLicensesInput
    upsert?: ClubUpsertWithoutLicensesInput
    disconnect?: ClubWhereInput | boolean
    delete?: ClubWhereInput | boolean
    connect?: ClubWhereUniqueInput
    update?: XOR<XOR<ClubUpdateToOneWithWhereWithoutLicensesInput, ClubUpdateWithoutLicensesInput>, ClubUncheckedUpdateWithoutLicensesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStaffRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffRole | EnumStaffRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StaffRole[]
    notIn?: $Enums.StaffRole[]
    not?: NestedEnumStaffRoleFilter<$PrismaModel> | $Enums.StaffRole
  }

  export type NestedEnumStaffRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffRole | EnumStaffRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StaffRole[]
    notIn?: $Enums.StaffRole[]
    not?: NestedEnumStaffRoleWithAggregatesFilter<$PrismaModel> | $Enums.StaffRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStaffRoleFilter<$PrismaModel>
    _max?: NestedEnumStaffRoleFilter<$PrismaModel>
  }

  export type NestedEnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[]
    notIn?: $Enums.ReservationStatus[]
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumCreatedByKindFilter<$PrismaModel = never> = {
    equals?: $Enums.CreatedByKind | EnumCreatedByKindFieldRefInput<$PrismaModel>
    in?: $Enums.CreatedByKind[]
    notIn?: $Enums.CreatedByKind[]
    not?: NestedEnumCreatedByKindFilter<$PrismaModel> | $Enums.CreatedByKind
  }

  export type NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[]
    notIn?: $Enums.ReservationStatus[]
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumCreatedByKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreatedByKind | EnumCreatedByKindFieldRefInput<$PrismaModel>
    in?: $Enums.CreatedByKind[]
    notIn?: $Enums.CreatedByKind[]
    not?: NestedEnumCreatedByKindWithAggregatesFilter<$PrismaModel> | $Enums.CreatedByKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCreatedByKindFilter<$PrismaModel>
    _max?: NestedEnumCreatedByKindFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type CourtCreateWithoutClubInput = {
    id?: string
    name: string
    active?: boolean
    basePrice?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutCourtInput
    blocks?: BlockCreateNestedManyWithoutCourtInput
  }

  export type CourtUncheckedCreateWithoutClubInput = {
    id?: string
    name: string
    active?: boolean
    basePrice?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutCourtInput
    blocks?: BlockUncheckedCreateNestedManyWithoutCourtInput
  }

  export type CourtCreateOrConnectWithoutClubInput = {
    where: CourtWhereUniqueInput
    create: XOR<CourtCreateWithoutClubInput, CourtUncheckedCreateWithoutClubInput>
  }

  export type CourtCreateManyClubInputEnvelope = {
    data: CourtCreateManyClubInput | CourtCreateManyClubInput[]
  }

  export type ReservationCreateWithoutClubInput = {
    id?: string
    status?: $Enums.ReservationStatus
    startAt: Date | string
    endAt: Date | string
    holdExpiresAt?: Date | string | null
    customerName: string
    customerWhatsapp: string
    customerEmail?: string | null
    note?: string | null
    amount?: number
    createdByKind?: $Enums.CreatedByKind
    createdByStaffId?: string | null
    manageTokenHash: string
    manageTokenLastRotatedAt?: Date | string
    canceledAt?: Date | string | null
    canceledReason?: string | null
    noShowMarkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    court: CourtCreateNestedOneWithoutReservationsInput
    payments?: PaymentCreateNestedManyWithoutReservationInput
    messages?: MessageLogCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutClubInput = {
    id?: string
    courtId: string
    status?: $Enums.ReservationStatus
    startAt: Date | string
    endAt: Date | string
    holdExpiresAt?: Date | string | null
    customerName: string
    customerWhatsapp: string
    customerEmail?: string | null
    note?: string | null
    amount?: number
    createdByKind?: $Enums.CreatedByKind
    createdByStaffId?: string | null
    manageTokenHash: string
    manageTokenLastRotatedAt?: Date | string
    canceledAt?: Date | string | null
    canceledReason?: string | null
    noShowMarkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutReservationInput
    messages?: MessageLogUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutClubInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutClubInput, ReservationUncheckedCreateWithoutClubInput>
  }

  export type ReservationCreateManyClubInputEnvelope = {
    data: ReservationCreateManyClubInput | ReservationCreateManyClubInput[]
  }

  export type BlockCreateWithoutClubInput = {
    id?: string
    startAt: Date | string
    endAt: Date | string
    reason: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    court: CourtCreateNestedOneWithoutBlocksInput
  }

  export type BlockUncheckedCreateWithoutClubInput = {
    id?: string
    courtId: string
    startAt: Date | string
    endAt: Date | string
    reason: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlockCreateOrConnectWithoutClubInput = {
    where: BlockWhereUniqueInput
    create: XOR<BlockCreateWithoutClubInput, BlockUncheckedCreateWithoutClubInput>
  }

  export type BlockCreateManyClubInputEnvelope = {
    data: BlockCreateManyClubInput | BlockCreateManyClubInput[]
  }

  export type PricingRuleCreateWithoutClubInput = {
    id?: string
    courtId?: string | null
    dayOfWeek: number
    startMinute: number
    endMinute: number
    multiplier?: number
    fixedPrice?: number | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingRuleUncheckedCreateWithoutClubInput = {
    id?: string
    courtId?: string | null
    dayOfWeek: number
    startMinute: number
    endMinute: number
    multiplier?: number
    fixedPrice?: number | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingRuleCreateOrConnectWithoutClubInput = {
    where: PricingRuleWhereUniqueInput
    create: XOR<PricingRuleCreateWithoutClubInput, PricingRuleUncheckedCreateWithoutClubInput>
  }

  export type PricingRuleCreateManyClubInputEnvelope = {
    data: PricingRuleCreateManyClubInput | PricingRuleCreateManyClubInput[]
  }

  export type LicenseCreateWithoutClubInput = {
    id?: string
    machineHash: string
    licenseKey: string
    validUntil?: Date | string | null
    active?: boolean
    metadataJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseUncheckedCreateWithoutClubInput = {
    id?: string
    machineHash: string
    licenseKey: string
    validUntil?: Date | string | null
    active?: boolean
    metadataJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseCreateOrConnectWithoutClubInput = {
    where: LicenseWhereUniqueInput
    create: XOR<LicenseCreateWithoutClubInput, LicenseUncheckedCreateWithoutClubInput>
  }

  export type LicenseCreateManyClubInputEnvelope = {
    data: LicenseCreateManyClubInput | LicenseCreateManyClubInput[]
  }

  export type CourtUpsertWithWhereUniqueWithoutClubInput = {
    where: CourtWhereUniqueInput
    update: XOR<CourtUpdateWithoutClubInput, CourtUncheckedUpdateWithoutClubInput>
    create: XOR<CourtCreateWithoutClubInput, CourtUncheckedCreateWithoutClubInput>
  }

  export type CourtUpdateWithWhereUniqueWithoutClubInput = {
    where: CourtWhereUniqueInput
    data: XOR<CourtUpdateWithoutClubInput, CourtUncheckedUpdateWithoutClubInput>
  }

  export type CourtUpdateManyWithWhereWithoutClubInput = {
    where: CourtScalarWhereInput
    data: XOR<CourtUpdateManyMutationInput, CourtUncheckedUpdateManyWithoutClubInput>
  }

  export type CourtScalarWhereInput = {
    AND?: CourtScalarWhereInput | CourtScalarWhereInput[]
    OR?: CourtScalarWhereInput[]
    NOT?: CourtScalarWhereInput | CourtScalarWhereInput[]
    id?: StringFilter<"Court"> | string
    clubId?: StringFilter<"Court"> | string
    name?: StringFilter<"Court"> | string
    active?: BoolFilter<"Court"> | boolean
    basePrice?: IntFilter<"Court"> | number
    createdAt?: DateTimeFilter<"Court"> | Date | string
    updatedAt?: DateTimeFilter<"Court"> | Date | string
  }

  export type ReservationUpsertWithWhereUniqueWithoutClubInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutClubInput, ReservationUncheckedUpdateWithoutClubInput>
    create: XOR<ReservationCreateWithoutClubInput, ReservationUncheckedCreateWithoutClubInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutClubInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutClubInput, ReservationUncheckedUpdateWithoutClubInput>
  }

  export type ReservationUpdateManyWithWhereWithoutClubInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutClubInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    OR?: ReservationScalarWhereInput[]
    NOT?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    id?: StringFilter<"Reservation"> | string
    clubId?: StringFilter<"Reservation"> | string
    courtId?: StringFilter<"Reservation"> | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    startAt?: DateTimeFilter<"Reservation"> | Date | string
    endAt?: DateTimeFilter<"Reservation"> | Date | string
    holdExpiresAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    customerName?: StringFilter<"Reservation"> | string
    customerWhatsapp?: StringFilter<"Reservation"> | string
    customerEmail?: StringNullableFilter<"Reservation"> | string | null
    note?: StringNullableFilter<"Reservation"> | string | null
    amount?: IntFilter<"Reservation"> | number
    createdByKind?: EnumCreatedByKindFilter<"Reservation"> | $Enums.CreatedByKind
    createdByStaffId?: StringNullableFilter<"Reservation"> | string | null
    manageTokenHash?: StringFilter<"Reservation"> | string
    manageTokenLastRotatedAt?: DateTimeFilter<"Reservation"> | Date | string
    canceledAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    canceledReason?: StringNullableFilter<"Reservation"> | string | null
    noShowMarkedAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
  }

  export type BlockUpsertWithWhereUniqueWithoutClubInput = {
    where: BlockWhereUniqueInput
    update: XOR<BlockUpdateWithoutClubInput, BlockUncheckedUpdateWithoutClubInput>
    create: XOR<BlockCreateWithoutClubInput, BlockUncheckedCreateWithoutClubInput>
  }

  export type BlockUpdateWithWhereUniqueWithoutClubInput = {
    where: BlockWhereUniqueInput
    data: XOR<BlockUpdateWithoutClubInput, BlockUncheckedUpdateWithoutClubInput>
  }

  export type BlockUpdateManyWithWhereWithoutClubInput = {
    where: BlockScalarWhereInput
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyWithoutClubInput>
  }

  export type BlockScalarWhereInput = {
    AND?: BlockScalarWhereInput | BlockScalarWhereInput[]
    OR?: BlockScalarWhereInput[]
    NOT?: BlockScalarWhereInput | BlockScalarWhereInput[]
    id?: StringFilter<"Block"> | string
    clubId?: StringFilter<"Block"> | string
    courtId?: StringFilter<"Block"> | string
    startAt?: DateTimeFilter<"Block"> | Date | string
    endAt?: DateTimeFilter<"Block"> | Date | string
    reason?: StringFilter<"Block"> | string
    createdById?: StringNullableFilter<"Block"> | string | null
    createdAt?: DateTimeFilter<"Block"> | Date | string
    updatedAt?: DateTimeFilter<"Block"> | Date | string
  }

  export type PricingRuleUpsertWithWhereUniqueWithoutClubInput = {
    where: PricingRuleWhereUniqueInput
    update: XOR<PricingRuleUpdateWithoutClubInput, PricingRuleUncheckedUpdateWithoutClubInput>
    create: XOR<PricingRuleCreateWithoutClubInput, PricingRuleUncheckedCreateWithoutClubInput>
  }

  export type PricingRuleUpdateWithWhereUniqueWithoutClubInput = {
    where: PricingRuleWhereUniqueInput
    data: XOR<PricingRuleUpdateWithoutClubInput, PricingRuleUncheckedUpdateWithoutClubInput>
  }

  export type PricingRuleUpdateManyWithWhereWithoutClubInput = {
    where: PricingRuleScalarWhereInput
    data: XOR<PricingRuleUpdateManyMutationInput, PricingRuleUncheckedUpdateManyWithoutClubInput>
  }

  export type PricingRuleScalarWhereInput = {
    AND?: PricingRuleScalarWhereInput | PricingRuleScalarWhereInput[]
    OR?: PricingRuleScalarWhereInput[]
    NOT?: PricingRuleScalarWhereInput | PricingRuleScalarWhereInput[]
    id?: StringFilter<"PricingRule"> | string
    clubId?: StringFilter<"PricingRule"> | string
    courtId?: StringNullableFilter<"PricingRule"> | string | null
    dayOfWeek?: IntFilter<"PricingRule"> | number
    startMinute?: IntFilter<"PricingRule"> | number
    endMinute?: IntFilter<"PricingRule"> | number
    multiplier?: FloatFilter<"PricingRule"> | number
    fixedPrice?: IntNullableFilter<"PricingRule"> | number | null
    active?: BoolFilter<"PricingRule"> | boolean
    createdAt?: DateTimeFilter<"PricingRule"> | Date | string
    updatedAt?: DateTimeFilter<"PricingRule"> | Date | string
  }

  export type LicenseUpsertWithWhereUniqueWithoutClubInput = {
    where: LicenseWhereUniqueInput
    update: XOR<LicenseUpdateWithoutClubInput, LicenseUncheckedUpdateWithoutClubInput>
    create: XOR<LicenseCreateWithoutClubInput, LicenseUncheckedCreateWithoutClubInput>
  }

  export type LicenseUpdateWithWhereUniqueWithoutClubInput = {
    where: LicenseWhereUniqueInput
    data: XOR<LicenseUpdateWithoutClubInput, LicenseUncheckedUpdateWithoutClubInput>
  }

  export type LicenseUpdateManyWithWhereWithoutClubInput = {
    where: LicenseScalarWhereInput
    data: XOR<LicenseUpdateManyMutationInput, LicenseUncheckedUpdateManyWithoutClubInput>
  }

  export type LicenseScalarWhereInput = {
    AND?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
    OR?: LicenseScalarWhereInput[]
    NOT?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
    id?: StringFilter<"License"> | string
    clubId?: StringNullableFilter<"License"> | string | null
    machineHash?: StringFilter<"License"> | string
    licenseKey?: StringFilter<"License"> | string
    validUntil?: DateTimeNullableFilter<"License"> | Date | string | null
    active?: BoolFilter<"License"> | boolean
    metadataJson?: StringNullableFilter<"License"> | string | null
    createdAt?: DateTimeFilter<"License"> | Date | string
    updatedAt?: DateTimeFilter<"License"> | Date | string
  }

  export type ClubCreateWithoutCourtsInput = {
    id?: string
    slug: string
    name: string
    address?: string | null
    whatsapp?: string | null
    mapLink?: string | null
    transferAlias?: string | null
    transferCvuCbu?: string | null
    slotDurationDefault?: number
    minAdvanceMinutes?: number
    maxAdvanceDays?: number
    cancellationPolicyMin?: number
    noShowPolicy?: string | null
    holidayJson?: string
    scheduleJson?: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutClubInput
    blocks?: BlockCreateNestedManyWithoutClubInput
    pricingRules?: PricingRuleCreateNestedManyWithoutClubInput
    licenses?: LicenseCreateNestedManyWithoutClubInput
  }

  export type ClubUncheckedCreateWithoutCourtsInput = {
    id?: string
    slug: string
    name: string
    address?: string | null
    whatsapp?: string | null
    mapLink?: string | null
    transferAlias?: string | null
    transferCvuCbu?: string | null
    slotDurationDefault?: number
    minAdvanceMinutes?: number
    maxAdvanceDays?: number
    cancellationPolicyMin?: number
    noShowPolicy?: string | null
    holidayJson?: string
    scheduleJson?: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutClubInput
    blocks?: BlockUncheckedCreateNestedManyWithoutClubInput
    pricingRules?: PricingRuleUncheckedCreateNestedManyWithoutClubInput
    licenses?: LicenseUncheckedCreateNestedManyWithoutClubInput
  }

  export type ClubCreateOrConnectWithoutCourtsInput = {
    where: ClubWhereUniqueInput
    create: XOR<ClubCreateWithoutCourtsInput, ClubUncheckedCreateWithoutCourtsInput>
  }

  export type ReservationCreateWithoutCourtInput = {
    id?: string
    status?: $Enums.ReservationStatus
    startAt: Date | string
    endAt: Date | string
    holdExpiresAt?: Date | string | null
    customerName: string
    customerWhatsapp: string
    customerEmail?: string | null
    note?: string | null
    amount?: number
    createdByKind?: $Enums.CreatedByKind
    createdByStaffId?: string | null
    manageTokenHash: string
    manageTokenLastRotatedAt?: Date | string
    canceledAt?: Date | string | null
    canceledReason?: string | null
    noShowMarkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    club: ClubCreateNestedOneWithoutReservationsInput
    payments?: PaymentCreateNestedManyWithoutReservationInput
    messages?: MessageLogCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutCourtInput = {
    id?: string
    clubId: string
    status?: $Enums.ReservationStatus
    startAt: Date | string
    endAt: Date | string
    holdExpiresAt?: Date | string | null
    customerName: string
    customerWhatsapp: string
    customerEmail?: string | null
    note?: string | null
    amount?: number
    createdByKind?: $Enums.CreatedByKind
    createdByStaffId?: string | null
    manageTokenHash: string
    manageTokenLastRotatedAt?: Date | string
    canceledAt?: Date | string | null
    canceledReason?: string | null
    noShowMarkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutReservationInput
    messages?: MessageLogUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutCourtInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutCourtInput, ReservationUncheckedCreateWithoutCourtInput>
  }

  export type ReservationCreateManyCourtInputEnvelope = {
    data: ReservationCreateManyCourtInput | ReservationCreateManyCourtInput[]
  }

  export type BlockCreateWithoutCourtInput = {
    id?: string
    startAt: Date | string
    endAt: Date | string
    reason: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    club: ClubCreateNestedOneWithoutBlocksInput
  }

  export type BlockUncheckedCreateWithoutCourtInput = {
    id?: string
    clubId: string
    startAt: Date | string
    endAt: Date | string
    reason: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlockCreateOrConnectWithoutCourtInput = {
    where: BlockWhereUniqueInput
    create: XOR<BlockCreateWithoutCourtInput, BlockUncheckedCreateWithoutCourtInput>
  }

  export type BlockCreateManyCourtInputEnvelope = {
    data: BlockCreateManyCourtInput | BlockCreateManyCourtInput[]
  }

  export type ClubUpsertWithoutCourtsInput = {
    update: XOR<ClubUpdateWithoutCourtsInput, ClubUncheckedUpdateWithoutCourtsInput>
    create: XOR<ClubCreateWithoutCourtsInput, ClubUncheckedCreateWithoutCourtsInput>
    where?: ClubWhereInput
  }

  export type ClubUpdateToOneWithWhereWithoutCourtsInput = {
    where?: ClubWhereInput
    data: XOR<ClubUpdateWithoutCourtsInput, ClubUncheckedUpdateWithoutCourtsInput>
  }

  export type ClubUpdateWithoutCourtsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    mapLink?: NullableStringFieldUpdateOperationsInput | string | null
    transferAlias?: NullableStringFieldUpdateOperationsInput | string | null
    transferCvuCbu?: NullableStringFieldUpdateOperationsInput | string | null
    slotDurationDefault?: IntFieldUpdateOperationsInput | number
    minAdvanceMinutes?: IntFieldUpdateOperationsInput | number
    maxAdvanceDays?: IntFieldUpdateOperationsInput | number
    cancellationPolicyMin?: IntFieldUpdateOperationsInput | number
    noShowPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    holidayJson?: StringFieldUpdateOperationsInput | string
    scheduleJson?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutClubNestedInput
    blocks?: BlockUpdateManyWithoutClubNestedInput
    pricingRules?: PricingRuleUpdateManyWithoutClubNestedInput
    licenses?: LicenseUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateWithoutCourtsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    mapLink?: NullableStringFieldUpdateOperationsInput | string | null
    transferAlias?: NullableStringFieldUpdateOperationsInput | string | null
    transferCvuCbu?: NullableStringFieldUpdateOperationsInput | string | null
    slotDurationDefault?: IntFieldUpdateOperationsInput | number
    minAdvanceMinutes?: IntFieldUpdateOperationsInput | number
    maxAdvanceDays?: IntFieldUpdateOperationsInput | number
    cancellationPolicyMin?: IntFieldUpdateOperationsInput | number
    noShowPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    holidayJson?: StringFieldUpdateOperationsInput | string
    scheduleJson?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutClubNestedInput
    blocks?: BlockUncheckedUpdateManyWithoutClubNestedInput
    pricingRules?: PricingRuleUncheckedUpdateManyWithoutClubNestedInput
    licenses?: LicenseUncheckedUpdateManyWithoutClubNestedInput
  }

  export type ReservationUpsertWithWhereUniqueWithoutCourtInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutCourtInput, ReservationUncheckedUpdateWithoutCourtInput>
    create: XOR<ReservationCreateWithoutCourtInput, ReservationUncheckedCreateWithoutCourtInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutCourtInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutCourtInput, ReservationUncheckedUpdateWithoutCourtInput>
  }

  export type ReservationUpdateManyWithWhereWithoutCourtInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutCourtInput>
  }

  export type BlockUpsertWithWhereUniqueWithoutCourtInput = {
    where: BlockWhereUniqueInput
    update: XOR<BlockUpdateWithoutCourtInput, BlockUncheckedUpdateWithoutCourtInput>
    create: XOR<BlockCreateWithoutCourtInput, BlockUncheckedCreateWithoutCourtInput>
  }

  export type BlockUpdateWithWhereUniqueWithoutCourtInput = {
    where: BlockWhereUniqueInput
    data: XOR<BlockUpdateWithoutCourtInput, BlockUncheckedUpdateWithoutCourtInput>
  }

  export type BlockUpdateManyWithWhereWithoutCourtInput = {
    where: BlockScalarWhereInput
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyWithoutCourtInput>
  }

  export type AuditLogCreateWithoutActorInput = {
    id?: string
    entity: string
    entityId: string
    action: string
    beforeJson?: string | null
    afterJson?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutActorInput = {
    id?: string
    entity: string
    entityId: string
    action: string
    beforeJson?: string | null
    afterJson?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput>
  }

  export type AuditLogCreateManyActorInputEnvelope = {
    data: AuditLogCreateManyActorInput | AuditLogCreateManyActorInput[]
  }

  export type AuditLogUpsertWithWhereUniqueWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutActorInput, AuditLogUncheckedUpdateWithoutActorInput>
    create: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutActorInput, AuditLogUncheckedUpdateWithoutActorInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutActorInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutActorInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    actorUserId?: StringNullableFilter<"AuditLog"> | string | null
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    beforeJson?: StringNullableFilter<"AuditLog"> | string | null
    afterJson?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type ClubCreateWithoutReservationsInput = {
    id?: string
    slug: string
    name: string
    address?: string | null
    whatsapp?: string | null
    mapLink?: string | null
    transferAlias?: string | null
    transferCvuCbu?: string | null
    slotDurationDefault?: number
    minAdvanceMinutes?: number
    maxAdvanceDays?: number
    cancellationPolicyMin?: number
    noShowPolicy?: string | null
    holidayJson?: string
    scheduleJson?: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    courts?: CourtCreateNestedManyWithoutClubInput
    blocks?: BlockCreateNestedManyWithoutClubInput
    pricingRules?: PricingRuleCreateNestedManyWithoutClubInput
    licenses?: LicenseCreateNestedManyWithoutClubInput
  }

  export type ClubUncheckedCreateWithoutReservationsInput = {
    id?: string
    slug: string
    name: string
    address?: string | null
    whatsapp?: string | null
    mapLink?: string | null
    transferAlias?: string | null
    transferCvuCbu?: string | null
    slotDurationDefault?: number
    minAdvanceMinutes?: number
    maxAdvanceDays?: number
    cancellationPolicyMin?: number
    noShowPolicy?: string | null
    holidayJson?: string
    scheduleJson?: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    courts?: CourtUncheckedCreateNestedManyWithoutClubInput
    blocks?: BlockUncheckedCreateNestedManyWithoutClubInput
    pricingRules?: PricingRuleUncheckedCreateNestedManyWithoutClubInput
    licenses?: LicenseUncheckedCreateNestedManyWithoutClubInput
  }

  export type ClubCreateOrConnectWithoutReservationsInput = {
    where: ClubWhereUniqueInput
    create: XOR<ClubCreateWithoutReservationsInput, ClubUncheckedCreateWithoutReservationsInput>
  }

  export type CourtCreateWithoutReservationsInput = {
    id?: string
    name: string
    active?: boolean
    basePrice?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    club: ClubCreateNestedOneWithoutCourtsInput
    blocks?: BlockCreateNestedManyWithoutCourtInput
  }

  export type CourtUncheckedCreateWithoutReservationsInput = {
    id?: string
    clubId: string
    name: string
    active?: boolean
    basePrice?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    blocks?: BlockUncheckedCreateNestedManyWithoutCourtInput
  }

  export type CourtCreateOrConnectWithoutReservationsInput = {
    where: CourtWhereUniqueInput
    create: XOR<CourtCreateWithoutReservationsInput, CourtUncheckedCreateWithoutReservationsInput>
  }

  export type PaymentCreateWithoutReservationInput = {
    id?: string
    amount: number
    method: string
    status?: $Enums.PaymentStatus
    note?: string | null
    registeredById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutReservationInput = {
    id?: string
    amount: number
    method: string
    status?: $Enums.PaymentStatus
    note?: string | null
    registeredById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutReservationInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput>
  }

  export type PaymentCreateManyReservationInputEnvelope = {
    data: PaymentCreateManyReservationInput | PaymentCreateManyReservationInput[]
  }

  export type MessageLogCreateWithoutReservationInput = {
    id?: string
    channel: string
    destination: string
    payload: string
    success?: boolean
    createdAt?: Date | string
  }

  export type MessageLogUncheckedCreateWithoutReservationInput = {
    id?: string
    channel: string
    destination: string
    payload: string
    success?: boolean
    createdAt?: Date | string
  }

  export type MessageLogCreateOrConnectWithoutReservationInput = {
    where: MessageLogWhereUniqueInput
    create: XOR<MessageLogCreateWithoutReservationInput, MessageLogUncheckedCreateWithoutReservationInput>
  }

  export type MessageLogCreateManyReservationInputEnvelope = {
    data: MessageLogCreateManyReservationInput | MessageLogCreateManyReservationInput[]
  }

  export type ClubUpsertWithoutReservationsInput = {
    update: XOR<ClubUpdateWithoutReservationsInput, ClubUncheckedUpdateWithoutReservationsInput>
    create: XOR<ClubCreateWithoutReservationsInput, ClubUncheckedCreateWithoutReservationsInput>
    where?: ClubWhereInput
  }

  export type ClubUpdateToOneWithWhereWithoutReservationsInput = {
    where?: ClubWhereInput
    data: XOR<ClubUpdateWithoutReservationsInput, ClubUncheckedUpdateWithoutReservationsInput>
  }

  export type ClubUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    mapLink?: NullableStringFieldUpdateOperationsInput | string | null
    transferAlias?: NullableStringFieldUpdateOperationsInput | string | null
    transferCvuCbu?: NullableStringFieldUpdateOperationsInput | string | null
    slotDurationDefault?: IntFieldUpdateOperationsInput | number
    minAdvanceMinutes?: IntFieldUpdateOperationsInput | number
    maxAdvanceDays?: IntFieldUpdateOperationsInput | number
    cancellationPolicyMin?: IntFieldUpdateOperationsInput | number
    noShowPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    holidayJson?: StringFieldUpdateOperationsInput | string
    scheduleJson?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courts?: CourtUpdateManyWithoutClubNestedInput
    blocks?: BlockUpdateManyWithoutClubNestedInput
    pricingRules?: PricingRuleUpdateManyWithoutClubNestedInput
    licenses?: LicenseUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    mapLink?: NullableStringFieldUpdateOperationsInput | string | null
    transferAlias?: NullableStringFieldUpdateOperationsInput | string | null
    transferCvuCbu?: NullableStringFieldUpdateOperationsInput | string | null
    slotDurationDefault?: IntFieldUpdateOperationsInput | number
    minAdvanceMinutes?: IntFieldUpdateOperationsInput | number
    maxAdvanceDays?: IntFieldUpdateOperationsInput | number
    cancellationPolicyMin?: IntFieldUpdateOperationsInput | number
    noShowPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    holidayJson?: StringFieldUpdateOperationsInput | string
    scheduleJson?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courts?: CourtUncheckedUpdateManyWithoutClubNestedInput
    blocks?: BlockUncheckedUpdateManyWithoutClubNestedInput
    pricingRules?: PricingRuleUncheckedUpdateManyWithoutClubNestedInput
    licenses?: LicenseUncheckedUpdateManyWithoutClubNestedInput
  }

  export type CourtUpsertWithoutReservationsInput = {
    update: XOR<CourtUpdateWithoutReservationsInput, CourtUncheckedUpdateWithoutReservationsInput>
    create: XOR<CourtCreateWithoutReservationsInput, CourtUncheckedCreateWithoutReservationsInput>
    where?: CourtWhereInput
  }

  export type CourtUpdateToOneWithWhereWithoutReservationsInput = {
    where?: CourtWhereInput
    data: XOR<CourtUpdateWithoutReservationsInput, CourtUncheckedUpdateWithoutReservationsInput>
  }

  export type CourtUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    basePrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    club?: ClubUpdateOneRequiredWithoutCourtsNestedInput
    blocks?: BlockUpdateManyWithoutCourtNestedInput
  }

  export type CourtUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    basePrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: BlockUncheckedUpdateManyWithoutCourtNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutReservationInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutReservationInput, PaymentUncheckedUpdateWithoutReservationInput>
    create: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutReservationInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutReservationInput, PaymentUncheckedUpdateWithoutReservationInput>
  }

  export type PaymentUpdateManyWithWhereWithoutReservationInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutReservationInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    reservationId?: StringFilter<"Payment"> | string
    amount?: IntFilter<"Payment"> | number
    method?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    note?: StringNullableFilter<"Payment"> | string | null
    registeredById?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type MessageLogUpsertWithWhereUniqueWithoutReservationInput = {
    where: MessageLogWhereUniqueInput
    update: XOR<MessageLogUpdateWithoutReservationInput, MessageLogUncheckedUpdateWithoutReservationInput>
    create: XOR<MessageLogCreateWithoutReservationInput, MessageLogUncheckedCreateWithoutReservationInput>
  }

  export type MessageLogUpdateWithWhereUniqueWithoutReservationInput = {
    where: MessageLogWhereUniqueInput
    data: XOR<MessageLogUpdateWithoutReservationInput, MessageLogUncheckedUpdateWithoutReservationInput>
  }

  export type MessageLogUpdateManyWithWhereWithoutReservationInput = {
    where: MessageLogScalarWhereInput
    data: XOR<MessageLogUpdateManyMutationInput, MessageLogUncheckedUpdateManyWithoutReservationInput>
  }

  export type MessageLogScalarWhereInput = {
    AND?: MessageLogScalarWhereInput | MessageLogScalarWhereInput[]
    OR?: MessageLogScalarWhereInput[]
    NOT?: MessageLogScalarWhereInput | MessageLogScalarWhereInput[]
    id?: StringFilter<"MessageLog"> | string
    reservationId?: StringFilter<"MessageLog"> | string
    channel?: StringFilter<"MessageLog"> | string
    destination?: StringFilter<"MessageLog"> | string
    payload?: StringFilter<"MessageLog"> | string
    success?: BoolFilter<"MessageLog"> | boolean
    createdAt?: DateTimeFilter<"MessageLog"> | Date | string
  }

  export type ClubCreateWithoutBlocksInput = {
    id?: string
    slug: string
    name: string
    address?: string | null
    whatsapp?: string | null
    mapLink?: string | null
    transferAlias?: string | null
    transferCvuCbu?: string | null
    slotDurationDefault?: number
    minAdvanceMinutes?: number
    maxAdvanceDays?: number
    cancellationPolicyMin?: number
    noShowPolicy?: string | null
    holidayJson?: string
    scheduleJson?: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    courts?: CourtCreateNestedManyWithoutClubInput
    reservations?: ReservationCreateNestedManyWithoutClubInput
    pricingRules?: PricingRuleCreateNestedManyWithoutClubInput
    licenses?: LicenseCreateNestedManyWithoutClubInput
  }

  export type ClubUncheckedCreateWithoutBlocksInput = {
    id?: string
    slug: string
    name: string
    address?: string | null
    whatsapp?: string | null
    mapLink?: string | null
    transferAlias?: string | null
    transferCvuCbu?: string | null
    slotDurationDefault?: number
    minAdvanceMinutes?: number
    maxAdvanceDays?: number
    cancellationPolicyMin?: number
    noShowPolicy?: string | null
    holidayJson?: string
    scheduleJson?: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    courts?: CourtUncheckedCreateNestedManyWithoutClubInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutClubInput
    pricingRules?: PricingRuleUncheckedCreateNestedManyWithoutClubInput
    licenses?: LicenseUncheckedCreateNestedManyWithoutClubInput
  }

  export type ClubCreateOrConnectWithoutBlocksInput = {
    where: ClubWhereUniqueInput
    create: XOR<ClubCreateWithoutBlocksInput, ClubUncheckedCreateWithoutBlocksInput>
  }

  export type CourtCreateWithoutBlocksInput = {
    id?: string
    name: string
    active?: boolean
    basePrice?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    club: ClubCreateNestedOneWithoutCourtsInput
    reservations?: ReservationCreateNestedManyWithoutCourtInput
  }

  export type CourtUncheckedCreateWithoutBlocksInput = {
    id?: string
    clubId: string
    name: string
    active?: boolean
    basePrice?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutCourtInput
  }

  export type CourtCreateOrConnectWithoutBlocksInput = {
    where: CourtWhereUniqueInput
    create: XOR<CourtCreateWithoutBlocksInput, CourtUncheckedCreateWithoutBlocksInput>
  }

  export type ClubUpsertWithoutBlocksInput = {
    update: XOR<ClubUpdateWithoutBlocksInput, ClubUncheckedUpdateWithoutBlocksInput>
    create: XOR<ClubCreateWithoutBlocksInput, ClubUncheckedCreateWithoutBlocksInput>
    where?: ClubWhereInput
  }

  export type ClubUpdateToOneWithWhereWithoutBlocksInput = {
    where?: ClubWhereInput
    data: XOR<ClubUpdateWithoutBlocksInput, ClubUncheckedUpdateWithoutBlocksInput>
  }

  export type ClubUpdateWithoutBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    mapLink?: NullableStringFieldUpdateOperationsInput | string | null
    transferAlias?: NullableStringFieldUpdateOperationsInput | string | null
    transferCvuCbu?: NullableStringFieldUpdateOperationsInput | string | null
    slotDurationDefault?: IntFieldUpdateOperationsInput | number
    minAdvanceMinutes?: IntFieldUpdateOperationsInput | number
    maxAdvanceDays?: IntFieldUpdateOperationsInput | number
    cancellationPolicyMin?: IntFieldUpdateOperationsInput | number
    noShowPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    holidayJson?: StringFieldUpdateOperationsInput | string
    scheduleJson?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courts?: CourtUpdateManyWithoutClubNestedInput
    reservations?: ReservationUpdateManyWithoutClubNestedInput
    pricingRules?: PricingRuleUpdateManyWithoutClubNestedInput
    licenses?: LicenseUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateWithoutBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    mapLink?: NullableStringFieldUpdateOperationsInput | string | null
    transferAlias?: NullableStringFieldUpdateOperationsInput | string | null
    transferCvuCbu?: NullableStringFieldUpdateOperationsInput | string | null
    slotDurationDefault?: IntFieldUpdateOperationsInput | number
    minAdvanceMinutes?: IntFieldUpdateOperationsInput | number
    maxAdvanceDays?: IntFieldUpdateOperationsInput | number
    cancellationPolicyMin?: IntFieldUpdateOperationsInput | number
    noShowPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    holidayJson?: StringFieldUpdateOperationsInput | string
    scheduleJson?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courts?: CourtUncheckedUpdateManyWithoutClubNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutClubNestedInput
    pricingRules?: PricingRuleUncheckedUpdateManyWithoutClubNestedInput
    licenses?: LicenseUncheckedUpdateManyWithoutClubNestedInput
  }

  export type CourtUpsertWithoutBlocksInput = {
    update: XOR<CourtUpdateWithoutBlocksInput, CourtUncheckedUpdateWithoutBlocksInput>
    create: XOR<CourtCreateWithoutBlocksInput, CourtUncheckedCreateWithoutBlocksInput>
    where?: CourtWhereInput
  }

  export type CourtUpdateToOneWithWhereWithoutBlocksInput = {
    where?: CourtWhereInput
    data: XOR<CourtUpdateWithoutBlocksInput, CourtUncheckedUpdateWithoutBlocksInput>
  }

  export type CourtUpdateWithoutBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    basePrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    club?: ClubUpdateOneRequiredWithoutCourtsNestedInput
    reservations?: ReservationUpdateManyWithoutCourtNestedInput
  }

  export type CourtUncheckedUpdateWithoutBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    basePrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutCourtNestedInput
  }

  export type ClubCreateWithoutPricingRulesInput = {
    id?: string
    slug: string
    name: string
    address?: string | null
    whatsapp?: string | null
    mapLink?: string | null
    transferAlias?: string | null
    transferCvuCbu?: string | null
    slotDurationDefault?: number
    minAdvanceMinutes?: number
    maxAdvanceDays?: number
    cancellationPolicyMin?: number
    noShowPolicy?: string | null
    holidayJson?: string
    scheduleJson?: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    courts?: CourtCreateNestedManyWithoutClubInput
    reservations?: ReservationCreateNestedManyWithoutClubInput
    blocks?: BlockCreateNestedManyWithoutClubInput
    licenses?: LicenseCreateNestedManyWithoutClubInput
  }

  export type ClubUncheckedCreateWithoutPricingRulesInput = {
    id?: string
    slug: string
    name: string
    address?: string | null
    whatsapp?: string | null
    mapLink?: string | null
    transferAlias?: string | null
    transferCvuCbu?: string | null
    slotDurationDefault?: number
    minAdvanceMinutes?: number
    maxAdvanceDays?: number
    cancellationPolicyMin?: number
    noShowPolicy?: string | null
    holidayJson?: string
    scheduleJson?: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    courts?: CourtUncheckedCreateNestedManyWithoutClubInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutClubInput
    blocks?: BlockUncheckedCreateNestedManyWithoutClubInput
    licenses?: LicenseUncheckedCreateNestedManyWithoutClubInput
  }

  export type ClubCreateOrConnectWithoutPricingRulesInput = {
    where: ClubWhereUniqueInput
    create: XOR<ClubCreateWithoutPricingRulesInput, ClubUncheckedCreateWithoutPricingRulesInput>
  }

  export type ClubUpsertWithoutPricingRulesInput = {
    update: XOR<ClubUpdateWithoutPricingRulesInput, ClubUncheckedUpdateWithoutPricingRulesInput>
    create: XOR<ClubCreateWithoutPricingRulesInput, ClubUncheckedCreateWithoutPricingRulesInput>
    where?: ClubWhereInput
  }

  export type ClubUpdateToOneWithWhereWithoutPricingRulesInput = {
    where?: ClubWhereInput
    data: XOR<ClubUpdateWithoutPricingRulesInput, ClubUncheckedUpdateWithoutPricingRulesInput>
  }

  export type ClubUpdateWithoutPricingRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    mapLink?: NullableStringFieldUpdateOperationsInput | string | null
    transferAlias?: NullableStringFieldUpdateOperationsInput | string | null
    transferCvuCbu?: NullableStringFieldUpdateOperationsInput | string | null
    slotDurationDefault?: IntFieldUpdateOperationsInput | number
    minAdvanceMinutes?: IntFieldUpdateOperationsInput | number
    maxAdvanceDays?: IntFieldUpdateOperationsInput | number
    cancellationPolicyMin?: IntFieldUpdateOperationsInput | number
    noShowPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    holidayJson?: StringFieldUpdateOperationsInput | string
    scheduleJson?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courts?: CourtUpdateManyWithoutClubNestedInput
    reservations?: ReservationUpdateManyWithoutClubNestedInput
    blocks?: BlockUpdateManyWithoutClubNestedInput
    licenses?: LicenseUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateWithoutPricingRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    mapLink?: NullableStringFieldUpdateOperationsInput | string | null
    transferAlias?: NullableStringFieldUpdateOperationsInput | string | null
    transferCvuCbu?: NullableStringFieldUpdateOperationsInput | string | null
    slotDurationDefault?: IntFieldUpdateOperationsInput | number
    minAdvanceMinutes?: IntFieldUpdateOperationsInput | number
    maxAdvanceDays?: IntFieldUpdateOperationsInput | number
    cancellationPolicyMin?: IntFieldUpdateOperationsInput | number
    noShowPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    holidayJson?: StringFieldUpdateOperationsInput | string
    scheduleJson?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courts?: CourtUncheckedUpdateManyWithoutClubNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutClubNestedInput
    blocks?: BlockUncheckedUpdateManyWithoutClubNestedInput
    licenses?: LicenseUncheckedUpdateManyWithoutClubNestedInput
  }

  export type ReservationCreateWithoutPaymentsInput = {
    id?: string
    status?: $Enums.ReservationStatus
    startAt: Date | string
    endAt: Date | string
    holdExpiresAt?: Date | string | null
    customerName: string
    customerWhatsapp: string
    customerEmail?: string | null
    note?: string | null
    amount?: number
    createdByKind?: $Enums.CreatedByKind
    createdByStaffId?: string | null
    manageTokenHash: string
    manageTokenLastRotatedAt?: Date | string
    canceledAt?: Date | string | null
    canceledReason?: string | null
    noShowMarkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    club: ClubCreateNestedOneWithoutReservationsInput
    court: CourtCreateNestedOneWithoutReservationsInput
    messages?: MessageLogCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutPaymentsInput = {
    id?: string
    clubId: string
    courtId: string
    status?: $Enums.ReservationStatus
    startAt: Date | string
    endAt: Date | string
    holdExpiresAt?: Date | string | null
    customerName: string
    customerWhatsapp: string
    customerEmail?: string | null
    note?: string | null
    amount?: number
    createdByKind?: $Enums.CreatedByKind
    createdByStaffId?: string | null
    manageTokenHash: string
    manageTokenLastRotatedAt?: Date | string
    canceledAt?: Date | string | null
    canceledReason?: string | null
    noShowMarkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageLogUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutPaymentsInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutPaymentsInput, ReservationUncheckedCreateWithoutPaymentsInput>
  }

  export type ReservationUpsertWithoutPaymentsInput = {
    update: XOR<ReservationUpdateWithoutPaymentsInput, ReservationUncheckedUpdateWithoutPaymentsInput>
    create: XOR<ReservationCreateWithoutPaymentsInput, ReservationUncheckedCreateWithoutPaymentsInput>
    where?: ReservationWhereInput
  }

  export type ReservationUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: ReservationWhereInput
    data: XOR<ReservationUpdateWithoutPaymentsInput, ReservationUncheckedUpdateWithoutPaymentsInput>
  }

  export type ReservationUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerWhatsapp?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    createdByKind?: EnumCreatedByKindFieldUpdateOperationsInput | $Enums.CreatedByKind
    createdByStaffId?: NullableStringFieldUpdateOperationsInput | string | null
    manageTokenHash?: StringFieldUpdateOperationsInput | string
    manageTokenLastRotatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
    noShowMarkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    club?: ClubUpdateOneRequiredWithoutReservationsNestedInput
    court?: CourtUpdateOneRequiredWithoutReservationsNestedInput
    messages?: MessageLogUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    courtId?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerWhatsapp?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    createdByKind?: EnumCreatedByKindFieldUpdateOperationsInput | $Enums.CreatedByKind
    createdByStaffId?: NullableStringFieldUpdateOperationsInput | string | null
    manageTokenHash?: StringFieldUpdateOperationsInput | string
    manageTokenLastRotatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
    noShowMarkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageLogUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type StaffUserCreateWithoutAuditsInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    role: $Enums.StaffRole
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffUserUncheckedCreateWithoutAuditsInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    role: $Enums.StaffRole
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffUserCreateOrConnectWithoutAuditsInput = {
    where: StaffUserWhereUniqueInput
    create: XOR<StaffUserCreateWithoutAuditsInput, StaffUserUncheckedCreateWithoutAuditsInput>
  }

  export type StaffUserUpsertWithoutAuditsInput = {
    update: XOR<StaffUserUpdateWithoutAuditsInput, StaffUserUncheckedUpdateWithoutAuditsInput>
    create: XOR<StaffUserCreateWithoutAuditsInput, StaffUserUncheckedCreateWithoutAuditsInput>
    where?: StaffUserWhereInput
  }

  export type StaffUserUpdateToOneWithWhereWithoutAuditsInput = {
    where?: StaffUserWhereInput
    data: XOR<StaffUserUpdateWithoutAuditsInput, StaffUserUncheckedUpdateWithoutAuditsInput>
  }

  export type StaffUserUpdateWithoutAuditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUserUncheckedUpdateWithoutAuditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateWithoutMessagesInput = {
    id?: string
    status?: $Enums.ReservationStatus
    startAt: Date | string
    endAt: Date | string
    holdExpiresAt?: Date | string | null
    customerName: string
    customerWhatsapp: string
    customerEmail?: string | null
    note?: string | null
    amount?: number
    createdByKind?: $Enums.CreatedByKind
    createdByStaffId?: string | null
    manageTokenHash: string
    manageTokenLastRotatedAt?: Date | string
    canceledAt?: Date | string | null
    canceledReason?: string | null
    noShowMarkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    club: ClubCreateNestedOneWithoutReservationsInput
    court: CourtCreateNestedOneWithoutReservationsInput
    payments?: PaymentCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutMessagesInput = {
    id?: string
    clubId: string
    courtId: string
    status?: $Enums.ReservationStatus
    startAt: Date | string
    endAt: Date | string
    holdExpiresAt?: Date | string | null
    customerName: string
    customerWhatsapp: string
    customerEmail?: string | null
    note?: string | null
    amount?: number
    createdByKind?: $Enums.CreatedByKind
    createdByStaffId?: string | null
    manageTokenHash: string
    manageTokenLastRotatedAt?: Date | string
    canceledAt?: Date | string | null
    canceledReason?: string | null
    noShowMarkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutMessagesInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutMessagesInput, ReservationUncheckedCreateWithoutMessagesInput>
  }

  export type ReservationUpsertWithoutMessagesInput = {
    update: XOR<ReservationUpdateWithoutMessagesInput, ReservationUncheckedUpdateWithoutMessagesInput>
    create: XOR<ReservationCreateWithoutMessagesInput, ReservationUncheckedCreateWithoutMessagesInput>
    where?: ReservationWhereInput
  }

  export type ReservationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ReservationWhereInput
    data: XOR<ReservationUpdateWithoutMessagesInput, ReservationUncheckedUpdateWithoutMessagesInput>
  }

  export type ReservationUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerWhatsapp?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    createdByKind?: EnumCreatedByKindFieldUpdateOperationsInput | $Enums.CreatedByKind
    createdByStaffId?: NullableStringFieldUpdateOperationsInput | string | null
    manageTokenHash?: StringFieldUpdateOperationsInput | string
    manageTokenLastRotatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
    noShowMarkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    club?: ClubUpdateOneRequiredWithoutReservationsNestedInput
    court?: CourtUpdateOneRequiredWithoutReservationsNestedInput
    payments?: PaymentUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    courtId?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerWhatsapp?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    createdByKind?: EnumCreatedByKindFieldUpdateOperationsInput | $Enums.CreatedByKind
    createdByStaffId?: NullableStringFieldUpdateOperationsInput | string | null
    manageTokenHash?: StringFieldUpdateOperationsInput | string
    manageTokenLastRotatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
    noShowMarkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ClubCreateWithoutLicensesInput = {
    id?: string
    slug: string
    name: string
    address?: string | null
    whatsapp?: string | null
    mapLink?: string | null
    transferAlias?: string | null
    transferCvuCbu?: string | null
    slotDurationDefault?: number
    minAdvanceMinutes?: number
    maxAdvanceDays?: number
    cancellationPolicyMin?: number
    noShowPolicy?: string | null
    holidayJson?: string
    scheduleJson?: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    courts?: CourtCreateNestedManyWithoutClubInput
    reservations?: ReservationCreateNestedManyWithoutClubInput
    blocks?: BlockCreateNestedManyWithoutClubInput
    pricingRules?: PricingRuleCreateNestedManyWithoutClubInput
  }

  export type ClubUncheckedCreateWithoutLicensesInput = {
    id?: string
    slug: string
    name: string
    address?: string | null
    whatsapp?: string | null
    mapLink?: string | null
    transferAlias?: string | null
    transferCvuCbu?: string | null
    slotDurationDefault?: number
    minAdvanceMinutes?: number
    maxAdvanceDays?: number
    cancellationPolicyMin?: number
    noShowPolicy?: string | null
    holidayJson?: string
    scheduleJson?: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    courts?: CourtUncheckedCreateNestedManyWithoutClubInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutClubInput
    blocks?: BlockUncheckedCreateNestedManyWithoutClubInput
    pricingRules?: PricingRuleUncheckedCreateNestedManyWithoutClubInput
  }

  export type ClubCreateOrConnectWithoutLicensesInput = {
    where: ClubWhereUniqueInput
    create: XOR<ClubCreateWithoutLicensesInput, ClubUncheckedCreateWithoutLicensesInput>
  }

  export type ClubUpsertWithoutLicensesInput = {
    update: XOR<ClubUpdateWithoutLicensesInput, ClubUncheckedUpdateWithoutLicensesInput>
    create: XOR<ClubCreateWithoutLicensesInput, ClubUncheckedCreateWithoutLicensesInput>
    where?: ClubWhereInput
  }

  export type ClubUpdateToOneWithWhereWithoutLicensesInput = {
    where?: ClubWhereInput
    data: XOR<ClubUpdateWithoutLicensesInput, ClubUncheckedUpdateWithoutLicensesInput>
  }

  export type ClubUpdateWithoutLicensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    mapLink?: NullableStringFieldUpdateOperationsInput | string | null
    transferAlias?: NullableStringFieldUpdateOperationsInput | string | null
    transferCvuCbu?: NullableStringFieldUpdateOperationsInput | string | null
    slotDurationDefault?: IntFieldUpdateOperationsInput | number
    minAdvanceMinutes?: IntFieldUpdateOperationsInput | number
    maxAdvanceDays?: IntFieldUpdateOperationsInput | number
    cancellationPolicyMin?: IntFieldUpdateOperationsInput | number
    noShowPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    holidayJson?: StringFieldUpdateOperationsInput | string
    scheduleJson?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courts?: CourtUpdateManyWithoutClubNestedInput
    reservations?: ReservationUpdateManyWithoutClubNestedInput
    blocks?: BlockUpdateManyWithoutClubNestedInput
    pricingRules?: PricingRuleUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateWithoutLicensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    mapLink?: NullableStringFieldUpdateOperationsInput | string | null
    transferAlias?: NullableStringFieldUpdateOperationsInput | string | null
    transferCvuCbu?: NullableStringFieldUpdateOperationsInput | string | null
    slotDurationDefault?: IntFieldUpdateOperationsInput | number
    minAdvanceMinutes?: IntFieldUpdateOperationsInput | number
    maxAdvanceDays?: IntFieldUpdateOperationsInput | number
    cancellationPolicyMin?: IntFieldUpdateOperationsInput | number
    noShowPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    holidayJson?: StringFieldUpdateOperationsInput | string
    scheduleJson?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courts?: CourtUncheckedUpdateManyWithoutClubNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutClubNestedInput
    blocks?: BlockUncheckedUpdateManyWithoutClubNestedInput
    pricingRules?: PricingRuleUncheckedUpdateManyWithoutClubNestedInput
  }

  export type CourtCreateManyClubInput = {
    id?: string
    name: string
    active?: boolean
    basePrice?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationCreateManyClubInput = {
    id?: string
    courtId: string
    status?: $Enums.ReservationStatus
    startAt: Date | string
    endAt: Date | string
    holdExpiresAt?: Date | string | null
    customerName: string
    customerWhatsapp: string
    customerEmail?: string | null
    note?: string | null
    amount?: number
    createdByKind?: $Enums.CreatedByKind
    createdByStaffId?: string | null
    manageTokenHash: string
    manageTokenLastRotatedAt?: Date | string
    canceledAt?: Date | string | null
    canceledReason?: string | null
    noShowMarkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlockCreateManyClubInput = {
    id?: string
    courtId: string
    startAt: Date | string
    endAt: Date | string
    reason: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingRuleCreateManyClubInput = {
    id?: string
    courtId?: string | null
    dayOfWeek: number
    startMinute: number
    endMinute: number
    multiplier?: number
    fixedPrice?: number | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseCreateManyClubInput = {
    id?: string
    machineHash: string
    licenseKey: string
    validUntil?: Date | string | null
    active?: boolean
    metadataJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourtUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    basePrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutCourtNestedInput
    blocks?: BlockUpdateManyWithoutCourtNestedInput
  }

  export type CourtUncheckedUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    basePrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutCourtNestedInput
    blocks?: BlockUncheckedUpdateManyWithoutCourtNestedInput
  }

  export type CourtUncheckedUpdateManyWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    basePrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerWhatsapp?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    createdByKind?: EnumCreatedByKindFieldUpdateOperationsInput | $Enums.CreatedByKind
    createdByStaffId?: NullableStringFieldUpdateOperationsInput | string | null
    manageTokenHash?: StringFieldUpdateOperationsInput | string
    manageTokenLastRotatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
    noShowMarkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    court?: CourtUpdateOneRequiredWithoutReservationsNestedInput
    payments?: PaymentUpdateManyWithoutReservationNestedInput
    messages?: MessageLogUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    courtId?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerWhatsapp?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    createdByKind?: EnumCreatedByKindFieldUpdateOperationsInput | $Enums.CreatedByKind
    createdByStaffId?: NullableStringFieldUpdateOperationsInput | string | null
    manageTokenHash?: StringFieldUpdateOperationsInput | string
    manageTokenLastRotatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
    noShowMarkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutReservationNestedInput
    messages?: MessageLogUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    courtId?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerWhatsapp?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    createdByKind?: EnumCreatedByKindFieldUpdateOperationsInput | $Enums.CreatedByKind
    createdByStaffId?: NullableStringFieldUpdateOperationsInput | string | null
    manageTokenHash?: StringFieldUpdateOperationsInput | string
    manageTokenLastRotatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
    noShowMarkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    court?: CourtUpdateOneRequiredWithoutBlocksNestedInput
  }

  export type BlockUncheckedUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    courtId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockUncheckedUpdateManyWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    courtId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingRuleUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    courtId?: NullableStringFieldUpdateOperationsInput | string | null
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startMinute?: IntFieldUpdateOperationsInput | number
    endMinute?: IntFieldUpdateOperationsInput | number
    multiplier?: FloatFieldUpdateOperationsInput | number
    fixedPrice?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingRuleUncheckedUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    courtId?: NullableStringFieldUpdateOperationsInput | string | null
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startMinute?: IntFieldUpdateOperationsInput | number
    endMinute?: IntFieldUpdateOperationsInput | number
    multiplier?: FloatFieldUpdateOperationsInput | number
    fixedPrice?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingRuleUncheckedUpdateManyWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    courtId?: NullableStringFieldUpdateOperationsInput | string | null
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startMinute?: IntFieldUpdateOperationsInput | number
    endMinute?: IntFieldUpdateOperationsInput | number
    multiplier?: FloatFieldUpdateOperationsInput | number
    fixedPrice?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    machineHash?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    metadataJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseUncheckedUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    machineHash?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    metadataJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseUncheckedUpdateManyWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    machineHash?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    metadataJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateManyCourtInput = {
    id?: string
    clubId: string
    status?: $Enums.ReservationStatus
    startAt: Date | string
    endAt: Date | string
    holdExpiresAt?: Date | string | null
    customerName: string
    customerWhatsapp: string
    customerEmail?: string | null
    note?: string | null
    amount?: number
    createdByKind?: $Enums.CreatedByKind
    createdByStaffId?: string | null
    manageTokenHash: string
    manageTokenLastRotatedAt?: Date | string
    canceledAt?: Date | string | null
    canceledReason?: string | null
    noShowMarkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlockCreateManyCourtInput = {
    id?: string
    clubId: string
    startAt: Date | string
    endAt: Date | string
    reason: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUpdateWithoutCourtInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerWhatsapp?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    createdByKind?: EnumCreatedByKindFieldUpdateOperationsInput | $Enums.CreatedByKind
    createdByStaffId?: NullableStringFieldUpdateOperationsInput | string | null
    manageTokenHash?: StringFieldUpdateOperationsInput | string
    manageTokenLastRotatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
    noShowMarkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    club?: ClubUpdateOneRequiredWithoutReservationsNestedInput
    payments?: PaymentUpdateManyWithoutReservationNestedInput
    messages?: MessageLogUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutCourtInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerWhatsapp?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    createdByKind?: EnumCreatedByKindFieldUpdateOperationsInput | $Enums.CreatedByKind
    createdByStaffId?: NullableStringFieldUpdateOperationsInput | string | null
    manageTokenHash?: StringFieldUpdateOperationsInput | string
    manageTokenLastRotatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
    noShowMarkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutReservationNestedInput
    messages?: MessageLogUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutCourtInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerWhatsapp?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    createdByKind?: EnumCreatedByKindFieldUpdateOperationsInput | $Enums.CreatedByKind
    createdByStaffId?: NullableStringFieldUpdateOperationsInput | string | null
    manageTokenHash?: StringFieldUpdateOperationsInput | string
    manageTokenLastRotatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
    noShowMarkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockUpdateWithoutCourtInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    club?: ClubUpdateOneRequiredWithoutBlocksNestedInput
  }

  export type BlockUncheckedUpdateWithoutCourtInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockUncheckedUpdateManyWithoutCourtInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyActorInput = {
    id?: string
    entity: string
    entityId: string
    action: string
    beforeJson?: string | null
    afterJson?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    beforeJson?: NullableStringFieldUpdateOperationsInput | string | null
    afterJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    beforeJson?: NullableStringFieldUpdateOperationsInput | string | null
    afterJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    beforeJson?: NullableStringFieldUpdateOperationsInput | string | null
    afterJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyReservationInput = {
    id?: string
    amount: number
    method: string
    status?: $Enums.PaymentStatus
    note?: string | null
    registeredById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageLogCreateManyReservationInput = {
    id?: string
    channel: string
    destination: string
    payload: string
    success?: boolean
    createdAt?: Date | string
  }

  export type PaymentUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    registeredById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    registeredById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    registeredById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageLogUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageLogUncheckedUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageLogUncheckedUpdateManyWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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