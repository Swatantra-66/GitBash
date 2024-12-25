let x = "123";
x = parseInt(x, 10); // x is now the number 123
console.log(typeof x); // Output: number
console.log(x); // Output: 123

let y = "45.67";
y = parseInt(y, 10); // y is now the number 45 (parseInt truncates decimals)
console.log(typeof y); // Output: number
console.log(y); // Output: 45


let z = "010";
z = parseInt(z, 10); // z is now the number 10 (correctly parsed as decimal)
console.log(typeof z); // Output: number
console.log(z); // Output: 10

let a = "010";
a = parseInt(a); // a is now the number 8 (incorrectly parsed as octal without radix)
console.log(typeof a); // Output: number
console.log(a); // Output: 8


let s = "3.14";
s = parseFloat(s);  // x is now the number 3.14
console.log(typeof s);
console.log(s);



