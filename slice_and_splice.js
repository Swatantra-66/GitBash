//slicing of array

let obj = ["Name", "Identity", "Age", "Gender", "DOB"];
console.log(obj);

let result = obj.slice(1, 3); // it will slice value from index 1 to index 2 not upto 3
// let result = obj.slice(1);  //it will slice value from index 1 goes to the very end.
console.log(result);



//splicing of array

let names = ["Swatantra", "Akshat", "Pragya", "Shikhar", "Varsha", "Vertika"];

names.splice(1, 3, "Riya", "Siddhant");
console.log(names);

