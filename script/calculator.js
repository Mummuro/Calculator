const add = function(first_digit, second_digit){
	return first_digit + second_digit;
};

const subtract = function(first_digit, second_digit) {
	return first_digit - second_digit;
};

const sum = function(array) {
	total = array.reduce((total, item) => {
    total += item;
    return +total;
  }, 0);
  return total;
}

const multiply = function(array) {
  result = array.reduce((total, item) => {
    total *= item;
    return +total;
  }, 1);
  return result;
};

const power = function(digit, powerDig) {
	return digit**powerDig;
};

const factorial = function(dig) {
  if (dig < 0) 
        return -1;
    
  // If the number is 0, its factorial is 1.
  else if (dig == 0) 
      return 1;
    
  // Otherwise, call the recursive procedure again
    else {
        return (dig * factorial(dig - 1));
};
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
