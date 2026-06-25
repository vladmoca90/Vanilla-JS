// Exercise 08: Flatten nested route data
// Goal:
// Convert nested operator -> route -> sailing data into one flat array.

function validateOperator(operator) {
  if (operator === null || typeof operator !== "object" || Array.isArray(operator)) {
    throw new TypeError("Each operator must be an object.");
  }

  if (typeof operator.name !== "string" || operator.name.trim() === "") {
    throw new TypeError("Each operator must have a non-empty string name.");
  }

  if (!Array.isArray(operator.routes)) {
    throw new TypeError("Each operator must have a routes array.");
  }
}

function validateRoute(route) {
  if (route === null || typeof route !== "object" || Array.isArray(route)) {
    throw new TypeError("Each route must be an object.");
  }

  if (typeof route.name !== "string" || route.name.trim() === "") {
    throw new TypeError("Each route must have a non-empty string name.");
  }

  if (!Array.isArray(route.sailings)) {
    throw new TypeError("Each route must have a sailings array.");
  }
}

function validateSailing(sailing) {
  if (sailing === null || typeof sailing !== "object" || Array.isArray(sailing)) {
    throw new TypeError("Each sailing must be an object.");
  }
}

function flattenSailings(operators) {
  if (!Array.isArray(operators)) {
    throw new TypeError("operators must be an array.");
  }

  operators.forEach(validateOperator);

  return operators.flatMap((operator) => {
    return operator.routes.flatMap((route) => {
      validateRoute(route);
      route.sailings.forEach(validateSailing);

      return route.sailings.map((sailing) => ({
        ...sailing,
        operator: operator.name,
        route: route.name,
      }));
    });
  });
}

const operators = [
  {
    name: "DFDS",
    routes: [
      {
        name: "Dover-Calais",
        sailings: [{ time: "09:00" }, { time: "12:00" }],
      },
    ],
  },
  {
    name: "P&O",
    routes: [
      {
        name: "Dover-Calais",
        sailings: [{ time: "10:00" }],
      },
    ],
  },
];

const flat = flattenSailings(operators);
console.log(flat);
console.assert(flat.length === 3, "Should flatten three sailings.");
console.assert(flat[0].operator === "DFDS", "Should add operator name to each sailing.");

