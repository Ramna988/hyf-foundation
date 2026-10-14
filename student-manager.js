const class07Students = [];
function addStudentToClass(studentName) {
    if (studentName == "") {
    console.log("Cannot add an empty string.");
    return;
  }

  if (class07Students.includes(studentName)) {
    console.log(`Student is already in the class`);
    return;
  }

  if (studentName == "Queen") {
    class07Students.push(studentName);
    return;
  }

  if (class07Students.length >= 6) {
    console.log("Cannot add more students to class 07");
    return;
  }

  class07Students.push(studentName);
}

function getNumberOfStudents() {
  {
  return class07Students.length;
}
}
addStudentToClass("Ram");
addStudentToClass("Shyam");
addStudentToClass("Jay");
addStudentToClass("Veeru");
addStudentToClass("Tina");
addStudentToClass("Tiya");
addStudentToClass("Vijay");
addStudentToClass("Tina");
addStudentToClass("");
addStudentToClass("Veeru");
addStudentToClass("Tina");
addStudentToClass("Queen");
addStudentToClass("Queen");

console.log(getNumberOfStudents());
