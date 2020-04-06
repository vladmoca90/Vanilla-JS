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
}

const greeting = new Greeting('Hello world!');

console.log(text.wordType);