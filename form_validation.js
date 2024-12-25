function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let errorMessages = document.getElementById("errorMessages");

    let errors = [];


    if (name === "") {
        errors.push("Name must be filled out.");
    }


    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errors.push("Invalid email format.");
    }

    let mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        errors.push("Mobile number must be 10 digits.");
    }


    if (errors.length > 0) {
        errorMessages.innerHTML = errors.join("<br>");
        return false;
    } else {
        alert("Form submitted successfully!");
        return true;
    }
}
