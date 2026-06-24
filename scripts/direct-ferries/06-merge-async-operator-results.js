/*
Exercise:
Fetch sailings from multiple operators concurrently. If one request fails,
still return all results received successfully from the other operators.
*/

async function getAllSailings(operators, fetchSailings) {
  // map() calls fetchSailings for every operator immediately, producing an
  // array of promises. This runs requests concurrently rather than one-by-one.
  const requests = operators.map(operator => fetchSailings(operator));

  // Promise.allSettled waits for every promise and never rejects just because
  // one request failed. Each result has a status and either value or reason.
  const settledResults = await Promise.allSettled(requests);

  // flatMap both transforms and flattens one array level. Successful values are
  // sailing arrays; failed requests contribute an empty array.
  return settledResults.flatMap(result =>
    result.status === "fulfilled" ? result.value : []
  );
}

// This local mock makes the file runnable without making real network calls.
async function mockFetchSailings(operator) {
  if (operator === "Unavailable Ferries") {
    // Throwing inside an async function returns a rejected promise.
    throw new Error("Operator service is unavailable");
  }

  // Returning inside an async function wraps this value in a resolved promise.
  return [{ id: `${operator}-1`, operator }];
}

async function runExample() {
  const result = await getAllSailings(
    ["DFDS", "Unavailable Ferries", "P&O"],
    mockFetchSailings
  );

  // The failed operator is omitted while both successful results remain.
  console.assert(result.length === 2);
  console.assert(result.map(sailing => sailing.operator).join(",") === "DFDS,P&O");
  console.log("Merged operator results:", result);
}

// Catch any unexpected failure so it is visible instead of becoming an
// unhandled promise rejection.
runExample().catch(console.error);

