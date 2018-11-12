//A function that sort the elements of an array
function sortList(list) {

  var sortedList = [];

  var a = list[0];
  var b = list[1];
  var c = list[2];

  if (a <= b) {
    if (a <= c) {
      sortedList.push(a);

      if (b <= c) {
        sortedList.push(b);
        sortedList.push(c);

      } else {
        sortedList.push(c);
        sortedList.push(b);
      }
    } else {
      sortedList.push(c);
    }

    return sortedList;
  }

  if (b <= c) {
    if (b <= a) {
      sortedList.push(b);

      if (a <= c) {
        sortedList.push(a);
        sortedList.push(c);
      } else {
        sortedList.push(c);
        sortedList.push(a);
      }
    } else {
      sortedList.push(a);
    }

    return sortedList;
  }

  if (c <= a) {
    if (c <= b) {
      sortedList.push(c);
      if (b <= a) {
        sortedList.push(b);
        sortedList.push(a);

      } else {
        sortedList.push(b);
        sortedList.push(a);

      }
    } else {
      sortedList.push(b);
    }
  }

  return sortedList;
}