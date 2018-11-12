//Write a function charFreq() that takes a string and builds a frequency listing of the characters 
//contained in it. Represent the frequency listing as a Javascript object. Try it with something like
//charFreq("abbabcbdbabdbdbabababcbcbab")

function charFreq(text) {

    if (text.length == 0) {
        throw new Error("The string is empty");
    }
    if (text.length == 1) {
        return text;
    }

    var freq = {};

    for (var i = 0; i < text.length; i++) {
        var c = text.charAt(i);

        if (freq[c] == null) {
            freq[c] = 1;
        }
        else {
            freq[c]++;
        }
    }

    return freq;
}