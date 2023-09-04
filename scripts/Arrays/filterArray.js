//A function that filters an list according to a certain condition.

const filterList = list => {
    for (let i = 0; i < list.length; i++) {
        let result = list.filter(i => list.length > 6);

        return result;
    }
}


const names = ['Ana', 'Vlad', 'Alex', 'James', 'Thomas'];

const filterNames = names => {
    for (let i = 0; i < names.length; i++) {
        names.filter((name) => {
            return name.startsWith('A');
        });
    }
}

console.log(filterNames(names));