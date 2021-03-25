//_.map() Solution
const weapons = ["candlestick", "lead pipe", "revolver"];
const makeBroken = function (item) {
  return `broken ${item}`;
};

var brokenWeapons = _.map(weapons, makeBroken);

//_.map() Solution, Part 2
_.map = function (list, callback) {
  var storage = [];
  //Using FOR loop
  //   for (let i = 0; i < list.length; i++) {
  //     storage.push(callback(list[i], i, list));
  //   }
  //Using EACH loop
  _.each(list, function (value, index, list) {
    storage.push(callback(value, index, list));
  });
  return storage;
};

_.map([1, 2, 3], function (val) {
  return val + 1;
});
