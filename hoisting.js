//code hoisting
// functions declarations are scanned and made available.
// varibales declarations are scanned and made undefined.


tipper("80");

function tipper(x) {
    let bill = parseInt(x);
    console.log(bill + 20);
}

let bigTipper = function (x) {
    let bill = parseInt(x)
    console.log(bill + 100);
}

bigTipper("200");

let name = "Swatantra";
console.log(name);

function sayName() {
    let name = "Akki";
    console.log(name);
}
sayName();

console.log(name);


