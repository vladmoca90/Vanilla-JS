// A function that trims texts

const trimText = text => {
    if(text.length == 0) {
        throw new Error('the text must be given');
    }

    return text.trim().replace(/\s/g, '');
}