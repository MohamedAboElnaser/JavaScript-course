let container=document.getElementById('list'); // this contains the class list
let input=document.getElementsByTagName('input');
let ourElement =document.querySelector('.assign [title="Current"]');

/**
 * 
 * @param {*} name the name of class list that will be added to the span 
 * @returns span to add to the container 
 */
function getSpanWithcalssName(name){
    let sp=document.createElement('span');
    sp.innerHTML=`${name}`;
    return sp;
}

function addCurrentClassListToContainer(){
    let cl=[...ourElement.classList].sort();
    if(cl.length===0) {
        container.innerHTML='No Classes To Show';
    }
    else{
    container.innerHTML="";
    for(let i=0;i<cl.length;i++){
        container.append(getSpanWithcalssName(cl[i]));
    }
}
}

addCurrentClassListToContainer();

input[0].onblur=function(){
   if(input[0].value!==""){
    ourElement.classList.add(...input[0].value.toLowerCase().trim().split(" "));
   input[0].value=""; 
   addCurrentClassListToContainer();
   }
}
input[1].onblur=function(){
  if(input[1].value!==""){
    ourElement.classList.remove(...input[1].value.toLowerCase().trim().split(" "));
    input[1].value="";
    addCurrentClassListToContainer(); 
  }
}