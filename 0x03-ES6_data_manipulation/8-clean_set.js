export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const restStringList = [...set]
    .filter((string) => typeof string === 'string' && string.startsWith(startString)) // Check if item is string
    .map((string) => string.substring(startString.length)) // Extract part after startString
    .filter(substring => substring); // Remove empty substrings if any

  return restStringList.length ? restStringList.join('-') : ''; // Handle empty result case
}

