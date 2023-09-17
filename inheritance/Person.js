const _name = Symbol("name")
const _email = Symbol("email")

class Person {
    _name = Symbol("name")
    _email = Symbol("email")
  constructor(name, email) {
    this[_name] = name;
    this[_email] = email;
  }
  getName() {
    return this[_name];
  }
  setName (value) {
    this[_name] =value;
  }
  getEmail() {
    return this[_email];
  }
  setEmail(value) {
    this[_email] = value;
  }

  print() {
    console.log(`Name: ${this[_name]},Email: ${this[_email]}`)
  }
  static isValid(age) {
    return age >= 18;
  }
  static equal(p1, p2) {
    if (p1.name != p2) return false;
    if (p1.email != p2) return false;
  }
}


module.exports = Person