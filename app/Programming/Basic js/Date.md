[Объект Дата](#Data)<br>
[Методы объекта Дата](#methods)<br>


## <a name="Data"> Объект Дата </a>
Date - спецефический объект который в себе содержит различные методы и свойства. Позволяющие работать со временем и датами.

```javaScript
// создаем объект даты с помощью конструктора
const now = new Date(); // создаем дату и помещаем в переменную now
// при вызове мы ничего не используем, поэтому наша переменная покажет время из системы

console.log(now); // Wed Dec 15 2021 22:09:58 GMT+0400 (GMT+04:00)
```
При создании объекта даты мы можем задавать аргументы. Например передать дату в виде строки.
```javaScript
const now = new Date('2021-05-27');
console.log(now); // Mon May 10 2021 04:00:00 GMT+0400 (GMT+04:00) получаем нашу дату, но без секунд и часов
```
Можно получить дату введя определенные параметы(год, месяц, день, часы и тд)
```javaScript
const now = new Date(2021,5,27,20);// указываем через запятую без нулей
console.log(now); // Sun Jun 27 2021 20:00:00 GMT+0400 (GMT+04:00) - получили нашу дату 
// Месяц июнь потому что считается все от нуля
```
Так же мы можем передать опр кол миллисекунд и они будут переведены в дату. Все даты в js хранятся в миллисекундах.
Количество миллисекунд отсчитывается с начала 1970 года.
```javaScript
const now = new Date(0); // передаем 0 миллисекунд
console.log(now); // Thu Jan 01 1970 04:00:00 GMT+0400 (GMT+04:00) - это начало всего отчета
// что бы получить дату меньше, просто ставим минус и все.
```
## <a name ="methods"> Методы Date() </a>
 .getFullYear()  - Получаем год<br>
```javaScript
 const year = new Date()
    .getFullYear();

console.log(year); // 2021
```
 .getMonth() - Получаем месяц<br>
```javaScript
 const month = new Date()
    .getMonth();

console.log(month); // 11. сейчас у меня 12 месяц, но так как счет идет от 0 мы получаем 11
```
 .getDate() - Получаем число<br>
```javaScript
 const date = new Date()
    .getDate();

console.log(date); // 15 число
```
 .getDay()  -  Получаем день недели<br>
```javaScript
 const day = new Date()
    .getDay();

console.log(day); // 3 день (среда)
```
 .getHours() - Получаем часы<br>
```javaScript
 const hours = new Date()
    .getHours();

console.log(hours); // 22 часа
```
 .getMinutes() - Получаем минуты<br>
```javaScript
 const minutes = new Date()
    .getMinutes();

console.log(minutes); // 45 Минут
```
 .getSeconds() - Получаем секунды<br>
```javaScript
 const seconds = new Date()
    .getSeconds();

console.log(seconds); // 8 секунд
```
 .getMilliseconds() - Получаем миллисекунды<br>
```javaScript
 const milliSeconds = new Date()
    .getMilliseconds();

console.log(milliSeconds); // 132 миллисекунды
```
 .getTimezoneOffset() - получает разницу в минутах между часовым поясом системы и UTC 0 <br>
 ```javaScript
 const timeZone = new Date()
    .getTimezoneoffset();

console.log(timeZone); // -240 минут. Так как у меня UTC +4
```
.getTime() - получаем время в миллисекундах прошедшее с 1970, с точки отчета <br>
```javaScript
 const time = new Date()
    .getTime();

console.log(time); // 1639594207301 миллисекунд
```
 У всех этих методов есть аналог с UTC. Кроме getTimezoneOffset и getTime.<br>
 [UTC](https://github.com/Aquariids/MyJS/blob/main/app/img/UTC.png)<br>
 Например:
 ```javaScript
 const hours = new Date()
    .getUTCHours();
    
console.log(hours); // 18. Так как по UTC 0 сейчас 18 00.
 ```
И так далее.
