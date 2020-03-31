//A function that returns the longest word in a text

function longestWordLength(text) {
    if (text.length == 0) {
        throw new Error('The text cannot be empty');
    }

    var splitText = text.trim().split(' ');
    var longest = splitText[0].length;

    for (var i = 0; i < splitText.length; i++) {
        longest = Math.max(longest, splitText[i].length);
    }

    return longest;
}