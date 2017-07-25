var firstNumber = parseInt( prompt('Please enter a number') ) || 0;
var secondNumber = parseInt( prompt('Please enter a second number') ) || 0;
var operation = prompt('Please enter a math operation:  Add, Subtract, Multiply, Divide, Exponent').toLowerCase();

if(operation == "add") {
	
	console.log( firstNumber + secondNumber );
} else if(operation == "subtract") {
	
	console.log( firstNumber - secondNumber );
} else if(operation == "multiply") {
	
	console.log( firstNumber * secondNumber );
} else if(operation == "divide" && secondNumber == 0) {
  if(secondNumber == 0) {
    
    console.log("Divide");
  } else {
   
    console.log( firstNumber / secondNumber );
  }
} else if(operation == "exponent") {
	
	console.log( Math.pow(firstNumber, secondNumber) );
} else {
	
	console.log("Your math is bad and you should feel bad");
}