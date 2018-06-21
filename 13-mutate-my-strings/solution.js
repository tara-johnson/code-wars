'use strict';

function mutateMyStrings(str1, str2) {
  let outArr = [str1, '\n'];
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  for (var i = 0; i < str2.length; i++) {
    if (arr2[i] !== arr1[i]) {
      arr1[i] = arr2[i];
      outArr.push(arr1.join(''), '\n');
    }
  }
  return outArr.join('');
}