var temperature = parseInt( prompt("Give me a temperature please") );

var convertTo = prompt("F to C OR C to F ?").toLowerCase();

if(convertTo == "F to C"){

	var converted = (temperature - 32) *(5/9);
	console.log(converted);
}

else if (convertTo == "C to F") {
	var converted = ( (temperature*9)/5) +32;
	console.log (converted);

}