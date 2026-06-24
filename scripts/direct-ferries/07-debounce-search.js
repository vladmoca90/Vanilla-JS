/*
Exercise:
Create a debounce helper. Rapid calls should continually restart a timer so
only the final search runs after the user stops typing for the chosen delay.
*/

function debounce(callback, delay) {
  // This variable lives in the returned function's closure, so it survives
  // after debounce itself has finished executing.
  let timeoutId;

  function debounced(...args) {
    // Cancel the previous scheduled callback, if one exists.
    clearTimeout(timeoutId);

    // Schedule a new callback and remember its timer ID for the next call.
    // apply preserves the caller's `this` value and forwards every argument.
    timeoutId = setTimeout(() => callback.apply(this, args), delay);
  }

  // Attaching a method gives callers a way to cancel pending work explicitly.
  debounced.cancel = () => clearTimeout(timeoutId);

  return debounced;
}

// These variables record how often the example callback executes and which
// search term it receives.
let calls = 0;
let lastQuery = "";

const search = debounce(query => {
  calls += 1;
  lastQuery = query;
}, 20);

// Because these calls happen together, each one cancels the previous timer.
search("do");
search("dov");
search("dover");

// Wait longer than the debounce delay before checking the result.
setTimeout(() => {
  console.assert(calls === 1);
  console.assert(lastQuery === "dover");
  console.log("Debounced search query:", lastQuery);
}, 40);

