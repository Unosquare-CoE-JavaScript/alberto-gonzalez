const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking']
}

let favoriteActivies: string[];
favoriteActivies = ['Sports']

console.log(person.name);

for(const hobby of person.hobbies){
  console.log(hobby.toUpperCase());
}
