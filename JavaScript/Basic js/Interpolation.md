#### Интерполяция - это способ построения строки, который позволяет использовать переменные и выражения внутри строк.<br>
Для использования интерполяции нужно использовать косые кавычки(бэктики), это тоже будет строка.
В такой строке создаем коснтрукцию ${ } и внутрь мы можем поместить выражение или переменную, значение которой подставится в это место в строке.
Например если вызвать функцию, то подставится возвращаемое ей значение.
```javaScript
let page = `anime`
// Интерполяция
console.log(`http://someurl.com/${page}/1`) // http://someurl.com/anime/1

// для решения подобного раньше использовалась конкатинация.
console.log{'http://someurl.com/' + page + '/' + '1'} //http://someurl.com/anime/1
// Этот способ очень не удобен, если путь разрастается
```
Пример с функцией:
```javaScript
function sum (a,b) {
return a + b
}

console.log(`У меня получилось в сумме ${sum(2,2)}`) // У меня получилось в сумме 4
```
- [*Консоль разработчика и общение с пользователем*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Browser%20Methods%20and%20console.md 'Консоль разработчика и общение с пользователем')<br>
- [*Строгий режим (Strict mode)*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/use%20strict.md 'Строгий режим в js')<br>
- [*Переменные*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Variables.md 'переменные')<br>
- [*Динамическая типизация и типы данных*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Data%20types%20and%20dynamic%20typing.md 'Типы данных')<br>
- [*Операторы*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Operators.md 'Операторы')<br>
- [*Условные операторы*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/if%20and%20switch.md 'Условные операторы')<br>
- [*Циклы*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/While%20and%20for.md 'Циклы')<br>
- [*Функции*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Functions.md 'Функции')<br>
- [*Callback функции*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Callback%20functions.md 'callback функции')<br>

