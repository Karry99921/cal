const buttonsE1= document.querySelectorAll("button");
const inputFieldE1 =document.getElementById("result");
 
 
 
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
buttonsE1.forEach((button)=>{
  button.addEventListener("click",()=>{
    const buttonValue =button.textContent;
    console.log(buttonValue)
    if(buttonValue ==="C"){
      clearResult();
    }else if(buttonValue==="="){
      calculateResult();
    }else{
      appendValue(buttonValue);
    }
  
  })
})
 
 
function clearResult(){
inputFieldE1.value="";
};
 
function calculateResult(){
  inputFieldE1.value=eval(inputFieldE1.value);
/*  const code ='console.log(inputFieldE1.value);';
 function a(code){
  code=Number(code);
 }
 a(); */
 
 
 
}
 
function appendValue(buttonValue){
  inputFieldE1.value+=buttonValue
};