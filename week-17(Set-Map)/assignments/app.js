
// assign one
let setOfNumbers=new Set([10]);

setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);



console.log([...setOfNumbers].at(2));


//========================================
// assign 2
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log([...(new Set([...myFriends.sort()]))]);
// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']


//=========================================
//assign 3
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
  };
  let mp=new Map();
   let keys=Object.keys(myInfo);
  for(let i=0;i<keys.length;i++)
    mp.set(keys[i],myInfo[keys[i]]);
  console.log(mp);
  console.log(mp.size);
  console.log(mp.has('role'));
  // Needed Output
//   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
//   3
//   true

//=========================================
let theNumber = 100020003000;
console.log([...String(theNumber)].filter(ele=> ele!='0').reduce((ac,cur)=>ac+cur));
// Needed Output
// 123


//============================\
//assig 5
let theName = "Elzero";
console.log([...theName]);
console.log([...new Set(theName)]);
console.log(Array.from(theName));
console.log(theName.split(""));
console.log(Object.assign([],theName));


// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

//==========================================
//assign 6


//========================
// assign 7
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
console.log([...numsOne,...numsTwo]);
console.log(numsOne.concat(numsTwo));
numsOne.push(...numsTwo);
console.log(numsOne);
// Needed Output
// [1, 2, 3, 4, 5, 6]


//==============================
// assign8 and the chalenge
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log(Math.max(...n1)*[...n1,...n2].length);
// Needed Output
// 210

