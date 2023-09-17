const UniPerson = require("./UniPerson");

const _studentID = Symbol("studentID");
const _guardian = Symbol("guardian");
const _exams = Symbol("exams");
const _tuitionFee = Symbol("tuitionFee");

class Student extends UniPerson {
  constructor(id, name, studentID, guardian) {
    super(id, name);
    this[_studentID] = studentID;
    this[_guardian] = guardian;
    this[_exams] = [];
    this[_tuitionFee] = null;
  }

  get studentID() {
    return this[_studentID];
  }

  get guardian() {
    return this[_guardian];
  }
  set guardian(value) {
    this[_guardian] = value;
  }

  get exams() {
    return this[_exams];
  }
  set exams(value) {
    this[_exams] = value;
  }

  addExam(value){
    this[_exams] = push(exam)
  }

  get tuitionFee(){
    return this[_tuitionFee]
  }
  set tuitionFee(value){
    this[_tuitionFee] = value
  } 

  toString(){

    return ` ${super.toString()} StudentID: ${this[_studentID]}`;
  }
}


module.exports = Student