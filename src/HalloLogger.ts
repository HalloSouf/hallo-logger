import chalk from 'chalk';
import { ILoggerOptions, LogMessage } from './global.interface';
import { currentTime, formatObj } from './utils';
import { readFile, readFileSync } from 'fs';

/**
 * Represents a logger.
 */
class HalloLogger {
  /**
   * The options of the logger.
   * @type {ILoggerOptions | undefined}
   * @readonly
   */
  public readonly options?: ILoggerOptions;

  /**
   * Creates a new instance of the Logger class.
   * @param {ILoggerOptions | undefined} options - The options of the logger.
   */
  constructor(options?: ILoggerOptions) {
    this.options = options;
  }

  /**
   * Logs an ready message.
   * @param {LogMessage} message - The message to log.
   * @return {void}
   */
  public ready(message: LogMessage): void {
    if (typeof message === 'object' && message !== null) {
      return console.log(
        `[${currentTime({ withDate: this.options?.withDate })}] ${chalk.green('READY')} (${
          this.options?.prefix ? `${this.options.prefix}/` : ''
        }${process.pid}): \n ${formatObj(message)}`
      );
    }

    return console.log(
      `[${currentTime({ withDate: this.options?.withDate })}] ${chalk.green('READY')} (${
        this.options?.prefix ? `${this.options.prefix}/` : ''
      }${process.pid}): ${message}`
    );
  }

  /**
   * Logs an info message.
   * @param {LogMessage} message - The message to log.
   * @return {void}
   */
  public info(message: LogMessage): void {
    if (typeof message === 'object' && message !== null) {
      return console.log(
        `[${currentTime({ withDate: this.options?.withDate })}] ${chalk.magenta('INFO')} (${
          this.options?.prefix ? `${this.options.prefix}/` : ''
        }${process.pid}): \n ${formatObj(message)}`
      );
    }

    return console.log(
      `[${currentTime({ withDate: this.options?.withDate })}] ${chalk.magenta('INFO')} (${
        this.options?.prefix ? `${this.options.prefix}/` : ''
      }${process.pid}): ${message}`
    );
  }

  /**
   * Logs an error message.
   * @param {LogMessage} message - The message to log.
   * @return {void}
   */
  public error(message: LogMessage): void {
    if (typeof message === 'object' && message !== null) {
      return console.log(
        `[${currentTime({ withDate: this.options?.withDate })}] ${chalk.red('ERROR')} (${
          this.options?.prefix ? `${this.options.prefix}/` : ''
        }${process.pid}): \n ${formatObj(message)}`
      );
    }

    return console.log(
      `[${currentTime({ withDate: this.options?.withDate })}] ${chalk.red('ERROR')} (${
        this.options?.prefix ? `${this.options.prefix}/` : ''
      }${process.pid}): ${message}`
    );
  }

  /**
   * Logs an warning message.
   * @param {LogMessage} message - The message to log.
   * @return {void}
   */
  public warn(message: LogMessage): void {
    if (typeof message === 'object' && message !== null) {
      return console.log(
        `[${currentTime({ withDate: this.options?.withDate })}] ${chalk.yellow('WARNING')} (${
          this.options?.prefix ? `${this.options.prefix}/` : ''
        }${process.pid}): \n ${formatObj(message)}`
      );
    }

    return console.log(
      `[${currentTime({ withDate: this.options?.withDate })}] ${chalk.yellow('WARNING')} (${
        this.options?.prefix ? `${this.options.prefix}/` : ''
      }${process.pid}): ${message}`
    );
  }

  /**
   * Logs the app ready message with the package name, version, and options.
   * @param {number} startTime - The start time of the app.
   * @param {Record<string, string>} [opts={}] - The options to log.
   * @returns {void}
   */
  public static appReady(startTime: number, opts: Record<string, string> = {}): void {
    readFile('./package.json', 'utf-8', (_, data: string): void => {
      const pkg = JSON.parse(data);

      const longestProp = Object.keys(opts).reduce(
        (longest, prop) => (prop.length > longest.length ? prop : longest),
        ''
      );

      const appOpts: string[] = [];
      for (const [prop, value] of Object.entries(opts)) {
        const padding = ' '.repeat(longestProp.length + 4 - prop.length);
        appOpts.push(`${chalk.blackBright.bold(`${prop}:`)}${padding}${chalk.white.bold(value)}`);
      }

      console.log(`
    ${chalk.green.bold(pkg.name)} ${chalk.green(`v${pkg.version}`)} ${chalk.dim(
        'ready in'
      )} ${chalk.white(Date.now() - startTime + ' ms')}

    ${appOpts.join('\n    ')}
      `);
    });
  }
}

export default HalloLogger;
