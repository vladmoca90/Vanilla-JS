// A function that writes a string as camel case

const camelize = text => {
    if(text.length == 0) {
        throw new Error('The text cannot be empty');
    }

    let splitText = text.trim().split(' ');
    let camelizedList = [];

    for (let i = 0; i < splitText.length; i++) {
        camelizedList.push(splitText[i].charAt(0).toUpperCase() + splitText[i].substring(1));
    }

    return camelizedList.join('');
}