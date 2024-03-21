export function escapeHtml(s: string): string {
  return s.replaceAll(
    /["&'<>]/g,
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[tag] || tag,
  );
}
