//A function that transforms degrees into radians

function degreesIntoRadians(degrees) {
    if(degrees < 0) {
        throw new Error('The degrees must be a positive number');
    }
    if(degrees > 360) {
        throw new Error('The degrees must be a number between 0 and 360');
    }

    var pi = 3.14;

    var radians = pi*(degrees/180);

    return radians;
}

//A function that transforms radians into degrees
function radiansIntoDegrees(radians) {
    if(radians < 0) {
        throw new Error('The degrees must be a positive number');
    }

    var pi = 3.14;

    var degrees = (radians*180)/pi;

    return degrees;
}