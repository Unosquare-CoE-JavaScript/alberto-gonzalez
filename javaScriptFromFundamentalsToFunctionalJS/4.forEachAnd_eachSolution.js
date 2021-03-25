// Complete the rest of this function so that it works as described in the previous slides:
// _.each = function(list, callback){

// }

_.each = function (list, callback) {
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], i, list);
    }
  } else {
    for (const key in list) {
      callback(list[key], key, list);
    }
  }
};

_.each(["sally", "georgie", "porgie"], function (name, i) {
  if (name[i + 1]) console.log(name, "is younger than", list[i + 1]);
  else console.log(name, "is the oldest");
});
