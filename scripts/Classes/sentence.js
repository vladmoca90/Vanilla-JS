class Sentence {
    constructor(word) {
        this.word = word;
    }
}

class Greeting extends Sentence {
    get wordType() {
        return `The word is ${this.word}`;
    }
}

const greeting = new Greeting("Hello world!");

console.log(greeting.wordType);