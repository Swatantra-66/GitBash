//comparision operators.

let a = 15;
let b = "15";

console.log("a==b is", a == b);
console.log("a!=b is", a != b);
console.log("a===b is", a === b);  // typeCoercion , it checks type of variable
console.log("a!==b is", a !== b); //it checks type of variable
console.log("a>=b is", a >= b);
console.log("a<=b is", a <= b);
console.log("a>b is", a > b);
console.log("a<b is", a < b);

//
let z = 3;

console.log((z **= 2));
// Expected output: 9

console.log((z **= 0));
// Expected output: 1

console.log((z **= 'hello'));
// Expected output: NaN


//logical operators

let x = 6;
let y = 5;

console.log(x > b && y == b); // logical AND operator
console.log(x > y && x != y);
console.log(x < y || x > y);  //  lagical OR operator
console.log(!(x != y || x == y));  // logical NOT operator true<--->false
