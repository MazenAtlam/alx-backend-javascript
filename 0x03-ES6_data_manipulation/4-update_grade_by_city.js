function getGrade(student, grades) {
  const studentFilteredGrade = grades.filter((grade) => grade.studentId === student.id);
  const grade = studentFilteredGrade.length === 0 ? 'N/A' : studentFilteredGrade[0].grade;

  return grade;
}

export default function updateStudentGradeByCity(students, city, newGrades) {
  const results = students
    .filter((student) => student.location === city)
    .map((student) => {
      Object.defineProperty(student, 'grade', getGrade(student, newGrades));
      return student;
    });

    return results;
}
