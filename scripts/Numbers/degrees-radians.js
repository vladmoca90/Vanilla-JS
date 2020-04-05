//A function that transforms degrees into radians

function degreesToRadians(degrees) {
    var pi = 3.14;
    var radians = pi*(degrees/180);
s
    if(degrees < 0) {
        throw new Error('The degrees must be a positive number');
    }
    if(degrees > 360) {
        throw new Error('The degrees must be a number 0 and 360');
    }

    return radians;
}

//A function that transforms radians into degrees
function radiansToDegrees(radians) {
    var pi = 3.14;
    var degrees = (radians*180)/pi;

    if(radians < 0) {
        throw new Error('The degrees must be a positive number');
    }

    return degrees;
}