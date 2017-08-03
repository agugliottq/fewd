console.log("Loaded and ready!");

var nycInputs = ("New York", "New York City", "NYC";)
var sfInputs  = ("SF", "Bay Area");
var laInputs  = ("Los Angeles", "LA", "LAX");
var atxInputs = ("Austin", "ATX");
var sydInputs = ("Sydney", "SYD");



var cityClass = function(input) {
if ( nycInputs.includes(input) ) {
    return "nyc";
}

else if ( sfInputs.includes(input) ) {
    return "sf";
}	

else if ( laInputs.includes(input) ) {
    return "la";
}

else if ( atxInputs.includes(input) ) {
    return "austin";
}

else if ( sydInputs.includes(input) ) {
    return "sydney";
  }
});













$(".container form").submit(function(event) {

			 event.preventDefault();


var userInput = $("#city-type").val();
var newClass = cityClass(userInput);



if (newClass) {

	 $("body").removeClass();
	 $("body").addClass(newClass);


}


$("#city-type").val("xyz");
});


}












