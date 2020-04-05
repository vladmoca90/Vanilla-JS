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