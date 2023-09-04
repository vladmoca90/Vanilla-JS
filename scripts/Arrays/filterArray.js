//A function that filters an list according to a certain condition.
const names = ['Ana', 'Vlad', 'Alex', 'James', 'Thomas', 'Fiona', 'Anastasia', 'Zachary', 'Ian'];

const filterNames = names => {
    let filteredName = names.filter((name) => {
        return name.charAt() === 'A';
    });

    return filteredName;
}

console.log(filterNames(names));