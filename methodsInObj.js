//methods in objects:

const user = {
    fName: "Swatantra",
    lName: "Yadav",
    Age: 19,
    Gender: "Male",
    isloggedIn: true,
    logginCount: 25,
    Mail: "swatantramaverick@gmail.com",
    Password: "**********",
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.fName} is enrolled in ${this.courseList.length} courses`;
    },
};

let courseList = true;
console.log(user.fName);
user.buyCourse("Javascript Full Course");
user.buyCourse("C++ Course");
console.log(user.getCourseCount());
// console.log(user);
console.table(user);



