
async function fetchMethode(){
    try{
        let respons= await fetch('./data.json');
        let data=await respons.json();
        for(let i=0;i<5;i++){
            let div=document.createElement('div');
            div.innerHTML=`
                <h3>${data[i].title}</h3>
                <p>${data[i].description}</p>
            `;
            document.body.appendChild(div);
        }
    }
    catch(er){
        console.log('Erorrrrrrrrrrrrrrrrrrrrrr :((')
    };
};
fetchMethode();
