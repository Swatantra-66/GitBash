
let name = "Swatantra";

let isMyName = (name) => {
    return name;

}
console.log(name);


let isEven = (element) => {  // arrow function
    return element % 2 == 0;
}

console.log(isEven(3));

//callback

let result1 = [2, 4, 6, 8].every(isEven);
console.log(result1);

//
let result2 = [2, 4, 6, 8].every((e) => {
    return e % 2 === 0;
})
console.log(result2);

// if we don't want return somethin.. ,then we will be using this method
let result3 = [2, 3, 6, 8].every((e) => (e % 2 === 0));
console.log(result3);

