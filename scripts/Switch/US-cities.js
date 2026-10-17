// An object representing a city.
// The 'name' property contains the city's name.

const city = {
    name: "New York City",
};

// The function analyzes the city name
// and returns a message based on its value.

const getCity = (city) => {
    // Validate the object
    if (!city || !city.name || city.name.trim().length === 0) {
        throw new Error("A city name is required.");
    }

    switch (city.name) {
        case "New York City":
            return "The city is called New York City.";

        case "Los Angeles":
            return "This Californian city is Los Angeles.";

        case "Atlanta":
            return "Atlanta is the capital of Georgia.";

        default:
            return `Sorry, information about ${city.name} is not available.`;
    }
};

// Display the result
console.log(getCity(city));

/*
Theory

- switch compares one expression against multiple values.
- In this example, the expression is city.name.
- Each case checks whether city.name matches a specific city.
- If a match is found, that case executes.
- return immediately exits the function, so break is not needed.
- default executes when none of the cases match.

Syntax

switch (expression) {
    case value1:
        return "...";

    case value2:
        return "...";

    default:
        return "...";
}