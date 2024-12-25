//show user a loggedoOut button if he/she is authenticated
// otherwise show a login/signup button to user.


let authenticated = true;

let loggedChecking = (authenticated) ? "LoggedOut Button" : "LoggedIn button";

console.log(loggedChecking);

if (!authenticated) {
    console.log("Logged Out button");
}
else {
    console.log("Logged In button");

}
