// const p1 = {
//   name: "sarvesh",
//   lname: "gaynar",
//   getFullName() {
//     return `${this.name} ${this.lname}`;
//   },
// };

// const p2 = Object.create(p1);
// console.log("P1 is ", p1);
// console.log("P2 is ", p2);

// const fname = "sarvesh";

const p1 = {
  xp1: "I am inside P1",
};

const p2 = {
  xp2: "I am inside P2",
  __proto__: p1,
};

const p3 = {
  xp2: "I am inside P3",
  __proto__: p2,
};
