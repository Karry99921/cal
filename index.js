const buttonsE1 = document.querySelectorAll("button");
const inputFieldE1 = document.getElementById("result");



/* for(let i=0;i<buttonsE1.length;i++){
buttonsE1[i].addEventListener("click",()=>{
  const buttonValue =buttonsE1[i].textContent;
  console.log(buttonValue)
  if(buttonValue ==="C"){
    clearResult();
  }else if(buttonValue==="="){
    calculateResult();
  }else{
    appendValue(buttonValue);
  }
})
} */
buttonsE1.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;
    console.log(buttonValue)
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }

  })
})


function clearResult() {
  inputFieldE1.value = "";
};

function calculateResult() {
  inputFieldE1.value = eval(inputFieldE1.value);
  /*  const code ='console.log(inputFieldE1.value);';
   function a(code){
    code=Number(code);
   }
   a(); */



}

function appendValue(buttonValue) {
  inputFieldE1.value += buttonValue
};

function GoToPage() {
  window.location.href = 'test.html';
};
function GoToPage1() {
  window.location.href = 'index.html';
};
let num1, num2, operator, correctAnswer;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getRandomOperator() {
  const operators = ['+', '-', '*', '/'];
  return operators[Math.floor(Math.random() * operators.length)];
};

function calculateAnswer(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;

  }
};

function generateQuestion() {
  num1 = getRandomNumber(1, 100);
  num2 = getRandomNumber(1, 10);
  operator = getRandomOperator();
  correctAnswer = calculateAnswer(num1, num2, operator);

  document.getElementById('question').innerText = `${num1} ${operator} ${num2} = ?`;
};

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('answer').value, 10);

  if (isNaN(userAnswer)) {
    alert('请输入一个有效的数字');
    return;
  }

  if (userAnswer === correctAnswer) {
    alert('答案正确！');
  } else {
    alert('答案错误，正确答案是 ' + correctAnswer);
  }
};