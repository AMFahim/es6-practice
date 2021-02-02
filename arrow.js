// function doubleIt(num){
//   return num * 2;
// }

const doubleIt = num => num * 2;
const doubleNum = (x, y = 10) => (x + y);
const give5 = () => 5;
const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const math = sum * diff;
  return math;
}

const result = doubleIt(10);
const result2 = doubleNum(23);
const result3 = give5()
const result4 = doMath(32, 10);
console.log(result4);

