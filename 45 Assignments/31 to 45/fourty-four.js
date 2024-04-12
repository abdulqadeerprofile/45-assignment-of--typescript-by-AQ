"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered. Call the function three times, 
// using a different number of arguments each time.
function orderSandwich(...items) {
    console.log("Sandwich whole Summary:");
    items.forEach(item => console.log("_" + item));
    console.log("Enjoy Your Sandwich");
}
// Call the function three times with different numbers of arguments
orderSandwich("Ham", "Cheese", "Lettuce");
orderSandwich("Turkey", "Swiss Cheese", "Tomato", "Mayonnaise");
orderSandwich("Tuna Salad");
