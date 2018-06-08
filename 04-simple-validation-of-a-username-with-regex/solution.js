'use strict';

function validateUsr(username) {
  res = /^[\d_a-z]{4,16}$/.test(username);
  return res
}