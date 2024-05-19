let guestList = ["Hafsa", "Hani", "Zaid", "Abdullah"];

let dontcome = guestList[3];

console.log(dontcome, "can't come today");

guestList.splice(3, 4, "Umair");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to have a dinner with me?`));