let message = "Work in Progress";
console.log(message);
document.getElementById("output").innerText = message;
// get element by ID and change text

document.getElementsByClassName("textbold") [0].style.color = "darkgreen";
// get element by class and change color

//get element by tag and set attribute
let imgTage = document.getElementsByTagName("img") [0];
imgTage.setAttribute("This is a memewall");

// create an attribute node
var newAttribute = document.newAttribute("src");
imgTag.setAttributeNode(newAttribute); 
imgTage.setAttribute("alt", "This is a memewall");

//add css styling via DOM
document.getElementById("footer").style.fontSize = "16px";

// creation of an onclick event
document.getElementById("homepage").onclick = function() {
    alert("Navigating to homepage. Have fun learning!");
    window.location = "index.html";
};

let isloggedin = true;
let level = 5
if(isloggedin && level>=5) { 
    console.log("User can play level 5 or more");
}
else{
    console.log("User cannot play level 5 or more");
} 

let ispremiumuser = true;
let coins = 10000;

if(ispremiumuser || coins>=10000){
    console.log("User can play all the premium levels");
} 
else{
    console.log("User is not allowed to play premium levels");
}

let isbanned = true;
if(!isbanned && isloggedin){
    console.log("The user is logged in");
}
else{
    console.log("The user is not logged in")
} 
let premiumPassCost = 2500;
if(ispremiumuser || coins >= premiumPassCost) {
    coins = coins - premiumPassCost;
    console.log("Premium unlocked! Coins left: " + coins);
} else 
    console.log("Not enough coins to unlock premium."); 