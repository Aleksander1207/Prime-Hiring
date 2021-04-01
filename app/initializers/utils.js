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

  window.pretifyRegNum = function(regNum){
    let result='';
    let formatted='';
    let text = regNum.split('');
    for(let i=0;i<text.length;i++){
      if(text[i] == ' '){
        continue;
      }
      formatted+=text[i];
    }
    for(let i=0; i<formatted.length; i++){
        let char = Number(formatted[i]);
        if(( isNaN(char) && !isNaN(formatted[i+1]) ) || ( !isNaN(char) && isNaN(formatted[i+1]) ) && (i+1 !=formatted.length)){
            result+=formatted[i] + ' ' + formatted[i+1];
            i++;
        }
        else{
            result+=formatted[i];
        }
    }
    return result;

  };
}

export default {
  initialize
};
