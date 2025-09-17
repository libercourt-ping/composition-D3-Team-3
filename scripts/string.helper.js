function isBlankOrNull(el) {
  return el == null || (typeof el === "string" && el.length === 0);
}
