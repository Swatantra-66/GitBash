//looping

//for loop:

const countries = ["India", "USA", 2005, "Russia", "Japan", "France"];

for (let i = 0; i < countries.length; i++) {
    if (typeof countries[i] !== "string") continue;
    // if (typeof countries[i] !== "string") break;
    console.log(countries[i]);

    // const element = countries[i];
    // console.log(element);
    console.log(i);

}


//while loop:

let i = 0;
while (i < countries.length) {
    console.log(countries[i]);
    i++;

}


//do-while loop:

//it first do , then check the conditions
let states = ["UP", "Delhi", "Maharashtra", "Gujrat", "Rajasthan"];
console.log(states.length);


let j = 0;
do {
    console.log(states[j]);
    j++;
} while (j < states.length);