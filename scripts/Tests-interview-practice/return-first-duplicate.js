// Return first duplicate in an array

const numbers = [2, 1, 3, 5, 3, 2];

function firstDuplicate(numbers) {
    const seen = new Set();

    for (const number of numbers) {
        if (seen.has(number)) {
            return number;
        }

        seen.add(number);
    }

    return null;
}