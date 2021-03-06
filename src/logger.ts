import { dateFormater } from './string/dateFormater';

export type LogLevel = 'log' | 'error' | 'warn' | 'debug' | 'info';

export const LOG_LIST = ['log', 'error', 'warn', 'debug', 'info'];

export const clc = {
  green: (text: string) => `\u001B[32m${text}\u001B[39m`,
  yellow: (text: string) => `\u001B[33m${text}\u001B[39m`,
  red: (text: string) => `\u001B[31m${text}\u001B[39m`,
  blue: (text: string) => `\u001B[30m${text}\u001B[39m`,
  magentaBright: (text: string) => `\u001B[95m${text}\u001B[39m`,
  cyanBright: (text: string) => `\u001B[96m${text}\u001B[39m`,
};

export class Logger {
  protected name = '';
  protected time = false;
  private static localInstance: Logger;
  constructor(name = '', time = false) {
    this.name = name || '';
    this.time = time || false;
  }

  public log(...args: any[]) {
    this.logger('log', args);
  }

  public info(...args: any[]) {

    this.logger('info', args);
  }

  public error(...args: any[]) {

    this.logger('error', args);
  }

  public warn(...args: any[]) {

    this.logger('warn', args);
  }

  public debug(...args: any[]) {

    this.logger('debug', args);
  }

  private logger(Level: LogLevel, args: any[]) {
    this.getConsoleFn(Level)(this.getColorByLogLevel(Level)(`${this.time ? `[${dateFormater()}] ` : ''}${this.name ? `[${this.name}]` : ''}${this.time || this.name ? '  : ' : ''}${args}`));

  }

  private getConsoleFn(level: LogLevel): Function {
    switch (level) {
      case 'debug':
        return console.debug;
      case 'warn':
        return console.warn;
      case 'error':
        return console.error;
      case 'info':
        return console.info;
      default:
        return console.log;
    }
  }

  private getColorByLogLevel(level: LogLevel) {
    switch (level) {
      case 'debug':
        return clc.magentaBright;
      case 'warn':
        return clc.yellow;
      case 'error':
        return clc.red;
      case 'info':
        return clc.blue;
      default:
        return clc.green;
    }
  }
}
