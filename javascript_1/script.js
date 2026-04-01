let message = "Work in Progress";
console.log(message);
document.getElementById("output").innerText = message; // set text by ID

document.getElementsByClassName("textbold")[0].style.color = "darkgreen"; // change color by class

let imgTag = document.getElementsByTagName("img")[0]; // get first img tag
imgTag.setAttribute("alt", "This is a memewall"); // fixed: setAttribute needs two args

let newAttribute = document.createAttribute("src"); // fixed: was newAttribute
newAttribute.value = "memewall.jpg";
imgTag.setAttributeNode(newAttribute);

document.getElementById("footer").style.fontSize = "16px"; // style via DOM

const MAX_LEVEL = 10; // named constant
const PREMIUM_PASS_COST = 2500; // named constant

function canAccessLevel(isLoggedIn, level) { // reusable function with return
    if (isLoggedIn && level >= MAX_LEVEL) {
        return "Access granted to max level!";
    } else if (isLoggedIn && level >= 5) { // else if
        return "Access granted to level 5 or higher.";
    } else {
        return "Access denied.";
    }
}

let accessResult = canAccessLevel(true, 5);
console.log(accessResult);

let isLoggedIn = true;
let level = 5;

if (isLoggedIn && level >= 5) { // AND
    console.log("User can play level 5 or more");
} else {
    console.log("User cannot play level 5 or more");
}

let isPremiumUser = true;
let coins = 10000;

if (isPremiumUser || coins >= 10000) { // OR
    console.log("User can play all the premium levels");
} else {
    console.log("User is not allowed to play premium levels");
}

let isBanned = false; // fixed: was broken "const" with no name or value

if (!isBanned && isLoggedIn) { // NOT
    console.log("The user is logged in");
} else {
    console.log("The user is not logged in");
}

if (isPremiumUser || coins >= PREMIUM_PASS_COST) {
    coins = coins - PREMIUM_PASS_COST;
    console.log("Premium unlocked! Coins left: " + coins);
} else {
    console.log("Not enough coins to unlock premium.");
}

let levels = ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"]; // array

for (let i = 0; i < levels.length; i++) { // loop through array
    console.log("Available: " + levels[i]);
}

document.getElementById("homepage").onclick = function() { // onclick event
    alert("Navigating to homepage. Have fun learning!");
    window.location = "index.html";
};

window.onload = function() { // onload event
    console.log("Page fully loaded.");
    document.getElementById("output").innerText = "Welcome! Page has loaded.";
};

document.getElementById("homepage").onmouseover = function() { // onmouseover event
    this.style.backgroundColor = "lightblue";
    console.log("Hovering over homepage button.");
};

let countdownTimer = setTimeout(function() { // timer
    console.log("Session expiring soon!");
    document.getElementById("output").innerText = "Session expiring soon...";
}, 5000);

if (isLoggedIn) {
    clearTimeout(countdownTimer); // clear timer if user is active
    console.log("Timer cleared — user is still active.");
}