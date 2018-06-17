'use strict';

function solution(str){
  let reverseArray = [];
  const splitArray = str.split('');
  for (var i = splitArray.length; i > 0; i--) {
    reverseArray.push(splitArray.pop([i]));
  }
  return reverseArray.join('');
}