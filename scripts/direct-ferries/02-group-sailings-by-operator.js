// Exercise: Group a flat list of sailings by operator.

function groupBy(items, getKey) {
  return items.reduce((groups, item) => {
    const key = getKey(item);
    groups[key] ??= [];
    groups[key].push(item);
    return groups;
  }, {});
}

function groupByOperator(sailings) {
  return groupBy(sailings, sailing => sailing.operator);
}

const sailings = [
  { id: 1, operator: "DFDS" },
  { id: 2, operator: "P&O" },
  { id: 3, operator: "DFDS" }
];

const result = groupByOperator(sailings);
console.assert(result.DFDS.length === 2);
console.assert(result["P&O"].length === 1);
console.log("Grouped sailings:", result);

