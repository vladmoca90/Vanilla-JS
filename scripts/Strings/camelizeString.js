//A function that writes a string as camel case

function camelize(text) {
    if (text.length == 0) {
        throw new Error('The text cannot be empty');
    }

    var splitText = text.trim().split(' ');
    var camelizedList = [];

    for (var i = 0; i < splitText.length; i++) {
        camelizedList.push(splitText[i].charAt(0).toUpperCase() + splitText[i].substring(1));
    }

    return camelizedList.join('');
}