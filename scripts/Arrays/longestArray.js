 //A function that compares the length of two lists and returns the longest one

 function longestList(x, y) {

     if (x.length == y.length) {
         throw new Error("The lists are equal");
     } else if (x.length > y.length) {
         return x;
     } else {
         return y;
     }

 }