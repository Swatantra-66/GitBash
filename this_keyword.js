//intro to this keyword:

let name = "Swatantra";
console.log(this); // will give a empty string

let details = function () {
    let name = "Swatantra Yadav";
    console.log(this);
}

details();


//NOTE : for all regular function calls this points to window objects

const brandNames = {
    LV: "Louis Vuitton",
    AX: "Armani Exchange",
    DG: "Dolce & Gabana",
    CD: "Christian Dior",
    getBrandsCount: function () {
        console.log(this);
        // it will not give window global object cause it is not a regular function call , its a object function call
        function myName() {
            console.log("Hey there Swatantra here");
            //it will give window global object cause it is a regular function call
            console.log("Line 0", this);
        }
        myName();
    }
};

brandNames.getBrandsCount();

