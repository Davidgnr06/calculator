let previousValue = '';
let currentValue = '';
let op = '';
let Decimal = false;


function updateDisplay(){
  if (currentValue.length >= '7'){
    mainDisplay.innerText = currentValue.slice(0,7)
  }else(
    mainDisplay.innerText = currentValue
  )
  upperDisplay.innerText = previousValue + '' + op ;
  mainDisplay.innerText = currentValue;
  console.log(currentValue)
}


function clearDisplay(){
  currentValue = '';
  previousValue ='';
  op = '';
  Decimal = false;
  updateDisplay()
}


function backspace(){
  currentValue = currentValue.slice(0,-1);
  Decimal = false;
  updateDisplay()
}


function operate(){
  let result;
  let prev = parseFloat(previousValue);
  let current = parseFloat(currentValue);
 
  if(isNaN(prev)|| isNaN(current))return;

  if(op == '/' && current === 0 ){ 
    currentValue = 'Error';
    previousValue = '';
    op = '';
  updateDisplay()
    return;
  }
  
  switch(op){
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
      default:
        return
  }

  currentValue = result.toString().slice(0,7);
  previousValue = '';
  op = '';
  Decimal = currentValue.includes('.');
  updateDisplay()

 }


function appendNumber(number){
  if (currentValue.length >= 7 && number !== '.') return;
  if(number === '.' && Decimal)return;

  if(number === '.'){
    Decimal = true;
  }

  currentValue = currentValue.toString()+ number.toString();
  updateDisplay()
}



function appendOperator(operator){

  if ( previousValue !== '' && currentValue === ''){
    currentValue = previousValue;
   
    op = operator ;
  updateDisplay()
  
  }else{
    if (currentValue === '')return;
    if (previousValue !== ''){operate()};
  
  };
  
  op = operator
  previousValue = currentValue;
  currentValue = '';
  Decimal = false;
  updateDisplay()
  
  }


const  upperDisplay= document.querySelector('[data-previous-operand]');
const  mainDisplay= document.querySelector('[data-current-operand]');
const  numbersBtn = document.querySelectorAll('[data-number]');
const  operatorsBtn = document.querySelectorAll('[data-operator]');
const  clearBtn = document.querySelector('[data-clear]');
const  backspaceBtn = document.querySelector('[data-backspace]');
const  equalBtn = document.querySelector('[data-equal]');



numbersBtn.forEach(button =>{button.addEventListener('click',()=>
  appendNumber(button.innerText))
 }
)


operatorsBtn.forEach(button =>{button.addEventListener('click',()=>
  appendOperator(button.innerText))
 }
)

clearBtn.addEventListener('click',()=> 
  clearDisplay(),
  updateDisplay()
)
backspaceBtn.addEventListener('click',()=> 
  backspace(),
  updateDisplay()
)
equalBtn.addEventListener('click',()=> 

  operate(),

)

