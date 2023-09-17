const Person = require("./Person");
const _subject = Symbol("subject");
const _salary = Symbol("salary");

class Teacher extends Person {
  constructor(name, email, subject, salary) {
    super(name, email);
    this[_subject] = subject;
    this[_salary] = salary;
  }

  get subject() {
    return this[_subject];
  }
  get tuitionFee() {
    return this[_salary];
  }
  print() {
    super.print();
    console.log(`Subject: ${this.subject}, Tuition Free: ${this.salary}`);
  }
}

module.exports = Teacher;
