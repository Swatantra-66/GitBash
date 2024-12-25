//user signUp

let userId = 1
let fullname = "Swatantra Yadav";
let email = "swatantramaverick@gmail.com";
let password = "MaVeRick";
let confirmPassword = "MaVeRicK";
let loggedCount = 50;
let loggedInFromGoogle = false;
let google = true;
let facebook = false;
let emailLogged = false;

console.log(`
    UserId is :${userId}
    userName is : ${fullname}
    emailIs : ${email}
    UserPassword is : ${password}
    NoTimesLoggedIn : ${loggedCount}
    isUserLogged from goodle : ${loggedInFromGoogle}
    
    `);

if (google || emailLogged || facebook) {
    console.log("Login Success!");
}

//

// let userId = 1
// let fullname = prompt("Enter your name");
// let email = "swatantramaverick@gmail.com";
// let password = prompt("Enter Your password");
// let confirmPassword = prompt("Confirm your Password");
// let loggedCount = 50;
// let loggedInFromGoogle = prompt("Do you logged in from Google");

// console.log(`
//     UserId is :${userId}
//     userName is : ${fullname}
//     emailIs : ${email}
//     UserPassword is : ${password}
//     NoTimesLoggedIn : ${loggedCount}
//     isUserLogged from goodle : ${loggedInFromGoogle}

//     `);


//TODO:falsy
// Nan, undefined, "" , 0, null.