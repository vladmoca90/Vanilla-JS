  //A function that calculates how many times you have a letter in a text
  function letterCount(text, letter, capitalLetter) {

    var count = 0;

    if (!capitalLetter) {
      text = text.toUpperCase();
      letter = letter.toUpperCase();
    }
    for (var i = 0, l = text.length; i < text.length; i += 1) {
      if (text[i] === letter) {
        count += 1;
      }
    }

    return count;
  }