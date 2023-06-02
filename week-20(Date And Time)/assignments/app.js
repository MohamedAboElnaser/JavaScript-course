// assign -1
let d=new Date('2001-9-1');
let now=new Date();
let myBirthday=now-d;
console.log(parseInt(myBirthday/1000)+" seconds");
console.log(parseInt(myBirthday/1000/60)+" Minutes");
console.log(parseInt(myBirthday/1000/60/60)+" hours");
console.log(parseInt(myBirthday/1000/60/60/24)+" Days");
console.log(parseInt(myBirthday/1000/60/60/24/30)+" Months");
console.log(parseInt(myBirthday/1000/60/60/24/30/12)+" Years");

console.log("-----".repeat(10));

// assign 2
// Needed Output

"Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"
let timeNow=new Date();
timeNow.setTime(0);
timeNow.setFullYear(1980);
timeNow.setSeconds(10);
timeNow.setHours(0);
console.log(timeNow);
console.log("-----".repeat(10));
//assign 3
// Needed Output
"Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
"Previous Month Is April And Last Day Is 30"
let dateNow=new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
dateNow.setDate(0);
console.log(dateNow);

console.log(`Previous Monthe is ${months[dateNow.getMonth()]} and last Day Is ${dateNow.getDate()}`);

console.log('----'.repeat(10));
//assign 4
// Needed Output

"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
let da=new Date();
let ans=new Date('2001-9-1');
let ans1=  new Date('9/1/2001');
let ans2= new Date('9 1 2001');

console.log(ans);
console.log(ans1);
console.log(ans2);

console.log('----'.repeat(10));

//assgin-5 

let t=0;
const t0 = performance.now();
for(let i=1;i<=999999;i++)
  t+=i;
const t1 = performance.now();
console.log(`Loop took ${parseInt(t1 - t0)} Milliseconds.`);
console.log("---".repeat(10));

// // assign 6
// // Write Your Generator Function Here
// function* gen(){
   
//     let start = 14;
//     yield start;
//     let num = 140;
//     let sum = 154;
//     while(true){
//         yield sum;
//         sum += num += 200;
//     }

// }
// let generator = gen();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}

// console.log('---'.repeat(10));

// assign 7
function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
  }
  function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
  }
  
  // Write Your Generator Function Here
  function* genAll(){
    yield* new Set(genNumbers());
    yield* new Set(genLetters());

  }
  let generator = genAll();
  
  console.log(generator.next()); // {value: 1, done: false}
  console.log(generator.next()); // {value: 2, done: false}
  console.log(generator.next()); // {value: 3, done: false}
  console.log(generator.next()); // {value: 4, done: false}
  console.log(generator.next()); // {value: 5, done: false}
  console.log(generator.next()); // {value: "A", done: false}
  console.log(generator.next()); // {value: "B", done: false}
  console.log(generator.next()); // {value: "C", done: false}
  console.log(generator.next()); // {value: "D", done: false}


  console.log('---'.repeat(10));

  // assign 8
  