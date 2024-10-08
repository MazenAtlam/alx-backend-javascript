export default function updateStudentGradeByCity(students, city, newGrades) {
  const results = students
    .filter((student) => student.location === city)
    .map((student) => addGrade(student, newGrades));

    return results;
}

function addGrade(student, grades) {
  const studentFilteredGrade = grades.filter((grade) => grade.studentId === student.id);
  let grade = studentFilteredGrade.length === 0 ? 'N/A' : studentFilteredGrade[0].grade;

  student.grade = grade;
  return student;
}
