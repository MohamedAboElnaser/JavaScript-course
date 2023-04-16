/**
 * Number chAllenges
 */

let A = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find SmAllest Number In All VAriAbles And Return Integer
console.log(Math.trunc(Math.min(A,b,c,d))); // 2

// Use VAriAbles A + d One Time To Get The Needed Output
console.log(A ** Math.floor(d)); // 10000


// Get Integer "2" From d VAriAble With 4 Methods
console.log(Math.floor(d)); // 2
console.log(Math.trunc(d)); // 2
console.log(parseInt(d)); // 2
console.log(+d.toFixed(0)); // 2

// Use VAriAbles b + d To Get This VAlus
console.log(((Math.trunc(b)/Math.ceil(d)).toFixed(2))); // 66.67 => String
console.log((Math.trunc(b)/Math.ceil(d)).toFixed(0)); // 67 => Number


/******************************************** */

/**
 * String mAnipulAtion
 */
let a = "Elzero Web School";
// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2)+a.slice(-14,-11)); // Zero
 

// 8 H
console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH


// Return Array
console.log(a.slice(0,6).split()); // ["Elzero"]


// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substring(0,7)}${a.substring(11)}`); // Elzero School


// Solution Must Be Dynamic Because String May Changes
console.log(a.charAt(0).toLowerCase()+a.substring(1,a.length-1).toUpperCase()+a.charAt(a.length-1).toLowerCase()); // eLZERO WEB SCHOOl