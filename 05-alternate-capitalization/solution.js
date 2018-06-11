'use strict';

function capitalize(s){
  let evenArray = [];
  let oddArray = [];
  let alternateArray = [];
  for (var i in s){
    if (i % 2 === 0){
      evenArray.push(s[i].toUpperCase());
    } else {
      evenArray.push(s[i].toLowerCase());
    }
    alternateEven = evenArray.join('');
  };
  for (var i in s){
    if (i % 2 != 0){
      oddArray.push(s[i].toUpperCase());
    } else {
      oddArray.push(s[i].toLowerCase());
    }
    alternateOdd = oddArray.join('');
  };
  alternateArray.push(alternateEven, alternateOdd);
  return alternateArray;
};