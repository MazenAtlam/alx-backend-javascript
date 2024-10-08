export default function updateStudentGradeByCity(students, city, newGrades) {
  const results = students
    .filter((student) => student.location === city)
    .map((student) => addGrade(student, newGrades));

    return results;
}

function addGrade(student, grades) {
  const studentFilteredGrade = grades.filter((grade) => grade.studentId === student.id);

  let grade = 'N/A';
  if (studentGrade) {
    grade = studentFilteredGrade[0];
  }

  student.grade = grade;
}
