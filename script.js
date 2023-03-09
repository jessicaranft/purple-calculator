const topDisplay = document.querySelector('.top-display');
const bottomDisplay = document.querySelector('.bottom-display-result');

const btnCE = document.querySelector('#btnCE');
const btnC = document.querySelector('#btnC');
const btnPercentage = document.querySelector('#btnPercentage');
const btnDivide = document.querySelector('#btnDivide');
const btnSeven = document.querySelector('#btnSeven');
const btnEight = document.querySelector('#btnEight');
const btnNine = document.querySelector('#btnNine');
const btnMultiply = document.querySelector('#btnMultiply');
const btnFour = document.querySelector('#btnFour');
const btnFive = document.querySelector('#btnFive');
const btnSix = document.querySelector('#btnSix');
const btnMinus = document.querySelector('#btnMinus');
const btnOne = document.querySelector('#btnOne');
const btnTwo = document.querySelector('#btnTwo');
const btnThree = document.querySelector('#btnThree');
const btnPlus = document.querySelector('#btnPlus');
const btnPlusMinus = document.querySelector('#btnPlusMinus');
const btnZero = document.querySelector('#btnZero');
const btnComma = document.querySelector('#btnComma');
const btnEquals = document.querySelector('#btnEquals');

//let topDisplayContent = topDisplay.innerHTML;
//let firstNumberContent = firstNumber.innerHTML;
//let secondNumberContent = secondNumber.innerHTML;
//let operatorContent = operator.innerHTML;

/** 
 * CRIAR AS FUNCIONALIDADES PRIMEIRO!!!
 * 
 * Porque assim vou atualizando o display conforme o "conteúdo" do console.log.
 * 
 * 1- Capturar números, converter para number (?)
 * 2- Criar as operações
 * 3- Criar a funcionalidade de todos os outros botões
 * 4- Testar tudo apenas com console.log, no máximo inserindo o resultado no bottomDisplay
 * 5- Por último criar a funcionalidade que atualiza o display com o conteúdo da operação, a cada botão clicado.
 *    > Talvez tenha que converter toda a operação em string.
*/

const firstNumber = document.querySelector('#first-number');
const secondNumber = document.querySelector('#second-number');
const operatorDisplay = document.querySelector('#operator');
let operator;
let result;

function resizeInput() {
  firstNumber.style.width = ((firstNumber.value.length + 1) * 12) + 'px';
  secondNumber.style.width = ((secondNumber.value.length + 1) * 12) + 'px';
}

function handleBtnClick(value) {

  if(!firstNumber.value && !secondNumber.value && !operator) { // se não tem conteúdo
    firstNumber.value = String(value);
    parseFloat(firstNumber);
    resizeInput();
  } else if (firstNumber.value && !operator) { // se tem número mas não tem operador
    firstNumber.value = firstNumber.value + String(value);
    parseFloat(firstNumber);
    resizeInput();
  } else if (firstNumber.value && operator) { // se tem número e operador
    secondNumber.value = secondNumber.value + String(value);
    parseFloat(secondNumber);
    resizeInput();
  }
  console.log('Operator:', operator);
  console.log('First Number:', firstNumber.value);
  console.log('Second Number:', secondNumber.value);
}

function calculate() {
  const firstCompleteNumber = parseFloat(firstNumber.value);
  const secondCompleteNumber = parseFloat(secondNumber.value);
  let result;

  if(operator === '+') {
    result = firstCompleteNumber + secondCompleteNumber;
  } else if (operator === '-') {
    result = firstCompleteNumber - secondCompleteNumber;
  } else if (operator === '*') {
    result = firstCompleteNumber * secondCompleteNumber;
  } else if (operator === '/') {
    result = firstCompleteNumber / secondCompleteNumber;
  }
  bottomDisplay.innerText = result;
  console.log(result);
}

btnZero.addEventListener('click', function() {
  handleBtnClick(0);
});

btnOne.addEventListener('click', function() {
  handleBtnClick(1);
});

btnTwo.addEventListener('click', function() {
  handleBtnClick(2);
});

btnThree.addEventListener('click', function() {
  handleBtnClick(3);
});

btnFour.addEventListener('click', function() {
  handleBtnClick(4);
});

btnFive.addEventListener('click', function() {
  handleBtnClick(5);
});

btnSix.addEventListener('click', function() {
  handleBtnClick(6);
});

btnSeven.addEventListener('click', function() {
  handleBtnClick(7);
});

btnEight.addEventListener('click', function() {
  handleBtnClick(8);
});

btnNine.addEventListener('click', function() {
  handleBtnClick(9);
});

btnComma.addEventListener('click', function() {
  if (!firstNumber.value.includes('.') && !secondNumber.value) {
    firstNumber.value = parseFloat(firstNumber.value) + ".";
  } else if (firstNumber.value && !secondNumber.value.includes('.')) {
    secondNumber.value = parseFloat(secondNumber.value) + ".";
  }
});

btnPlus.addEventListener('click', function() {
  operator = '+';
  operatorDisplay.innerText = "+";
});

btnMinus.addEventListener('click', function() {
  operator = '-';
  operatorDisplay.innerText = "-";
});

btnMultiply.addEventListener('click', function() {
  operator = '*';
  operatorDisplay.innerText = "x";
});

btnDivide.addEventListener('click', function() {
  operator = '/';
  operatorDisplay.innerText = "÷";
});

btnPercentage.addEventListener('click', function() {
  const firstCompleteNumber = parseFloat(firstNumber.value);
  const secondCompleteNumber = parseFloat(secondNumber.value);
  let percentageResult = (firstCompleteNumber * secondCompleteNumber) / 100;
  let result;

  if(operator === '+') {
    result = firstCompleteNumber + percentageResult;
  } else if (operator === '-') {
    result = firstCompleteNumber - percentageResult;
  } else if (operator === '*') {
    result = firstCompleteNumber * percentageResult;
  } else if (operator === '/') {
    result = firstCompleteNumber / percentageResult;
  }
  bottomDisplay.innerText = result;
});

btnCE.addEventListener('click', function() {
  if (!secondNumber.value && firstNumber.value) {
    firstNumber.value = firstNumber.value.substring(0, firstNumber.value.length - 1);
    parseFloat(firstNumber.value);
  } else if (secondNumber.value) {
    secondNumber.value = secondNumber.value.substring(0, secondNumber.value.length - 1);
    parseFloat(secondNumber.value);
  }
});

btnC.addEventListener('click', function() {
  firstNumber.value = "";
  secondNumber.value = "";
  operator = "";
  operatorDisplay.innerText = "";
  bottomDisplay.innerText = "0";
});

btnEquals.addEventListener('click', function() {
  calculate();
})

btnPlusMinus.addEventListener('click', function() {
  if (!secondNumber.value && firstNumber.value) {
    firstNumber.value = parseFloat(firstNumber.value) * -1;
  } else if (secondNumber.value) {
    secondNumber.value = parseFloat(secondNumber.value) * -1;
  }
})