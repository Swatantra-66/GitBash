//scope chaining;

let name = "Swatantra";
console.log("My name is", name);

function sayName() {
    let name = "Jonathan";
    console.log("My name is ", name);

    fName();
    function fName() {
        let name = "Mr Yadav"
        console.log("My name is", name);
    }
}

sayName();


