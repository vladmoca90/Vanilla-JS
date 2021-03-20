//An object that is named city and has the property name
//The function cities() analyzes the cases

const city = {
  name: [
    "New York City",
    "Los Angeles",
    "Atlanta",
  ],
}

const cities = city => {
  switch (city.name) {
    case "New York City":
      console.log("The city is called New York City.");
      break;
    case "Los Angeles":
      console.log("This californian city is Los Angeles.");
      break;
    case "Atlanta":
      console.log("Atlanta is the capital of Georgia state.");
      break;
    default:
      throw new Error('City does not exist');
  }
}