//Please write some object oriented code in JavaScript The code should be made as reusable as possible. 
//It should tell me how many times letter 'e' appears in the following sentence ‘Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eanean sodales justo et Enim ornare, a congue lacus commodo.’, 
//how many number 1s are in the following number 17272838119191929838299111
//the result of 7 + 5

class TextUtilities {
    countLetters(text, letter, ignoreCase = true) {
        if (text == null) {
            throw new Error("Text cannot be null.");
        }

        if (letter == null || letter.length !== 1) {
            throw new Error("Please provide exactly one letter.");
        }

        if (ignoreCase) {
            text = text.toLowerCase();
            letter = letter.toLowerCase();
        }

        let count = 0;

        for (const character of text) {
            if (character === letter) {
                count++;
            }
        }

        return count;
    }
}

class MathUtilities {
    constructor(textUtilities = new TextUtilities()) {
        this.textUtilities = textUtilities;
    }

    add(a, b) {
        return a + b;
    }

    countDigit(number, digit) {
        if (number == null) {
            throw new Error("Number cannot be null.");
        }

        if (!Number.isInteger(digit) || digit < 0 || digit > 9) {
            throw new Error("Digit must be an integer between 0 and 9.");
        }

        return this.textUtilities.countLetters(
            number.toString(),
            digit.toString(),
            false
        );
    }
}

// ----------------------
// Testing
// ----------------------

const sentence =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eanean sodales justo et Enim ornare, a congue lacus commodo.";

const number = 17272838119191929838299111;

const textUtils = new TextUtilities();
const mathUtils = new MathUtilities(textUtils);

console.log("Count of 'e':",
    textUtils.countLetters(sentence, "e")
);

console.log("Count of digit 1:",
    mathUtils.countDigit(number, 1)
);

console.log("7 + 5 =",
    mathUtils.add(7, 5)
);

// Additional tests

console.log(textUtils.countLetters("eeee", "e"));       // 4
console.log(textUtils.countLetters("EEEE", "e"));       // 4
console.log(textUtils.countLetters("Hello", "l"));      // 2
console.log(mathUtils.countDigit(111111, 1));           // 6
console.log(mathUtils.countDigit(9876543210, 5));       // 1
console.log(mathUtils.add(-10, 15));                    // 5