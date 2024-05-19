// Making a Function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love Typescript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on it"));
}
// Calling a Function with by-default values
make_shirt();
// Calling a Function with Medium size and default message
make_shirt("Medium");
// Calling a Function with small size and also different message
make_shirt("Small", "I Love Javascript");
