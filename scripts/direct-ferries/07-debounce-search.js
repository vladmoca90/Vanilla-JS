// Exercise 07: Debounce search
// Goal:
// Create a function that delays running a callback until the user stops typing.
// This is common for search boxes so we do not call the server after every keypress.

function debounce(callback, delay) {
  if (typeof callback !== "function") {
    throw new TypeError("callback must be a function.");
  }

  if (!Number.isInteger(delay) || delay < 0) {
    throw new TypeError("delay must be a non-negative integer in milliseconds.");
  }

  let timerId = null;

  function debounced(...args) {
    // If the user calls the function again before the delay finishes,
    // cancel the old timer and start a new one.
    if (timerId !== null) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      callback(...args);
      timerId = null;
    }, delay);
  }

  debounced.cancel = function cancel() {
    if (timerId !== null) {
      clearTimeout(timerId);
      timerId = null;
    }
  };

  return debounced;
}

let searchCount = 0;
let lastSearch = "";

const search = debounce((term) => {
  searchCount += 1;
  lastSearch = term;
}, 20);

search("do");
search("dov");
search("dover");

setTimeout(() => {
  console.log({ searchCount, lastSearch });
  console.assert(searchCount === 1, "Search should run only once.");
  console.assert(lastSearch === "dover", "Search should use the latest value.");
}, 40);

