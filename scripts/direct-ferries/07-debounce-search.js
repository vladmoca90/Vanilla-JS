// Exercise: Prevent a search callback from running on every keystroke.

function debounce(callback, delay) {
  let timeoutId;

  function debounced(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, args), delay);
  }

  debounced.cancel = () => clearTimeout(timeoutId);
  return debounced;
}

let calls = 0;
let lastQuery = "";

const search = debounce(query => {
  calls += 1;
  lastQuery = query;
}, 20);

search("do");
search("dov");
search("dover");

setTimeout(() => {
  console.assert(calls === 1);
  console.assert(lastQuery === "dover");
  console.log("Debounced search query:", lastQuery);
}, 40);

