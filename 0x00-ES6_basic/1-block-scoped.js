export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;  // eslint-disable-next-line no-unused-vars, no-shadow
    // eslint-disable-next-line no-unused-vars, no-shadow
    const task2 = false;
  }

  return [task, task2];
}
