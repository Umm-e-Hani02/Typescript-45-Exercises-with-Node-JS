// Define the function to show magicians name
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names
var magicians_names = ["Harry Potter", "Dynamo", "Teller"];
// Making a copy of original arrat through .slice() function
var copy_magicians_names = magicians_names.slice();
// Modify the copied array  to include "The Great" with their names
var copy_great_magicians = make_great(copy_magicians_names);
// Show both arrays original and copied
// ..........Original..........
console.log("\n\tOriginal  Array\n");
show_magicians(magicians_names);
// ..........Copied..........
console.log("\n\tCopied Array\n");
show_magicians(copy_great_magicians);
