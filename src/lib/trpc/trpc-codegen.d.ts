/// <reference types="qs" />
import express from 'express'
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server'
export declare const appRouter: import('@trpc/server').CreateRouterInner<
  import('@trpc/server').RootConfig<{
    ctx: {
      prisma: import('.prisma/client').PrismaClient<
        import('.prisma/client').Prisma.PrismaClientOptions,
        never,
        | import('.prisma/client').Prisma.RejectOnNotFound
        | import('.prisma/client').Prisma.RejectPerOperation
        | undefined
      >
      req: express.Request<
        import('express-serve-static-core').ParamsDictionary,
        any,
        any,
        import('qs').ParsedQs,
        Record<string, any>
      >
      res: express.Response<any, Record<string, any>>
      requestId: string
      fingerprint: string
      isClient: boolean
    }
    meta: import('trpc-openapi').OpenApiMeta
    errorShape: {
      data: {
        zodError: import('zod').typeToFlattenedError<any, string> | null
        meta: {
          adminUnauthorized: boolean
        }
        code:
          | 'UNAUTHORIZED'
          | 'PARSE_ERROR'
          | 'BAD_REQUEST'
          | 'INTERNAL_SERVER_ERROR'
          | 'FORBIDDEN'
          | 'NOT_FOUND'
          | 'METHOD_NOT_SUPPORTED'
          | 'TIMEOUT'
          | 'CONFLICT'
          | 'PRECONDITION_FAILED'
          | 'PAYLOAD_TOO_LARGE'
          | 'UNPROCESSABLE_CONTENT'
          | 'TOO_MANY_REQUESTS'
          | 'CLIENT_CLOSED_REQUEST'
        httpStatus: number
        path?: string
        stack?: string
      }
      message: string
      code: import('@trpc/server/rpc').TRPC_ERROR_CODE_NUMBER
    }
    transformer: typeof import('superjson').default.default
  }>,
  {
    info: import('@trpc/server').CreateRouterInner<
      import('@trpc/server').RootConfig<{
        ctx: {
          prisma: import('.prisma/client').PrismaClient<
            import('.prisma/client').Prisma.PrismaClientOptions,
            never,
            | import('.prisma/client').Prisma.RejectOnNotFound
            | import('.prisma/client').Prisma.RejectPerOperation
            | undefined
          >
          req: express.Request<
            import('express-serve-static-core').ParamsDictionary,
            any,
            any,
            import('qs').ParsedQs,
            Record<string, any>
          >
          res: express.Response<any, Record<string, any>>
          requestId: string
          fingerprint: string
          isClient: boolean
        }
        meta: import('trpc-openapi').OpenApiMeta
        errorShape: {
          data: {
            zodError: import('zod').typeToFlattenedError<any, string> | null
            meta: {
              adminUnauthorized: boolean
            }
            code:
              | 'UNAUTHORIZED'
              | 'PARSE_ERROR'
              | 'BAD_REQUEST'
              | 'INTERNAL_SERVER_ERROR'
              | 'FORBIDDEN'
              | 'NOT_FOUND'
              | 'METHOD_NOT_SUPPORTED'
              | 'TIMEOUT'
              | 'CONFLICT'
              | 'PRECONDITION_FAILED'
              | 'PAYLOAD_TOO_LARGE'
              | 'UNPROCESSABLE_CONTENT'
              | 'TOO_MANY_REQUESTS'
              | 'CLIENT_CLOSED_REQUEST'
            httpStatus: number
            path?: string
            stack?: string
          }
          message: string
          code: import('@trpc/server/rpc').TRPC_ERROR_CODE_NUMBER
        }
        transformer: typeof import('superjson').default
      }>,
      {
        eventDate: import('@trpc/server').BuildProcedure<
          'query',
          {
            _config: import('@trpc/server').RootConfig<{
              ctx: {
                prisma: import('.prisma/client').PrismaClient<
                  import('.prisma/client').Prisma.PrismaClientOptions,
                  never,
                  | import('.prisma/client').Prisma.RejectOnNotFound
                  | import('.prisma/client').Prisma.RejectPerOperation
                  | undefined
                >
                req: express.Request<
                  import('express-serve-static-core').ParamsDictionary,
                  any,
                  any,
                  import('qs').ParsedQs,
                  Record<string, any>
                >
                res: express.Response<any, Record<string, any>>
                requestId: string
                fingerprint: string
                isClient: boolean
              }
              meta: import('trpc-openapi').OpenApiMeta
              errorShape: {
                data: {
                  zodError:
                    | import('zod').typeToFlattenedError<any, string>
                    | null
                  meta: {
                    adminUnauthorized: boolean
                  }
                  code:
                    | 'UNAUTHORIZED'
                    | 'PARSE_ERROR'
                    | 'BAD_REQUEST'
                    | 'INTERNAL_SERVER_ERROR'
                    | 'FORBIDDEN'
                    | 'NOT_FOUND'
                    | 'METHOD_NOT_SUPPORTED'
                    | 'TIMEOUT'
                    | 'CONFLICT'
                    | 'PRECONDITION_FAILED'
                    | 'PAYLOAD_TOO_LARGE'
                    | 'UNPROCESSABLE_CONTENT'
                    | 'TOO_MANY_REQUESTS'
                    | 'CLIENT_CLOSED_REQUEST'
                  httpStatus: number
                  path?: string
                  stack?: string
                }
                message: string
                code: import('@trpc/server/rpc').TRPC_ERROR_CODE_NUMBER
              }
              transformer: typeof import('superjson').default
            }>
            _meta: import('trpc-openapi').OpenApiMeta
            _ctx_out: {
              fingerprint: string
              requestId: string
              isClient: true
              prisma: import('.prisma/client').PrismaClient<
                import('.prisma/client').Prisma.PrismaClientOptions,
                never,
                | import('.prisma/client').Prisma.RejectOnNotFound
                | import('.prisma/client').Prisma.RejectPerOperation
                | undefined
              >
              req: express.Request<
                import('express-serve-static-core').ParamsDictionary,
                any,
                any,
                import('qs').ParsedQs,
                Record<string, any>
              >
              res: express.Response<any, Record<string, any>>
            }
            _input_in: void
            _input_out: void
            _output_in: {
              end: Date
              start: Date
              startAsString: string
              endAsString: string
              rangeAsString: string
              timeLeft: {
                months: number
                days: number
                hours: number
                minutes: number
                seconds: number
                monthsAsString: string
                daysAsString: string
                hoursAsString: string
                minutesAsString: string
                secondsAsString: string
              }
              timeLeftAsFullString: string
            }
            _output_out: {
              end: Date
              start: Date
              startAsString: string
              endAsString: string
              rangeAsString: string
              timeLeft: {
                months: number
                days: number
                hours: number
                minutes: number
                seconds: number
                monthsAsString: string
                daysAsString: string
                hoursAsString: string
                minutesAsString: string
                secondsAsString: string
              }
              timeLeftAsFullString: string
            }
          },
          unknown
        >
        eventPlace: import('@trpc/server').BuildProcedure<
          'query',
          {
            _config: import('@trpc/server').RootConfig<{
              ctx: {
                prisma: import('.prisma/client').PrismaClient<
                  import('.prisma/client').Prisma.PrismaClientOptions,
                  never,
                  | import('.prisma/client').Prisma.RejectOnNotFound
                  | import('.prisma/client').Prisma.RejectPerOperation
                  | undefined
                >
                req: express.Request<
                  import('express-serve-static-core').ParamsDictionary,
                  any,
                  any,
                  import('qs').ParsedQs,
                  Record<string, any>
                >
                res: express.Response<any, Record<string, any>>
                requestId: string
                fingerprint: string
                isClient: boolean
              }
              meta: import('trpc-openapi').OpenApiMeta
              errorShape: {
                data: {
                  zodError:
                    | import('zod').typeToFlattenedError<any, string>
                    | null
                  meta: {
                    adminUnauthorized: boolean
                  }
                  code:
                    | 'UNAUTHORIZED'
                    | 'PARSE_ERROR'
                    | 'BAD_REQUEST'
                    | 'INTERNAL_SERVER_ERROR'
                    | 'FORBIDDEN'
                    | 'NOT_FOUND'
                    | 'METHOD_NOT_SUPPORTED'
                    | 'TIMEOUT'
                    | 'CONFLICT'
                    | 'PRECONDITION_FAILED'
                    | 'PAYLOAD_TOO_LARGE'
                    | 'UNPROCESSABLE_CONTENT'
                    | 'TOO_MANY_REQUESTS'
                    | 'CLIENT_CLOSED_REQUEST'
                  httpStatus: number
                  path?: string
                  stack?: string
                }
                message: string
                code: import('@trpc/server/rpc').TRPC_ERROR_CODE_NUMBER
              }
              transformer: typeof import('superjson').default
            }>
            _meta: import('trpc-openapi').OpenApiMeta
            _ctx_out: {
              fingerprint: string
              requestId: string
              isClient: true
              prisma: import('.prisma/client').PrismaClient<
                import('.prisma/client').Prisma.PrismaClientOptions,
                never,
                | import('.prisma/client').Prisma.RejectOnNotFound
                | import('.prisma/client').Prisma.RejectPerOperation
                | undefined
              >
              req: express.Request<
                import('express-serve-static-core').ParamsDictionary,
                any,
                any,
                import('qs').ParsedQs,
                Record<string, any>
              >
              res: express.Response<any, Record<string, any>>
            }
            _input_in: void
            _input_out: void
            _output_in: {
              address: string
              city: string
              latitude: number
              longitude: number
              latitudeAsString: string
              longitudeAsString: string
            }
            _output_out: {
              address: string
              city: string
              latitude: number
              longitude: number
              latitudeAsString: string
              longitudeAsString: string
            }
          },
          unknown
        >
        schedule: import('@trpc/server').BuildProcedure<
          'query',
          {
            _config: import('@trpc/server').RootConfig<{
              ctx: {
                prisma: import('.prisma/client').PrismaClient<
                  import('.prisma/client').Prisma.PrismaClientOptions,
                  never,
                  | import('.prisma/client').Prisma.RejectOnNotFound
                  | import('.prisma/client').Prisma.RejectPerOperation
                  | undefined
                >
                req: express.Request<
                  import('express-serve-static-core').ParamsDictionary,
                  any,
                  any,
                  import('qs').ParsedQs,
                  Record<string, any>
                >
                res: express.Response<any, Record<string, any>>
                requestId: string
                fingerprint: string
                isClient: boolean
              }
              meta: import('trpc-openapi').OpenApiMeta
              errorShape: {
                data: {
                  zodError:
                    | import('zod').typeToFlattenedError<any, string>
                    | null
                  meta: {
                    adminUnauthorized: boolean
                  }
                  code:
                    | 'UNAUTHORIZED'
                    | 'PARSE_ERROR'
                    | 'BAD_REQUEST'
                    | 'INTERNAL_SERVER_ERROR'
                    | 'FORBIDDEN'
                    | 'NOT_FOUND'
                    | 'METHOD_NOT_SUPPORTED'
                    | 'TIMEOUT'
                    | 'CONFLICT'
                    | 'PRECONDITION_FAILED'
                    | 'PAYLOAD_TOO_LARGE'
                    | 'UNPROCESSABLE_CONTENT'
                    | 'TOO_MANY_REQUESTS'
                    | 'CLIENT_CLOSED_REQUEST'
                  httpStatus: number
                  path?: string
                  stack?: string
                }
                message: string
                code: import('@trpc/server/rpc').TRPC_ERROR_CODE_NUMBER
              }
              transformer: typeof import('superjson').default
            }>
            _meta: import('trpc-openapi').OpenApiMeta
            _ctx_out: {
              fingerprint: string
              requestId: string
              isClient: true
              prisma: import('.prisma/client').PrismaClient<
                import('.prisma/client').Prisma.PrismaClientOptions,
                never,
                | import('.prisma/client').Prisma.RejectOnNotFound
                | import('.prisma/client').Prisma.RejectPerOperation
                | undefined
              >
              req: express.Request<
                import('express-serve-static-core').ParamsDictionary,
                any,
                any,
                import('qs').ParsedQs,
                Record<string, any>
              >
              res: express.Response<any, Record<string, any>>
            }
            _input_in: void
            _input_out: void
            _output_in: {
              sections: {
                time: Date
                name: string
                timeAsString: string
                timeRangeAsString: string
              }[]
              day: Date
              dayNumber: number
              dayAsString: string
            }[]
            _output_out: {
              sections: {
                time: Date
                name: string
                timeAsString: string
                timeRangeAsString: string
              }[]
              day: Date
              dayNumber: number
              dayAsString: string
            }[]
          },
          unknown
        >
      }
    >
    admin: import('@trpc/server').CreateRouterInner<
      import('@trpc/server').RootConfig<{
        ctx: {
          prisma: import('.prisma/client').PrismaClient<
            import('.prisma/client').Prisma.PrismaClientOptions,
            never,
            | import('.prisma/client').Prisma.RejectOnNotFound
            | import('.prisma/client').Prisma.RejectPerOperation
            | undefined
          >
          req: express.Request<
            import('express-serve-static-core').ParamsDictionary,
            any,
            any,
            import('qs').ParsedQs,
            Record<string, any>
          >
          res: express.Response<any, Record<string, any>>
          requestId: string
          fingerprint: string
          isClient: boolean
        }
        meta: import('trpc-openapi').OpenApiMeta
        errorShape: {
          data: {
            zodError: import('zod').typeToFlattenedError<any, string> | null
            meta: {
              adminUnauthorized: boolean
            }
            code:
              | 'UNAUTHORIZED'
              | 'PARSE_ERROR'
              | 'BAD_REQUEST'
              | 'INTERNAL_SERVER_ERROR'
              | 'FORBIDDEN'
              | 'NOT_FOUND'
              | 'METHOD_NOT_SUPPORTED'
              | 'TIMEOUT'
              | 'CONFLICT'
              | 'PRECONDITION_FAILED'
              | 'PAYLOAD_TOO_LARGE'
              | 'UNPROCESSABLE_CONTENT'
              | 'TOO_MANY_REQUESTS'
              | 'CLIENT_CLOSED_REQUEST'
            httpStatus: number
            path?: string
            stack?: string
          }
          message: string
          code: import('@trpc/server/rpc').TRPC_ERROR_CODE_NUMBER
        }
        transformer: typeof import('superjson').default
      }>,
      {
        create: import('@trpc/server').BuildProcedure<
          'mutation',
          {
            _config: import('@trpc/server').RootConfig<{
              ctx: {
                prisma: import('.prisma/client').PrismaClient<
                  import('.prisma/client').Prisma.PrismaClientOptions,
                  never,
                  | import('.prisma/client').Prisma.RejectOnNotFound
                  | import('.prisma/client').Prisma.RejectPerOperation
                  | undefined
                >
                req: express.Request<
                  import('express-serve-static-core').ParamsDictionary,
                  any,
                  any,
                  import('qs').ParsedQs,
                  Record<string, any>
                >
                res: express.Response<any, Record<string, any>>
                requestId: string
                fingerprint: string
                isClient: boolean
              }
              meta: import('trpc-openapi').OpenApiMeta
              errorShape: {
                data: {
                  zodError:
                    | import('zod').typeToFlattenedError<any, string>
                    | null
                  meta: {
                    adminUnauthorized: boolean
                  }
                  code:
                    | 'UNAUTHORIZED'
                    | 'PARSE_ERROR'
                    | 'BAD_REQUEST'
                    | 'INTERNAL_SERVER_ERROR'
                    | 'FORBIDDEN'
                    | 'NOT_FOUND'
                    | 'METHOD_NOT_SUPPORTED'
                    | 'TIMEOUT'
                    | 'CONFLICT'
                    | 'PRECONDITION_FAILED'
                    | 'PAYLOAD_TOO_LARGE'
                    | 'UNPROCESSABLE_CONTENT'
                    | 'TOO_MANY_REQUESTS'
                    | 'CLIENT_CLOSED_REQUEST'
                  httpStatus: number
                  path?: string
                  stack?: string
                }
                message: string
                code: import('@trpc/server/rpc').TRPC_ERROR_CODE_NUMBER
              }
              transformer: typeof import('superjson').default
            }>
            _meta: import('trpc-openapi').OpenApiMeta
            _ctx_out: {
              fingerprint: string
              requestId: string
              isClient: boolean
              prisma: import('.prisma/client').PrismaClient<
                import('.prisma/client').Prisma.PrismaClientOptions,
                never,
                | import('.prisma/client').Prisma.RejectOnNotFound
                | import('.prisma/client').Prisma.RejectPerOperation
                | undefined
              >
              req: express.Request<
                import('express-serve-static-core').ParamsDictionary,
                any,
                any,
                import('qs').ParsedQs,
                Record<string, any>
              >
              res: express.Response<any, Record<string, any>>
            }
            _input_in: void
            _input_out: void
            _output_in: {
              login: string
              password: string
            }
            _output_out: {
              login: string
              password: string
            }
          },
          unknown
        >
        login: import('@trpc/server').BuildProcedure<
          'mutation',
          {
            _config: import('@trpc/server').RootConfig<{
              ctx: {
                prisma: import('.prisma/client').PrismaClient<
                  import('.prisma/client').Prisma.PrismaClientOptions,
                  never,
                  | import('.prisma/client').Prisma.RejectOnNotFound
                  | import('.prisma/client').Prisma.RejectPerOperation
                  | undefined
                >
                req: express.Request<
                  import('express-serve-static-core').ParamsDictionary,
                  any,
                  any,
                  import('qs').ParsedQs,
                  Record<string, any>
                >
                res: express.Response<any, Record<string, any>>
                requestId: string
                fingerprint: string
                isClient: boolean
              }
              meta: import('trpc-openapi').OpenApiMeta
              errorShape: {
                data: {
                  zodError:
                    | import('zod').typeToFlattenedError<any, string>
                    | null
                  meta: {
                    adminUnauthorized: boolean
                  }
                  code:
                    | 'UNAUTHORIZED'
                    | 'PARSE_ERROR'
                    | 'BAD_REQUEST'
                    | 'INTERNAL_SERVER_ERROR'
                    | 'FORBIDDEN'
                    | 'NOT_FOUND'
                    | 'METHOD_NOT_SUPPORTED'
                    | 'TIMEOUT'
                    | 'CONFLICT'
                    | 'PRECONDITION_FAILED'
                    | 'PAYLOAD_TOO_LARGE'
                    | 'UNPROCESSABLE_CONTENT'
                    | 'TOO_MANY_REQUESTS'
                    | 'CLIENT_CLOSED_REQUEST'
                  httpStatus: number
                  path?: string
                  stack?: string
                }
                message: string
                code: import('@trpc/server/rpc').TRPC_ERROR_CODE_NUMBER
              }
              transformer: typeof import('superjson').default
            }>
            _meta: import('trpc-openapi').OpenApiMeta
            _ctx_out: {
              fingerprint: string
              requestId: string
              isClient: boolean
              prisma: import('.prisma/client').PrismaClient<
                import('.prisma/client').Prisma.PrismaClientOptions,
                never,
                | import('.prisma/client').Prisma.RejectOnNotFound
                | import('.prisma/client').Prisma.RejectPerOperation
                | undefined
              >
              req: express.Request<
                import('express-serve-static-core').ParamsDictionary,
                any,
                any,
                import('qs').ParsedQs,
                Record<string, any>
              >
              res: express.Response<any, Record<string, any>>
            }
            _input_in: {
              login: string
              password: string
              captchaText: string
              randomString: string
            }
            _input_out: {
              login: string
              password: string
              captchaText: string
              randomString: string
            }
            _output_in: {
              csrfToken: string
            }
            _output_out: {
              csrfToken: string
            }
          },
          unknown
        >
        logout: import('@trpc/server').BuildProcedure<
          'mutation',
          {
            _config: import('@trpc/server').RootConfig<{
              ctx: {
                prisma: import('.prisma/client').PrismaClient<
                  import('.prisma/client').Prisma.PrismaClientOptions,
                  never,
                  | import('.prisma/client').Prisma.RejectOnNotFound
                  | import('.prisma/client').Prisma.RejectPerOperation
                  | undefined
                >
                req: express.Request<
                  import('express-serve-static-core').ParamsDictionary,
                  any,
                  any,
                  import('qs').ParsedQs,
                  Record<string, any>
                >
                res: express.Response<any, Record<string, any>>
                requestId: string
                fingerprint: string
                isClient: boolean
              }
              meta: import('trpc-openapi').OpenApiMeta
              errorShape: {
                data: {
                  zodError:
                    | import('zod').typeToFlattenedError<any, string>
                    | null
                  meta: {
                    adminUnauthorized: boolean
                  }
                  code:
                    | 'UNAUTHORIZED'
                    | 'PARSE_ERROR'
                    | 'BAD_REQUEST'
                    | 'INTERNAL_SERVER_ERROR'
                    | 'FORBIDDEN'
                    | 'NOT_FOUND'
                    | 'METHOD_NOT_SUPPORTED'
                    | 'TIMEOUT'
                    | 'CONFLICT'
                    | 'PRECONDITION_FAILED'
                    | 'PAYLOAD_TOO_LARGE'
                    | 'UNPROCESSABLE_CONTENT'
                    | 'TOO_MANY_REQUESTS'
                    | 'CLIENT_CLOSED_REQUEST'
                  httpStatus: number
                  path?: string
                  stack?: string
                }
                message: string
                code: import('@trpc/server/rpc').TRPC_ERROR_CODE_NUMBER
              }
              transformer: typeof import('superjson').default
            }>
            _meta: import('trpc-openapi').OpenApiMeta
            _ctx_out: {
              fingerprint: string
              requestId: string
              isClient: boolean
              prisma: import('.prisma/client').PrismaClient<
                import('.prisma/client').Prisma.PrismaClientOptions,
                never,
                | import('.prisma/client').Prisma.RejectOnNotFound
                | import('.prisma/client').Prisma.RejectPerOperation
                | undefined
              >
              req: express.Request<
                import('express-serve-static-core').ParamsDictionary,
                any,
                any,
                import('qs').ParsedQs,
                Record<string, any>
              >
              res: express.Response<any, Record<string, any>>
              adminId: string
              adminCsrfToken: string
            }
            _input_in: {
              csrfToken?: string | undefined
            }
            _input_out: {
              csrfToken?: string | undefined
            }
            _output_in: void
            _output_out: void
          },
          unknown
        >
      }
    >
    content: import('@trpc/server').CreateRouterInner<
      import('@trpc/server').RootConfig<{
        ctx: {
          prisma: import('.prisma/client').PrismaClient<
            import('.prisma/client').Prisma.PrismaClientOptions,
            never,
            | import('.prisma/client').Prisma.RejectOnNotFound
            | import('.prisma/client').Prisma.RejectPerOperation
            | undefined
          >
          req: express.Request<
            import('express-serve-static-core').ParamsDictionary,
            any,
            any,
            import('qs').ParsedQs,
            Record<string, any>
          >
          res: express.Response<any, Record<string, any>>
          requestId: string
          fingerprint: string
          isClient: boolean
        }
        meta: import('trpc-openapi').OpenApiMeta
        errorShape: {
          data: {
            zodError: import('zod').typeToFlattenedError<any, string> | null
            meta: {
              adminUnauthorized: boolean
            }
            code:
              | 'UNAUTHORIZED'
              | 'PARSE_ERROR'
              | 'BAD_REQUEST'
              | 'INTERNAL_SERVER_ERROR'
              | 'FORBIDDEN'
              | 'NOT_FOUND'
              | 'METHOD_NOT_SUPPORTED'
              | 'TIMEOUT'
              | 'CONFLICT'
              | 'PRECONDITION_FAILED'
              | 'PAYLOAD_TOO_LARGE'
              | 'UNPROCESSABLE_CONTENT'
              | 'TOO_MANY_REQUESTS'
              | 'CLIENT_CLOSED_REQUEST'
            httpStatus: number
            path?: string
            stack?: string
          }
          message: string
          code: import('@trpc/server/rpc').TRPC_ERROR_CODE_NUMBER
        }
        transformer: typeof import('superjson').default
      }>,
      {
        changeCommon: import('@trpc/server').BuildProcedure<
          'mutation',
          {
            _config: import('@trpc/server').RootConfig<{
              ctx: {
                prisma: import('.prisma/client').PrismaClient<
                  import('.prisma/client').Prisma.PrismaClientOptions,
                  never,
                  | import('.prisma/client').Prisma.RejectOnNotFound
                  | import('.prisma/client').Prisma.RejectPerOperation
                  | undefined
                >
                req: express.Request<
                  import('express-serve-static-core').ParamsDictionary,
                  any,
                  any,
                  import('qs').ParsedQs,
                  Record<string, any>
                >
                res: express.Response<any, Record<string, any>>
                requestId: string
                fingerprint: string
                isClient: boolean
              }
              meta: import('trpc-openapi').OpenApiMeta
              errorShape: {
                data: {
                  zodError:
                    | import('zod').typeToFlattenedError<any, string>
                    | null
                  meta: {
                    adminUnauthorized: boolean
                  }
                  code:
                    | 'UNAUTHORIZED'
                    | 'PARSE_ERROR'
                    | 'BAD_REQUEST'
                    | 'INTERNAL_SERVER_ERROR'
                    | 'FORBIDDEN'
                    | 'NOT_FOUND'
                    | 'METHOD_NOT_SUPPORTED'
                    | 'TIMEOUT'
                    | 'CONFLICT'
                    | 'PRECONDITION_FAILED'
                    | 'PAYLOAD_TOO_LARGE'
                    | 'UNPROCESSABLE_CONTENT'
                    | 'TOO_MANY_REQUESTS'
                    | 'CLIENT_CLOSED_REQUEST'
                  httpStatus: number
                  path?: string
                  stack?: string
                }
                message: string
                code: import('@trpc/server/rpc').TRPC_ERROR_CODE_NUMBER
              }
              transformer: typeof import('superjson').default
            }>
            _meta: import('trpc-openapi').OpenApiMeta
            _ctx_out: {
              fingerprint: string
              requestId: string
              isClient: boolean
              prisma: import('.prisma/client').PrismaClient<
                import('.prisma/client').Prisma.PrismaClientOptions,
                never,
                | import('.prisma/client').Prisma.RejectOnNotFound
                | import('.prisma/client').Prisma.RejectPerOperation
                | undefined
              >
              req: express.Request<
                import('express-serve-static-core').ParamsDictionary,
                any,
                any,
                import('qs').ParsedQs,
                Record<string, any>
              >
              res: express.Response<any, Record<string, any>>
              adminId: string
              adminCsrfToken: string
            }
            _input_in: {
              dateStart?: Date | undefined
              dateEnd?: Date | undefined
              address?: string | undefined
              city?: string | undefined
              latitude?: number | undefined
              longitude?: number | undefined
              csrfToken?: string | undefined
            }
            _input_out: {
              dateStart?: Date | undefined
              dateEnd?: Date | undefined
              address?: string | undefined
              city?: string | undefined
              latitude?: number | undefined
              longitude?: number | undefined
              csrfToken?: string | undefined
            }
            _output_in: void
            _output_out: void
          },
          unknown
        >
        changeSchedule: import('@trpc/server').BuildProcedure<
          'mutation',
          {
            _config: import('@trpc/server').RootConfig<{
              ctx: {
                prisma: import('.prisma/client').PrismaClient<
                  import('.prisma/client').Prisma.PrismaClientOptions,
                  never,
                  | import('.prisma/client').Prisma.RejectOnNotFound
                  | import('.prisma/client').Prisma.RejectPerOperation
                  | undefined
                >
                req: express.Request<
                  import('express-serve-static-core').ParamsDictionary,
                  any,
                  any,
                  import('qs').ParsedQs,
                  Record<string, any>
                >
                res: express.Response<any, Record<string, any>>
                requestId: string
                fingerprint: string
                isClient: boolean
              }
              meta: import('trpc-openapi').OpenApiMeta
              errorShape: {
                data: {
                  zodError:
                    | import('zod').typeToFlattenedError<any, string>
                    | null
                  meta: {
                    adminUnauthorized: boolean
                  }
                  code:
                    | 'UNAUTHORIZED'
                    | 'PARSE_ERROR'
                    | 'BAD_REQUEST'
                    | 'INTERNAL_SERVER_ERROR'
                    | 'FORBIDDEN'
                    | 'NOT_FOUND'
                    | 'METHOD_NOT_SUPPORTED'
                    | 'TIMEOUT'
                    | 'CONFLICT'
                    | 'PRECONDITION_FAILED'
                    | 'PAYLOAD_TOO_LARGE'
                    | 'UNPROCESSABLE_CONTENT'
                    | 'TOO_MANY_REQUESTS'
                    | 'CLIENT_CLOSED_REQUEST'
                  httpStatus: number
                  path?: string
                  stack?: string
                }
                message: string
                code: import('@trpc/server/rpc').TRPC_ERROR_CODE_NUMBER
              }
              transformer: typeof import('superjson').default
            }>
            _meta: import('trpc-openapi').OpenApiMeta
            _ctx_out: {
              fingerprint: string
              requestId: string
              isClient: boolean
              prisma: import('.prisma/client').PrismaClient<
                import('.prisma/client').Prisma.PrismaClientOptions,
                never,
                | import('.prisma/client').Prisma.RejectOnNotFound
                | import('.prisma/client').Prisma.RejectPerOperation
                | undefined
              >
              req: express.Request<
                import('express-serve-static-core').ParamsDictionary,
                any,
                any,
                import('qs').ParsedQs,
                Record<string, any>
              >
              res: express.Response<any, Record<string, any>>
              adminId: string
              adminCsrfToken: string
            }
            _input_in: {
              days: {
                sections: {
                  time: Date
                  name: string
                }[]
              }[]
              csrfToken?: string | undefined
            }
            _input_out: {
              days: {
                sections: {
                  time: Date
                  name: string
                }[]
              }[]
              csrfToken?: string | undefined
            }
            _output_in: void
            _output_out: void
          },
          unknown
        >
      }
    >
    feedback: import('@trpc/server').CreateRouterInner<
      import('@trpc/server').RootConfig<{
        ctx: {
          prisma: import('.prisma/client').PrismaClient<
            import('.prisma/client').Prisma.PrismaClientOptions,
            never,
            | import('.prisma/client').Prisma.RejectOnNotFound
            | import('.prisma/client').Prisma.RejectPerOperation
            | undefined
          >
          req: express.Request<
            import('express-serve-static-core').ParamsDictionary,
            any,
            any,
            import('qs').ParsedQs,
            Record<string, any>
          >
          res: express.Response<any, Record<string, any>>
          requestId: string
          fingerprint: string
          isClient: boolean
        }
        meta: import('trpc-openapi').OpenApiMeta
        errorShape: {
          data: {
            zodError: import('zod').typeToFlattenedError<any, string> | null
            meta: {
              adminUnauthorized: boolean
            }
            code:
              | 'UNAUTHORIZED'
              | 'PARSE_ERROR'
              | 'BAD_REQUEST'
              | 'INTERNAL_SERVER_ERROR'
              | 'FORBIDDEN'
              | 'NOT_FOUND'
              | 'METHOD_NOT_SUPPORTED'
              | 'TIMEOUT'
              | 'CONFLICT'
              | 'PRECONDITION_FAILED'
              | 'PAYLOAD_TOO_LARGE'
              | 'UNPROCESSABLE_CONTENT'
              | 'TOO_MANY_REQUESTS'
              | 'CLIENT_CLOSED_REQUEST'
            httpStatus: number
            path?: string
            stack?: string
          }
          message: string
          code: import('@trpc/server/rpc').TRPC_ERROR_CODE_NUMBER
        }
        transformer: typeof import('superjson').default
      }>,
      {
        create: import('@trpc/server').BuildProcedure<
          'mutation',
          {
            _config: import('@trpc/server').RootConfig<{
              ctx: {
                prisma: import('.prisma/client').PrismaClient<
                  import('.prisma/client').Prisma.PrismaClientOptions,
                  never,
                  | import('.prisma/client').Prisma.RejectOnNotFound
                  | import('.prisma/client').Prisma.RejectPerOperation
                  | undefined
                >
                req: express.Request<
                  import('express-serve-static-core').ParamsDictionary,
                  any,
                  any,
                  import('qs').ParsedQs,
                  Record<string, any>
                >
                res: express.Response<any, Record<string, any>>
                requestId: string
                fingerprint: string
                isClient: boolean
              }
              meta: import('trpc-openapi').OpenApiMeta
              errorShape: {
                data: {
                  zodError:
                    | import('zod').typeToFlattenedError<any, string>
                    | null
                  meta: {
                    adminUnauthorized: boolean
                  }
                  code:
                    | 'UNAUTHORIZED'
                    | 'PARSE_ERROR'
                    | 'BAD_REQUEST'
                    | 'INTERNAL_SERVER_ERROR'
                    | 'FORBIDDEN'
                    | 'NOT_FOUND'
                    | 'METHOD_NOT_SUPPORTED'
                    | 'TIMEOUT'
                    | 'CONFLICT'
                    | 'PRECONDITION_FAILED'
                    | 'PAYLOAD_TOO_LARGE'
                    | 'UNPROCESSABLE_CONTENT'
                    | 'TOO_MANY_REQUESTS'
                    | 'CLIENT_CLOSED_REQUEST'
                  httpStatus: number
                  path?: string
                  stack?: string
                }
                message: string
                code: import('@trpc/server/rpc').TRPC_ERROR_CODE_NUMBER
              }
              transformer: typeof import('superjson').default
            }>
            _meta: import('trpc-openapi').OpenApiMeta
            _ctx_out: {
              fingerprint: string
              requestId: string
              isClient: boolean
              prisma: import('.prisma/client').PrismaClient<
                import('.prisma/client').Prisma.PrismaClientOptions,
                never,
                | import('.prisma/client').Prisma.RejectOnNotFound
                | import('.prisma/client').Prisma.RejectPerOperation
                | undefined
              >
              req: express.Request<
                import('express-serve-static-core').ParamsDictionary,
                any,
                any,
                import('qs').ParsedQs,
                Record<string, any>
              >
              res: express.Response<any, Record<string, any>>
            }
            _input_in: {
              message: string
              name: string
              email: string
              commandName: string | null
              captchaText: string
              randomString: string
              consentProcessingOfPersonalData: true
            }
            _input_out: {
              message: string
              name: string
              email: string
              commandName: string | null
              captchaText: string
              randomString: string
              consentProcessingOfPersonalData: true
            }
            _output_in: void
            _output_out: void
          },
          unknown
        >
        get: import('@trpc/server').BuildProcedure<
          'query',
          {
            _config: import('@trpc/server').RootConfig<{
              ctx: {
                prisma: import('.prisma/client').PrismaClient<
                  import('.prisma/client').Prisma.PrismaClientOptions,
                  never,
                  | import('.prisma/client').Prisma.RejectOnNotFound
                  | import('.prisma/client').Prisma.RejectPerOperation
                  | undefined
                >
                req: express.Request<
                  import('express-serve-static-core').ParamsDictionary,
                  any,
                  any,
                  import('qs').ParsedQs,
                  Record<string, any>
                >
                res: express.Response<any, Record<string, any>>
                requestId: string
                fingerprint: string
                isClient: boolean
              }
              meta: import('trpc-openapi').OpenApiMeta
              errorShape: {
                data: {
                  zodError:
                    | import('zod').typeToFlattenedError<any, string>
                    | null
                  meta: {
                    adminUnauthorized: boolean
                  }
                  code:
                    | 'UNAUTHORIZED'
                    | 'PARSE_ERROR'
                    | 'BAD_REQUEST'
                    | 'INTERNAL_SERVER_ERROR'
                    | 'FORBIDDEN'
                    | 'NOT_FOUND'
                    | 'METHOD_NOT_SUPPORTED'
                    | 'TIMEOUT'
                    | 'CONFLICT'
                    | 'PRECONDITION_FAILED'
                    | 'PAYLOAD_TOO_LARGE'
                    | 'UNPROCESSABLE_CONTENT'
                    | 'TOO_MANY_REQUESTS'
                    | 'CLIENT_CLOSED_REQUEST'
                  httpStatus: number
                  path?: string
                  stack?: string
                }
                message: string
                code: import('@trpc/server/rpc').TRPC_ERROR_CODE_NUMBER
              }
              transformer: typeof import('superjson').default
            }>
            _meta: import('trpc-openapi').OpenApiMeta
            _ctx_out: {
              fingerprint: string
              requestId: string
              isClient: boolean
              prisma: import('.prisma/client').PrismaClient<
                import('.prisma/client').Prisma.PrismaClientOptions,
                never,
                | import('.prisma/client').Prisma.RejectOnNotFound
                | import('.prisma/client').Prisma.RejectPerOperation
                | undefined
              >
              req: express.Request<
                import('express-serve-static-core').ParamsDictionary,
                any,
                any,
                import('qs').ParsedQs,
                Record<string, any>
              >
              res: express.Response<any, Record<string, any>>
              adminId: string
              adminCsrfToken: string
            }
            _input_in: void
            _input_out: void
            _output_in: {
              feedback: {
                message: string
                id: number
                createdAt: Date
                updatedAt: Date
                name: string
                answered: boolean
                fingerprint: string
                email: string
                commandName: string | null
              }[]
              count: number
            }
            _output_out: {
              feedback: {
                message: string
                id: number
                createdAt: Date
                updatedAt: Date
                name: string
                answered: boolean
                fingerprint: string
                email: string
                commandName: string | null
              }[]
              count: number
            }
          },
          unknown
        >
        deleteById: import('@trpc/server').BuildProcedure<
          'mutation',
          {
            _config: import('@trpc/server').RootConfig<{
              ctx: {
                prisma: import('.prisma/client').PrismaClient<
                  import('.prisma/client').Prisma.PrismaClientOptions,
                  never,
                  | import('.prisma/client').Prisma.RejectOnNotFound
                  | import('.prisma/client').Prisma.RejectPerOperation
                  | undefined
                >
                req: express.Request<
                  import('express-serve-static-core').ParamsDictionary,
                  any,
                  any,
                  import('qs').ParsedQs,
                  Record<string, any>
                >
                res: express.Response<any, Record<string, any>>
                requestId: string
                fingerprint: string
                isClient: boolean
              }
              meta: import('trpc-openapi').OpenApiMeta
              errorShape: {
                data: {
                  zodError:
                    | import('zod').typeToFlattenedError<any, string>
                    | null
                  meta: {
                    adminUnauthorized: boolean
                  }
                  code:
                    | 'UNAUTHORIZED'
                    | 'PARSE_ERROR'
                    | 'BAD_REQUEST'
                    | 'INTERNAL_SERVER_ERROR'
                    | 'FORBIDDEN'
                    | 'NOT_FOUND'
                    | 'METHOD_NOT_SUPPORTED'
                    | 'TIMEOUT'
                    | 'CONFLICT'
                    | 'PRECONDITION_FAILED'
                    | 'PAYLOAD_TOO_LARGE'
                    | 'UNPROCESSABLE_CONTENT'
                    | 'TOO_MANY_REQUESTS'
                    | 'CLIENT_CLOSED_REQUEST'
                  httpStatus: number
                  path?: string
                  stack?: string
                }
                message: string
                code: import('@trpc/server/rpc').TRPC_ERROR_CODE_NUMBER
              }
              transformer: typeof import('superjson').default
            }>
            _meta: import('trpc-openapi').OpenApiMeta
            _ctx_out: {
              fingerprint: string
              requestId: string
              isClient: boolean
              prisma: import('.prisma/client').PrismaClient<
                import('.prisma/client').Prisma.PrismaClientOptions,
                never,
                | import('.prisma/client').Prisma.RejectOnNotFound
                | import('.prisma/client').Prisma.RejectPerOperation
                | undefined
              >
              req: express.Request<
                import('express-serve-static-core').ParamsDictionary,
                any,
                any,
                import('qs').ParsedQs,
                Record<string, any>
              >
              res: express.Response<any, Record<string, any>>
              adminId: string
              adminCsrfToken: string
            }
            _input_in: {
              id: number
              csrfToken?: string | undefined
            }
            _input_out: {
              id: number
              csrfToken?: string | undefined
            }
            _output_in: void
            _output_out: void
          },
          unknown
        >
        reply: import('@trpc/server').BuildProcedure<
          'mutation',
          {
            _config: import('@trpc/server').RootConfig<{
              ctx: {
                prisma: import('.prisma/client').PrismaClient<
                  import('.prisma/client').Prisma.PrismaClientOptions,
                  never,
                  | import('.prisma/client').Prisma.RejectOnNotFound
                  | import('.prisma/client').Prisma.RejectPerOperation
                  | undefined
                >
                req: express.Request<
                  import('express-serve-static-core').ParamsDictionary,
                  any,
                  any,
                  import('qs').ParsedQs,
                  Record<string, any>
                >
                res: express.Response<any, Record<string, any>>
                requestId: string
                fingerprint: string
                isClient: boolean
              }
              meta: import('trpc-openapi').OpenApiMeta
              errorShape: {
                data: {
                  zodError:
                    | import('zod').typeToFlattenedError<any, string>
                    | null
                  meta: {
                    adminUnauthorized: boolean
                  }
                  code:
                    | 'UNAUTHORIZED'
                    | 'PARSE_ERROR'
                    | 'BAD_REQUEST'
                    | 'INTERNAL_SERVER_ERROR'
                    | 'FORBIDDEN'
                    | 'NOT_FOUND'
                    | 'METHOD_NOT_SUPPORTED'
                    | 'TIMEOUT'
                    | 'CONFLICT'
                    | 'PRECONDITION_FAILED'
                    | 'PAYLOAD_TOO_LARGE'
                    | 'UNPROCESSABLE_CONTENT'
                    | 'TOO_MANY_REQUESTS'
                    | 'CLIENT_CLOSED_REQUEST'
                  httpStatus: number
                  path?: string
                  stack?: string
                }
                message: string
                code: import('@trpc/server/rpc').TRPC_ERROR_CODE_NUMBER
              }
              transformer: typeof import('superjson').default
            }>
            _meta: import('trpc-openapi').OpenApiMeta
            _ctx_out: {
              fingerprint: string
              requestId: string
              isClient: boolean
              prisma: import('.prisma/client').PrismaClient<
                import('.prisma/client').Prisma.PrismaClientOptions,
                never,
                | import('.prisma/client').Prisma.RejectOnNotFound
                | import('.prisma/client').Prisma.RejectPerOperation
                | undefined
              >
              req: express.Request<
                import('express-serve-static-core').ParamsDictionary,
                any,
                any,
                import('qs').ParsedQs,
                Record<string, any>
              >
              res: express.Response<any, Record<string, any>>
              adminId: string
              adminCsrfToken: string
            }
            _input_in: {
              id: number
              text: string
              csrfToken?: string | undefined
            }
            _input_out: {
              id: number
              text: string
              csrfToken?: string | undefined
            }
            _output_in: void
            _output_out: void
          },
          unknown
        >
      }
    >
    captcha: import('@trpc/server').CreateRouterInner<
      import('@trpc/server').RootConfig<{
        ctx: {
          prisma: import('.prisma/client').PrismaClient<
            import('.prisma/client').Prisma.PrismaClientOptions,
            never,
            | import('.prisma/client').Prisma.RejectOnNotFound
            | import('.prisma/client').Prisma.RejectPerOperation
            | undefined
          >
          req: express.Request<
            import('express-serve-static-core').ParamsDictionary,
            any,
            any,
            import('qs').ParsedQs,
            Record<string, any>
          >
          res: express.Response<any, Record<string, any>>
          requestId: string
          fingerprint: string
          isClient: boolean
        }
        meta: import('trpc-openapi').OpenApiMeta
        errorShape: {
          data: {
            zodError: import('zod').typeToFlattenedError<any, string> | null
            meta: {
              adminUnauthorized: boolean
            }
            code:
              | 'UNAUTHORIZED'
              | 'PARSE_ERROR'
              | 'BAD_REQUEST'
              | 'INTERNAL_SERVER_ERROR'
              | 'FORBIDDEN'
              | 'NOT_FOUND'
              | 'METHOD_NOT_SUPPORTED'
              | 'TIMEOUT'
              | 'CONFLICT'
              | 'PRECONDITION_FAILED'
              | 'PAYLOAD_TOO_LARGE'
              | 'UNPROCESSABLE_CONTENT'
              | 'TOO_MANY_REQUESTS'
              | 'CLIENT_CLOSED_REQUEST'
            httpStatus: number
            path?: string
            stack?: string
          }
          message: string
          code: import('@trpc/server/rpc').TRPC_ERROR_CODE_NUMBER
        }
        transformer: typeof import('superjson').default
      }>,
      {
        get: import('@trpc/server').BuildProcedure<
          'query',
          {
            _config: import('@trpc/server').RootConfig<{
              ctx: {
                prisma: import('.prisma/client').PrismaClient<
                  import('.prisma/client').Prisma.PrismaClientOptions,
                  never,
                  | import('.prisma/client').Prisma.RejectOnNotFound
                  | import('.prisma/client').Prisma.RejectPerOperation
                  | undefined
                >
                req: express.Request<
                  import('express-serve-static-core').ParamsDictionary,
                  any,
                  any,
                  import('qs').ParsedQs,
                  Record<string, any>
                >
                res: express.Response<any, Record<string, any>>
                requestId: string
                fingerprint: string
                isClient: boolean
              }
              meta: import('trpc-openapi').OpenApiMeta
              errorShape: {
                data: {
                  zodError:
                    | import('zod').typeToFlattenedError<any, string>
                    | null
                  meta: {
                    adminUnauthorized: boolean
                  }
                  code:
                    | 'UNAUTHORIZED'
                    | 'PARSE_ERROR'
                    | 'BAD_REQUEST'
                    | 'INTERNAL_SERVER_ERROR'
                    | 'FORBIDDEN'
                    | 'NOT_FOUND'
                    | 'METHOD_NOT_SUPPORTED'
                    | 'TIMEOUT'
                    | 'CONFLICT'
                    | 'PRECONDITION_FAILED'
                    | 'PAYLOAD_TOO_LARGE'
                    | 'UNPROCESSABLE_CONTENT'
                    | 'TOO_MANY_REQUESTS'
                    | 'CLIENT_CLOSED_REQUEST'
                  httpStatus: number
                  path?: string
                  stack?: string
                }
                message: string
                code: import('@trpc/server/rpc').TRPC_ERROR_CODE_NUMBER
              }
              transformer: typeof import('superjson').default
            }>
            _meta: import('trpc-openapi').OpenApiMeta
            _ctx_out: {
              fingerprint: string
              requestId: string
              isClient: boolean
              prisma: import('.prisma/client').PrismaClient<
                import('.prisma/client').Prisma.PrismaClientOptions,
                never,
                | import('.prisma/client').Prisma.RejectOnNotFound
                | import('.prisma/client').Prisma.RejectPerOperation
                | undefined
              >
              req: express.Request<
                import('express-serve-static-core').ParamsDictionary,
                any,
                any,
                import('qs').ParsedQs,
                Record<string, any>
              >
              res: express.Response<any, Record<string, any>>
            }
            _input_in: void
            _input_out: void
            _output_in: {
              randomString: string
              imageUrl: string
              audioUrl: string
            }
            _output_out: {
              randomString: string
              imageUrl: string
              audioUrl: string
            }
          },
          unknown
        >
      }
    >
    applications: import('@trpc/server').CreateRouterInner<
      import('@trpc/server').RootConfig<{
        ctx: {
          prisma: import('.prisma/client').PrismaClient<
            import('.prisma/client').Prisma.PrismaClientOptions,
            never,
            | import('.prisma/client').Prisma.RejectOnNotFound
            | import('.prisma/client').Prisma.RejectPerOperation
            | undefined
          >
          req: express.Request<
            import('express-serve-static-core').ParamsDictionary,
            any,
            any,
            import('qs').ParsedQs,
            Record<string, any>
          >
          res: express.Response<any, Record<string, any>>
          requestId: string
          fingerprint: string
          isClient: boolean
        }
        meta: import('trpc-openapi').OpenApiMeta
        errorShape: {
          data: {
            zodError: import('zod').typeToFlattenedError<any, string> | null
            meta: {
              adminUnauthorized: boolean
            }
            code:
              | 'UNAUTHORIZED'
              | 'PARSE_ERROR'
              | 'BAD_REQUEST'
              | 'INTERNAL_SERVER_ERROR'
              | 'FORBIDDEN'
              | 'NOT_FOUND'
              | 'METHOD_NOT_SUPPORTED'
              | 'TIMEOUT'
              | 'CONFLICT'
              | 'PRECONDITION_FAILED'
              | 'PAYLOAD_TOO_LARGE'
              | 'UNPROCESSABLE_CONTENT'
              | 'TOO_MANY_REQUESTS'
              | 'CLIENT_CLOSED_REQUEST'
            httpStatus: number
            path?: string
            stack?: string
          }
          message: string
          code: import('@trpc/server/rpc').TRPC_ERROR_CODE_NUMBER
        }
        transformer: typeof import('superjson').default
      }>,
      {
        create: import('@trpc/server').BuildProcedure<
          'mutation',
          {
            _config: import('@trpc/server').RootConfig<{
              ctx: {
                prisma: import('.prisma/client').PrismaClient<
                  import('.prisma/client').Prisma.PrismaClientOptions,
                  never,
                  | import('.prisma/client').Prisma.RejectOnNotFound
                  | import('.prisma/client').Prisma.RejectPerOperation
                  | undefined
                >
                req: express.Request<
                  import('express-serve-static-core').ParamsDictionary,
                  any,
                  any,
                  import('qs').ParsedQs,
                  Record<string, any>
                >
                res: express.Response<any, Record<string, any>>
                requestId: string
                fingerprint: string
                isClient: boolean
              }
              meta: import('trpc-openapi').OpenApiMeta
              errorShape: {
                data: {
                  zodError:
                    | import('zod').typeToFlattenedError<any, string>
                    | null
                  meta: {
                    adminUnauthorized: boolean
                  }
                  code:
                    | 'UNAUTHORIZED'
                    | 'PARSE_ERROR'
                    | 'BAD_REQUEST'
                    | 'INTERNAL_SERVER_ERROR'
                    | 'FORBIDDEN'
                    | 'NOT_FOUND'
                    | 'METHOD_NOT_SUPPORTED'
                    | 'TIMEOUT'
                    | 'CONFLICT'
                    | 'PRECONDITION_FAILED'
                    | 'PAYLOAD_TOO_LARGE'
                    | 'UNPROCESSABLE_CONTENT'
                    | 'TOO_MANY_REQUESTS'
                    | 'CLIENT_CLOSED_REQUEST'
                  httpStatus: number
                  path?: string
                  stack?: string
                }
                message: string
                code: import('@trpc/server/rpc').TRPC_ERROR_CODE_NUMBER
              }
              transformer: typeof import('superjson').default
            }>
            _meta: import('trpc-openapi').OpenApiMeta
            _ctx_out: {
              fingerprint: string
              requestId: string
              isClient: boolean
              prisma: import('.prisma/client').PrismaClient<
                import('.prisma/client').Prisma.PrismaClientOptions,
                never,
                | import('.prisma/client').Prisma.RejectOnNotFound
                | import('.prisma/client').Prisma.RejectPerOperation
                | undefined
              >
              req: express.Request<
                import('express-serve-static-core').ParamsDictionary,
                any,
                any,
                import('qs').ParsedQs,
                Record<string, any>
              >
              res: express.Response<any, Record<string, any>>
            }
            _input_in: {
              commandName: string
              participants: {
                email: string
                firstName: string
                lastName: string
                middleName: string | null
                organization: string
                dateOfBirth: Date
                phoneNumber: string
                specialization:
                  | 'frontend'
                  | 'backend'
                  | 'devops'
                  | 'techlead'
                  | 'uxui'
                stack: string
              }[]
              format: 'online' | 'offline' | 'онлайн' | 'оффлайн'
              captchaText: string
              randomString: string
              consentProcessingOfPersonalData: true
            }
            _input_out: {
              commandName: string
              participants: {
                email: string
                firstName: string
                lastName: string
                middleName: string | null
                organization: string
                dateOfBirth: Date
                phoneNumber: string
                specialization:
                  | 'frontend'
                  | 'backend'
                  | 'devops'
                  | 'techlead'
                  | 'uxui'
                stack: string
              }[]
              format: 'online' | 'offline' | 'онлайн' | 'оффлайн'
              captchaText: string
              randomString: string
              consentProcessingOfPersonalData: true
            }
            _output_in: void
            _output_out: void
          },
          unknown
        >
        get: import('@trpc/server').BuildProcedure<
          'query',
          {
            _config: import('@trpc/server').RootConfig<{
              ctx: {
                prisma: import('.prisma/client').PrismaClient<
                  import('.prisma/client').Prisma.PrismaClientOptions,
                  never,
                  | import('.prisma/client').Prisma.RejectOnNotFound
                  | import('.prisma/client').Prisma.RejectPerOperation
                  | undefined
                >
                req: express.Request<
                  import('express-serve-static-core').ParamsDictionary,
                  any,
                  any,
                  import('qs').ParsedQs,
                  Record<string, any>
                >
                res: express.Response<any, Record<string, any>>
                requestId: string
                fingerprint: string
                isClient: boolean
              }
              meta: import('trpc-openapi').OpenApiMeta
              errorShape: {
                data: {
                  zodError:
                    | import('zod').typeToFlattenedError<any, string>
                    | null
                  meta: {
                    adminUnauthorized: boolean
                  }
                  code:
                    | 'UNAUTHORIZED'
                    | 'PARSE_ERROR'
                    | 'BAD_REQUEST'
                    | 'INTERNAL_SERVER_ERROR'
                    | 'FORBIDDEN'
                    | 'NOT_FOUND'
                    | 'METHOD_NOT_SUPPORTED'
                    | 'TIMEOUT'
                    | 'CONFLICT'
                    | 'PRECONDITION_FAILED'
                    | 'PAYLOAD_TOO_LARGE'
                    | 'UNPROCESSABLE_CONTENT'
                    | 'TOO_MANY_REQUESTS'
                    | 'CLIENT_CLOSED_REQUEST'
                  httpStatus: number
                  path?: string
                  stack?: string
                }
                message: string
                code: import('@trpc/server/rpc').TRPC_ERROR_CODE_NUMBER
              }
              transformer: typeof import('superjson').default
            }>
            _meta: import('trpc-openapi').OpenApiMeta
            _ctx_out: {
              fingerprint: string
              requestId: string
              isClient: boolean
              prisma: import('.prisma/client').PrismaClient<
                import('.prisma/client').Prisma.PrismaClientOptions,
                never,
                | import('.prisma/client').Prisma.RejectOnNotFound
                | import('.prisma/client').Prisma.RejectPerOperation
                | undefined
              >
              req: express.Request<
                import('express-serve-static-core').ParamsDictionary,
                any,
                any,
                import('qs').ParsedQs,
                Record<string, any>
              >
              res: express.Response<any, Record<string, any>>
              adminId: string
              adminCsrfToken: string
            }
            _input_in: void
            _input_out: void
            _output_in: {
              count: number
              registered: {
                id: number
                createdAt: Date
                updatedAt: Date
                answered: boolean
                fingerprint: string
                commandName: string
                participants: {
                  id: number
                  email: string
                  firstName: string
                  lastName: string
                  middleName: string | null
                  organization: string
                  dateOfBirth: Date
                  phoneNumber: string
                  specialization:
                    | 'frontend'
                    | 'backend'
                    | 'devops'
                    | 'techlead'
                    | 'uxui'
                  stack: string
                }[]
                format: 'online' | 'offline'
              }[]
            }
            _output_out: {
              count: number
              registered: {
                id: number
                createdAt: Date
                updatedAt: Date
                answered: boolean
                fingerprint: string
                commandName: string
                participants: {
                  id: number
                  email: string
                  firstName: string
                  lastName: string
                  middleName: string | null
                  organization: string
                  dateOfBirth: Date
                  phoneNumber: string
                  specialization:
                    | 'frontend'
                    | 'backend'
                    | 'devops'
                    | 'techlead'
                    | 'uxui'
                  stack: string
                }[]
                format: 'online' | 'offline'
              }[]
            }
          },
          unknown
        >
        deleteById: import('@trpc/server').BuildProcedure<
          'mutation',
          {
            _config: import('@trpc/server').RootConfig<{
              ctx: {
                prisma: import('.prisma/client').PrismaClient<
                  import('.prisma/client').Prisma.PrismaClientOptions,
                  never,
                  | import('.prisma/client').Prisma.RejectOnNotFound
                  | import('.prisma/client').Prisma.RejectPerOperation
                  | undefined
                >
                req: express.Request<
                  import('express-serve-static-core').ParamsDictionary,
                  any,
                  any,
                  import('qs').ParsedQs,
                  Record<string, any>
                >
                res: express.Response<any, Record<string, any>>
                requestId: string
                fingerprint: string
                isClient: boolean
              }
              meta: import('trpc-openapi').OpenApiMeta
              errorShape: {
                data: {
                  zodError:
                    | import('zod').typeToFlattenedError<any, string>
                    | null
                  meta: {
                    adminUnauthorized: boolean
                  }
                  code:
                    | 'UNAUTHORIZED'
                    | 'PARSE_ERROR'
                    | 'BAD_REQUEST'
                    | 'INTERNAL_SERVER_ERROR'
                    | 'FORBIDDEN'
                    | 'NOT_FOUND'
                    | 'METHOD_NOT_SUPPORTED'
                    | 'TIMEOUT'
                    | 'CONFLICT'
                    | 'PRECONDITION_FAILED'
                    | 'PAYLOAD_TOO_LARGE'
                    | 'UNPROCESSABLE_CONTENT'
                    | 'TOO_MANY_REQUESTS'
                    | 'CLIENT_CLOSED_REQUEST'
                  httpStatus: number
                  path?: string
                  stack?: string
                }
                message: string
                code: import('@trpc/server/rpc').TRPC_ERROR_CODE_NUMBER
              }
              transformer: typeof import('superjson').default
            }>
            _meta: import('trpc-openapi').OpenApiMeta
            _ctx_out: {
              fingerprint: string
              requestId: string
              isClient: boolean
              prisma: import('.prisma/client').PrismaClient<
                import('.prisma/client').Prisma.PrismaClientOptions,
                never,
                | import('.prisma/client').Prisma.RejectOnNotFound
                | import('.prisma/client').Prisma.RejectPerOperation
                | undefined
              >
              req: express.Request<
                import('express-serve-static-core').ParamsDictionary,
                any,
                any,
                import('qs').ParsedQs,
                Record<string, any>
              >
              res: express.Response<any, Record<string, any>>
              adminId: string
              adminCsrfToken: string
            }
            _input_in: {
              id: number
              csrfToken?: string | undefined
            }
            _input_out: {
              id: number
              csrfToken?: string | undefined
            }
            _output_in: void
            _output_out: void
          },
          unknown
        >
        reply: import('@trpc/server').BuildProcedure<
          'mutation',
          {
            _config: import('@trpc/server').RootConfig<{
              ctx: {
                prisma: import('.prisma/client').PrismaClient<
                  import('.prisma/client').Prisma.PrismaClientOptions,
                  never,
                  | import('.prisma/client').Prisma.RejectOnNotFound
                  | import('.prisma/client').Prisma.RejectPerOperation
                  | undefined
                >
                req: express.Request<
                  import('express-serve-static-core').ParamsDictionary,
                  any,
                  any,
                  import('qs').ParsedQs,
                  Record<string, any>
                >
                res: express.Response<any, Record<string, any>>
                requestId: string
                fingerprint: string
                isClient: boolean
              }
              meta: import('trpc-openapi').OpenApiMeta
              errorShape: {
                data: {
                  zodError:
                    | import('zod').typeToFlattenedError<any, string>
                    | null
                  meta: {
                    adminUnauthorized: boolean
                  }
                  code:
                    | 'UNAUTHORIZED'
                    | 'PARSE_ERROR'
                    | 'BAD_REQUEST'
                    | 'INTERNAL_SERVER_ERROR'
                    | 'FORBIDDEN'
                    | 'NOT_FOUND'
                    | 'METHOD_NOT_SUPPORTED'
                    | 'TIMEOUT'
                    | 'CONFLICT'
                    | 'PRECONDITION_FAILED'
                    | 'PAYLOAD_TOO_LARGE'
                    | 'UNPROCESSABLE_CONTENT'
                    | 'TOO_MANY_REQUESTS'
                    | 'CLIENT_CLOSED_REQUEST'
                  httpStatus: number
                  path?: string
                  stack?: string
                }
                message: string
                code: import('@trpc/server/rpc').TRPC_ERROR_CODE_NUMBER
              }
              transformer: typeof import('superjson').default
            }>
            _meta: import('trpc-openapi').OpenApiMeta
            _ctx_out: {
              fingerprint: string
              requestId: string
              isClient: boolean
              prisma: import('.prisma/client').PrismaClient<
                import('.prisma/client').Prisma.PrismaClientOptions,
                never,
                | import('.prisma/client').Prisma.RejectOnNotFound
                | import('.prisma/client').Prisma.RejectPerOperation
                | undefined
              >
              req: express.Request<
                import('express-serve-static-core').ParamsDictionary,
                any,
                any,
                import('qs').ParsedQs,
                Record<string, any>
              >
              res: express.Response<any, Record<string, any>>
              adminId: string
              adminCsrfToken: string
            }
            _input_in: {
              id: number
              text: string
              csrfToken?: string | undefined
            }
            _input_out: {
              id: number
              text: string
              csrfToken?: string | undefined
            }
            _output_in: {
              unsuccessfulEmails: string[]
            }
            _output_out: {
              unsuccessfulEmails: string[]
            }
          },
          unknown
        >
      }
    >
  }
>
export type AppRouter = typeof appRouter
export type RouterInputs = inferRouterInputs<AppRouter>
export type RouterOutputs = inferRouterOutputs<AppRouter>
