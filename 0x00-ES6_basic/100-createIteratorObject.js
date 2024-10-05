export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      const departmentsEmployees = Object.values(report.allEmployees);
      const employees = [];
      let count = 0;

      for (const departmentEmployees of departmentsEmployees) {
        employees.push(...departmentEmployees);
      }

      return {
        next: () => {
          if (count < employees.length) {
            const employee = employees[count];
            count += 1;
            return { employee: employee, done: false };
          }
          return { done: true };
        },
      };
    },
  };
}
