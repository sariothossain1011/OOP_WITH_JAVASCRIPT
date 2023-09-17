const Person = require("./Person")
const Student = require("./Student");
const Teacher = require("./Teacher");

const p = new Person("Sariot Hossain","sariothossain@gmail.com");
const t = new Teacher("Masud Rana","masudrana@gmail.com","Computer Training","50000");
const s = new Student("Rana Sharma","rana@gmail.com",["Computer fundamental", "physics","Mathematics"], "10000");




t.print();
s.print();

console.log(p)





