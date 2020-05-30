 //A function that compares the length of two lists and returns the longest one

 function longestList(x, y) {
     if(x.length == 0 || y.length == 0) {
         throw new Error("None of the lists can be empty");
     }
     if(x.length == y.length) {
         return x;
     }
     if(x.length > y.length) {
         return x;
     } else {
         return y;
     }
 }