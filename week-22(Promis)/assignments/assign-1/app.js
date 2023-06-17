let getData=(link)=>{
    return new Promise((resolve,reject)=>{
        let request=new XMLHttpRequest();
        request.onload=function(){
            if(this.status===200 && this.readyState===4){
                resolve(JSON.parse(this.responseText));
            }
            else
                reject(Error("can't get the data :(("));
        };
        request.open('GET',link);
        request.send();
    })
};
getData("./data.json")
    .then((data)=>{
        data.length=5;
        return data;
    })
    .then((finalData)=>{
        for(let i=0;i<5;i++){
            let div=document.createElement('div');
            div.innerHTML=`
                <h3>${finalData[i].title}</h3>
                <p>${finalData[i].description}</p>
            `;
            document.body.appendChild(div);
        }
    })
    .catch((rejec)=>{
        console.log("Erorrrrrrrrrr happen");
    });

