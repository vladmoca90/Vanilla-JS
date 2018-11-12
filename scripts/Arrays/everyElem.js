//A function that returns true if all elements have a certain condition

function everyElem(list) {

    if(list.length == 0) {
        throw new Error('The list cannot be empty');
    }

   for(i=0; i<list.length; i++) {
       if(list[i] > 10) {
           return false;
       }
   }

    return true;
}