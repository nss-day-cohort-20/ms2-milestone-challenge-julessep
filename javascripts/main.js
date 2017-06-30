function printCars(_car_inventory){
	let counter = 0;
	let outputCars = document.getElementById('container-fluid');
	for (; counter < _car_inventory.length; counter++) {
	  outputCars.innerHTML += 
	  	`<div class="row${counter}">
	  		<div class="col-xs-4 myClass${counter}">
	  		<header id="header">
	  			<h1>${_car_inventory[counter].make}</h1>
	  			<h2>${_car_inventory[counter].model}</h2>
	  		</header>
	  		<section id="section">
	  			<h3>${_car_inventory[counter].year}</h3>
	  			<h4>$${_car_inventory[counter].price}</h4>
	  			<p>${_car_inventory[counter].description}</p>
	  		</section>
	  		</div>
	  	</div>`
	}
}
CarLot.Inventory.loadInventory(printCars)