const curry = (fn) => {
  return (arg) => {
    return (arg2) => {
      return fn(arg, arg2);
    };
  };
};

var abc = function (a, b) {
  return [a, b];
};

var curried = _.curry(abc);

curried(1)(2);

const consider = (name) => {
  return `I think it could be... ${name}`;
};

const exlaim = (statement) => {
  return `${statement.toUpperCase()}!`;
};

const blame = _.compose(consider, exlaim);
blame("you");

const compose = (fn, fn2) => {
  return (arg) => {
    const result = fn2(arg);
    return fn(result);
  };
};
