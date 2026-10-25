// Find two numbers whose sum equals a target.

const numbers = [2, 7, 11, 15];
const target = 9;

function twoSum(numbers, target) {
    const seen = new Map();

    for (let i = 0; i < numbers.length; i++) {
        const difference = target - numbers[i];

        if (seen.has(difference)) {
            return [seen.get(difference), i];
        }

        seen.set(numbers[i], i);
    }

    return [];
}