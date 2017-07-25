console.log("Loaded bro");

var checkingBalance = 0;
var savingsBalance = 0;


// want to make the checking box have text in it and make the "deposit" button work

var depositChecking = function(amount) {

checkingBalance = checkingBalance + amount;

showChecking()
};

  // add the amount to the checking balance
  // show the checking balance

var withdrawChecking = function(amount) {
  // subtract the amount from the checking balance
  // show the checking balance

if(checkingBalance >= amount) {
checkingBalance = checkingBalance - amount;}

showChecking()
};


var depositSavings = function(amount) {
  // add the amount to the savings balance
  // show the savings balance

  savingsBalance = savingsBalance + amount;
  showSavings();
};


var withdrawSavings = function(amount) {
  // subtract the amount from the savings balance
  // show the savings balance

if(savingsgBalance >= amount) {
savingsBalance = savingsBalance - amount;}

showSavings()
};



var showChecking = function() {
  $("#checking .balance h1").text(checkingBalance);
};



var showSavings = function() {
  $("#savings .balance h1").text(savingsBalance);
};

showChecking();
showSavings();



$("#checking .deposit").click(function(){

  var depositAmount = parseInt($("checking .amount")); 
}



$("#savings .deposit").click(function(){

  var depositAmount = parseInt($("savings .amount"));
}


// ================ EVENTS ================== //

// When I click the Checking Deposit button...

// When I click the Checking Withdraw button...

// When I click the Savings Deposit button...

// When I click the Savings Withdraw button...



