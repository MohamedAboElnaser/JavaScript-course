// Method One
// Create Your Object Here
let obj_1={
    name:'method-one',
}

console.log(obj_1.name); // "Method One"

// Method Two
// Create Your Object Here
let obj_2=new Object({
    name:'methode-two',
})
console.log(obj_2.name); // "Method Two"

// Method Three
// Create Your Object Here
let temp_opj={
    name:'temp-opj',
}
let obj_3=Object.create(temp_opj);

console.log(obj_3.name); // "Method Three"

// Method Four
// Create Your Object Here
let obj_4=Object.assign({},{name:'method-4'});
console.log(obj_4.name); // "Method Four"