const { Contact, Address } = require("./Contact");
const { Guardian, Student, Teacher } = require("./Person");
const { Department, Exam, Subject } = require("./University");

// GUARDIAN ID 1
const guardian = new Guardian(1, "sariot hossain", "Web Developer", 30000);
guardian.blood = "B+";
guardian.contact = new Contact({
  id: 1,
  email: "sariothossain@gmail.com",
  phone: "01881286293",
  alterNativePhone: "4583450358",
  address: "ctg",
});
guardian.contact.address = new Address({
  id: 1,
  roadOn: "road-12",
  city: "Dhaka",
  region: "Dhaka",
  country: "bangladesh",
  postalCode: "300",
});

//STUDENT 1
const student = new Student(1, "md fahad", "st001", guardian);
student.blood = "AB+";
student.contact = new Contact({
  id: 2,
  email: "mdfahad@gmail.com",
  phone: "018345345",
  alterNativePhone: guardian.contact.alterNativePhone,
  address: guardian.contact.address,
});
// student.exams = new Exam(
//   1,
//   "Computer",
//   "50",
//   "principle of software engineering"
// );
// console.log(student);

// DEPARTMENT 01
const department = new Department({ id: 1, name: "CSE" });
student.department = department;
department.subjects = [
  new Subject(1, "computer fundamental", 4),
  new Subject(2, "software engineering", 3),
  new Subject(3, "software testing", 4),
];

const credit = student.department.subjects.reduce((a, b)=> {
  a += b.credit
  return a ;
},0);
// console.log("total credit : ", credit);


// TEACHER 01

const dean = new Teacher(1,"Mahin Vai",department.subjects[0],"EMP001")
dean.blood = "O+";
dean.department = department ;
dean.salary = 20000 
// dean.employeeID = "EMP001";
dean.contact = new Contact({
  id: 3,
  email: "mahinvai@gmail.com",
  phone: "01834534554645",
  address:new Address({
    id: 2,
  roadOn: "road-143",
  city: "Dhaka 1",
  region: "Dhaka 1",
  country: "bangladesh",
  postalCode: "4000",
  })
})

// TODO : UPDATE DEAN'S INFORMATION 
const teacher1 = new Teacher(2,"israfeel Vai",department.subjects[1],"EMP004")
teacher1.department = department ;
teacher1.blood = "O+";
teacher1.salary = 40000 
// teacher1.employeeID = "EMP004";
teacher1.contact = new Contact({
  id: 4,
  email: "israfeel@gmail.com",
  phone: "01834554645",
  address:new Address({
    id: 3,
  roadOn: "road-1ku3",
  city: "Dhaka 2",
  region: "Dhaka 2",
  country: "bangladesh",
  postalCode: "40s00",
  })
})

const teacher2 = new Teacher(3,"masum Vai",department.subjects[2],"EMP004")
teacher2.department = department ;
teacher2.blood = "B-";
teacher2.salary = 40000 
// teacher2.employeeID = "EMP004";
teacher2.contact = new Contact({
  id: 5,
  email: "masum@gmail.com",
  phone: "0183455434645",
  address:new Address({
    id: 6,
  roadOn: "road-1ku3",
  city: "Dhaka 2",
  region: "Dhaka 2",
  country: "bangladesh",
  postalCode: "40s00",
  })
})


department.dean = dean ;
department.addTeacher(dean);
department.addTeacher(teacher1)
department.addTeacher(teacher2)

student.department.teachers.forEach((teacher,index)=>{
  console.log(`${index},${teacher.name},${teacher.subject.name}`)
})




guardian.addChild(student)

const allTS = guardian.children[0].department.teachers.reduce((a,b)=>{
  a += b.salary 
  return a ;
},0);

// console.log(allTS)

let count = 0 ;

if(student.blood === "O+") count++ ;
if(student.guardian.blood === "O+") count++ ;
student.department.teachers.forEach(teacher=>{
  if(teacher.blood === "O+") count ++ 
})

console.log(count)