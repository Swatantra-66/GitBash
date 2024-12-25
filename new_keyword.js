//prototype:

let User = function (fname, courseCount) {
    this.fname = fname;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course Count is: ${this.courseCount}`);
    };
}

User.prototype.getfirstName = function () {
    console.log(`Your username is: ${this.fname}`);

}
let name = new User("Swatantra", 5);
name.getCourseCount();
//object chaining
if (name.hasOwnProperty("fname")) {
    name.getfirstName();
}
// name.getfirstName();
// console.log(name);

let sam = new User("Sam", 2);
sam.getCourseCount();
sam.getfirstName();


