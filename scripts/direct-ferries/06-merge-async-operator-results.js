// Exercise 06: Merge async operator results
// Goal:
// Fetch sailings from multiple operators and return all successful results.
// If one operator fails, keep the successful ones instead of crashing everything.

function validateOperator(operator) {
  if (typeof operator !== "string" || operator.trim() === "") {
    throw new TypeError("Each operator must be a non-empty string.");
  }
}

function validateSailing(sailing) {
  if (sailing === null || typeof sailing !== "object" || Array.isArray(sailing)) {
    throw new TypeError("Fetched sailings must be objects.");
  }
}

async function getAllSailings(operators, fetchSailings) {
  if (!Array.isArray(operators)) {
    throw new TypeError("operators must be an array.");
  }

  operators.forEach(validateOperator);

  if (typeof fetchSailings !== "function") {
    throw new TypeError("fetchSailings must be a function.");
  }

  const requests = operators.map((operator) => fetchSailings(operator));
  const settledResults = await Promise.allSettled(requests);

  return settledResults.flatMap((result) => {
    if (result.status === "rejected") {
      // In a real app, this is where you might log the failed operator request.
      return [];
    }

    if (!Array.isArray(result.value)) {
      throw new TypeError("fetchSailings must resolve to an array.");
    }

    result.value.forEach(validateSailing);
    return result.value;
  });
}

async function mockFetchSailings(operator) {
  if (operator === "Broken Operator") {
    throw new Error("Operator API is down.");
  }

  return [{ operator, route: "Dover-Calais" }];
}

(async () => {
  const result = await getAllSailings(["DFDS", "Broken Operator", "P&O"], mockFetchSailings);
  console.log(result);
  console.assert(result.length === 2, "Should keep successful operator results.");
})();

