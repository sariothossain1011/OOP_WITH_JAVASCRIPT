class Person{
 constructor(name,email){
    this._name = name ;
    this._email = email
 }   

 get name(){
    return this._name
}
set name(value){
    if(value.toLowerCase()=== "sariot hossain") return;
    this._name = value
}

print() {
  console.log(this);
}
toString(){
    return `Name is :${this._name},Email is :${this._email}`
}
}
const p1 = new Person("Sariot ", "sariot@gmail.com");

console.log(p1+"")