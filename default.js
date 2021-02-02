function add(num1, num2 = 10){
  // if( num2 == undefined){
  //   num2 = 0;
  // }
  // or
  // num2 = num2 || 0;
  return num1 + num2;
}
const total = add(34);
console.log(total)

// quiz function
function createUser(name, age = 18){

  const user = {};
  
  user.name = name;
  
  user.age = age ;
  
  return user;
  
  }
  const details = createUser("Fahim", 17)
  console.log(details)
  