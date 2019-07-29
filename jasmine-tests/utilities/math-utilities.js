//A function that changed the order of the elements in an list in random order

function randomizeElem(list) {
  if(list.length == 0) {
    throw new Error('The list cannot be empty');
  }
   if(list.length == 1) {
    return list;
  }

  return list.sort(() => Math.random() - 0.5);
}