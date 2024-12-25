//arrays

let name = ["Swatantra", "Vidyasagar", "Tarun", "Vishek"];
console.log(name);

// different way to declare array
let subjects = new Array("Maths", "PPS", "Chemistry", "Physics");
console.log(subjects);
console.log(subjects[0]);
subjects[2] = "Web3";
console.log(subjects);

subjects.pop(); //deletes the last element of an array
console.log(subjects);
console.log(subjects.length);

subjects.unshift("Physics"); //add an element to the 1st pos and shifts the other elements 
console.log(subjects);

name.shift();  //deletes the very first element of array
console.log(name);

console.log(name.indexOf("Swatantra"));
console.log(Array.from("Maths")); //splits the word in array








