// Creating an  Array
var userNames = ["Hussain", "Shaheer", "Admin", "Maaz", "Ahsan"];
// Using Foreach Loop on Array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
