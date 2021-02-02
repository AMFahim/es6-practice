class parent{
  constructor(){
    this.fatherName = "Sofiulla"
    this.motherName = "Rowshan Ara"
  }
}
class Child extends parent{
  constructor(name){
    super();
    this.name = name;
  }
}
const details1 =new Child("Fahim");
console.log(details1)