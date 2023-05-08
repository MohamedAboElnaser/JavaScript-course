
window.localStorage.color="green";
window.localStorage.fontSize='40px';

console.log(window.localStorage);
console.log( typeof window.localStorage);

//document.body.style.backgroundColor=window.localStorage.getItem('color');
let div=document.querySelector('div');
div.style.fontSize=window.localStorage.getItem('fontSize');

