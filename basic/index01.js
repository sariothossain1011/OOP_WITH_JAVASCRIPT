class Person {
  constructor(name, email) {
    this._name = name;
    this._email = email;
  }
  getName() {
    return this._name;
  }
  setName(name) {
    this._name = name;
  }
  getEmail() {
    return this._email;
  }
  setEmail(email) {
    this._email = email;
  }

  sendMail(msg) {
    console.log("To", this._email);
    console.log("msg", this._sanitizeMsg(msg));
  }
  _sanitizeMsg(msg) {
    return msg.trim().toLowerCase();
  }
  print() {
    console.log(this);
  }
}
const p1 = new Person("sariot", "sariot@gmail.com");

p1.setName("soma");
p1.setEmail("soma@gmail.com");

console.log(p1.getName(), p1.getEmail());

p1.sendMail("         WOW THIS IS WORKING      ");
