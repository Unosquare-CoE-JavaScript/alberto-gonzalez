function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Swwim'] }, { age: 30 })
console.log();

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length == 0) {
    descriptionText = 'Got 1 element'
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.'
  }
  return [element, descriptionText]
}

console.log(countAndDescribe('Hi there!'));
