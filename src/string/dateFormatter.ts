export function dateFormatter(time?: string | number, fmt?: string): string {
  const date = time ? new Date(time) : new Date();

  if (!fmt) {
    return date.toLocaleString();
  }
  const opt: Record<string, string> = {
    'Y+': date.getFullYear().toString(),
    'M+': (date.getMonth() + 1).toString(),
    'd+': date.getDate().toString(),
    'D+': date.getDate().toString(),
    'H+': date.getHours().toString(),
    'h+': `${(date.getHours() + 24) % 12 || 12}`,
    'm+': date.getMinutes().toString(),
    'S+': date.getSeconds().toString(),
    's+': date.getSeconds().toString(),
  };
  for (const k in opt) {
    const ret = new RegExp(`(${k})`).exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'));
    }
  }
  return fmt;
}
