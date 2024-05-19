// Define a function to print each magician name from an array
function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Define an array containing magicians names
var magician_names = ["Harry Potter", "Dynamo", "Teller"];
// Call the function to print each magician name
show_magician(magician_names);
