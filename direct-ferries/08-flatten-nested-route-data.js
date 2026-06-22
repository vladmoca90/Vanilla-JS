// Exercise: Flatten operators, routes and sailings into one result list.

function flattenSailings(operators) {
  return operators.flatMap(operator =>
    operator.routes.flatMap(route =>
      route.sailings.map(sailing => ({
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
console.assert(result.length === 3);
console.assert(result[0].operator === "DFDS");
console.assert(result[2].route === "Hull-Rotterdam");
console.log("Flattened sailings:", result);

