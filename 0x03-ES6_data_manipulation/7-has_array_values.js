export default function hasValuesFromArray(set, array) {
  // filter the array from elements that exist in the set
  const uncommonElements = array.filter((element) => !set.has(element));

  if (uncommonElements.length === 0) {
    return true;
  }
  return false;
}
