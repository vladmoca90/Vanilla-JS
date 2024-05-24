// A function receives a list of words and return a string with all the words, 
//but are separated through a space, and you have "." at the end

const createdSentence = sentence => {
    if(sentence.length == 0) {
        throw new Error("The sentence is empty");
    }
    if(sentence.length == 1) {
        return sentence[0] + ".";
    }

    let combine = "";

    for (let i = 0; i < sentence.length; i++) {
        if(i < sentence.length - 1) {
            combine += sentence[i] + " ";
        }
        else {
            combine += sentence[i];
        }
    }

    return combine + ".";
}
