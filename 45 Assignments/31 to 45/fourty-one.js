"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
let magician = ["khadim", "nadeem", "saleem"];
function show_magicians3(magicians) {
    magicians.forEach(magician => console.log(magician));
}
show_magicians3(magician);
