
Callback функция - это функция внутри другой некой функции и которая, выполняется после того, как эта другая некая функция завершила свое выполнение. 
```javaScript
function first () {          // создаем функцию
    // Немного про setTimeout - это метод, который выполняет код с задрежкой. Первый аргумент это сам код или функция, а второй время через которое выполнится этот код.
    setTimeout(function () {   // функция внутри setTimeout, это первый аргумент, 500 миллисекунд - второй аргумент.
        console.log(1); // выводим в консоль 1
    }, 500); // наш код выполнится через пол секунды, после того, как мы вызовем функцию first
} 
// анонимная функция вунтри setTimeout, это и есть callback функция.
function second () { // создаем вторую функцию
    console.log(2); // выводим 2 в консоль
}
 // вызываем наши функции
first();
second();
// выведет 2, а потом 1.
```
Если функции идут друг за другом, это еще не значит, что они так работают, они запускаются одна за другой, но результат могут дать в разное время
```javaScript
function learnJs (lang, callback, done) {  // в функцию в качестве аругмента, мы можем передать другую функцию.
    console.log(`я учу ${lang}`);  // выводим что-то в консоль
    callback(); // вызываем функцию переданную как аргумент         
    done();  // и вторую которую мы передадим по имени.
}
function done () { // создаем функцию done
    console.log('Что значит передать по имени? узнаем потом.');
}
learnJs ('JavaScript', function () { // вызываем нашу функцию learnJs, в аргумент lang передаем строку, а в аргумент callback передаем анонимную функцию
console.log(' это колбек функция');
}, done); // третий аргумент, наша функция done, просто пишем ее имя и все, без скобок () - скобки только при вызове функции.
// вызываем мы ее внутри функции learnJS, а здесь лишь передаем ссылку на нее.
/*
Вывод:
я учу JavaScript
это колбек функция
Что значит передать по имени? Узнаем потом.
*/
```
- [*Консоль разработчика и общение с пользователем*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Browser%20Methods%20and%20console.md 'Консоль разработчика и общение с пользователем')<br>
- [*Строгий режим (Strict mode)*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/use%20strict.md 'Строгий режим в js')<br>
- [*Переменные*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Variables.md 'переменные')<br>
- [*Динамическая типизация и типы данных*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Data%20types%20and%20dynamic%20typing.md 'Типы данных')<br>
- [*Интерполяция*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Interpolation.md 'Интерполяция')<br>
- [*Операторы*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Operators.md 'Операторы')<br>
- [*Условные операторы*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/if%20and%20switch.md 'Условные операторы')<br>
- [*Циклы*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/While%20and%20for.md 'Циклы')<br>
- [*Функции*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Functions.md 'Функции')<br>
