const person = {
    get function() {
        return this.name;
    }
}

person.name = 'Vlad Mocanu';
console.log(person.name);