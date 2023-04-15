// Add Variables Here
    let x=10,y=20;
// Ouput
console.log(x+""+y); // Normal Concatenate => 1020
console.log(typeof(x+""+y)); // Normal Concatenate => String
console.log( `${x}${y}`); // Template Literals Way => 1020
console.log(typeof `${x}${y}`); // Template Literals Way => String

console.log(x+"\n"+y);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${x}\n${y}`);
/*
  Template Literals Way
  20
  10
*/