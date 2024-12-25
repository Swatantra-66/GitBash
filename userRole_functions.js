//getting user role using functions 

let getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin and have all access`
            break;  // this is not necessary here cause we used return earlier

        case "Subadmin":
            return `${name}is Subadmin and have access to create and delete courses`
        //break;

        case "test_prep":
            return `${name} is testprep and have access to create and delete test `
            break;

        case "user":
            return `${name} is user to consume content`
            break;

        default:
            return `${name} is trial user`
            break;
    }

}

console.log(getUserRole("Swtantra", "admin"));

let getrole = getUserRole("Anonymous", "test_prep");
console.log(getrole);

