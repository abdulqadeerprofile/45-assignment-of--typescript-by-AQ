"use strict";
// Cars: Write a function that stores information about a car in a Object.
//  The function should always receive a manufacturer and a model name. 
//  It should then accept an arbitrary number of keyword arguments. 
//  Call the function with the required information and two other name-value pairs, 
//  such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.
function create_car(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Add additional options
    options.forEach((option) => {
        let [key, value] = option.split(":");
        car[String(key).trim()] = value.trim();
    });
    return car;
}
// Call the function to create a car
const myCar = create_car("Toyota", "Corolla", "year: 2019", "color: red");
console.log(myCar);
