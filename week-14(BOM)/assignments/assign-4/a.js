
let div=document.querySelector('div');

function countDown(){
    div.innerHTML -= 1;
    if(div.innerHTML==0)
        window.location.replace("https://elzero.org");
}

let id=setInterval(countDown,500);