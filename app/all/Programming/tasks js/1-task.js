function toMoney (num, thousandsDelimiter = ' ', decimalDelimiter = '.') {

    let [leftSide, rightSide] = Math.abs(num).toFixed(2).split('.');
    let r = leftSide.length % 3;
    let res = (num < 0 ? '-': '') + leftSide.slice(0, r) + thousandsDelimiter;
    for (let i = r; i < leftSide.length; i+=3  ) {
            res +=  leftSide.slice(i, i + 3) + thousandsDelimiter;
            
    }
    res = `${res.slice(0, res.length - 1)}${decimalDelimiter}${rightSide}`;
    
    return res;
    
}

console.log(toMoney(33));
console.log(toMoney(33.3));
console.log(toMoney(-33.33));
console.log(toMoney(111));
console.log(toMoney(1111));
console.log(toMoney(-1111.11));
console.log(toMoney(-11111111.1, '_',','));

                                                            //Задача номер два

function getLastZerosFactorial(n) {
    let nulls = 0;

    while (n > 0) {
        n = Math.floor( n / 5 );
        nulls += n;
    }

    return nulls;
}

console.log(getLastZerosFactorial(8)); // 1
console.log(getLastZerosFactorial(9)); // 1
console.log(getLastZerosFactorial(10)); // 2
console.log(getLastZerosFactorial(33)); // 7

// https://www.youtube.com/watch?v=_SSaFitxynw ссылочка на задачи. Обязательно повторить и разобрать, ат о нихуя не понятно