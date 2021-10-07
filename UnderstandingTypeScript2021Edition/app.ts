function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

const mergedObj = merge({ name: 'Max', hobbies: ['Swwim'] }, { age: 30 })
console.log();
