// More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. Have at least one True and one False 
// result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than 
// or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let string1: string = "Abdul";
let string2: string = "Qadeer";

// Tests for equality and inequality with strings
console.log("Equality and inequality with strings:");
console.log(`Is string1 equal to 'Qadeer'? ${string1 === 'Qadeer'}`);
console.log(`Is string1 not equal to 'Qadeer'? ${string1 !== 'Qadeer'}`);

// Tests using the lower case function
let text: string = "HELLO";
console.log("\nLower case function test:");
console.log(`Is 'text' equal to 'hello' in lower case? ${text.toLowerCase() === "hello"}`);

// Numerical tests
let x: number = 5;
let y: number = 10;
console.log("\nNumerical tests:");
console.log(`Is x less than y? ${x < y}`);
console.log(`Is x greater than or equal to y? ${x >= y}`);

// Tests using "and" and "or" operators
let a: boolean = true;
let b: boolean = false;
console.log("\nTests using 'and' and 'or' operators:");
console.log(`Is a and b ? ${a && b}`);
console.log(`Is a or b  ? ${a || b}`);

// Greater and less comparisons
let c: number = 15;
console.log(`Is ${x} less than ${y}? ${x < y}`);
console.log(`Is ${y} greater than ${c}? ${y > c}`);

// Test whether an item is in an array
let myArray: number[] = [1, 2, 3, 4, 5];
console.log("\nTest whether an item is in an array:");
console.log(`Is 3 in myArray? ${myArray.includes(3)}`);

// Test whether an item is not in an array
console.log("\nTest whether an item is not in an array:");
console.log(`Is 6 not in myArray? ${myArray.includes(6)}`);