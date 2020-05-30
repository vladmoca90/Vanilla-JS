//A function that transforms degrees into radians

const degreesToRadians = degrees => {
    let pi = 3.14;
    let radians = pi*(degrees/180);

    if(degrees < 0) {
        throw new Error('The degrees must be a positive number');
    }
    if(degrees > 360) {
        throw new Error('The degrees must be a number 0 and 360');
    }

    return radians;
}

//A function that transforms radians into degrees
const radiansToDegrees = radians => {
    let pi = 3.14;
    let degrees = (radians*180)/pi;

    if(radians < 0) {
        throw new Error('The degrees must be a positive number');
    }

    return degrees;
}