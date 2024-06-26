// A function that capitalizes every consonant in text

const capitalizeConsonants = text => {
    if(text.length == 0) {
        throw new error('The text must be given');
    }

    let capConst = '';

    for(let i = 0; i < text.length; i++) {
        if(text.charAt(i) !== 'a' || text.charAt(i) !== 'e' || text.charAt(i) !== 'i' || text.charAt(i) !== 'o' || text.charAt(i) !== 'u') {
            capConst += text.charAt(i).toUpperCase();
        }
        else {
            capConst += text.charAt(i);
        }
    }

    return capConst;
}