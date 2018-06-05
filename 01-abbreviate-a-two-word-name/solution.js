'use strict';

function abbrevName(name){
  let splitName = name.split(' '); // split string at first space between two words
  let firstInitial = splitName[0][0]; // first letter of first word
  let secondInitial = splitName[1][0]; // first letter of second word
  return `${firstInitial}.${secondInitial}`.toUpperCase(); // concatenate with dot between words
};