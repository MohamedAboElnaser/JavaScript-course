// assignments for lesson-from-031-to-032'

console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 &&10 <  20); // true
 console.log(-10 == "-10"); // true
console.log(+ -50 <= +"-40"); // true
console.log(+ 10 <= -"-40"); // true
console.log(+ "10" == 10); // true
console.log(- 20 < false); // true

// let num1 = 10;
// let num2 = 20;

// console.log(num1<num2); // true
// console.log(num1<=num2); // true
// console.log(num1!=num2); // true
// console.log(num1+num2?true:false); // true
 


let a = 20;
let b = 30;
let c = 10;

console.log(a  > b && a > c || a < b); // true
console.log(a > b ||  a != c); // true
console.log(!(a> b) && !(a === b) && !(a=== c) &&!(a == c)); // true


//===================================================
// Edit What You Want Here

let num1 = 25;
let num2 = 10;
let num3 = 25;
let num4 = 61;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
// the remaining are easy to do.