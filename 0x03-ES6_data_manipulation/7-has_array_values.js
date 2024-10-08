export default function hasValuesFromArray(set, array) {
  const results = array.filter((element) => !set.has(element));

  if (results.length === 0) {
    return true;
  }
  return false;
}
