export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      const entries = Object.entries(report);
      let index = 0;

      return {
        next: () => {
          if (index < entries.length) {
            const [key, value] = entries[index++];
            return { value: [key, value], done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
}
