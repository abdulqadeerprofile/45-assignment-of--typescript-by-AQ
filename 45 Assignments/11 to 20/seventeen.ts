// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the 
// dinner, and you have space for only two guests.

// Start with your program from Exercise 16. Add a new line that prints a message saying that you 
// can invite only two people for dinner.

// Remove guests from your list one at a time until only two names remain in your list. Each 
// time you pop a name from your list, print a message to that person letting them know you’re 
// sorry you can’t invite them to dinner.

//  Print a message to each of the two people still on your list, letting them know they’re 
// still invited.

// Remove the last two names from your list, so you have an empty list. Print your list to make sure 
// you actually have an empty list at the end of your program.

// copy exersize 16
let guests1:string[] = ["Hammad" ,"Rafay" , "Ahsan"]
let no_come1:string=guests1[0]
// console.log(no_come1 + " " + "cant make the dinner")
let person1:string="rehan";
guests1[guests1[0].indexOf(no_come1)]=person1
 guests1.forEach(name1 => {
    // console.log(`Dear, ${name1} you are invited `);    
 });

 guests1.forEach(name1 => {
    //console.log(`Dear, ${name1} i found a bigger dinner so invited more guests `);    
 });

//beggining guest
let name1:string="abdullah";
guests1.unshift(name1);


// middle guest
let name2:string="rehan";
let index=guests1.length/2;
guests1.splice(index,0,name2);


// last guest
let name3:string="imran";
guests1.push(name3);

// one more messege to each guest
guests1.forEach(name1 => {
    //console.log(`Dear, ${name1} you are also invited `);    
});

// Print first messege of exersize 17
console.log("I have space for only two guest");

// now removing the guest by usong while loop & pop
//console.log(guests1)
while (guests1.length>2) {    
    let removePerson=guests1.pop();
    console.log(`Sory ${removePerson} i removed you from the list`);

}

// Now print messege to remaining guests
guests1.forEach(name => {
 console.log(`Now i only invite both of you ${name}`);   
});

// delete every guest from the list

guests1.pop()
guests1.pop()
console.log(guests1);



