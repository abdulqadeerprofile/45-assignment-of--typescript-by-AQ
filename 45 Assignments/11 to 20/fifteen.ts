// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// Start with your program from Exercise 14. Add a print statement at the end of your program 
// stating the name of the guest who can’t make it.

// Modify your list, replacing the name of the guest who can’t make it
// with the name of the new person you are inviting.

// Print a second set of invitation messages, one for each person who is still in your list.

let guests:string[] = ["Hammad" ,"Rafay" , "Ahsan"]
let no_come:string=guests[0]
console.log(no_come + " " + "cant make the dinner")
let person:string="rehan";
guests[guests[0].indexOf(no_come)]=person

guests.forEach(name => {
    console.log(`Dear, ${name} you are invited `);    
});

