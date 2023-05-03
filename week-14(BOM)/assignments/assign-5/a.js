
let div=document.getElementsByTagName('div')[0];
console.log(div);
function countDown(){
    div.innerHTML -= 1;
    if(div.innerHTML==0){
        clearInterval(id);
        const windowFeatures = "left=100,top=100,width=320,height=320";
        window.open("https://elzero.org","",windowFeatures);
    }
       
}

let id=setInterval(countDown,500);