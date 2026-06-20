const students = [
  { id: 1, name: 'Aditya', marks: 85, attendance: 92 },
  { id: 2, name: 'Akansha', marks: 38, attendance: 76 },
  { id: 3, name: 'Tushar', marks: 67, attendance: 81 },
  { id: 4, name: 'Simran', marks: 91, attendance: 88 },
  { id: 5, name: 'Michael', marks: 45, attendance: 60 },
  { id: 6, name: 'Herjuno', marks: 29, attendance: 95 }
];

const passedStudents = students.filter(student => student.marks >= 40);

const studentReport = students.map(({ name, marks, attendance }) => {
  let grade;

  if (marks >= 80) grade = "A";
  else if (marks >= 60) grade = "B";
  else if (marks >= 40) grade = "C";
  else grade = "F";

  return { name, marks, attendance, grade };
});

const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
const averageMarks = totalMarks / students.length;

const topper = students.reduce((top, student) =>
  student.marks > top.marks ? student : top
);

console.log("STUDENT PERFORMANCE DATA\n");

console.log("Passed Students:");
passedStudents.forEach(({ name, marks }) =>
  console.log(`${name} - ${marks} Marks`)
);

console.log("\nStudent Report:");
studentReport.forEach(student => {
  console.log(
    `Name: ${student.name}, Marks: ${student.marks}, Attendance: ${student.attendance}%, Grade: ${student.grade}`
  );
});

console.log(`\nClass Average Marks: ${averageMarks.toFixed(2)}`);

console.log(
  `Topper: ${topper.name} (${topper.marks} Marks)`
);