
const Person = require("./Person");

const _employeeID = Symbol("employeeID");
const _salary = Symbol("salary");

class Employee extends Person {
  constructor(id, name,employeeID) {
    super(id, name);
    this[_salary] = null;
    this[_employeeID] = employeeID;
  }
  get salary() {
    return this[_salary];
  }
  set salary(value) {
    this[_salary] = value;
  }
  get employeeID() {
    return this[_employeeID];
  }
  set employeeID(value) {
    this[_employeeID] = value;
  }

  toString() {
    return `${super.toString()}Employee: ${this[_employeeID]},Salary: ${this[_salary]}`;
  }
}

module.exports = Employee;
