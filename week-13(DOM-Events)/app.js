/**
 * challenge 
 */
/**
 * 
 * @param {number} id 
 * @returns a card with its number; 
 */
function creatCard(id){
    let child=document.createElement('div');
    let heading=document.createElement('h2');
    let parag=document.createElement('p');

    heading.innerHTML=`${id}`;
    parag.innerHTML= `Product`;
    child.appendChild(heading);
    child.appendChild(parag);

    child.style.cssText="text-align:center;padding:5px;margin:5px;width:calc(95% / 3);background-color:white;";
    return child;
}
// creat the header 
let header_div=document.createElement('div');
let logo=document.createElement('p');
let menue=document.createElement('div');

logo.innerHTML=`<h2>Elzero<h2>`;
menue.innerHTML=`<ul class='list'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Contact</li>
                 </ul>`
header_div.appendChild(logo);
header_div.appendChild(menue);

//creat the cards
let container=document.createElement('div');
container.style.cssText="display:flex; flex-wrap:wrap; justify-content: space-evenly;padding:4px;background-color: rgb(241,241,241);";
for(let i=1;i<=15;i++){
    let child=creatCard(i);
    container.appendChild(child);
}

//creat the footer

let footer=document.createElement('div');
footer.innerHTML=`Copyright-2023 AboElnasr`;
footer.style.cssText="background-color:green;text-align:center;color:white;padding:20px;font-size:30px;";



// appending the elements to the body
document.body.appendChild(header_div);
document.body.appendChild(container);
document.body.appendChild(footer);


//styling header_div
header_div.style.cssText="display: flex;justify-content: space-between;"

//styling logo
logo.style.cssText="color:green;"
//styling ul 
let ul=document.querySelector('.list');
ul.style.cssText="display:flex;list-style: none;";

//styling il
let li =document.querySelectorAll("li");
for(let i=0;i<li.length;i++){
    li[i].style.cssText="color:blue; margin:5px; padding :5px;";
}


// let div=document.getElementById('main');
// console.log(div);
// div.onblur=function(){
//     console.log("blure");
// }

// //====================Class list ================
// let div=document.getElementById('my-div');
// console.log(div.classList);
// div.onclick=function(){
//     div.classList.toggle('format');
// }