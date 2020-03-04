function getAthletePosition(position) {

    switch (position) {
        case 'first place':
            console.log('You get the gold medal!');
            break;
        case 'second place':
            console.log('You get the silver medal!');
            break;
        case 'third place':
            console.log('You get the bronze medal!');
            break;
        default:
            console.log('No medal awarded.');
            break;
    }
}

getAthletePosition('first place');