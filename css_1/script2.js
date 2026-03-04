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