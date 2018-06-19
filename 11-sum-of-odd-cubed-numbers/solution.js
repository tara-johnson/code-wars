'use strict';

function cubeOdd(arr) {
  if (arr.every(num => typeof num === 'number')){
    return arr.filter(num => num % 2).map(num => Math.pow(num, 3)).reduce((a,b) => a + b, 0);
  };
};