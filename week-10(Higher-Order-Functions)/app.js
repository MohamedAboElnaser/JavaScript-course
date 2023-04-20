// let arr=[1,2,3,4,5,6];

// let an =arr.map(el=>el*2);
// console.log(an);

let str="ABCdef";
// let invertedTEXT=str
// .split("")
// .map(function(el){
// return el.toUpperCase()===el? el.toLowerCase():el.toUpperCase();
// },0).join("");

// let invertedTEXT=str
// .split("") .map(el=> el.toUpperCase()===el? el.toLowerCase():el.toUpperCase()).join("");
// console.log(invertedTEXT);


// filter the number thern mulltiply them
// let mix="A3BS542";
// let multiplyed=mix.split("").filter(e=>(!isNaN(Number.parseInt(e)))).map(e=>e*e);
// console.log(mix);
// console.log(multiplyed);

// let numb=[7,2,3,4,5,6];
// numb.forEach(function(ele,indx,arr){
//     numb[indx]=ele*ele;
// });
// console.log(numb);

/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split(",")
.filter(ele=> isNaN(ele))
.filter(elem=> !(elem==='Z'))
.reduce((acc,curr)=>`${acc}${curr}`)
.slice(1)
.split("_")
.join(" ");

console.log(solution); // Elzero Web School