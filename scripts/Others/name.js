const person = {
    _name: "",

    get name() {
        return this._name;
    },

    set name(value) {
        this._name = value.trim();
    }
};

person.name = "  Vlad Mocanu  ";

console.log(person.name);