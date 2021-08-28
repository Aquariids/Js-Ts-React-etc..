// Полиндром - это когда текст читается одинакого слева направо и справа налево шалаш ( с любой стороны отсается шалаш)
// isPalindrome("тест") false
// isPalindrome("Шалаш") true


// base
function isPalindrome (string){
    let arr = string.split(''); // Трансфармируем в массив
    let reverArr = arr.reverse(); // переворачиваем массив
    let resString =  reverArr.join(''); // собираем обратно
    let res = string === resString; //  добавляем строку в res и проверяем ее с перевернутой
    return res; // так как мы res сравниваем с resString, то вернет нам булевое значение
}

console.log(isPalindrome('')
);

// более продвинутый вариант написаания

function isPalindrome2 (str){
    return str === str.split('').reverse().join();
}

const isPalindrome3 = str => {
    str === str.split('').reverse().join('');
};


// я немного усовершенствовал.  Но есть проблемка. Если внутри строки будет эмодзи, то это решение даст сбой

function isPalindrome2 (str){
    let string = str.toLowerCase();
    return string === string.split('').reverse().join('');
}


console.log(isPalindrome2('шаЛаШ'));