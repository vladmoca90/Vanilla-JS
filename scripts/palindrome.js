// A function that checks if a text is a palindrome

function checkPalindrome(text) {
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