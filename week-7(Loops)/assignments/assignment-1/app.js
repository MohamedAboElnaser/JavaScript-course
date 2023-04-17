// // ===============assignment-1===========
// let start = 10;
// let end = 100;
// let exclude = 40;
// // Output
// // 10
// // 20
// // 30
// // 50
// // 60
// // 70
// // 80
// // 90
// // 100
// for(start;start<=end;start+=10){
//     if(start==exclude)continue;
//     else
//     console.log(start);
//}

// let start = 10;
// let end = 0;
// let stop = 3;

// // Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03
// for(start;start>=0;start--){
//     if(start===10)
//         console.log(start);
//     else{
//         if(start===3)break;
//         else
//         console.log(`0${start}`);
//     }
// }

// let start = 1;
// let end = 6;
// let breaker = 2;

// // Output
// // 1
// // -- 2
// // -- 4
// // 2
// // -- 2
// // -- 4
// // 3
// // -- 2
// // -- 4
// // 4
// // -- 2
// // -- 4
// // 5
// // -- 2
// // -- 4
// // 6
// // -- 2
// // -- 4

// for(start;start<=end;start++){
//     console.log(start);
//     console.log(`-- ${breaker}`);
//     console.log(`-- ${breaker*breaker}`);
// }

// let index = 10;
// let jump = 2;

// for (index;index>jump;index-=2){
//     console.log(index);
// }

// // // Output
// // 10
// // 8
// // 6
// // 4

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"
 
//


// let start = 0;
// let swapped="";
// let swappedName = "elZerO";
// for(start;start<swappedName.length;start++){
//     if(swappedName[start]>='a'&& swappedName[start]<='z')
//     swapped+=(swappedName[start]).toUpperCase() ;
//     else
//     swapped+=(swappedName[start]).toLocaleLowerCase() 
// }
// // Output
// console.log(swapped);
// "ELzERo"

let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// Output
// 2
// 3
// 4

for(;start<mix.length;start++){
    if(start==0 || (mix[start]>='A'&& mix[start]<='Z'))continue;
    console.log(mix[start]);
}