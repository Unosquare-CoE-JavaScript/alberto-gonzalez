var reduce = function (list, cb, initial = list[0]) {
  let memo = initial;
  for (let i = 0; i < list.length; i++) {
    if (i === 0 && memo === undefined) {
      memo = list[0];
    } else {
      memo = cb(list[i], memo);
    }
  }
  return memo;
};

console.log(reduce([1, 2, 3], (v, sum) => v + sum, 0));
