import { dateFormater } from './string/dateFormater';

export type LogLevel = 'log' | 'error' | 'warn' | 'debug' | 'info';

export const LOG_LIST = ['log', 'error', 'warn', 'debug', 'info'];

// export interface LoggerOption {
//   name: string;
//   effact: Function;
// }

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
  protected effact: Function | null = null;
  private static localInstance: Logger;
  constructor(name: string, effact: Function) {
    this.name = name || '';
    this.effact = effact;

  }

  public log(...args: any[]) {
    if (this.effact) {
      this.effact();
    }
    console.log(`[${dateFormater()}] [${this.name}] :`, args);
  }

  getLog(){

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
