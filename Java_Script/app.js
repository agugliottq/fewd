var currentTemperature = parseInt  ( prompt ("What is the current temperature out?"));

var desiredTemp = parseInt( prompt ("What temperature do you like best?"));


if(currentTemperature == desiredTemp) {

	console.log("This temperature is perfect!");

}

else if (currentTemperature > desiredTemp) {
	console.log("Yikes! Turn on the AC. Way too hot!");

}\

else if (currentTemperature < desiredTemp) {

	console.log("Okay it's too cold! Turn off the AC!")

}
