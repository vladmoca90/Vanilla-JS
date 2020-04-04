class Words {
    constructor(word) {
        super(word);
    }
}

class Greeting extends Words {

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