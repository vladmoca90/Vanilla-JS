//A function that receives a string as a parameter (name) and returns the initials of that stirng (name)

const nameInitials = name => {
    if(name.length == 0) {
        throw new Error('the name msut be given');
    }
    if(name.length == 1) {
        return name;
    }

    let newName = name.replace('-', ' ');;
    let splitName = newName.trim().split(' ');
    let initials = '';

    for (let i = 0; i < splitName.length; i++) {
        initials += splitName[i].charAt(0);
    }

    return initials;
}

nameInitials('Vlad Mocanu');