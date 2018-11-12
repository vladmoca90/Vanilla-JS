//a function that truncates a string with a certain number of words

function truncateString(text, n) {

    if(text.length == 0) {
       throw new Error('The text cannot be empty'); 
    }
    if(n <= 0) {
        throw new Error('n must be greater or equal to 1'); 
    }

    var splitText = text.trim().split('');

    return splitText.splice(0, n).join('');
}