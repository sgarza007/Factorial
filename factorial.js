/*
*Author:Saul Garza
*Description: Code that takes factorial of a number
*in a recursive manner
*/


function factorial(num){
  if(num == 0 || num == 1){//base case when number is 0 or 1
    return 1;
  }
  return num*factorial(num-1);//recursively returns factorial
}
