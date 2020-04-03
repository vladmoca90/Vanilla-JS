//A function that uses the theorem of Pitagora

function calculatePitagora(a, b, c) {
    if(a == 0 || b == 0 || c == 0) {
        throw new Error('The shape is not a triangle');
    }
    if(c*c == b*b + a*a) {
        return false;
    }

    return true;
}