// Edit The Class
class User {
    #c;
    constructor(username, card) {
      this.u = username;
      this.#c = card;
    }
    creditCard(){
      return  this.#c.toString().match(/\d{4}/g).join("-");
  }
  get showData(){
      return `Hello ${this.u} Your Credit Card Number Is ${this.creditCard()}`
  }
     
  }
  //------------------>the answer will be using Regular Expression:) i skipped it
  // but this solution from [https://www.youtube.com/watch?v=ZntsXkhpPjU&list=PLNf6iOQzgvsAxssFaSi93OB1UZVoIj4fL&index=37&ab_channel=AlghanemWebStudy]
  // Do Not Edit Anything Below
  
  
  let userOne = new User("Osama", "1234-5678-1234-5678");
  let userTwo = new User("Ahmed", "1234567812345678");
  let userThree = new User("Ghareeb", 1234567812345678);
  
  console.log(userOne.showData);
  // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userTwo.showData);
  // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userThree.showData);
  // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userOne.c); // Prevent Accessing To Card Property Here
  // Undefined





  //assgin 4
  // Write Your Code Here


// Do Not Edit Below
let myStr = "Elzero";
String.prototype.addLove=function(){
  return `I love ${this.valueOf()} web school`;
}

console.log(myStr.addLove()); // I Love Elzero Web School