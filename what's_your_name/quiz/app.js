var stand = ( prompt ( "What does GA stand for?") );

if  ( stand "General Assembly") {

	console.log ( "Correct!");

} else {
	console.log ( "Close, but not quite. The answer is General Assembly.");
}




*** 
var speedLimit = parseInt( prompt ( "What's the speed limit?") );
var userSpeed = parseInt( prompt ( "What's your Speed?") );

if ( userSpeed > speedLimit + 10) 

	{console.log ( "SLow down dude!"); } 

else if ( userSpeed < speedLimit - 10) 

	{console.log ( "Speed up dude!"); } 

else 
	{console.log ("Keep on keepin on")	}


****

var gasLevel = parseInt( prompt ( "How much gas is in the tank?") );
var gasPrice = parseInt( prompt ( "What's the gas price here?") );

if ( gasLevel < 10 && /*take two condictions and combine into single booleon value */ gasPrice < 4)

{ console.log ("Stop here for gas")}

else 

{console.log ("Keep driving!")} 
