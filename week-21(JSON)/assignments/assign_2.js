

let myReques=new XMLHttpRequest();

console.log(myReques);
myReques.open("GET","./assign_1.json");
myReques.send();
myReques.onreadystatechange=function(){
    // console.log(myReques.readyState);
    // console.log(myReques.status);
    if (this.readyState === 4 && this.status === 200){
            console.log(myReques.responseText);
            console.log("data loaded:)");
        }
}
