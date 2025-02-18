// Define a function to create a car object with optinal options...
function create_car(manufacturer, model, ...options){
    // Initialize a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model
    };

    // Add optional optins to the car object
    options.forEach(option => {
        let [key,value] = option.split(":");
        car [key.trim()] = value.trim();
    });

    return car;
}

// Call the function to create a car object
let my_car = create_car("Toyota", "Corolla", "color: Black", "Sunroof: True", "Year: 2024");

// Print the variable to insure all the information is stored correctly in car object
console.log(my_car);
