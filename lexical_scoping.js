function init() {
    let firstName = "Swatantra";
    console.log("Hi I am init");

    function fName() {
        console.log(firstName);
    }
    return fName;
}

let value = init();
value();