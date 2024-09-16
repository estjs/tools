export function isMobile(s: string): boolean {
  return /^((13\d)|(14[5-9])|(15([0-35-9]))|(16[67])|(17[1-8])|(18\d)|(19[13|])|(19[56|])|(19[89|]))\d{8}$/.test(
    s,
  );
}
