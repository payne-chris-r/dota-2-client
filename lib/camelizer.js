'use strict';

let thisObj = {
  profile_shit: {
    hello: 'you',
    first_name: "chris",
    greg_name: 'steve',
    last_name: "Payne",
    check_me_out: {
      lets_test: 'this',
      yo_brian_fuck_you: 'hey'
    },
    'test-thing': 'test',
    stupid_silly_name: 'boogity boo'
  }
};

const capitalizer = function(str){
    return str[0].toUpperCase() + str.slice(1);
};

// console.log(camelizer(thisObj, '_'));
const camelizer = function(anObj){
  Object.keys(anObj).forEach(function(key){
    if(typeof anObj[key] === 'object'){
      //go fuck yourself
      camelizer(anObj[key]);
    }
    let keyArr = key.split('_');
    if (keyArr.length > 1){
      let newKey = keyArr[0];
      for(let i = 1; i < keyArr.length; i++){
        newKey += capitalizer(keyArr[i]);
      }
      anObj[newKey] = anObj[key];
      delete anObj[key];
    }
  });
  return anObj;
};

module.exports = camelizer;
