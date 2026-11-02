describe('strings project', function () {
    it('returns initials for names, including hyphenated names', function () {
        expect(nameInitials('Vlad Mocanu')).toBe('VM');
        expect(nameInitials('Jean-Claude Van Damme')).toBe('JCVD');
    });

    it('counts exact word matches', function () {
        expect(countWord('Alex', 'Alex Alex Sam')).toBe(2);
    });

    it('returns the length and value of the longest word', function () {
        expect(longestWordLength('A short sentence')).toBe(8);
        expect(longestWord('A short sentence')).toBe('sentence');
    });

    it('checks whether text includes another string', function () {
        expect(includeText('Vanilla JavaScript', 'Java')).toBe(true);
        expect(includeText('Vanilla JavaScript', 'Python')).toBe(false);
    });

    it('creates a sentence from a list of words', function () {
        expect(createdSentence(['Hello', 'world'])).toBe('Hello world.');
        expect(createdSentence(['Hello'])).toBe('Hello.');
    });

    it('counts vowels without regard to case', function () {
        expect(countVowels('Education')).toBe(5);
    });

    it('counts a letter case-insensitively by default and sensitively when requested', function () {
        expect(letterCount('Abracadabra', 'a')).toBe(5);
        expect(letterCount('Abracadabra', 'a', true)).toBe(4);
    });

    it('concatenates text the requested number of times', function () {
        expect(concatenateMultiple('ha', 3)).toBe('hahaha');
    });

    it('returns a frequency for each character', function () {
        expect(charFreq('abbc')).toEqual({ a: 1, b: 2, c: 1 });
    });

    it('capitalizes vowels', function () {
        expect(capitalizeVowels('hello world')).toBe('hEllO wOrld');
    });

    it('capitalizes the first letter of each word', function () {
        expect(capitalizeFirstLetter('hello world')).toBe('Hello World');
    });

    it('capitalizes consonants and leaves vowels unchanged', function () {
        expect(capitalizeConsonants('hello world')).toBe('HEllO WOrlD');
    });

    it('converts words to camel case', function () {
        expect(camelize('hello world')).toBe('HelloWorld');
    });

    it('abbreviates a two-word name', function () {
        expect(becomeAbbreviated('Alex Mocanu')).toBe('A.M.');
    });

    it('separates vowels and consonants', function () {
        expect(showVowelsAndConsonants('abec')).toEqual({
            vowels: ['a', 'e'],
            consonants: ['b', 'c']
        });
    });

    it('converts text to upper and lower case', function () {
        expect(upperCaseText('Hello World')).toBe('HELLO WORLD');
        expect(lowerCaseText('Hello World')).toBe('hello world');
    });

    it('truncates text to the requested number of characters', function () {
        expect(truncateString('Hello world', 5)).toBe('Hello');
    });

    it('trims whitespace from the beginning and end of text', function () {
        expect(trimText('  hello world  ')).toBe('hello world');
    });

    it('swaps the case of each letter', function () {
        expect(swapcaseText('Hello')).toBe('hELLO');
    });

    it('reverses text', function () {
        expect(reverseText('hello')).toBe('olleh');
    });

    it('repeats text and characters the requested number of times', function () {
        expect(repeatText('ha', 3)).toBe('hahaha');
        expect(repeatCharacter('ha', 3)).toBe('hahaha');
    });

    it('returns the first ten characters of a sentence', function () {
        expect(partOfSentence('Hello world!')).toBe('Hello worl');
    });

    it('parameterizes text', function () {
        expect(parameterizeText('Hello World')).toBe('hello-world');
    });

    it('checks whether text is a palindrome', function () {
        expect(checkPalindromeText('racecar')).toBe(true);
        expect(checkPalindromeText('hello')).toBe(false);
    });

    it('checks whether a sentence ends with the requested text', function () {
        expect(specificStringEnd('Hello world', 'world')).toBe(true);
        expect(specificStringEnd('Hello world', 'hello')).toBe(false);
    });

    it('converts a numeric string to a number', function () {
        expect(textToNumber('42')).toBe(42);
    });

    it('converts text into a whole-string, character, or word array', function () {
        expect(textToList1('hello world')).toEqual(['hello world']);
        expect(textToList2('hello')).toEqual(['h', 'e', 'l', 'l', 'o']);
        expect(textToList3('hello world')).toEqual(['hello', 'world']);
    });

    it('applies substring and substr to text', function () {
        expect(subText('JavaScript', 0, 4)).toBe('Java');
        expect(substrText('JavaScript', 4, 6)).toBe('Script');
    });

    it('keeps the requested number of characters', function () {
        expect(removeCharacters('JavaScript', 4)).toBe('Java');
    });
});
