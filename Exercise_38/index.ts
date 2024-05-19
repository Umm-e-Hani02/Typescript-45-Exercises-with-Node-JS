// Describing a Function
function describe_city (city: string, country: string = "Pakistan"){
    console.log(`${city} is in ${country}`);
}

// Calling a function
describe_city("Karachi");

describe_city("Islamabad");

describe_city("New York", "America");