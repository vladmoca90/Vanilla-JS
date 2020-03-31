//A function has a string and receives and array, with all the words of the string
function createList(text) {
    if (text.length == 0) {
        return [];
    }
    if (text.search(" ") == -1) {
        return [text];
    }

    var result = text.split(" ");
    var lastWord = result[result.length - 1];

    result[result.length - 1] = lastWord.slice(0, lastWord.length - 1);

    return result;
}