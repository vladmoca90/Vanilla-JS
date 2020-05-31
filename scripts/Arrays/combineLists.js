//Given two lists, a and b, return a list c such that
//c = [a0, b0, a1, b1, ...]

const combineLists = (a, b) => {
    if(a.length == 0) {
        return b;
    }
    if(b.length == 0) {
        return a;
    }

    let c = [];

    let listaMica = [], listaMare = [];

    if(a.length > b.length) {
        listaMare = a;
        listaMica = b;
    }
    else {
        listaMare = b;
        listaMica = a;
    }

    let primaListaEMare = a == listaMare;

    for (let i = 0; i < listaMica.length; i++) {
        if(primaListaEMare) {
            c.push(listaMare[i]);
            c.push(listaMica[i]);
        }
        else {
            c.push(listaMica[i]);
            c.push(listaMare[i]);
        }
    }

    for (let i = listaMica.length; i < listaMare.length; i++) {
        c.push(listaMare[i]);
    }

    return c;
}
