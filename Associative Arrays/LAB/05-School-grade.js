function studentGrades(input) {
    let studentData = new Map();
  
    for (let line of input) {
      let [studentName, ...grades] = line.split(' ');
      let studentGrades = grades.map(Number);
  
      if (studentData.has(studentName)) {
        studentData.get(studentName).push(...studentGrades);
      } else {
        studentData.set(studentName, studentGrades);
      }
    }
  console.log(studentData);
    let sortedStudents = Array.from(studentData).sort((a, b) => a[0].localeCompare(b[0]));
  
    for (let [studentName, grades] of sortedStudents) {
      let averageGrade = (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(2);
      console.log(`${studentName}: ${averageGrade}`);
    }
  }
  studentGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)