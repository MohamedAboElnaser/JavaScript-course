[...document.body.children].forEach(
    el => (el.onclick = _ => console.log(`This is ${el.localName}`))
);

// [...document.body.children] this three operatro seperate the returned htmlCollection into seperated
// elements in the array

//.forEach() higher order function to iterate throught each element of the array[]


// e1 is the parameter to the forEach fuction

//  e1.onclick= _ => .....
// this assign an onclick event to each child (element of the array)

//console.log(`this is ${el.localName}`)
// this log indicating the local name of the current child element