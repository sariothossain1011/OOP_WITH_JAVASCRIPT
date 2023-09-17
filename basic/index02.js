class Person {
    constructor(name, email) {
      this._name = name; // private class 
      this._email = email; // private class inheritance
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
  }
  const p1 = new Person("Sariot ", "sariot@gmail.com");
  
  
//   console.log(p1.getName(), p1.getEmail());
p1.name = " hossain"
console.log(p1.name)
console.log(p1)
  
  
p1.print();
