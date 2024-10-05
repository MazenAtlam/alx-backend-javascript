export default function iterateThroughObject(reportWithIterator) {
  let results = [];
  for (const item of reportWithIterator) {
    results.push(item);
  }
  return results.join(' | ');
}
