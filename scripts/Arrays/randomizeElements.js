// A function that changed the order of the elements in an list in random order

const randomizeElem = list => {
  if(list.length == 0) {
    throw new Error('The list cannot be empty');
  }
  if(list.length == 1) {
    return list[0];
  }

  return list.sort(() => Math.random() - 0.5);
}

randomizeElem([1, 2, 3, 4]);