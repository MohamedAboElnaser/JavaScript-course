function sayHello(theName, theGender) {
    if(  theGender === undefined)
    console.log(`Hello ${theName}`);  
    else{
        if(theGender==="Male")
            console.log(`Hello Mr ${theName}`);
        else if(theGender==="Female")
            console.log(`Hello Miss ${theName}`);
        }
  }
  
  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"

  //============================================
  function calculate(firstNum, secondNum, operation) {
     if(secondNum===undefined)console.log("Second Number Not Found");
     else{
        if(operation===undefined || operation==="add")console.log(firstNum+secondNum);
        else{
            if(operation==='subtract')console.log( firstNum-secondNum);
            else console.log(firstNum*secondNum);
        }
     }
  }
  ;
  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600

  //=====================================
  function ageInTime(theAge) {
    if(theAge>10 && theAge<100){
        console.log(`Months : ${theAge*12}`);
        console.log(`Weeks : ${theAge*360/7}`);
        console.log(`Days : ${theAge*360}`);
        console.log(`Hours : ${theAge*360*24}`);
        console.log(`Miniuts : ${theAge*360*24*60}`);
        console.log(`Seconds : ${theAge*360*24*60*60}`);
    }
    else 
    console.log("Age Out Of Range");
  }
  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(21); // Months Example => 456 Months

  //==================================


 
 
  function checkStatus(...data) {
    let a = 0,
      b = 0,
      c = 0;
    for (let i = 0; i < 3; i++) {
      typeof data[i] === 'string'
        ? (a = data[i])
        : typeof data[i] === 'number'
        ? (b = data[i])
        : data[i] === false
        ? (c = 'Not Availble')
        : (c = 'Availble');
    }
    return console.log(`Hello ,${a}, Your Age Is ${b} ,You Are ${c} For Hire`);
  }
   // Needed Output
   checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
   checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
   checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
   checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
   
   //=============================================
   function createSelectBox(startYear, endYear) {
       document.write(`<select>`)
    for(;startYear<=endYear;startYear++)
        document.write(`<option value="${startYear}">${startYear}</option>`);
        document.write(`</select>`)
  }
  createSelectBox(2000, 2021);

  //====================================

  function multiply(...nums){
    let ans=1;
    for(let i=0;i<nums.length;i++){
        if(!isNaN(nums[i])){
            ans*=((Math.floor(nums[i])));
        }
    }
    console.log( ans);
  }
  multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000