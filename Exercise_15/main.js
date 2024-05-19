var guestList = ["Hafsa", "Hani", "Zaid", "Abdullah"];
var dontcome = guestList[3];
console.log(dontcome, "can't come today");
guestList.splice(3, 4, "Umair");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to have a dinner with me?")); });
