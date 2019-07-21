//A function that changed the order of the elements in an list in random order

function randomizeElem(list) {
  return list.sort(() => Math.random() - 0.5);
}

randomizeElem([1, 2, 3, 4]);