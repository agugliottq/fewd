var price = parseInt(prompt("What is the price of the product?")); 
var inventory = parseInt(prompt("How many pieces of what you want are in stock?"));


var money = parseInt(prompt("How much money do you have with you?"));
var quantity = parseInt(prompt("How many pieces do you want to buy?"));


if(quantity > inventory) 
{
  
  console.log("Not enough inventory to buy what you want.");
} 

else if(money < price * quantity) {
  console.log("Not enough money sorry!");
} 

else {
  console.log("Purchase done! Go enjoy your product!");
}


