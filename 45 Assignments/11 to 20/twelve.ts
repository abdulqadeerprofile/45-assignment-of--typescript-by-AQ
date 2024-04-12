// Greetings: Start with the array you used in Exercise 11,
// but instead of just printing each person’s name, print a message to them.
// The text of each message should be the same, but each message should be 
// personalized with the person’s name.

let names2:string[] = ["hammad" ,"Rafae" , "Ali " , "irtiza"]

names2.forEach(names => {
    console.log(`Dear ${names} How are you? , Have a nice day`)
});
