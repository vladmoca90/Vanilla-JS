// Exercise 02: Group sailings by operator
// Goal:
// Convert an array of sailings into an object where each key is an operator name.

function validateArray(items, name) {
  if (!Array.isArray(items)) {
    throw new TypeError(`${name} must be an array.`);
  }
}

function validateGroupKey(key) {
  // Object keys should be strings, numbers, or symbols.
  // For interview exercises, strings are usually the safest answer.
  if (typeof key !== "string" || key.trim() === "") {
    throw new TypeError("Group key must be a non-empty string.");
  }
}

function groupBy(items, getKey) {
  validateArray(items, "items");

  if (typeof getKey !== "function") {
    throw new TypeError("getKey must be a function.");
  }

  return items.reduce((groups, item) => {
    const key = getKey(item);
    validateGroupKey(key);

    // Create the array for this key only when it is first needed.
    groups[key] ??= [];
    groups[key].push(item);
    return groups;
  }, {});
}

function validateSailing(sailing) {
  if (sailing === null || typeof sailing !== "object" || Array.isArray(sailing)) {
    throw new TypeError("Each sailing must be an object.");
  }

  if (typeof sailing.operator !== "string" || sailing.operator.trim() === "") {
    throw new TypeError("Each sailing must have a non-empty string operator.");
  }
}

function groupByOperator(sailings) {
  validateArray(sailings, "sailings");
  sailings.forEach(validateSailing);
  return groupBy(sailings, (sailing) => sailing.operator);
}

const sailings = [
  { operator: "DFDS", route: "Dover-Calais" },
  { operator: "Brittany Ferries", route: "Portsmouth-Caen" },
  { operator: "DFDS", route: "Dover-Dunkirk" },
];

const grouped = groupByOperator(sailings);
console.log(grouped);
console.assert(grouped.DFDS.length === 2, "DFDS should have two sailings.");
console.assert(grouped["Brittany Ferries"].length === 1, "Brittany Ferries should have one sailing.");

