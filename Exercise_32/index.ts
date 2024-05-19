// Current Users Array
let current_users = ["Hafsa", "shaheer", "Ali", "Ahsan", "Hussain"]

// New Users Array
let new_users = ["Zaid", "Hani", "Shaheer", "Zain", "Hafsa"]

// Loop through new_users to check foe usernames availability\
new_users.forEach(new_one_user => {

    // Making a Condition for usernames already exists and save in my_condition varaiable
    let my_condition = current_users.some(current_user => current_user.toLowerCase()=== new_one_user.toLocaleLowerCase())
    
    // Print different messages using If-Else statements
    if (my_condition){
        console.log(`Sorry ${new_one_user} already exists!`);
    } else {
        console.log(`This username ${new_one_user} is available`);
    }
})