/**
 * Regular expression for matching HTML special characters
 * @type {RegExp}
 */
const escapeRE = /["&'<>]/;

/**
 * Escapes HTML special characters in a string to their corresponding entity references
 * @param {unknown} string - The string to escape
 * @returns {string} - The escaped string
 */
export function escapeHTML(string: unknown): string {
  const str = `${string}`;
  const match = escapeRE.exec(str);

  if (!match) {
    return str;
  }

  let html = '';
  let escaped: string;
  let index: number;
  let lastIndex = 0;
  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escaped = '&quot;';
        break;
      case 38: // &
        escaped = '&amp;';
        break;
      case 39: // '
        escaped = '&#39;';
        break;
      case 60: // <
        escaped = '&lt;';
        break;
      case 62: // >
        escaped = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.slice(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escaped;
  }

  return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
