var fruitArray = ["Apples", "Oranges", "Bananas", "Grapes", "Kiwis"];
// everything buoilt to work off one array

// NOTE:  Game Settings Area:
var startingPrice = 5.00; // whole numbers = dollarsz  //magic number
// var minSwing = 0.01;
// var maxSwing = 0.50;
// var minPrice = 0.50;
// var maxPrice = 9.99; // not getting desired result

var minSwing = 1; // NOTE: Whole numbers = cents
var maxSwing = 50; // NOTE: Whole numbers = cents
var minPrice = 0.50;
var maxPrice = 9.99;

// NOTE:  Game Settings Area END
function Fruit (name, price) {
	this.name = name;
	this.price = price;
	this.changePrice = function(){
		console.log("Tots works");
		console.log(this.price);
		var priceSwing = randomNumber(minSwing, maxSwing);
		var randomAdjustment = randomNumber(1,2);
		if(randomAdjustment == 1){
		priceSwing = -priceSwing;
	} else { priceSwing = priceSwing}
		priceSwing = priceSwing/100;
		this.price += priceSwing;
			console.log(this.price);
	};
}
// var testFruit = new Fruit (fruitArray [0], 65); // test

$(document).ready(function(){
	// console.log('jQuery is sourced');
init();

}); // NOTE: FOR: $(document).ready(function(){
// console.log('Javascript is sourced');

function init () { // will start the game when this is called
buildFruits(fruitArray);
buildDomFruits(fruitArray);
// setInterval(gameInterval, 1000); // delete for Function enable/disable
enable();
}

function enable(){
setInterval(gameInterval);
}

function disable(){
clearInterval(gameInterval);
}

function gameInterval (){
for (var i = 0; i < fruitArray.length; i++) {
	fruitArray[i].changePrice();
	// console.log(array[i].name, fruitArray[i].price);
}
}

function buildFruits (array){
	// console.log(array);
for (var i = 0; i < array.length; i++) {
	var newFruit = new Fruit(array[i], startingPrice);
	array[i] = newFruit;
	newFruit.changePrice();
}
// console.log(array);
}

function buildDomFruits (array){ // update the DOM with objects in array
console.log(array);
for (var i = 0; i < array.length; i++) {
	$("#fruitContainer").append("<div></div");
	var $el = $("#fruitContainer").children().last();
	$el.append("<p>" + array[i].name + "</p>");
	$el.append("<p>" + array[i].price + "</p>");
}
console.log(array);
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min); }
