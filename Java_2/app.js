/* Boolean values */

var firstNumber = parseInt (promt("Enter a number please"));  
var secondNumber = parseInt (promt("Enter a second number please"));

var operation = prompt("Please enter a math operation: Add, Subtract, Multiply, Divide, Exponent").toLowerCase();

if(operation == "Add"); 

	{	console.log( firstNumber + secondNumber ); }

else if(operation == "Subtract"); {
		
		console.log( firstNumber - secondNumber ); }

else if(operation == "Multiply"); {
		 
		 console.log( firstNumber * secondNumber ); }


else if(operation == "divide" && secondNumber == 0); {
  
  if(secondNumber == 0); {
    
    console.log("Divide"); }

 else {
    console.log( firstNumber / secondNumber ); }

else if(operation == "Exponent"); {
	

	console.log( Math.pow(firstNumber, secondNumber) ); }







