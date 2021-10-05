const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
}

person.role.push('admin')
// person.role[1] = 10

let favoriteActivies: string[];
favoriteActivies = ['Sports']

console.log(person.name);

for(const hobby of person.hobbies){
  console.log(hobby.toUpperCase());
}
