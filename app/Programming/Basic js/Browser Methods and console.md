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
Другие методы разберем со временем.
## Общение с пользователем ##

### alert(); ###
 - Это встроенное модальное окно для вывода сообщений. Само модальное окно мы не можем как либо изменять или добавлять стили они, заданны браузером 
```javaScript
alert('Hello world') //.<br>
```
![alt text](https://github.com/Aquariids/MyJS/blob/main/app/img/alert.png)<br>
### prompt() ###
- Позволяет получить ответ от пользователя, то что пользователь введет в поле ввода, будет присвоено в переменную res
```javaScript
let res = prompt(Привет,'111') // принимает два аргумента. Первый это title, второй текст который будет сразу внутри поля ввода
```

let sesult = confirm(/* тут вопросик */);   вылезет модал окно, с 'Ok' и 'Отмена' 
console.log(sesult);
если нажать отмену, то в переменную добавится false, Ok - true. 
let prom = prompt('ты педик?', ''); // тут короче пустые ковычки всегда !! 
короче, вылезет окно в котором пользователь может, что то ввести, Ответить.
Это и попадет в перемнную prom

document.write(/* текст */) // Все на ст заменит на то, шо напишешь! (не юзается нигде этот метод!!!) jshint опять охуеват

console.dir ();// Отображает список свойств указанного JavaScript объекта





                                                      Работа с консолью!!!



function hello () {
    console.log('Hello World');
}

hello();

function hi () {
    console.log('Say hi');
}

hi();

const arr = [1,14,4,30,54 ],
        sorted = arr.sort(compareNum);

function compareNum (a,b) {
    return a - b
}
