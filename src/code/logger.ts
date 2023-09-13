import { dateFormatter } from '../string/dateFormatter';
import type { ILogger } from '../types';

// 定义日志级别类型
export type LogLevel = 'log' | 'error' | 'warn' | 'debug' | 'info';

// 支持的日志级别列表
export const LOG_LIST: LogLevel[] = ['log', 'error', 'warn', 'debug', 'info'];

export class Logger implements ILogger {
  private name: string;
  private time: boolean;

  constructor(name = '', time = false) {
    this.name = name;
    this.time = time;
  }

  // 打印普通日志
  public log(...args: any[]) {
    this.logger('log', args);
  }

  // 打印信息日志
  public info(...args: any[]) {
    this.logger('info', args);
  }

  // 打印错误日志
  public error(...args: any[]) {
    this.logger('error', args);
  }

  // 打印警告日志
  public warn(...args: any[]) {
    this.logger('warn', args);
  }

  // 打印调试日志
  public debug(...args: any[]) {
    this.logger('debug', args);
  }

  private logger(level: LogLevel, args: any[]) {
    // 获取对应日志级别的输出函数
    const fn = this.getConsoleFn(level);

    // 如果启用时间戳，添加时间戳前缀
    const timePrefix = this.time ? `[${dateFormatter()}]` : '';

    // 如果有日志名称，添加名称前缀
    const namePrefix = this.name ? `[${this.name}]` : '';

    // 构建完整的日志信息
    const logMessage = `${timePrefix}${namePrefix}${timePrefix || namePrefix ? ':' : ''}`;

    // 使用输出函数打印日志信息和参数
    fn(logMessage, ...args);
  }

  private getConsoleFn(level: LogLevel): Function {
    // 根据日志级别返回对应的console方法
    switch (level) {
      case 'debug':
        return console.debug.bind(console);
      case 'warn':
        return console.warn.bind(console);
      case 'error':
        return console.error.bind(console);
      case 'info':
        return console.info.bind(console);
      default:
        return console.log.bind(console);
    }
  }
}

export function createLogger(name: string, time = false) {
  const logger = new Logger(name, time);
  const g = globalThis as unknown as { logger: ILogger };
  g['logger'] = logger;
}
