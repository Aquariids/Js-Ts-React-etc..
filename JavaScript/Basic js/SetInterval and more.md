[setTimeout](#setTimeout)<br>
[setInterval](#setInterval)<br>
[Рекурсивный setTimeout](#recursion)<br>
[Анимация setInterval](#animation)


`setTimeout` и `setInterval` это методы которые позволяют планировать вызов функции, с помощью этих методов мы можем вызвать функцию через определенное время.
## <a name="setTimeout"> setTimeout </a>
`setTimeout` позволяет вызвать функцию один раз, через определённый интервал времени.
```javaScript
const timeId = setTimeout(function (text) { // создаем переменную для нашего setTimeout.
    // Переменная нужна для того что бы  определять setTimeout, что бы в будущем мы могли бы его остановить.
    // когда мы помещаем сет в переменную мы записываем числовой индетификатор этого таймера 
    // setTimeout принимает в себя ту функцию которая должна запуститься через опр промежуток времени
    // сейчас у нас анонимная функция
    console.log(text); // сама функция с аргументом text - это наш первый аргумент.
}, 2000, 'hi'); // это наш второй аргумент (время через сколько функция выполнится) указывается в миллисекундах. 2000 - это 2 секунды.
// так же мы можем передавать в setTimeout аргумент из функции которую она выполняет (наш третий аргумент 'hi')
```
Так же мы можем передавать готовую функцию:
```javaScript
function logger() {
    console.log('keks');
}
const timeIdTwo = setTimeout(logger, 2000); // передаем именно ссылку, не вызываем !
```
## <a name="setInterval"> setInterval и clearInterval </a> ##
`setInterval` позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.<br>
`clearInterval` - сбрасывает наш таймер, с `setTimeout` работает также. <br>
```javaScript
const btn = document.querySelector('.btn'); // получаем кнопку
let time, // создаем две переменных
    i = 1;

function logger() {

    if (i === 3) { // если i равно 3
        clearInterval(time); // отменяем интервал. Просто помещаем внутрь идентификатор.
    }
    console.log('hello');
    i++;

}


btn.addEventListener('click', () => { // вешаем обработчик на нашу кнопку
    time = setInterval(logger, 2000); // в time помещаем  setInterval.
    // После нажатия кнопки каждые 2 секунды будет выполняться функция logger без остановки.
    // интервал отчистится лишь когда в i будет 3
});
```
У `setInterval` есть проблема. Таймер не учитывает как долго будет работать функция внутри него. Еасли наша функция `logger` будет долго выполняться или будет очень тяжелой, то `setInterval` не будет ждать свои 2 секунды, он будет думать, что 2 секунды прошли, во время выполнения функции и сразу запустит опять `logger`.<br>
Поэтому лучший способ это `setTimeout` в рекурсии.
## <a name="recursion"> Рекурсивный вызов setTimeout </a>

```javaScript                           
let id = setTimeout(function log() { // запускаем наш stTimeout с интервалом 500мл
    console.log('hello gay'); // тут выполняются действия
    id = setTimeout(log, 500); // замещаем id новым setTimeout который ждет когда выполнится код выше, ждет пол секунды и опять выполняет функцию log
}, 500);
```
Такой варинат всегда будет строго дожидаться выполнения функции вне зависимости от ее нагрузки и долготы.

## <a name ="animation"> Анимация с помощью setInterval </a>
```javaScript
function myAnimation() { // создаем функцию
    const elem = document.querySelector('.square'); // получаем наш квадратик на котором будет анимация
    let pos = 0; // наша поцизция квадратика. Равна пока что 0

    const id = setInterval(frame, 10); // запускаем функцию frame каждые 10мл. 

    function frame (){ // это функция которая будет запускаться через опр промежуток времени
        if (pos == 370) {
            clearInterval(id);
        } else {
            pos++; // позиция увеличивается.
            elem.style.left =   pos + 'px'; // наша позиция будет пикселями в свойстве left
            elem.style.top = pos + 'px'; // и так же в свойстве top, что значит мы сместим элемент вправо и вниз
        }

    }
}    


const btn = document.querySelector('.btn');
btn.addEventListener('click', myAnimation);

```
![setInterval](https://github.com/Aquariids/MyJS/blob/main/app/img/setInterval.gif)<br>
