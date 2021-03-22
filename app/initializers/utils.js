export function initialize(application) {

  window.copyObject = function(obj) {
    return JSON.parse(JSON.stringify(obj));
  };

  window.removeNulls = function(obj) {
    var isArray = obj instanceof Array;
    for (var k in obj) {
      if (obj[k] === null) {
        if (isArray) {
          obj.splice(k, 1);
        } else {
          // delete obj[k];
        }
      } else if (typeof obj[k] == "object") {
        if (obj[k] instanceof Array && obj[k].length === 0) {
          delete obj[k];
          continue;
        }
        removeNulls(obj[k]);
      }
    }
  };

  window.removeMainObj = function(obj, propName, mainId) {
    var isArray = obj instanceof Array;
    for (var k in obj) {
      if (typeof obj[k] == "object") {
        if (k == propName && obj[k] && obj[k].id == mainId) {
          delete obj[k];
          continue;
        }
        removeMainObj(obj[k], propName, mainId);
      }
    }
  };

};

export default {
  initialize
};
