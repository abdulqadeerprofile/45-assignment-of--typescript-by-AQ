// Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program 
// informing people that you found a bigger dinner table.
//  Add one new guest to the beginning of your array.
// Add one new guest to the middle of your array. 
// Use append() to add one new guest to the end of your list. 
// Print a new set of invitation messages, one for each person in your list.
// copy exersize 15
let guests1 = ["Hammad", "Rafay", "Ahsan"];
let no_come1 = guests1[0];
//console.log(no_come1 + " " + "cant make the dinner")
let person1 = "rehan";
guests1[guests1[0].indexOf(no_come1)] = person1;
// guests1.forEach(name1 => {
//  console.log(`Dear, ${name1} you are invited `);    
// });
guests1.forEach(name1 => {
    console.log(`Dear, ${name1} i found a bigger dinner so invited more guests `);
});
//beggining guest
let name1 = "abdullah";
guests1.unshift(name1);
// middle guest
let name2 = "rehan";
let index = guests1.length / 2;
guests1.splice(index, 0, name2);
// last guest
let name3 = "imran";
guests1.push(name3);
// one more messege to each guest
guests1.forEach(name1 => {
    console.log(`Dear, ${name1} you are also invited `);
});
export {};
