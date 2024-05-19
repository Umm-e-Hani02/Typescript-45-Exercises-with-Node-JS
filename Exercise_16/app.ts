// Creating a Guest List Array
let guestList = ["Hafsa", "Hani", "Zaid", "Abdullah"];

// Making a variable for those guest who cannot come
let dontcome = guestList[3];

// Print the name of guest who cannot come
console.log(dontcome, "can't come today");

// Add or Remove guest from Guest List Array
guestList.splice(3, 4, "Umair")

// Printing a news for bigger table
console.log("Good news!! We arrange a bigger table for dinner");

// Adding a new guest at starting index of array
guestList.unshift("Madiha");

// Adding a new guest at ending index of array
guestList.push("Ali");

// Making a variable for storing a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2)

// Adding a new guest at middle index of array
guestList.splice(middleIndex, 0, "Hussain");

// Printing updated list
console.log("Updated list for our guest");

// Send invitation to guest one by one with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to have dinner with me?`))
