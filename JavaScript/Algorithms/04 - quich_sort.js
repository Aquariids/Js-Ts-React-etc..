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

const arr = [9,2,3,5,9,1,-10,10,58]; // массив который нужно отсортировать.

console.log(arr.length);
let count = 0; // наше кол операций

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        
        let indexMin = i;
            for(let j = i+1; j < arr.length; j++) {
                if(arr[j] < arr[indexMin]) {
                    indexMin = j;
                }
                count += 1; // кол операций
            }

            let tmp = arr[i];
            arr[i] = arr[indexMin];
            arr[indexMin] = tmp;

    }
    
    return arr;
}
console.log(selectionSort(arr));
console.log(count); // 36 итераций на массив из 9 элементов.