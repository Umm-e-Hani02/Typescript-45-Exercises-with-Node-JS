// Making a Function
function make_shirt (size: string = "Large", printMessage: string = "I Love Typescript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on it.`);
}

// Calling a Function with by-default values
make_shirt();

// Calling a Function with Medium size and default message
make_shirt("Medium");

// Calling a Function with small size and also different message
make_shirt("Small", "I Love Javascript")