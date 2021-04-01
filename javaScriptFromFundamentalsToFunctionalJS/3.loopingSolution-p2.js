//Loop through all the properties of the suspect
//objects in the suspects array, marthem if you
//think they are guilty.

const game = {
  suspects: [
    {
      name: "Rusty",
      color: "orange",
    },
    {
      name: "Miss Scarlet",
      color: "red",
    },
  ],
};

function foo() {
  for (let i = 0; i < game.suspects.length; i++) {
    for (const key in game.suspects[i]) {
      if (game.suspects[i][key] === "Rusty") {
        console.log("Found 'em");
      } else {
        console.log("next time!");
      }
    }
  }
}

foo();
