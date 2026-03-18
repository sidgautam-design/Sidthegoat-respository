const loginAttempts = 5;
// this is a const variable that is named login attemps which is assigned to three.
let attempts = 3;
// this is a let variable called attempts which is assigned to 3.

if (attempts <= loginAttempts) {
    console.log("You can successfuly log in.")
} else if (attempts === loginAttempts) {
    console.log("This is your last attempt.")
} else {
    console.log("YOU CAN'T LOG IN ANYMORE")
}
// this is an if-else statements for login attempts. 

setTimeOut(function () {
    alert("This website is focused on cybersecurity.");
}, 2000);
