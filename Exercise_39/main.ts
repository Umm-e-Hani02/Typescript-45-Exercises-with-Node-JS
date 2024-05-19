// Creating a Function with parameters which return values in string
function city_country(city: string, country: string) : string {
    return `${city}, ${country}`
}

// Calling a function with returned value
console.log(city_country("Karachi", "Pakistan"));

console.log(city_country("Beijing", "China"));

console.log(city_country("New York", "America"));