
let first_operator = '';
let second_operator = '';
let currentOperation = null;
let shouldResetScreen = false;
let triger = null;


const keys = Array.from(document.querySelectorAll('.key'));
const display = document.querySelector('.calculator__display');
const operations = Array.from(document.querySelectorAll('.operation'));
const resetButton = document.getElementById('Reset');
const backupOperations = Array.from(document.querySelectorAll('.operation'));
const options = {
  "+":0,
  "-":0,
  "*":0,
  "/":0,
  "%":0,
  "=":0,
}



const calculate = {
  add(first_digit, second_digit){
    return first_digit + second_digit;
  },
  subtract(first_digit, second_digit) {
    return first_digit - second_digit;
  },
  multiply(first_digit, second_digit){
    return first_digit * second_digit;
  },
  divide(first_digit, second_digit){
    return first_digit / second_digit;
  },
  division(first_digit, second_digit){
    return first_digit % second_digit;
  }
}


 
   

function processing(first_digit, second_digit){
  if(triger === '/' || triger === '%' && +second_digit === 0){
    display.textContent = "0";
    first_operator = '';
    second_operator = '';
    currentOperation = null;
    shouldResetScreen = true;
    display.textContent = "nice try, but no...";
  }
  if(triger === '='){
    shouldResetScreen = false;
    first_operator = calculate.add(+first_digit, +second_digit);
    second_operator = '';
    display.textContent = `${first_operator}`;
    options[currentOperation] += 1;
  }
  if(triger === '+'){
    shouldResetScreen = true;
    first_operator = calculate.add(+first_digit, +second_digit);
    second_operator = '';
    display.textContent = `${first_operator}`;
    options[currentOperation] += 1;
  }
  else if(triger === '-'){
    shouldResetScreen = true;
    first_operator = calculate.subtract(+first_digit, +second_digit);
    second_operator = '';
    display.textContent = `${first_operator}`;
    options[currentOperation] += 1;
  }
  else if(triger === '*'){
    shouldResetScreen = true;
    first_operator = calculate.multiply(+first_digit, +second_digit);
    second_operator = '';
    display.textContent = `${first_operator}`;
    options[currentOperation] += 1;
  }
  else if(triger === '/'){
    shouldResetScreen = true;
    first_operator = calculate.divide(+first_digit, +second_digit);
    second_operator = '';
    display.textContent = `${first_operator}`;
    options[currentOperation] += 1;
  }
  else if(triger === '%'){
    shouldResetScreen = true;
    first_operator = calculate.division(+first_digit, +second_digit);
    second_operator = '';
    display.textContent = `${first_operator}`;
    options[currentOperation] += 1;
  }
}
 

function output(e){
  const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
  if(e.keyCode == "8" && second_operator === '' && shouldResetScreen == false && currentOperation === null){
    first_operator = first_operator.slice(0,-1);
    display.textContent = `${first_operator}`;
  } else if(e.keyCode == "8" && currentOperation != null && second_operator){
    second_operator = second_operator.slice(0,-1);
    display.textContent = `${second_operator}`;
  }

  if(currentOperation && e.keyCode != "8"){
    shouldResetScreen = true;
    second_operator += key.value;
    display.textContent = `${second_operator}`;
    console.log(+second_operator+1);
  } else if (e.keyCode != "8") {
      first_operator += key.value;
      display.textContent = `${first_operator}`;
      console.log(+first_operator+1);
  }
}

operations.forEach(key => key.addEventListener('click', () =>{
  
  currentOperation = key.value;
  if(shouldResetScreen == false && currentOperation != triger && triger != null){
      processing(+first_operator, +second_operator);
  }
  if(shouldResetScreen == false && options[triger] > 0){
    processing(+first_operator, +second_operator);
    options[triger] -= 1;
  }
  triger = currentOperation;  
  shouldResetScreen = false;
  console.log(currentOperation);


}));

keys.forEach(key => key.addEventListener('click', () =>{
  if(currentOperation && shouldResetScreen == false){
    second_operator += key.value;
    display.textContent = `${second_operator}`;
    console.log(+second_operator+1);
  } else {
      first_operator += key.value;
      display.textContent = `${first_operator}`;
      console.log(+first_operator+1);
  }
}));

resetButton.addEventListener('click', ()=>{
   display.textContent = "0";
   first_operator = '';
   second_operator = '';
   currentOperation = null;
   shouldResetScreen = false;
});

window.addEventListener('keydown', output);



// Accept first operator, set it after any key from 'operations' is pressed 
// Clearing of display for second operator ( setting CurrentOperation, if null so listen for first operator, adding if statement to EventListeners arrow funct)
// creating hashmap for operations, for calling it
// checking if CurrentOperation is changed or "=" button is pressed if it's we call corresponding function 
// after we clear our second operator and set returned value from function as first_operator

