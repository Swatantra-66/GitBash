let age = prompt("Enter your age");

if (age < 0) {
    alert("Invalid age");
}
else if (age > 0 && age < 10) {
    alert("You are a kid");
}
else if (age >= 13 && age <= 19) {
    alert("You are a teen");
}
else {
    alert("You are adult");
}

