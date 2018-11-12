//Given a function that has an object with three properties (a, b, c), checks is these numbers can be the sides of a triangle

function isTriangle(triangle) {

    if (triangle.a + triangle.b > triangle.c && triangle.a + triangle.c > triangle.b && triangle.b + triangle.c > triangle.a) {
        return true;
    }
    else {
        return false;
    }

}
