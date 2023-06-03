

let myReques=new XMLHttpRequest();

console.log(myReques);
myReques.open("GET","./assign_1.json");
myReques.send();
myReques.onreadystatechange=function(){
    // console.log(myReques.readyState);
    // console.log(myReques.status);
    if (this.readyState === 4 && this.status === 200){
            // console.log(myReques.responseText);
            let mainData=JSON.parse(myReques.responseText);
            
            
            for(let i=0;i<mainData.length;i++)
                mainData[i]["category"]="All";
            
                console.log(mainData);
            let updatedData=JSON.stringify(mainData);
            console.log(typeof updatedData);
            console.log(updatedData);
            let mainDiv=document.createElement('div');
            mainDiv.setAttribute("id","data");
            for(let i=0;i<mainData.length;i++){
                let div=document.createElement('div');
                div.innerHTML=`
                <h2>${mainData[i]["name"]}</h2>
                <p>${mainData[i]["id"]}</p>
                <p>${mainData[i]["category"]}</p>
              `;
              mainDiv.appendChild(div);
            }
            document.body.appendChild(mainDiv);
        }
}
