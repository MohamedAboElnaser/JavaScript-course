//assign -6

let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];
if (chosen == 1) {
  const {
    title: ti,
    age: ag,
    available: av,
    skills: [, tech],
  } = myFriends[0];
  console.log(ti);
  console.log(ag);
  console.log(av?"Avilable": "Not Avilable");
  console.log(tech);
}
else if (chosen == 2) {
  const {
    title: ti,
    age: ag,
    available: av,
    skills: [, tech],
  } = myFriends[1];
  console.log(ti);
  console.log(ag);
  console.log(av?"Avilable": "Not Avilable");
  console.log(tech);
}
else if (chosen == 3) {
  const {
    title: ti,
    age: ag,
    available: av,
    skills: [, tech],
  } = myFriends[2];
  console.log(ti);
  console.log(ag);
  console.log(av?"Avilable": "Not Avilable");
  console.log(tech);
}

