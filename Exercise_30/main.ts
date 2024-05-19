// Creating an  Array
let userNames = ["Hussain", "Shaheer", "Admin", "Maaz", "Ahsan"];

// Using Foreach Loop on Array
userNames.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
    } else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`);
    }
})