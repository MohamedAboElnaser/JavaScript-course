//====================assignment 1==================
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(myFriends.indexOf("Ahmed"),num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop();

console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//==================asignment-2===========
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]

//===============assignment-3==============
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
// Write One Single Line Of Code
finalArr=finalArr.concat(arrTwo.slice(arrTwo.indexOf("A"),arrTwo.length-1),arrOne,"Z").reverse();
console.log(finalArr ); // ["Z", "X", "D", "C", "B", "A"]

//=================assignment-4=============
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[words.length-1][0].slice(website.length).toUpperCase()); // ZERO

//==============assignment-5=======================
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if(haystack.includes(needle)){
    console.log("Found");
}
if(haystack.indexOf(needle)!=-1)
console.log("Found");

//=====================assignment-6==============

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs=allArrs.concat(arr2[arr2.indexOf("F")].toLowerCase(),arr1.pop().toLowerCase(),arr2.pop().toLowerCase());
console.log(allArrs); // fxy
