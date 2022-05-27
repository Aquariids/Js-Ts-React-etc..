// const array = [0,1,2,6,7,3,4,10,-10,29,123,9];
// let count = 0;




function fac (n) {
    if(n === 1) {
        return 1;
    } else {
        return (n * fac(n - 1)) 
    }   
}


console.log(fac(5)); 

