// assignment -1

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(10e4); // 100000
console.log(10*10*10*10*10); // 100000

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

let myVar = "100.56789 Views";

console.log(Number.parseInt(myVar)); // 100
console.log(+Number.parseFloat(myVar).toFixed(2)); // 100.57

let num = 10;

console.log( +Number.isInteger(num) +Number.isInteger(num)); // 23
//   :)


let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Number.parseInt(flt)); // 10
console.log(flt.toFixed(0)); // 10
console.log(Math.round(flt)); // 10


console.log(Math.floor(Math.random()*5)); // 0 || 1 || 2 || 3 || 4