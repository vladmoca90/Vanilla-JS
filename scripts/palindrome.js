// A function that checks if a text is a palindrome.

// https://www.linkedin.com/pulse/javascript-most-commonly-asked-data-structure-questions-sanjay-kumar/ (example)

const checkPalindromeText = (text) => {
    if (text.length === 0) {
        throw new Error("The text must be provided");
    }
    if (text.length === 1) {
        return text;
    }

    let palindrome = text.split("").reverse().join("");

    if (text === palindrome) {
        return true;
    }

    return false;
}

// checkPalindromeText("t"); => return "t";
// checkPalindromeText("dad"); => return true;
// checkPalindromeText("text"); => return false;

// it will be a similar example for arrays, numbers or texts.