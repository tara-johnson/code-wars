'use strict';

function insertDash(num) {
  let isOdd = false;
  let dashArray = [];
  let numArray = num.toString().split('');
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 === 0) { // number is even
      dashArray.push(numArray[i]);
      isOdd = false;
    } else {
      if (isOdd === true) { // number is odd
        dashArray.push('-');
        dashArray.push(numArray[i]);
      } else { // number is odd
        dashArray.push(numArray[i]);
        isOdd = true;
      };
    };
  };
  let dashString = dashArray.join('');
  return dashString;
};