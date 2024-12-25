function name() {
    return "what is your name";
}

let fname = name();
console.log(fname);

//

function updateBrand(obj) {
    // Mutating the object is visible outside the function
    obj.brand = "Toyota";
    // Try to reassign the parameter, but this won't affect
    // the variable's value outside the function
    obj = null;
}

const car = {
    brand: "Honda",
    model: "Accord",
    year: 1998,
};

console.log(car.brand); // Honda

// Pass object reference to the function
updateBrand(car);

// updateBrand mutates car
console.log(car.brand); // Toyota



//self executing anoynmous function

(function () {
    console.log("Hi! Swatantra");
    console.log("How are you");
}());

