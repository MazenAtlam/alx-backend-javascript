export default function cleanSet(set, startString) {
  if (!startString || typeof startString === 'undefined') {
    return '';
  }
  const restStringList = [...set]
    .filter((string) => (string.startsWith(startString)))
    .map((string) => string.substring(startString.length));

  return restStringList.join('-');
}
