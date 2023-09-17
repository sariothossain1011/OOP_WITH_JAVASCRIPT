const Person = require("./Person");
const _subjects = Symbol("subject");
const _tuitionFee = Symbol("tuitionFee");

class Student extends Person {
  constructor(name, email, subject, tuitionFee) {
    super(name, email);
    this[_subjects] = subject;
    this[_tuitionFee] = tuitionFee;
  }

  get subject() {
    return this[_subjects];
  }
  get tuitionFee() {
    return this[_tuitionFee];
  }

  print() {
    super.print();
    console.log(`Subjects: ${this.subject}, Tuition Free: ${this.tuitionFee}`);
  }
}

module.exports = Student;
