//Given a text, return the reverse of the text

function reverseText(text) {

    var reversed = "";

    for (i = text.length - 1; i >= 0; i--) {
        var c = text.charAt(i);
        reversed = reversed + c;
    }

    return reversed;
}

