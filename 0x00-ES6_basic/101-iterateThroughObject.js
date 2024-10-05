export default function iterateThroughObject(reportWithIterator) {
  const results = [];
  for (const item of reportWithIterator) {
    results.push(item);
  }
  return results.join(' | ');
}
