const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(args) {
	let sum = 0;
  for(const arg of args) {
    sum += arg;
  }
  return sum;
};

const multiply = function(args) {
  let mul = 1;
  for(const arg of args) {
    mul = mul * arg;
  }
  return mul;
};

const power = function(n1, n2) {
	return Math.pow(n1, n2);
};

const factorial = function(num) {
	let fac = 1;
  for (; num > 0; num--) {
    fac = fac*num;
  }
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
