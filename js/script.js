window.onload = init;

var globalQty = 0;
var vegetablePrice = 1;
var rasPrice = 2;
var kiwiPrice = 0.3;

function init(){
	enterPrices(vegetablePrice, rasPrice, kiwiPrice);

	var upArrows = document.querySelectorAll(".up");
	var downArrows = document.querySelectorAll(".down");
	var adds = document.querySelectorAll(".submit");

	for(var i = 0; i < upArrows.length; i++){
		upArrows[i].addEventListener("click", upDown, false);
	}

	for(var i = 0; i < downArrows.length; i++){
		downArrows[i].addEventListener("click", upDown, false);
	}

	for(var i = 0; i < adds.length; i++){
		adds[i].addEventListener("click", addToCart, false);
	}
}

function enterPrices(vegetablePrice, rasPrice, kiwiPrice){
	var vegetableSpan = document.getElementById("vegetable-span");
	vegetableSpan.innerHTML = "$" + vegetablePrice + ".00";

	var rasSpan = document.getElementById("ras-span");
	rasSpan.innerHTML = "$" + rasPrice + ".00";

	var kiwiSpan = document.getElementById("kiwi-span");
	kiwiSpan.innerHTML = "$" + kiwiPrice + "0";
}

function upDown(e){
	var arrow = e.target;
	if($(arrow).hasClass( "up" ) && $(arrow).hasClass("vegetable")){
		updateQtyUp("qty-vegetable");
		updateTotal("total-vegetable", vegetablePrice);
	}
	else if($(arrow).hasClass( "down" ) && $(arrow).hasClass("vegetable")){
		updateQtyDown("qty-vegetable");
		updateTotal("total-vegetable", vegetablePrice);
	}
	else if($(arrow).hasClass( "up" ) && $(arrow).hasClass("ras")){
		updateQtyUp("qty-ras");
		updateTotal("total-ras", rasPrice);
	}
	else if($(arrow).hasClass( "down" ) && $(arrow).hasClass("ras")){
		updateQtyDown("qty-ras");
		updateTotal("total-ras", rasPrice);
	}
	else if($(arrow).hasClass( "up" ) && $(arrow).hasClass("kiwi")){
		updateQtyUp("qty-kiwi");
		updateTotal("total-kiwi", kiwiPrice);
	}
	else if($(arrow).hasClass( "down" ) && $(arrow).hasClass("kiwi")){
		updateQtyDown("qty-kiwi");
		updateTotal("total-kiwi", kiwiPrice);
	}
}

function updateQtyUp(id){
	var qty = document.getElementById(id);
	var qtyNumber = qty.innerHTML;
	var qtyInt = parseInt(qtyNumber);
	var newQtyValue = qtyInt + 1;
	qty.innerHTML = newQtyValue;
	globalQty = newQtyValue;

}

function updateQtyDown(id){
	var qty = document.getElementById(id);
	var qtyNumber = qty.innerHTML;
	var qtyInt = parseInt(qtyNumber);
	if(qtyInt == 0){
		return false;
	}
	else{
		var newQtyValue = qtyInt - 1;
		qty.innerHTML = newQtyValue;
		globalQty = newQtyValue;
	}
}

function updateTotal(id, price){
	var bottomTopLeftDiv = document.getElementById(id);
	var totalSpan = bottomTopLeftDiv.children[1]
	var newAmount = (price * globalQty).toFixed(2);

	updateSpan(totalSpan, newAmount)
}

function updateSpan(span, amount){
	span.innerHTML = "($" + amount + " Total)";
}

function addToCart(){
	
}





