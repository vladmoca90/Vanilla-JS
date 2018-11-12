//An object that is named city and has the property name
//The function cities() analyzes the cases

var city = {
  name: [
    "New York City",
    "Los Angeles",
    "Atlanta"
  ],
    state: [
      "New York",
      "California",
      "Georgia",
    ],
}

function cities(city) {

  switch (city.name) {

    case "New York City":
      return console.log("The city is called New York City");
    case "Los Angeles":
      return console.log("This californian city is Los Angeles");
    case "Atlanta":
      return console.log("Atlanta is the capital of Georgia state");
  }
}