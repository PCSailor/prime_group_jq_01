var apple = {name: "Apple", marketPrice: 3};
var grape = {name: "Grape", marketPrice: 7};
var banana = {name: "Banana", marketPrice: 8};
var orange = {name: "Orange", marketPrice: 4};
var pears = {name: "Pears", marketPrice: 4};
var starfruit = {name: "Starfruit", marketPrice: 4};

var fruitArray = [apple, orange, banana];
var totalOwned = 0;
var priceBought = 0;
var averagePrice = 0;
var averagePriceTotal = 0;
var priceTotal = 0;
var totalAvailableCash = 100;

function FruitBuilder(name, marketPrice,totalOwned,averagePrice,priceBought, priceTotal){
	this.name = name;
	this.marketPrice = marketPrice;
	this.totalOwned = totalOwned;
	this.averagePrice = averagePrice;
	this.priceBought = priceBought;
	this.priceTotal = priceTotal;
}
var apple = new FruitBuilder("Apple", 3, 0, 0, 0,0);
console.log(apple);
$(document).ready(function(){
	console.log('jQuery is sourced');

	// Fruit Market Fluctating Price
	// TODO: Need 15 seconds
	$('#marketBananaPrice').text(this.marketPrice += randomNumberResult);

	// not allowed to go below a cost of 50 cents, or above the cost of 9 dollars and 99
	// setTimeout(function(){ parseFloat($('#marketBananaPrice').text(banana.marketPrice += randomNumberResult)); }, 1500);
// fruitArray.forEach();
setInterval(function(){
for (var i = 0; i < fruitArray.length; i++) {
 	var randomNumberResult = parseFloat(randomNumber(-2.5, 2.5)/10);
 	parseFloat($('#market' + (fruitArray[i].name) + 'Price').text((fruitArray[i].marketPrice += randomNumberResult).toFixed(2)));
}
}, 1500);

	// $(randomNumberResult).empty();
	$('button').on('click', function() {

		totalOwned++;
		priceTotal +=apple.marketPrice;
		averagePriceTotal= priceTotal / totalOwned;
		$('#averageApplePrice').text((apple).priceTotal.toFixed(2));
		totalAvailableCash = $('#totalAvailableCash').text();
		totalAvailableCash -= apple.marketPrice;
		$('#totalAvailableCash').text(totalAvailableCash.toFixed(2));
		$('#boughtApples').text(totalOwned); // we ha

		if (totalAvailableCash < this.marketPrice) { // disable button function



	  // $('button').on('click', function() {
		//
		// });
	}
	}) // End of button click function

}); // NOTE: FOR: $(document).ready(function(){

	// Addition of all the marketprice clicks divi
	console.log('Javascript is sourced');



	function randomNumber(min, max) {
		return Math.floor(Math.random() * (1 + max - min) + min); }

		// market price fluctuate up or down 50 cents (between 1 cent and 50 cents)-15 second interval.

		var randomNumberResult = parseFloat((randomNumber(-2.5, 2.5)/10)); // todo:.round(2));




		// if (0.50 <= marketPrice) {
		//
		// }
		//
		// else  (9.99
		// }
		//




		// When the application loads,
		// name
		// market price

		// displayed in a meaningful way on the DOM.
		//
		// Every 15 seconds, the prices should change however, and with it, the listed price on the DOM.

		// Clicking fruit display, buys the fruits-at market price-deducted from the total cash.
		//
		// user display
		// $100
		// total
		// inventory
		// purchased fruits
		// average purchased fruit price-how much money-spent on a given fruit in inventory
		// The user is not allowed to spend more than they have.
