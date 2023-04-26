/**
 * 
 * @returns number of needed elements
 */
function getElementNumber(){
let numOfElements=document.querySelector("[type='number']").value;
return numOfElements;
}
/**
 * 
 * @returns the inner Text
 */
function getText(){
    let text=document.querySelector("[type='text']").value;
    return  text;
}
/**
 * 
 * @returns the type of created element
 */
function getType(){
    let select=document.getElementsByTagName('select')[0];
    let type=select.options[select.selectedIndex].value;
    return type;
}
/**
 * 
 * @param {*} id 
 * @param {*} text 
 * @param {*} type 
 * @returns child node according to the type selected 
 */
function creatChild(id,text,type){
     
    let child=document.createElement(type);
        child.className='box';
        child.title="Element";
        child.id=`id-${id}`;
        child.innerHTML=`${text}`;
    return child;
}
/**
 * fuction to creat the elements accourding to the inputs
 */
function creatElements(){
    let n=getElementNumber();
    let type=getType();
    let text=getText();
    let result=document.querySelector('.results');
console.log(result);
    result.innerHTML = '';

    if(type=== 'Div'){
       for(let i=1;i<=n;i++)
        result.appendChild(creatChild(i,text,'div')); 
    }else{
        for(let i=1;i<=n;i++)
            result.appendChild(creatChild(i,text,'section')); 
    }
}

document.forms[0].onsubmit=function(even){
    even.preventDefault();
    creatElements();
}

