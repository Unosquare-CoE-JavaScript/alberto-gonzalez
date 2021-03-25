// Destructure this nested data structure into
// two variables with the strings 'red' and 'orange'

var suspects = [
  {
    name: "Rusty",
    color: "orange",
  },
  {
    name: "Miss Scarlet",
    color: "red",
  },
];

// My answer
// var [orange, red] = [{ color }, { color }];

var [{ color: orange }, { color: red }] = suspects;

console.log(orange, red);
