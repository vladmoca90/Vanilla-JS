// A function that filters a list according to a certain condition.
const names = [
  'Ana',
  'Vlad',
  'Alex',
  'James',
  'Thomas',
  'Fiona',
  'Anastasia',
  'Zachary',
  'Ian'
];

const filterNames = (names, letter) => {
  return names.filter(name => name.startsWith(letter));
};

console.log(filterNames(names, 'A'));
// Output: ['Ana', 'Alex', 'Anastasia']

console.log(filterNames(names, 'J'));
// Output: ['James']

console.log(filterNames(names, 'T'));
// Output: ['Thomas']