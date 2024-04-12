// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message 
// indicating the number of people you are inviting to dinner.


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
// console.log("I have space for only two guest");

// now removing the guest by usong while loop & pop
//console.log(guests1)
//while (guests1.length>2) {    
    //let removePerson=guests1.pop();
    // console.log(`Sory ${removePerson} i removed you from the list`);

//}

// Now print messege to remaining guests
guests1.forEach(name => {
//  console.log(`Now i only invite both of you ${name}`);   
});

// delete every guest from the list

console.log(guests1.length+" "+ " members are invited for dinner " )

