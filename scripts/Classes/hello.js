class Greeting {
  get hello() {
    return 'world';
  }
}

const obj = new Example();
console.log(obj.hello);
// "world"
console.log(Object.getOwnPropertyDescriptor(obj, 'Hello'));
// undefined
console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(obj), 'Hello'));
// { configurable: true, enumerable: false, get: function get hello() { return 'world'; }, set: undefin