//Exercise:
//Loop through the suspects array.

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
    console.log(game.suspects[i].name);
  }
}

foo();
