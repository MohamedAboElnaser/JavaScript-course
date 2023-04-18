function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
      // Write Your Code Here
      // Osama Mohamed => Osama M.
      // Ahmed ali => Ahmed A.
      let fir=zName.slice(0,zName.indexOf(" ")+2);
      return `Hello ${fir}. ,`;
    }
    function ageWithMessage(zAge) {
      // Write Your Code Here
      // 38 Is My Age => Your Age Is 38
      // 32 Is The Age => Your Age Is 32
      return `Your Age Is ${Number.parseInt(zAge)}, `
    }
    function countryTwoLetters(zCountry) {
      // Write Your Code Here
      // Egypt => You Live In EG
      // Syria => You Live In SY
      return ` ${zCountry.slice(0,2)}`;
    }
    function fullDetails() {
      return `${namePattern(zName)} ${ageWithMessage(zAge)}${countryTwoLetters(zCountry)}`
    }
    return fullDetails(); // Do Not Edit This
  }
  
  console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG
  
  console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY

  //======================================

  let itsMe=()=>    `Iam A Normal Function`;
  
  console.log(itsMe()); // Iam A Normal Function
  let urlCreate=(protocol, web, tld)=> `${protocol}://www.${web}.${tld}`;
 
  
  console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

  //========================================

  function checker(zName) {
    return function (status) {
      return function (salary) {
        return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
      };
    };
  }
  let checke=(zName,status,salary)=>{
    return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
  }
  
  console.log(checke("Osama","Available",4000)); // Osama, My Salary Is 4000
  console.log(checke("Ahmed","Not Available")); // Iam Not Avaialble


  //===============================================
  function specialMix(...data) {
    // Your Code Here
    let result = 0;
    for(let i = 0; i < data.length; i++){
        if(isNaN(parseInt(data[i])) === false){
            result += parseInt(data[i]);
        }
    }
    if(result === 0){
        return `All Is Strings`;
    }
    return result;
}
  
  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

  