//A function that receives a string as a parameter (name) and returns the initials of that stirng (name)

function nameInitials(name) {
    if (name.length == 0) {
        throw new Error('the name msut be given');
    }
    if (name.length == 1) {
        return name;
    }

    var splitName = name.trim().split(' ');
    var initials = '';

    for (var i = 0; i < splitName.length; i++) {
        initials += splitName[i].charAt(0);
    }

    return initials;
}