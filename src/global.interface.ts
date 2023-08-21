/**
 * Logger options
 * @interface
 */
export interface ILoggerOptions {
  prefix?: string;
  withDate?: boolean;
}

/**
 * Log message
 */
export type LogMessage = string | object | unknown;
