
let div=document.querySelector('div');

function countDown(){
    div.innerHTML -= 1;
    if(div.innerHTML==0)
        clearInterval(id);
}

let id=setInterval(countDown,500);