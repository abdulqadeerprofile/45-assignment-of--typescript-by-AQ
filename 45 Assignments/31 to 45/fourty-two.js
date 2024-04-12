"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding 
// the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
let magician1 = ["khadim", "nadeem", "saleem"];
function show_magicians2(magicians) {
    magicians.forEach(magician1 => console.log(magician1));
}
show_magicians2(magician1);
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magician1[1];
    }
}
make_great(magician1);
show_magicians2(magician1);
