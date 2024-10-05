export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      const entries = Object.entries(report);
      let index = 0;

      return {
        next: () => {
          if (index < entries.length) {
            const [key, value] = entries[index];
            index += 1;
            return { value: [key, value], done: false };
          }
          return { done: true };
        },
      };
    },
  };
}
