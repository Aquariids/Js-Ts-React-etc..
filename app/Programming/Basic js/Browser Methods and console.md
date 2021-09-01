## Консоль разработчика ##

Если в коде есть ошибки, все они будут видны в консоли разработчика.
Если нажать пкм на странице и нажать "Посмотреть код" или ctrl + shift + i. (По крайней мере в chrome и opera такая комбинация работает).
Так мы откроем инспектор кода на вкладке Console.<br>
![alt text](https://github.com/Aquariids/MyJS/blob/main/app/img/console.png)<br>
Очень часто мы будем работать с консолью, один из методов - console.log()
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
- Позволяет получить ответ от пользователя, то что пользователь введет в поле ввода, будет присвоено в переменную res. Принимает в себя два аргумента. Первый - это title, второй - текст который будет сразу внутри поля ввода. Обычно вторым аргументом ставят просто пустые ковычки ' '.  Для примера я ввел 111.
```javaScript
let res = prompt('Привет','111');
// Как раз можно воспользоваться методом консоли и посмотреть что ввели.
console.log(res); // в консоли появится содержимое переменной res
```
![text](https://github.com/Aquariids/MyJS/blob/main/app/img/prompt.png)<br>
### confirm() ###
-  Показывает модальное окно с сообщением и ждёт, пока пользователь нажмёт OK или Отмена. Возвращает true, если нажата OK, и false, если нажата кнопка «Отмена» или Esc.
```javaScript
let result = confirm('Ты за аниме?');
```
![text](https://github.com/Aquariids/MyJS/blob/main/app/img/confirm.png)<br>

[Строгий режим](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/use%20strict.md)<br>
[Переменные](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Variables.md)<br>
[Динамическая типизация и типы данных](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Data%20types%20and%20dynamic%20typing.md)<br>
