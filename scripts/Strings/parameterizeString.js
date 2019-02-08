//A function the parameterizes a string

function parameterizeText(text) {
    if(text.length == 0) {
        throw new Error('The text must be given')
    }

    return text.trim().toLowerCase().replace(' ', '-');
}