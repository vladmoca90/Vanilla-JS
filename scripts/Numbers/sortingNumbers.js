const sortDescNumbers = (x, y, z) => {
    if (isNaN(x) == true) {
        throw new Error('The x must be a valid number');
    }
    if (isNaN(y) == true) {
        throw new Error('The y must be a valid number');
    }
    if (isNaN(z) == true) {
        throw new Error('The z must be a valid number');
    }

    if (x > y && x > z) {
        if (y > z) {
            console.log(x + ', ' + y + ', ' + z);
        } else {
            console.log(x + ', ' + z + ', ' + y);
        }
    } else if (y > x && y > z) {
        if (x > z) {
            console.log(y + ', ' + x + ', ' + z);
        } else {
            console.log(y + ', ' + z + ', ' + x);
        }
    } else if (z > x && z > y) {
        if (x > y) {
            console.log(z + ', ' + x + ', ' + y);
        } else {
            console.log(z + ', ' + y + ', ' + x);
        }
    }
}

sortDescNumbers(-1, 7, 0);