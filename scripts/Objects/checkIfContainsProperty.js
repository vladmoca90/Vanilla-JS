//A function thet check if an object has a certain property

var obj = {};
function checkIfProperty(obj, key) {
    if (Object.keys.length == 0) {
        throw new Error('The object cannot be empty');
    }

    if (!obj.key) {
        return false;
    }

    return true;
}