//A function that returns the longest word in a text

const longestWordLength = text => {
    if(text.length == 0) {
        throw new Error('The text cannot be empty');
    }

    let splitText = text.trim().split(' ');
    let longest = splitText[0].length;

    for (let i = 0; i < splitText.length; i++) {
        longest = Math.max(longest, splitText[i].length);
    }

    return longest;
}