// Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "qadeer";
console.log("Uper Case  " + personName.toUpperCase());
console.log("Lower Case  " + personName.toLowerCase());
let title_case = personName[0].toUpperCase() + personName.slice(1).toLowerCase();
console.log("Title Case  " + title_case);
export {};
