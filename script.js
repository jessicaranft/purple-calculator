let topDisplay = document.querySelector('.top-display');
let bottomDisplay = document.querySelector('.bottom-display');
let firstNumber = document.querySelector('#first-number');
let secondNumber = document.querySelector('#second-number');
let operator = document.querySelector('#operator');

let btnCE = document.querySelector('#btnCE');
let btnC = document.querySelector('#btnC');
let btnPercentage = document.querySelector('#btnPercentage');
let btnDivide = document.querySelector('#btnDivide');
let btnSeven = document.querySelector('#btnSeven');
let btnEight = document.querySelector('#btnEight');
let btnNine = document.querySelector('#btnNine');
let btnMultiply = document.querySelector('#btnMultiply');
let btnFour = document.querySelector('#btnFour');
let btnFive = document.querySelector('#btnFive');
let btnSix = document.querySelector('#btnSix');
let btnMinus = document.querySelector('#btnMinus');
let btnOne = document.querySelector('#btnOne');
let btnTwo = document.querySelector('#btnTwo');
let btnThree = document.querySelector('#btnThree');
let btnPlus = document.querySelector('#btnPlus');
let btnPlusMinus = document.querySelector('#btnPlusMinus');
let btnZero = document.querySelector('#btnZero');
let btnComma = document.querySelector('#btnComma');
let btnEquals = document.querySelector('#btnEquals');

let topDisplayContent = [];
let firstNumberContent = firstNumber.innerHTML;
let secondNumberContent = secondNumber.innerHTML;
let operatorContent = operator.innerHTML;

// Função que vai automatizar a captação do valor do botão
function handleBtnClick(value) {
  console.log('Operator:', operatorContent);
  console.log('Value:', value);

  if(!firstNumberContent && !secondNumberContent && !operatorContent) { // se não tem conteúdo
    firstNumberContent = value;
    firstNumber.innerHTML = firstNumberContent;
  } else if (firstNumberContent && !operatorContent) { // se tem número mas não tem operador
    firstNumberContent = firstNumberContent + value;
    firstNumber.innerHTML = firstNumberContent;
  } else if (firstNumberContent && operatorContent) { // se tem número e operador
    secondNumberContent = secondNumberContent + value;
    secondNumber.innerHTML = secondNumberContent;
  }
}

btnZero.addEventListener('click', function() {
  handleBtnClick(0);
  firstNumberContent = firstNumber.innerHTML;
  secondNumberContent = secondNumber.innerHTML;
});

btnOne.addEventListener('click', function() {
  handleBtnClick(1);
  firstNumberContent = firstNumber.innerHTML;
  secondNumberContent = secondNumber.innerHTML;
});

btnTwo.addEventListener('click', function() {
  handleBtnClick(2);
  firstNumberContent = firstNumber.innerHTML;
  secondNumberContent = secondNumber.innerHTML;
});

btnThree.addEventListener('click', function() {
  handleBtnClick(3);
  firstNumberContent = firstNumber.innerHTML;
  secondNumberContent = secondNumber.innerHTML;
});

btnFour.addEventListener('click', function() {
  handleBtnClick(4);
  firstNumberContent = firstNumber.innerHTML;
  secondNumberContent = secondNumber.innerHTML;
});

btnFive.addEventListener('click', function() {
  handleBtnClick(5);
  firstNumberContent = firstNumber.innerHTML;
  secondNumberContent = secondNumber.innerHTML;
});

btnSix.addEventListener('click', function() {
  handleBtnClick(6);
  firstNumberContent = firstNumber.innerHTML;
  secondNumberContent = secondNumber.innerHTML;
});

btnSeven.addEventListener('click', function() {
  handleBtnClick(7);
  firstNumberContent = firstNumber.innerHTML;
  secondNumberContent = secondNumber.innerHTML;
});

btnEight.addEventListener('click', function() {
  handleBtnClick(8);
  firstNumberContent = firstNumber.innerHTML;
  secondNumberContent = secondNumber.innerHTML;
});

btnNine.addEventListener('click', function() {
  handleBtnClick(9);
  firstNumberContent = firstNumber.innerHTML;
  secondNumberContent = secondNumber.innerHTML;
});

//corrigir essa função
btnComma.addEventListener('click', function() {
  if (!topDisplayContent.includes(',')) {
    topDisplayContent.push(',');
    topDisplay.textContent = topDisplayContent.join('');
  }
});

btnPlus.addEventListener('click', function() {
  operator.innerHTML = '+';
  operatorContent = operator.innerHTML;
});

btnMinus.addEventListener('click', function() {
  operator.innerHTML = '-';
  operatorContent = operator.innerHTML;
});

btnMultiply.addEventListener('click', function() {
  operator.innerHTML = 'x';
  operatorContent = operator.innerHTML;
});

btnDivide.addEventListener('click', function() {
  operator.innerHTML = '÷';
  operatorContent = operator.innerHTML;
});

btnPercentage.addEventListener('click', function() {
  operator.innerHTML = '%';
  operatorContent = operator.innerHTML;
});

// corrigir essa função
btnCE.addEventListener('click', function() {
  topDisplayContent.pop();
  topDisplay.textContent = topDisplayContent.join('');
});

// corrigir essa função
btnC.addEventListener('click', function() {
  topDisplayContent = [];
  topDisplay.textContent = topDisplayContent;
});

btnEquals.addEventListener('click', function() {
  calculate();
})

// adicionar função do +/-

// adicionar funções de soma, etc ao array