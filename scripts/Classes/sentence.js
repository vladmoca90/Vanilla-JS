class Sentence {
    constructor(word) {
        this.word = word;
    }
}

class Greeting extends Sentence {
    constructor(word) {
        super(word);
    }

    get wordType() {
        return 'The word is ' + this.word;
    }
    set wordType(newWord) { //the setter can have only one parameter
        if(typeof newWord == 'string') {
            this.word = newWord;
        }
        else {
            throw new Error('The word can be only a text.');
        }
    }
}

const greeting = new Greeting('Hello world!');

console.log(text.wordType);