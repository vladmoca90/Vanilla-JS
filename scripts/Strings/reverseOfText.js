//Given a text, return the reverse of the text

const reverseText = text => {
    if(text.length == 0) {
        throw new Error('Text must exist');
    }
    if(text.length == 1) {
        return text;
    }

    let reversed = "";

    for (i = text.length - 1; i >= 0; i--) {
        let c = text.charAt(i);
        reversed = reversed + c;
    }

    return reversed;
}

