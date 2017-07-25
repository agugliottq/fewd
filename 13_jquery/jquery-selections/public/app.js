var newParagraph = $("<p>");
newParagraph.html("I have an apricot colored cockapoo.");
newParagraph.prependTo("body");

/* var newParagraph = $("<p> I love cockapoos </p>"); */


var newList = $("<li>");
newList.html("Puppies");
newList.appendTo(".first");


var newListAgain = $("<li>");
newListAgain.html("Cake");
newListAgain.prependTo(".second");


var newDiv =$("<div>");
newDiv.addClass("circle");
newDiv.appendTo(".circles");




