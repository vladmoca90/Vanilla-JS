const language = {
    set current(name) {
        this.log.push(name);
    },
    log: []
}

language.current = 'English';
console.log(language.log); // ['English']

language.current = 'French';
console.log(language.log); // ['English', 'French']