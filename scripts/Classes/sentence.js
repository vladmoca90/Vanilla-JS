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
        return this.word;
    }
    set hello(helloWord) { //the setter can have only one parameter
        if(typeof helloWord == 'string') {
            this.word = helloWord;
        }
        else {
            throw new Error('The word can be only a text.');
        }
    }
}

const sentence = new Greeting('Hello world!');

console.log(sentence.hello);