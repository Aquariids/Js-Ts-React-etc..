
[Зачем нужен строгий режим](#why) 

[Как применять строгий режим ](#how) 






 ### <a name ='why'>Зачем нужен строгий режим или современный режим кода</a> ###
Строгий режим нужен для решения многих неточностей в JS, накопившиеся за все время существования javaScript и добавления в него нового функционала.
Появился строгий режим вместе с ES5 (ECMAScript — это спецификация, на которой основан javaScript).

Например:
Без современного режима кода, мы могли объявлять переменные без ключевых слов (let, const, var)
```javascript
variable = 5;
console.log(variable) // 5
```
В строгом режиме, если мы так сделаем, будет ошибка и код остановит свою работу.
```javascript
'use strict'

variable = 5; 
console.log(variable) // variable is not defined
```
И это правильное поведение языка. Мы не должны объявлять переменные без определенных директив, это может привести к ошибкам
 ### <a name ='how'>Как применять строгий режим</a> ### 
 Для использования строго режима существует команда "use strict" или 'use strict'.  Устанавливается в начале вашего документа.
 Представим, что это чистый js файл.
 ```javascript
 'use strict' // Прописываем команда и все.
 
 
 // Ваш код
 ```
 Так же можно использовать отдельно в функциях
  ```javascript
  function f1() {
  'use strict'
   // Все внутри будет в современном режиме, любая другая функция тоже
  }
  ```
  В строгом режиме кода много разных изменений. Описывать все изменения нет смысла, так как здесь, лишь конспектики, для глупого меня:з<br>
  - [*Консоль разработчика и общение с пользователем*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Browser%20Methods%20and%20console.md 'Консоль разработчика и общение с пользователем')<br>
- [*Переменные*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Variables.md 'переменные')<br>
- [*Динамическая типизация и типы данных*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Data%20types%20and%20dynamic%20typing.md 'Типы данных')<br>
- [*Интерполяция*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Interpolation.md 'Интерполяция')<br>
- [*Операторы*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Operators.md 'Операторы')<br>
- [*Условные операторы*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/if%20and%20switch.md 'Условные операторы')<br>
- [*Циклы*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/While%20and%20for.md 'Циклы')<br>
- [Функции](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Functions.md 'Функции')<br>
- [*Callback функции*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Callback%20functions.md 'callback функции')<br>