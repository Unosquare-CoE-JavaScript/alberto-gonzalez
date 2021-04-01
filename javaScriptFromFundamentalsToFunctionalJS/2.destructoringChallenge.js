// Excercise:
// 1. Create an object that looks like this:
// {"name":"Rusty", "room":"kitchen", "weapon":"cnadelesting"}

// 2. Extract out the weapon and location using destructuring
// const obj = { name: "Rusty", weapon: "candelesting", room: "kitchen" };
// const { name, weapon, room } = { obj };
// console.log(name);

const { name, weapon, room } = {
  name: "Rusty",
  room: "kitchen",
  weapon: "candlestic",
};
console.log(name);
