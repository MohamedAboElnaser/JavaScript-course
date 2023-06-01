class User{
    constructor(userName,id,salary){
        this.us=userName;
        this.Id=id;
        this.sala=salary;
        this.msg=function(){
            return `testing a property that its value is function:)`;
        }
    }


}
let us=new User('mohamed',123,3000);
console.log(us.msg());


let nuone=100;
let nutwo=new Number(100);

console.log(nutwo instanceof Number);
console.log(nutwo.constructor);
console.log("---".repeat(30));
console.log(String.prototype);

