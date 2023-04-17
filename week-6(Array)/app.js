// Array Challenge 

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

let first=my.slice(zero,my.indexOf("Gamal")).reverse();
console.log(first); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero,my.indexOf("Osama")).reverse()); // ["Elham", "Mazero"]
my[my.indexOf("Malzero")]="Elzero";

console.log(my[my.indexOf("Elzero")]); // "Elzero"

let ans=my[zero].slice(++counter);
console.log(ans[0].toLocaleLowerCase()+ans[1].toUpperCase()); // "rO"