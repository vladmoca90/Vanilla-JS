//A function the parameterizes a string

function parameterizeText(text) {
    if(text.length == 0) {
        throw new Error('The text cannot be empty')
    }

    return text.trim().toLowerCase().replace(' ', '-');
}