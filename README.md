# Single Page Applications Milestone Challenge

## Setup

1. Create the working directory for the challenge first.

    ```bash
    mkdir -p ~/workspace/challenges/spa && cd $_
    ```

1. Clone this repository and `cd` into the directory it creates.
1. Now run the following commands.

    ```bash
    git checkout -b challenge
    touch index.html
    mkdir css && touch css/styles.css
    mkdir javascripts && touch javascripts/main.js
    touch inventory.json
    ```

You are now ready to work in the `challenge` branch.

When your work in complete, push up the branch (`git push origin challenge`) and submit the pull request on Github.

## Instructions

You operate a used car lot, and need to have an application where you can update the description and availability of each car in your inventory. You are going to using the Bootstrap grid to lay out your HTML structure.

### Behavior

X1. Create an array of cars in the `inventory.json` file (see example structure below). XPut at least three cars in the array.
X1. When your page first loads, you need to use an XHR to load the contents of the JSON file, and parse them into a native JavaScript object.
X1. Loop over your array of cars and build up an HTML string to build a card for each car. Also, use Bootstrap to create rows. Each row should contain 3 columns. Make sure you have a parent element with a class of `container`. __Hint:__ You must build up the entire string of columns/rows before injecting into the DOM. Use a counter variable to know when to close a row after three columns.
X1. Put a standard Bootstrap navbar element at the top of your page.
X1. Put a text input field in the navigation bar.
X1. Make sure you display all properties of the car in the DOM. Basic styling is up to you.
X1. Make sure that each car card element has a CSS class which adds a black border around it.
X1. When you click on one of the car elements, change the width of the border to a higher value, and change the background color to any other color of your choosing.
X1. Also, on click of the car element, clear the value of the text input in the navbar, and put the [cursor in the text input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus).
1. When you start typing into the navbar's text input, the **description**, and only that property, of the currently selected car should be bound to what you are typing in and match it exactly.

# Starter Code

> **Please read & use the following as boilerplate for your code!!!!!!!!!!!!**

Remember to design your system first. Modularity. Single Responsiblity. Once you've defined the modules of the system, then write an IIFE for each one.

##### inventory.json

```json
{
  "cars": [
    {
      "make": "Nissan",
      "model": "Rogue",
      "year": "2006",
      "price": "8999",
      "description": "This is an immaculate 2006 Nissan Rogue with only 25000 miles on it. Leather seats, power everything."
    }
  ]
}
```

##### CarLot.js

```js
// This IIFE will add a new module to Carlot in the
// namespace of CarLot.Inventory
var CarLot = (function (globalScopeCarLot) {

  // Define a private scope variable to store cars
  let _car_inventory = [];  

  // Start building the Object that will be attached
  // to the CarLot.Inventory namespace
  let inventory = Object.create(null, {
    loadInventory: function (callback) {
      var load = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {
        // Add each car to the private _car_inventory array
      });
    }
  });

  globalScopeCarLot.Inventory = inventory;
  return globalScopeCarLot;

  // If this is the first module that gets evaluated,
  // CarLot will be `undefined` and a new empty object
  // will augmented.
})(CarLot || {});
```
