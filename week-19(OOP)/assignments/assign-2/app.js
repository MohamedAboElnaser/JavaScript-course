class Phone {
    constructor(name, serial, price) {
      this.name = name;
      this.serial = serial;
      this.price = price;
    }
  };
  
  // Write Tablet Class Here
  class Tablet extends Phone{
    constructor(n,s,pri,siz){
      super(n,s,pri);
      this.size=siz;
    }
    fullDetails(){
      return `${this.name} serial is ${this.serial} And Size Is ${this.size}`;
    }
  };
  
  let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
  let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
  let TabletThree = new Tablet("LG", 250450650, 650);
  
  console.log(`${TabletOne.fullDetails()}`);
  // iPad Serial is 100200300 And Size Is 12.9
  
  console.log(`${TabletTwo.fullDetails()}`);
  // Nokia Serial is 350450650 And Size Is 10.5
  
  console.log(`${TabletThree.fullDetails()}`);
  // LG Serial is 250450650 And Size Is Unknown