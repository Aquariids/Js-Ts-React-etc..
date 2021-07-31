function isPalindrome2 (str){
    let string = str.toLowerCase();
    return string === string.split('').reverse().join('');
}


console.log(isPalindrome2('шаЛаШ'));