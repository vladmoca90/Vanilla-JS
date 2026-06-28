const getGrocery = (groceryItem) => {
    // Validate the input
    if (!groceryItem || groceryItem.trim().length === 0) {
        throw new Error("A grocery item is required.");
    }

    // Convert to lowercase so the function accepts
    // "Papaya", "PAPAYA", "papaya", etc.
    switch (groceryItem.toLowerCase()) {
        case "tomato":
            return "Tomatoes are £0.79";

        case "lime":
            return "Limes are £1.49";

        case "apple":
            return "Apples are £0.99";

        case "papaya":
            return "Papayas are £1.29";

        default:
            return `Sorry, we ran out of ${groceryItem}.`;
    }
};

// Print the returned message
console.log(getGrocery("papaya"));

/*
Theory

- The switch statement is an alternative to using multiple if...else if statements
  when you are comparing the same variable against different values.

- The switch keyword starts the statement and is followed by the expression
  inside parentheses. In this example, the expression is groceryItem.toLowerCase().

- Each case compares the expression with a specific value.
  If a match is found, the code inside that case executes.

- The break keyword stops execution of the switch statement.
  Without break, JavaScript continues executing the next cases
  (this is known as "fall-through").

- The default case runs if none of the cases match.
  It is similar to the final else in an if...else statement.

Syntax:

switch (expression) {
    case value1:
        // code
        break;

    case value2:
        // code
        break;

    default:
        // code
}

Notes

- Both case and default are followed by a colon (:).
- break is optional, but in most situations you should include it.
- In this example we return from each case instead of using break.
  Because return immediately exits the function, break is no longer needed.
*/