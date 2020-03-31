//A function that converts degrees into radians

function degreesIntoRadians(n) {
    if(n == null) {
        throw new Error('The number cannot be null');
    }
    if(n == 0) {
        return n;
    }

    var pi = Math.PI;
    var radian = n * (pi/180);

    return radian;
}

//A function that converts radians into degrees
function radiansIntoDegrees(n) {
    if(n == null) {
        throw new Error('The number cannot be null');
    }
    if(n == 0) {
        return n;
    }

    var pi = Math.PI;
    var degrees = n * (180/pi);

    return degrees;
}