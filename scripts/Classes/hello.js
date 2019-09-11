class Greeting {
  get hello() {
    return 'world';
  }
}

const obj = new Example();
console.log(obj.hello);
// "world"
console.log(Object.getOwnPropertyDescriptor(obj, 'hello'));
// undefined
console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(obj), 'hello'));
// { configurable: true, enumerable: false, get: function get hello() { return 'world'; }, set: undefin