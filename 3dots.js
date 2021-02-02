const ages = [12, 13, 14, 15];
const ages2 =[16, 17, 18, 19];
const ages3 =[20, 21, 22, 23];
const allAges = ages.concat(ages2).concat(ages3).concat([24]);
console.log(allAges);

const names1 = ["Fahim", "Yakub"];
const names2 = ["Rahat", "Mashraful"];
const names3 = ["Azim", "Faysal"];
const allNames2 = [...names1, ...names2, ...names3];
console.log(allNames2);

const business = 320;
const minister = 234;
const primeMinister = 342;
const maximum = Math.max(business, minister, primeMinister);
//if array then ;
const takaPoisha = [ 423, 535, 936, 245] ;
const maximum2 = Math.max(...takaPoisha);
console.log(maximum2);