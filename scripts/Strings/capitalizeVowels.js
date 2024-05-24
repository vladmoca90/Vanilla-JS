// A function that capitalizes every vowels in a text

const capitalizeVowels = text => {
    if(text.length == 0) {
        throw new error('The text must be given');
    }

    let capVowel = '';

    for(let i = 0; i < text.length; i++) {
        if(text.charAt(i) == 'a' || text.charAt(i) == 'e' || text.charAt(i) == 'i' || text.charAt(i) == 'o' || text.charAt(i) == 'u') {
            capVowel += text.charAt(i).toUpperCase();
        } else {
            capVowel += text.charAt(i);
        }
    }

    return capVowel;
}