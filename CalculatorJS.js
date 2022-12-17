function add(n1,n2){
  return n1+n2;
}
function subtract(n1,n2){
  return n1-n2;
}
function multiply(n1,n2){
  return n1*n2;
}
function divide(n1,n2){
  return n1/n2;
}
function remainder(n1,n2){
  return n1%n2;
}

//Higher order fucntion in js
function calculator(num1,num2,operator){
  return operator(num1,num2);
}

calculator(3,4,add);
