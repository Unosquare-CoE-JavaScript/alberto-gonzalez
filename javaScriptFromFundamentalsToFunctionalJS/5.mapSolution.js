const weapons = ["candlestick", "lead pipe", "revolver"];
const makeBroken = function (item) {
  return `broken ${item}`;
};

var brokenWeapons = _.map(weapons, makeBroken);
