class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
    console.log(`Car name :${this.n} and Model Is :${this.m} And price : ${this.p}`);
  }
  run() {
    return ("Car Is Running Now");
  }
  stop() {
   return ("Car is stopped");
  }
};
let c =new Car('MG',2022,100000);
console.log(c.run());
// Needed Output

("Car One Name Is MG And Model Is 2022 And Price Is 420000");
("Car Is Running Now");
