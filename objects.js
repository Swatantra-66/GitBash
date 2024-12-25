// objects are non primitive datatypes in js

// const obj = {
//     "Swatantra": true,
//     "Yadav": false,
//     "number": 15,
//     "age": null,
//     "weight": undefined

// }

// console.log(obj)
// console.log(obj["age"]);
// console.log(obj.Swatantra);

const user = {
    fName: "Swatantra",
    lName: "Yadav",
    Age: 19,
    Gender: "Male",
    isloggedIn: true,
    Mail: "swatantramaverick@gmail.com",
    Password: "**********"
}

console.log(user);
console.table(user); //it gives output in table format. 
console.log(user.Password);
console.log(user["fName"]);

user.loggedInFromGoogle = false;
console.log(user.loggedInFromGoogle);
console.table(user);


