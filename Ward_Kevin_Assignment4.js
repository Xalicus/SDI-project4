// Author: Kevin Ward
// Date: May 24th, 2012
// Name: Deliverable 4
// Theme: Procrastination and Schoolwork.


// Variables

var playTime = true;
var foodType = "hamburgers"; // "hamburgers" or "pasta"
var bunToppings = ["mayo, mustard, BBQ sauce, and cheese slices" , "ketchup, mustard, relish, and cheese slices"];
var pastaTypes = ["Chicken Alfredo" , "Spagetti"];
var condosAvail = [ "sound" , "don\'t sound" ];
var pastaAvail = [ "is" , "is" ];
var myCash = 25; // It should be more than just $25. *Sniff, sniff*
var storeNames = [ "GameStop", "Walmart", "Bookman\'s", "Movie Theater" ],
	minPerStore = [ 50, 20, 30, 120 ];
var hoursLeft = 2;

// My Happy Functions

// Say function for space saving code power!
var say = function(message) { console.log(message); };

// Argument Function
var playTime = function (playingTime) {
	longTime = true;
	if (playingTime === longTime) {
		say("How long should I play for?");
		say("I'd say about 5 hours today.");
	}
	else {
		say("I shouldn't play too long.");
		say("Maybe only for like 2 hours.");
	}
	return;
};

// Double Argument Function
var feedingTime = function (pronoun , typeOfYummies) {
	if ( foodType === "hamburgers" ) {
		say("\"" + pronoun + " wanting to eat " + typeOfYummies + "!\"");
		say("I search the kitchen for some " + foodType + ".");
		say("So I start grilling up some nice, juicy " + foodType + " in the kitchen.");
		say("What condiments should I slather over my buns?");
	} else {
		say("\"" + pronoun + " wanting to eat " + typeOfYummies + "!\"");
		say("I search the kitchen for some " + foodType + ".");
		say("So I start cooking up some nice, flavorful " + foodType + " on the stove.");
		say("What kinds of pasta do I have?");
	};
};

// Double String Function
var yumFood = function (foodType) {
	if ( foodType === "hamburgers" ){
		for (var i = 0, j = bunToppings.length; i < j; i++) {
			say( "The condiments " + bunToppings[i] + ", " + condosAvail[i] + " good." );
		};
	} else {
		for (var i = 0, j = pastaTypes.length; i < j; i++) {
			say( "The " + pastaTypes[i] + ", " + pastaAvail[i] + " available." );
		};
	};
};

// While-Loop Function
var song = function () {
	while (myCash > 0) {
		say( "\"" + myCash + " dollars are fleeting. Oh NOES!!!\"" );
		myCash--;
	};
	say( "\"No more cash in my wallet. What should I do?\"" );
	noCash = 0;
	return noCash;
};

// For-Loop Function
var shopOneStore = function(storeName, minThisStore){
	say("\"Shopping at " + storeName + " for "
		+ minThisStore + " minutes.\"");
	for (var minutes = 0; minutes < minThisStore; minutes += 5){
		var minRemain = minThisStore - minutes;
		say( "\"" + minutes + " have past, " + minRemain + " left to go!\"" );
	};
	
	say( "\"I'm done with " + storeName + ", for now! *Snicker*\"" );
};

var goToStores = function(storeNames, minPerStore) {
	for (var storeNumber = 0; storeNumber < storeNames.length; storeNumber++){
		var storeName = storeNames[storeNumber],
			minThisStore = minPerStore[storeNumber];
		shopOneStore( storeName, minThisStore );
	};
};

