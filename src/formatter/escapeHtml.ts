export function escapeHtml(s: string): string {
  return s.replaceAll(
    /["&'<>]/g,
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[tag] || tag,
  );
}
export function unescapeHtml(s: string): string {
  return s.replaceAll(
    /&amp;|&lt;|&gt;|&#39;|&quot;/g,
    tag => ({ '&amp;': '&', '&lt;': '<', '&gt;': '>', '&#39;': "'", '&quot;': '"' })[tag] || tag,
  );
}
