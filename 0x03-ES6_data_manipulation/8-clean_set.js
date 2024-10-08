export default function cleanSet(set, startString) {
  if (!startString) {
    return;
  }
  const restStringList = [...set]
    .filter((string) => (string.startsWith(startString)))
    .map((string) => string.split(startString)[1]);

    return restStringList.join('-');
}
