let promt=prompt("Print Number From – To",'5-20');
let arr=promt.split('-') ;
arr.sort((a,b)=> a-b);
for(let i=arr[0];i<arr[1];i++)
    console.log(i);

