
function num (a,n) {
 if (n === 1) {
     return a; 
 }  else {
     return 2 * num(a, n - 1);
 }


}


console.log(num(2,3));

