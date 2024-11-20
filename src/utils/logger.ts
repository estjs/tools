import colors from 'ansi-colors';

export declare type TLog = 'error' | 'warning' | 'info' | 'success';

export const logType = {
  info: (msg: string, prefix = '') => colors.blueBright.bold(`${prefix}${msg}`),
  error: (msg: string, prefix = '') => colors.redBright.bold(`${prefix}${msg}`),
  warning: (msg: string, prefix = '') => colors.yellowBright.bold(`${prefix}${msg}`),
  success: (msg: string, prefix = '') => colors.greenBright.bold(`${prefix}${msg}`),
};

export const globalPrefix = '';
/**
 * 设置打印的全局前缀
 * @param prefix 全局前缀
 */
export const setGlobalPrefix = (prefix: string) => {
  (globalThis as any)[globalPrefix] = prefix;
};

/**
 * 打印日志函数
 * @param type 打印输出类别
 * @param msg 打印输出信息
 * @param prefix 打印输出前缀，默认全局前缀
 */
export const log = (
  type: TLog,
  msg: string,
  prefix = (globalThis as any)[globalPrefix] as string,
) => {
  console.log(logType[type](msg, prefix));
};
