//A function that changed the order of the elements in an list in random order

function shuffle(list) {
  return list.sort(() => Math.random() - 0.5);
}

shuffle([1, 2, 3, 4]);