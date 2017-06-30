var CarLot = (function (globalScopeCarLot) {

  // Define a private scope variable to store cars
  let _car_inventory = [];  

  // Start building the Object that will be attached
  // to the CarLot.Inventory namespace
  let inventory = Object.create(null);

    inventory.loadInventory = function(callback) {
      var myRequest = new XMLHttpRequest();

      myRequest.addEventListener("load", function () {
        // Add each car to the private _car_inventory array
        _car_inventory = JSON.parse(event.target.responseText).cars;
        callback(_car_inventory)
      });

      myRequest.open("GET", "inventory.json");
      myRequest.send();
    }
  
  globalScopeCarLot.Inventory = inventory;
  return globalScopeCarLot;

  // If this is the first module that gets evaluated,
  // CarLot will be `undefined` and a new empty object
  // will augmented.
})(CarLot || {});

  