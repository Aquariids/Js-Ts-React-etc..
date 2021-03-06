[Что такое this?](#this)<br>
[this внутри обычной функции](#function)<br>
[this внутри метода в объекте](#object)<br>
[this внутри конструктора и класса](#classes)<br>
[this в событии с обычной функцией](#add)<br>
[this в стрелочной функции](#arrfun)<br>
[Ручная привязка this. bind, call,apply](#oye)<br>

## <a name="this"> что такое this? </a>
`this` - это контекст и он бывает разный, при разных вызовах функции. То есть в разных условиях `this` может иметь разное значение.
Так же можно сказать, что `this` - это переменная которая ссылается на объект, а какой объект уже зависит от условий функциий.
Или `this` это переменная которая принимает в себя определенный контекст в зависимости от того где она вызывается.
(В JS `this` зависит не от контекста создания функции, а от контекста ее вызова)
Ниже разберем при каких условиях контекст будет изменяться.

##  this такой разный..

### <a name="function"> this в  Обычной функции </a> 
Внутри функции `this` = объекту `window`, но если у вас стоит строгий режим `use strict` тогда = `undefiend`.
```javaScript
"use strict";
function showThis (){
    console.log(this); 
}

showThis(); // мы получим undefined
```
Без строго режима:
```javaScript
function showThis (){
    console.log(this); 
}

showThis(); // получим объект window
```
![window](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/img/windowThis.png)<br>
А что если внутри функции будет еще функция с `this`?
```javaScript
"use strict"

function showThis2(a, b) { // создаем функцию с 2 аргументами, 
    console.log(this); // undefined

    function sum() { // внутри еще одну функцию
        console.log(this); // здесь контекст вызова будет такой же либо window либо undefiend.
        // так не пишем! return this.a + this.b;  // Если мы хотим что бы функция работала, нужно сделать замыкание.
        return a + b; // просто убираем this. функция не находит переменные a и b здесь и ищет их в функции выше 
    }

    console.log(sum()); // undefined
}

showThis2(1, 2); // 3
```
В общем в обычной функции будет `window` либо `undefined` в зависимоси от режима. Даже если функция находится внутри другой функции!
### <a name="object"> Контекст у методов объекта </a>
Контекст у методов объекта это сам объект.
```javaScript
"use strict"
const obj = { // Объект 
    a: 20,
    b: 15,
    sum() { // внутри метод
        function what() {
            console.log(this); // будет undefiend. Потому что это функция внутри метода, а не сам метод объекта,
        }
        console.log(this); // контекст будет объектом в котором находится функция
        what();
    }
};

obj.sum()
```
Важно понимать, что функция внутри метода не является методом.<br>
![thisInObject](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/img/thisInObject.png)<br>


### <a name="classes"> this в конструкторах и классах </a>
`this` в конструкторах и классах - это новый экземпляр объекта.
```javaScript
function User(name, age) { // создаем функцию конструктор.
    this.name = name; // эти this обращаются к объекту которые мы будем создавать 
    this.age = age; // Посути вместо this каждый раз подставляется новый экземпляр объекта.
    this.human = true; // если мы создадим объект lox, то выглядело бы это так lox.age и тд.
    this.hello = function () {
        console.log('hello' + this.name); // здесь this так же ссылается на объект который мы создали и берет его свойство name  
    };



}

let ivan = new User('ivan', 24); // this ссылается на этот экземпляр
let dima = new User('Dima', 30); // и теперь на этот. Здесь при создании мы сразу передаем значения в наши свойства name и age

dima.hello(); // выдаст (helloDima)
console.log(ivan);
```
Немного рассказываю, что происходит. Мы создаем переменную `ivan`, в нее помещаем наш конструктор и указываем свойства. Внутри конструктора под `this` подставляется наш `ivan`
И ему записываются свойства(значения из аргументов в функции) ivan.name = name. ivan.age = age и так далее, мы таким образом конструируем объект. Когда мы создадим dima, вместо this уже подставится dima и так далее.<br>
![ivan](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/img/ivanThis.png)<br>


### <a name="add"> this в событии с обычной функцией. </a>
Если обработчик с обычной функцией, то `this` как и `event.target` будет сам элемент события.
```javaScript
const btnThis = document.querySelector('.btn-this');

btnThis.addEventListener('click', function () {
        this.style.backgroundColor = 'red'; // при нажатии перекрасим кнопку в красный, так как this - элемент события
});
```
### <a name="arrfun"> Стрелочные функции и this </a>
У стрелочных функций нет своего контекста вызова, она будет его брать у родителя.
```javaScript
const obj = { // наш объект
    num: 2,
    sayNumber: function () { // метод этого объекта
        const say = () => {
            console.log(this); // стрелочная функция внутри метода
        };

        say();
    }

};

obj.sayNumber(); // контекстом будет объект  {num: 2, sayNumber: ƒ}
// у метода в объекте контекст сам объект, стрелочная функция взяла тот же контекст, что и у метода в котором она находится.

```
### <a name="oye"> Ручная привязка this к функции: call, apply, bind. </a>

 как подвязать этой функции контекст объекта `us`?
```javaScript
function sayName(sername) {           
    
};

const us = {
    name: 'diman',
    age: 10
};
```
Для этого есть два метода и один который сам создает новую функцию.
#### call()
```javaScript
function sayName(surname) {
    console.log(this);
    console.log(`${this.name} ${surname}`);
    console.log(this.age);
}

let us = {
    name: 'dima',
    age: 10
}

f1.call(us, 'anime');// просто вызываем у функции метод.
// далее передаем объект, а после аргументы для функции.
```
Как видим контекст объект и мы можем использовать его свойства внутри функции с аргументами.
![call()](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/img/call.png)<br>
#### apply()
Оба  метода делают одно и тоже, но у них разный синтаксис.
```javaScript
sayName.apply(us, ['anime']); // здесь все тоже самое только аргументы внутри массива
```
#### bind()
Тут все почти также, только мы создаем новую функцию.
```javaScript
function count(num) {
    return this * num; //  здесь в this будет двойка, мы ее передали ниже.
}

const double = count.bind(2); // здесь мы по сути поместли в count новую функцию и забиндили в this = 2
// мы навсегда забиндили функцию! создали ей ручной контекст ввиде двойки и теперь просто вызываем нашу double и передам нужный аргумент 
console.log(double(10)); // 20
```

