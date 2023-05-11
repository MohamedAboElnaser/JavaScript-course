 

// let newSet=new Set([1,1,2,2,3,4,5,"a","B"]);

// console.log(newSet);

// console.log(newSet.has(1));
// console.log("############################");

// // console.log(newSet.delete(3));

// console.log(newSet);

// console.log("############################");

// newSet.add(6).add(7).add(8).add(9).add(10);
// console.log(newSet);

// newSet.clear();
// console.log(newSet);

// newSet.add({Name:"mohamed",age:21,city:'egypt'});
// console.log(newSet);
// newSet.forEach(function(el,r){
// },3)

// let values=newSet.keys();
// let keyes=newSet.values();
// // console.log(values);
// // console.log("--------------------------------------");
// // console.log(keyes);

// console.log(values.next().value);
// console.log(values.next().value);
// console.log(values.next().value);

// let obj={};

// console.log(obj);

// let emptyOpject=Object.create(null);
// console.log(emptyOpject);

// let map=new Map();
// console.log(map);

// let myNewObject = {
//     10: "Number",
//     "10": "String",
//   };
  
//   console.log(myNewObject[10]);
  

// let myNewMap = new Map();
// myNewMap.set(10, "Number");
// myNewMap.set("10", "String");
// myNewMap.set(true, "Boolean");
// myNewMap.set({a: 1, b: 2}, "Object");
// myNewMap.set(function doSomething() {}, "Function");
// console.log(myNewMap);
// console.log("The size of the map is : "+myNewMap.size);

// console.log(myNewMap.entries());

// let key={a:1,B:3};
// let mp =new Map([
//     ["Name",'Mohamed'],
//     ["age",21],
//     ['id',122],
//     [function (){},"function"],
//     [1,18],
//     [key,"object"],

// ]);
// console.log(mp);

// console.log(mp.get(key));

// let mapUser = { theName: "Elzero" };

// let myMap = new Map();

// myMap.set(mapUser, "Object Value");
// console.log(myMap);
// mapUser = null; // Override The Reference

// console.log(myMap);

// let wMapUser = { theName: "Elzero" };

// let myWeakMap = new WeakMap();

// myWeakMap.set(wMapUser, "Object Value");

// // console.log(myWeakMap);
// wMapUser = null; // Override The Reference

// console.log(myWeakMap);
// ===========================

// let arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
// console.log( arrayLike);
// let mappedArr = Array.from(arrayLike, (element) => element.toUpperCase());
// console.log(mappedArr);

// console.log(Array.from("Mohamed",(ele)=> ele+ele));

// function f(){
//     return Array.from(arguments);
// }
// console.log(f('ali',"salid",'khaled'));
// =====================================
(function() {
    var x = 10;
    console.log(x); // Output: 10
  })();//this is called Immediately Invoked Function Expressions (IIFE)

  //=========================================
  
let objOne = {
    a: 1,
    b: 2,
  };
  let objTwo = {
    c: 3,
    d: 4,
  };
  
  console.log({ ...objOne, ...objTwo, e: 5 });
  /*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log([...n1,...n2].length * Math.max(...n1)); // 210





