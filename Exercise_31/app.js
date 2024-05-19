// Creating an array with 5 usernames
var userNames = ["Hussain", "Shaheer", "Admin", "Maaz", "Ahsan"];
// Remove all values from our array Now our array is empty
userNames = [];
// If statement for checking length of our array is empty 
if (userNames.length === 0) {
    console.log("Your Array is empty. We need to find some users!");
}
else {
    // Using Foreach Loop on Array
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
