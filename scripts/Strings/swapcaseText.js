//A function that makes every uppercase letter of a text as lowercase and every lowercase as uppercase

function swapcaseText(text) {
    if(text.length == 0) {
        throw new Error('The text must be given')
    }

    var res = '';

    for(var i = 0; text.length; i++) {
        if(text.charAt(i) == text.charAt(i).toLowerCase()) {
            res += text.charAt(i).toUpperCase();
        }
        if(text.charAt(i) == text.charAt(i).toUpperCase()) {
            res += text.charAt(i).toLowerCase();
        }
    }

    return res;
}