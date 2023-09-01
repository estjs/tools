import { Logger } from '../src/code/logger';

const name = '@estjs/tool';

export const clc = {
  green: (text: string) => `\u001B[32m${text}\u001B[39m`,
  yellow: (text: string) => `\u001B[33m${text}\u001B[39m`,
  red: (text: string) => `\u001B[31m${text}\u001B[39m`,
  blue: (text: string) => `\u001B[30m${text}\u001B[39m`,
  magentaBright: (text: string) => `\u001B[95m${text}\u001B[39m`,
  cyanBright: (text: string) => `\u001B[96m${text}\u001B[39m`,
};

let outputData = '';
const storeLog = (inputs: any) => (outputData += inputs);

describe('logger', () => {
  test('console log', () => {
    outputData = '';
    const logger = new Logger();
    console['log'] = vitest.fn(storeLog);
    logger.log('hello');
    expect(outputData).toBe(clc.green('hello'));
  });
  test('console log name', () => {
    outputData = '';
    const logger = new Logger(name);
    console['log'] = vitest.fn(storeLog);
    logger.log('hello');
    expect(outputData).toBe(clc.green('[@estjs/tool]: hello'));
  });
});
