/*
Exercise:
Turn a flat sailing array into an object whose keys are operator names and
whose values are arrays containing that operator's sailings.
*/

// This generic helper can group any kind of item. getKey is a callback that
// tells the function which property or calculated value should be the key.
function groupBy(items, getKey) {
  return items.reduce((groups, item) => {
    const key = getKey(item);

    // Nullish assignment creates the array only if this key has no value yet.
    groups[key] ??= [];

    // Add the current item to the correct group.
    groups[key].push(item);

    // reduce() uses this returned object as the accumulator for the next item.
    return groups;
  }, {});
}

function groupByOperator(sailings) {
  // The arrow function extracts the operator name used as the grouping key.
  return groupBy(sailings, sailing => sailing.operator);
}

const sailings = [
  { id: 1, operator: "DFDS" },
  { id: 2, operator: "P&O" },
  { id: 3, operator: "DFDS" }
];

const result = groupByOperator(sailings);

// Bracket notation is needed for a property name containing "&".
console.assert(result.DFDS.length === 2);
console.assert(result["P&O"].length === 1);
console.log("Grouped sailings:", result);

