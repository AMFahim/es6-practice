class student{
constructor(sId, sName){
  this.id = sId;
  this.name = sName;
  this.school = "Unknown School"
}
};
const student1 = new student(23, "Shabab");
const student2 = new student(24, "Rafsan");
const student3 = new student(25, "Toukir")
console.log(student1, student2, student3);