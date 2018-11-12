//A function that checks if a string ends with a specific string

function specificStringEnd(sentence, end){

    if(sentence.length == 0) {
        throw new Error('Sentence cannot be empty');
    }
    if(end.length == 0) {
        throw new Error('End word cannot be empty');
    }

    var splitSentence = sentence.trim().split('');

    for(var i = 0; i < sentence.length; i++) {
        if(splitSentence[sentence.length - 1] !== end) {
            return false;
        }
    }

    return true;
}