//fill
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(nums);

console.log(nums.fill("S"));
console.log(nums.fill("w", 3));
console.log(nums.fill("L", 3, 6));

//filter
let digits = [21, 34, 56, 78, 17, 44, 62];

let result = digits.filter((dig) => (dig != 44));
console.log(result);



