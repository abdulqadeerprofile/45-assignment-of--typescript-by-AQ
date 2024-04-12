// Conditional Tests: Write a series of conditional tests. Print a statement describing each 
// test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

//  Look closely at your results, and make sure you understand why each line evaluates to True or False.

//  Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

// Test 1: Is vehicleType equal to 'car'? Prediction: True.
let vehicleType: string = 'car';
console.log("Is vehicleType equal to 'car'? I predict True.");
console.log(vehicleType == 'car');

// Test 2: Is dessertType equal to 'ice cream'? Prediction: True.
let dessertType: string = 'ice cream';
console.log("Is dessertType equal to 'ice cream'? I predict True.");
console.log(dessertType == 'ice cream');

// Test 3: Is gameGenre equal to 'adventure'? Prediction: False.
let gameGenre: string = 'shooter';
console.log("Is gameGenre equal to 'adventure'? I predict False.");
console.log(gameGenre == 'adventure');

// Test 4: Is vehicleBrand not equal to 'Toyota'? Prediction: True.
let vehicleBrand: string = 'Ford';
console.log("Is vehicleBrand not equal to 'Toyota'? I predict True.");
console.log(vehicleBrand !== 'Toyota');

// Test 5: Is dessertFlavor not equal to 'vanilla'? Prediction: True.
let dessertFlavor: string = 'strawberry';
console.log("Is dessertFlavor not equal to 'vanilla'? I predict True.");
console.log(dessertFlavor !=='vanilla');

// Test 6: Is gameTitle not equal to 'Fortnite'? Prediction: True.
let gameTitle: string = 'Minecraft';
console.log("Is gameTitle not equal to 'Fortnite'? I predict True.");
console.log(gameTitle !== 'Fortnite');

// Test 7: Is vehicleModel strictly equal to 'Camry'? Prediction: True.
let vehicleModel: string = 'Camry';
console.log("Is vehicleModel strictly equal to 'Camry'? I predict True.");
console.log(vehicleModel === 'Camry');

// Test 8: Is dessertBrand strictly equal to 'Ben & Jerry's'? Prediction: True.
let dessertBrand: string = 'Ben & Jerry\'s';
console.log("Is dessertBrand strictly equal to 'Ben & Jerry's'? I predict True.");
console.log(dessertBrand === 'Ben & Jerry\'s');

// Test 9: Is gameDeveloper strictly equal to 'Epic Games'? Prediction: False.
let gameDeveloper: string = 'Mojang';
console.log("Is gameDeveloper strictly equal to 'Epic Games'? I predict False.");
console.log(gameDeveloper === 'Epic Games');

// Test 10: Is vehicleColor less than 'black'? Prediction: False.
let vehicleColor: string = 'white';
console.log("Is vehicleColor less than 'black'? I predict False.");
console.log(vehicleColor < 'black');

