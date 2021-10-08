## Консоль разработчика ##

Консоль нужна для отлова ошибок и для разных тестов, потому что если в коде есть ошибки, все они будут видны в консоли разработчика.
Если нажать пкм на странице "Посмотреть код" или набрать комбинацию клавиш ctrl + shift + i. (По крайней мере в chrome и opera такая комбинация работает).
Так мы откроем инспектор кода на вкладке Console(в случае с "Посмотреть код" мы будем на вкладке Elements, Console будет правее).<br>
![alt text](https://github.com/Aquariids/MyJS/blob/main/app/img/console.png)<br>
В инспекторе кода много чего интересного, но сейчас только о Console.
Мы очень часто будем работать с консолью, один из методов для консоли это console.log() - этот метод просто выводит информацию в консоль.

```javaScript
console.log('Hello world') // Выведет в консоль Hello world
```
![console.log](https://github.com/Aquariids/MyJS/blob/main/app/img/hello.png)<br>
Так же будем использовать console.dir() - этот метод отображает список свойств указанного JavaScript объекта. Сейчас важно запомнить только console.log()

## Методы для общения с пользователем ##
Эти методы мы так же будем использовать для демонстрации работы кода и разных тестов. Пока нет смысла разбирать что такое метод, сейчас просто важно понимать, что это определенная команда, которая что-то делает.
### alert(); ###
 - Это встроенное модальное окно для вывода сообщений. Само модальное окно мы не можем как либо изменять или добавлять стили, они заданны браузером, это касается и методов ниже
```javaScript
alert('Hello world')
```
![alert](https://github.com/Aquariids/MyJS/blob/main/app/img/alert.png)<br>
### prompt() ###
- Позволяет получить ответ от пользователя, то что пользователь введет в поле ввода, будет присвоено в переменную в которую поместим метод. Принимает в себя два аргумента. Первый - это title, второй - текст который будет сразу внутри поля ввода. Обычно вторым аргументом ставят просто пустые кавычки ' '.  Для примера я ввел 111.
```javaScript
let res = prompt('Привет','111');
// Как раз можно воспользоваться методом консоли и посмотреть что ввели.
console.log(res); // в консоли появится содержимое переменной res, а это будет то, что мы введем в поле.
```
![prompt](https://github.com/Aquariids/MyJS/blob/main/app/img/prompt.png)<br>
### confirm() ###
-  Показывает модальное окно с сообщением и ждёт, пока пользователь нажмёт ok или Отмена. Возвращает [true](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Data%20types%20and%20dynamic%20typing.md#3%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D1%82%D0%B8%D0%BFboolean), если нажать ok, и [false](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Data%20types%20and%20dynamic%20typing.md#3%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D1%82%D0%B8%D0%BFboolean), если нажата кнопка «Отмена» или Esc.
```javaScript
let result = confirm('Ты за аниме?');

console.log(result) // true или false
```
![confirm](https://github.com/Aquariids/MyJS/blob/main/app/img/confirm.png)<br>



- [*Строгий режим (Strict mode)*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/use%20strict.md 'Строгий режим в js')<br>
- [*Переменные*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Variables.md 'переменные')<br>
- [*Динамическая типизация и типы данных*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Data%20types%20and%20dynamic%20typing.md 'Типы данных')<br>
- [*Интерполяция*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Interpolation.md 'Интерполяция')<br>
- [*Операторы*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Operators.md 'Операторы')<br>
- [*Условные операторы*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/if%20and%20switch.md 'Условные операторы')<br>
- [*Циклы*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/While%20and%20for.md 'Циклы')<br>
- [*Функции*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Functions.md 'Функции')<br>
- [*Callback функции*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Callback%20functions.md 'callback функции')<br>
