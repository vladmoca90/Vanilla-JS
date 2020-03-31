//A function that returns true if a certain string is found in another string

function includeText(text, includer) {
    if (text.length == 0 || includer.length == 0) {
        throw new Error("None of the texts can be empty");
    }

    return text.includes(includer);
}