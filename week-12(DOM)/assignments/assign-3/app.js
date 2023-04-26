
 
 
    let input_field=document.querySelector('input');
    input_field.addEventListener('input',function(){
        let usd =document.querySelector('input').value;
        let eg=usd*30.90;
        let out=document.querySelector('.result');
        out.textContent=`{${usd} USD Dollar = {${eg.toFixed(2)}} Egyptian Pound`
    })
 