'use strict';

var gimme = (inputArray) => {
  const sortArray = inputArray.slice().sort((a,b) => a - b);
  for (i in sortArray) {
    if (inputArray[i] === sortArray[1]) {
      return inputArray.indexOf(sortArray[1]);
    }
  }
};