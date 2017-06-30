let userInput = document.getElementById("userInput");
let selectOne = document.getElementsByClassName("carCard border");
let containerEl = document.getElementsByClassName("carCard");

function printCars(_car_inventory){
	let counter = 0;
	let cardString = "";
	let outputCars = document.getElementById('container-fluid');
	for (; counter < _car_inventory.length; counter++) {
		if(counter % 3 === 0){
			cardString += `<div class ="row">`
		}
	  cardString += 
	  	`<div class="col-xs-4 " id="car${counter}">
	  		<div class= "col-xs-12 carCard">
	  		<header id="header">
	  			<h1>${_car_inventory[counter].make} ${_car_inventory[counter].model}</h1>
	  		</header>
	  		<section id="section">
	  			
	  			<h3>${_car_inventory[counter].year}</h3>
	  			<h4>$${_car_inventory[counter].price}</h4>
	  			<p id="description">${_car_inventory[counter].description}</p>
	  		</section>
	  		</div>
	  	</div>`
	  	if(counter % 3 === 2){
	  		cardString += `</div>`
	  	}
	  	outputCars.innerHTML = cardString;
	}
	listenEvents()
}

function listenEvents(){
	console.log(containerEl)
	for (let i = 0; i < containerEl.length; i++) {
		containerEl[i].addEventListener("click", function() {
			console.log(containerEl[i])
				containerEl[i].classList.toggle("border")
				userInput.focus();
				userInput.value = "";
				if(selectOne){
				enterPress()
			}
		})
	}
}

function enterPress(){
	userInput.addEventListener("keyup", function() {
		if (event.key === "Enter") {
			userInput.value = "";
		}
		replaceDescription()
	})
}

function replaceDescription(){
	for (let i = 0; i < containerEl.length; i++) {
		if(selectOne){
		selectOne[0].querySelector("#description").innerHTML = userInput.value;
		}
	}
}

CarLot.Inventory.loadInventory(printCars)