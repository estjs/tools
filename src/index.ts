import './globalThis';
import { Logger } from './logger';
export { curry } from './curry';
export { debounce } from './debounce';
export { throttle } from './throttle';
export { filterParams } from './filterParams';
export { getUrlParam } from './getUrlParam';
export { monitorPef } from './monitorPef';
export { template } from './tinyTemplateCompile';

export { ArrRemove } from './array/ArrRemove';
export { uniqueArray } from './array/uniqueArray';
export { replaceAll } from './array/replaceAll';

export { hasCn } from './string/hasCn';
export { escapeHtml } from './string/escapeHtml';
export { unescapeHtml } from './string/unescapeHtml';
export { dateFormater } from './string/dateFormater';

export { isEmail } from './is/isEmail';
export { isIdCard } from './is/isIdCard';
export { isMobile } from './is/isMobile';
export { Logger } from './logger';
export * from './is/isType';

export * from './string/translate';

export * from './types';

export function installGlobal(name: string[] = []) {
  globalThis.$log = new Logger('@estjs/tools', true);
  console.log(globalThis.$log);

}
