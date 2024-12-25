// ternary operator
let a = 10;

console.log(a > 0 ? "It is 10" : "It is not 10");

// switch_case

const foo = 0;
switch (foo) {
    case -1:
        console.log("negative 1");
        break;
    case 0: // Value of foo matches this criteria; execution starts from here
        console.log(0);
    // Forgotten break! Execution falls through
    case 1: // no break statement in 'case 0:' so this case will run as well
        console.log(1);
        break; // Break encountered; will not continue into 'case 2:'
    case 2:
        console.log(2);
        break;
    default:
        console.log("default");
}

// const action = "say_hello";
// switch (action) {
//     case "say_hello":
//         const message = "hello";
//         console.log(message);
//         break;
//     case "say_hi":
//         const message = "hi";
//         console.log(message);
//         break;
//     default:
//         console.log("Empty action received.");
// }

// this will give error as we declare const message = "hello" first and then const message = "hi" in a same block of code

//corrected version
// in this code they are differntly scoped in their block of code
const action = "say_hello";
switch (action) {
    case "say_hello": {
        const message = "hello";
        console.log(message);
        break;
    }
    case "say_hi": {
        const message = "hi";
        console.log(message);
        break;
    }
    default: {
        console.log("Empty action received.");
    }
}

//
const fruit = "Bananas";
switch (fruit) {
    case "Mango":
        console.log("This is Mangoo");
        break;
    case "Papaya":
        console.log("This is Papaya");
    case "Apple":
        console.log("This is apple");
        break;
    default:
        console.log("Sorry! We dont have other fruits");
    case "Bananas":
        console.log("This is bananas");
}


//
const Animal = "Dog";
switch (Animal) {
    case "Cow":
    case "Giraffe":
    case "Dog":
    case "Pig":
        console.log("This animal is not extinct.");
        break;
    case "Dinosaur":
    default:
        console.log("This animal is extinct.");
}


//
const n = 0;
let output = "Output: ";
switch (n) {
    case 0:
        output += "So ";
    case 1:
        output += "What ";
        output += "Is ";
    case 2:
        output += "Your ";
    case 3:
        output += "Name";
    case 4:
        output += "?";
        console.log(output);
        break;
    case 5:
        output += "!";
        console.log(output);
        break;
    default:
        console.log("Please pick a number from 0 to 5!");
}


