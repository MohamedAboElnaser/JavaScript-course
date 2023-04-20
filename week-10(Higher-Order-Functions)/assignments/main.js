let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let ans=mix.map(function(ele){
     if(isNaN(ele))return ele;
     else return "";
    
}).reduce(function(acc,cur){
    
    return acc+cur;
});

console.log(ans);
// Elzero

//=============================

let myString = "EElllzzzzzzzeroo";

let str=myString.split("").filter((ele,ind)=> ind===myString.indexOf(ele)).join("");
console.log(str);
// Elzero

//===============================
let myArray = ["E", "l", "z", ["e", "r"], "o"];

let ss=myArray.reduce((ac,cur)=> ac.concat(cur)).split("").filter(e=>(e !=",")).join("");
console.log(ss);
// Elzero

//=================================
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let nums=numsAndStrings.map((e)=>-1*e).filter(e=>!isNaN(e));
console.log(nums);
// [-1, -10, 10, 20, -5, -3]

//==================================

let numb = [2, 12, 11, 5, 10, 1, 99];

let calc=numb.reduce(function(acc,curr){
    if(curr%2) return acc+curr;
    else return acc*curr;
},1)

console.log(calc);
// 500

//=================================
