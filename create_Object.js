// --_--

let User = {
    name: "",
    getUserName: function () {
        console.log(`User name is : ${this.name}`);
    },
};

let swat = Object.create(User);
console.log(swat);

swat.name = "Swatantra";
swat.getUserName();

let harry = Object.create(User, {
    name: { value: "Harry" },
})

harry.getUserName();

