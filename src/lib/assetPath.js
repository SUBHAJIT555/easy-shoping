/** Encode only the filename so paths with spaces, &, or dashes work on Apache. */
export function encodeAssetPath(src) {
  if (!src || typeof src !== "string") return src;
  if (/^https?:\/\//i.test(src)) return src;
  const i = src.lastIndexOf("/");
  const dir = i === -1 ? "" : src.slice(0, i + 1);
  const file = i === -1 ? src : src.slice(i + 1);
  return `${dir}${encodeURIComponent(file)}`;
}
