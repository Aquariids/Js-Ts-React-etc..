
```javaScript
const reverse = (str) => {
    let arr = []; // пустой массив для фразы наоборот
    for(let i = str.length, j=0; i>=0; i--, j++) { // в i у нас последний символ, в j будет первый
        arr[j] = str[i]; // заменяем первый последним, потом i-- а j++ и так далее по букве заменяем
    }
    return arr.join(''); // лепим это все дело и возвращаем из функции
}

console.log(reverse('hello, world')); // dlrow ,olleh
```
Видел вариант где была такая запись в цикле:`str.length - 1`.
Будет все тоже самое, зачем это я пока что не понял.
```javaScript
const reverse = (str) => {
    let arr = [];
    for(let i = str.length - 1, j=0; i>=0; i--, j++) {
        arr[j] = str[i];
    }
    return arr.join('');
}

console.log(reverse('hello, world')); //  dlrow ,olleh
```
