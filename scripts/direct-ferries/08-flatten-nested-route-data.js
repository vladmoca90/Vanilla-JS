/*
Exercise:
Convert nested operator -> route -> sailing data into one flat sailing array.
Copy the parent operator and route names onto every resulting sailing.
*/

function flattenSailings(operators) {
  // The outer flatMap processes every operator and removes the array level
  // produced for each operator.
  return operators.flatMap(operator =>
    // The inner flatMap does the same for every route belonging to the operator.
    operator.routes.flatMap(route =>
      // map creates one enriched object for every sailing on this route.
      route.sailings.map(sailing => ({
        // Object spread copies the original sailing properties without changing
        // the original object.
        ...sailing,
        operator: operator.name,
        route: route.name
      }))
    )
  );
}

const operators = [
  {
    name: "DFDS",
    routes: [
      {
        name: "Dover-Calais",
        sailings: [
          { id: "S1", price: 50 },
          { id: "S2", price: 65 }
        ]
      }
    ]
  },
  {
    name: "P&O",
    routes: [
      {
        name: "Hull-Rotterdam",
        sailings: [{ id: "S3", price: 90 }]
      }
    ]
  }
];

const result = flattenSailings(operators);

// Three nested sailings should become three top-level array elements.
console.assert(result.length === 3);
console.assert(result[0].operator === "DFDS");
console.assert(result[2].route === "Hull-Rotterdam");
console.log("Flattened sailings:", result);

