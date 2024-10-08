export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const restStringList = [...set]
    .filter((string) => (typeof string === 'string' && string.startsWith(startString)))
    .map((string) => string.substring(startString.length))
    .filter((string) => (string)); // filter empty strings

  return (restStringList.length === 0 ? '' : restStringList.join('-'));
}
