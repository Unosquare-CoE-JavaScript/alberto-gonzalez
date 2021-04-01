const _ = {};

_.filter = function (arr, cb) {
  const storage = [];
  for (let index = 0; index < arr.length; index++) {
    if (cb(arr[index], i, arr)) {
      storage.push(arr[i]);
    }
  }
  return storage;
};

_.filterEach = function (arr, cb) {
  const storage = [];
  _.each(arr, function (item, i, arr) {
    if (cb(item, i, arr)) {
      storage.push(item);
    }
  });

  return storage;
};
