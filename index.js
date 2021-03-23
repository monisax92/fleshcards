//add eventListener to whole list of flashcards
let cardsList = document.querySelector(".cardList");
cardsList.addEventListener("click", turnCard);

//dealing wit All to terms button action
let btnToTerms = document.querySelector("#btnToTerms");
btnToTerms.addEventListener('click', turnAllToTerms);

//dealing with All to definitions button action
let btnToDefs = document.querySelector("#btnToDefs");
btnToDefs.addEventListener('click', turnAllToDefs);

function turnCard(e){

	let target = e.target;
	let term, def;
	if(target.classList.contains("card")){
		term = target.firstElementChild;
		def = target.lastElementChild;		
	}
	//if I click directly on h3 element containing term or definition
	//I go to its parent element and further do the same as for whole card
	else if (target.classList.contains("word")||target.classList.contains("definition")){
		term = target.parentElement.firstElementChild;
		def = target.parentElement.lastElementChild;
	}
	else{
		return;
	}
	term.classList.toggle("hide");
	def.classList.toggle("hide");
}

function turnAllToTerms(){
	let cards = document.querySelectorAll(".card");
	cards.forEach((card) => {
		card.firstElementChild.classList.remove("hide");
		card.lastElementChild.classList.add("hide");
	}); 	
}

function turnAllToDefs(){
	let cards = document.querySelectorAll(".card");
	cards.forEach((card) => {
		card.firstElementChild.classList.add("hide");
		card.lastElementChild.classList.remove("hide");
	}); 	
}