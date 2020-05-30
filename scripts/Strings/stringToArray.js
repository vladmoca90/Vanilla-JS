//A const that transforms a text in an array

//will make the entire text as an array
const textToList = text => {
    if(text.length == 0) {
        throw new Error('The text cannot be empty');
    }

    return text.trim().split();
}


//will make each text character as an array element
const textToList = text => {
    if(text.length == 0) {
        throw new Error('The text cannot be empty');
    }

    return text.trim().split('');
}


//will make each text word as an array element
const textToList = text =>{
    if(text.length == 0) {
        throw new Error('The text cannot be empty');
    }

    return text.trim().split(' '); //the '' needs a space between
}