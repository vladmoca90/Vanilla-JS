class Sentence {
    constructor(word) {
        this.word = word;
    }
}

class Greeting extends Sentence {
    constructor(word) {
        super(word);
    }

    get hello() {
        return word;
    }
    set sayHello(helloWord) {
        if(typeof helloWord == 'string') {
            this.word = helloWord;
        }
        else {
            throw new Error('The word can be only a text.');
        }
    }
}

const sentence = new Greeting('Hello world!');

console.log(sentence.word);