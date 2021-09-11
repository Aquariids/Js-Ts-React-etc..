## Консоль разработчика ##

Консоль нужна для отлова ошибок и для разных тестов, потому что если в коде есть ошибки, все они будут видны в консоли разработчика.
Если нажать пкм на странице "Посмотреть код" или набрать комбинацию клавиш ctrl + shift + i. (По крайней мере в chrome и opera такая комбинация работает).
Так мы откроем инспектор кода на вкладке Console.<br>
![alt text](https://github.com/Aquariids/MyJS/blob/main/app/img/console.png)<br>
В инспекторе кода много чего интересного, но сейчас только о Console.
Мы очень часто будем работать с консолью, один из методов для консоли это console.log()

```javaScript
console.log('Hello world') // Выведет в консоль Hello world
```
![alt text](https://github.com/Aquariids/MyJS/blob/main/app/img/hello.png)<br>
Так же есть console.dir() - этот метод отображает список свойств указанного JavaScript объекта. Сейчас важно запомнить только console.log()

## Общение с пользователем ##

### alert(); ###
 - Это встроенное модальное окно для вывода сообщений. Само модальное окно мы не можем как либо изменять или добавлять стили, они заданны браузером 
```javaScript
alert('Hello world')
```
![alt text](https://github.com/Aquariids/MyJS/blob/main/app/img/alert.png)<br>
### prompt() ###
- Позволяет получить ответ от пользователя, то что пользователь введет в поле ввода, будет присвоено в переменную в которую поместим метод. Принимает в себя два аргумента. Первый - это title, второй - текст который будет сразу внутри поля ввода. Обычно вторым аргументом ставят просто пустые кавычки ' '.  Для примера я ввел 111.
```javaScript
let res = prompt('Привет','111');
// Как раз можно воспользоваться методом консоли и посмотреть что ввели.
console.log(res); // в консоли появится содержимое переменной res
```
![text](https://github.com/Aquariids/MyJS/blob/main/app/img/prompt.png)<br>
### confirm() ###
-  Показывает модальное окно с сообщением и ждёт, пока пользователь нажмёт ok или Отмена. Возвращает true, если нажать ok, и false, если нажата кнопка «Отмена» или Esc.
```javaScript
let result = confirm('Ты за аниме?');

console.log(result) // true или false
```
![text](https://github.com/Aquariids/MyJS/blob/main/app/img/confirm.png)<br>



- [*Строгий режим (Strict mode)*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/use%20strict.md 'Строгий режим в js')<br>
- [*Переменные*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Variables.md 'переменные')<br>
- [*Динамическая типизация и типы данных*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Data%20types%20and%20dynamic%20typing.md 'Типы данных')<br>
- [*Интерполяция*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Interpolation.md 'Интерполяция')<br>
- [*Операторы*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Operators.md 'Операторы')<br>
- [*Условные операторы*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/if%20and%20switch.md 'Условные операторы')<br>
- [*Циклы*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/While%20and%20for.md 'Циклы')<br>
- [*Функции*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Functions.md 'Функции')<br>
- [*Callback функции*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Callback%20functions.md 'callback функции')<br>
