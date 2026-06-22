// Exercise: Fetch operators concurrently and return partial results when one fails.

async function getAllSailings(operators, fetchSailings) {
  const settledResults = await Promise.allSettled(
    operators.map(operator => fetchSailings(operator))
  );

  return settledResults.flatMap(result =>
    result.status === "fulfilled" ? result.value : []
  );
}

async function mockFetchSailings(operator) {
  if (operator === "Unavailable Ferries") {
    throw new Error("Operator service is unavailable");
  }

  return [{ id: `${operator}-1`, operator }];
}

async function runExample() {
  const result = await getAllSailings(
    ["DFDS", "Unavailable Ferries", "P&O"],
    mockFetchSailings
  );

  console.assert(result.length === 2);
  console.assert(result.map(sailing => sailing.operator).join(",") === "DFDS,P&O");
  console.log("Merged operator results:", result);
}

runExample().catch(console.error);

