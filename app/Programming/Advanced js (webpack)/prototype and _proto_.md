[Что такое \_\_proto__ и prototype?](#protoAndPrototype)<br>
[Примеры \_\_proto__]()<br>
[Примеры prototype]()<br>

## <a name="protoAndPrototype"> Что такое \_\_proto__ и prototype </a>
```__proto__``` и prototype - это всё свойства объекта.
Любой объект в javaScript имеет свойство \_\_proto__<br>
Но свойство prototype имеют только функции конструкторы или классы.


### \_\_proto__
Каждое свойство __proto__ ссылается на свой prototype с помощью которого был создан объект.
Например мы создаем строку и __proto__ этой строки будет ссылаться на функцию с помощью которой она была создана. С помощью какой функции появляются все строки в js?
```javaScript
let str = 'я строка'; // new String оборачивает нашу строку и все.

console.log(str.__proto__ === String.prototype); // true
```
__proto__ хранит в себе свойства и методы prototype именно поэтому мы можем использовать методы и свойства на объекте даже если он их не имеет.
```javaScript
let str = 'я строка'.toLocaleUpperCase(); // строка оборачивается new String и имеет __proto__ ссылающее нас на главную функцию String.prototype.
И просто берет наш метод из String.prototype использует и возвращает нам измененную строку.
console.log(str); // Я СТРОКА
```
__proto__ - просто указывает на прототип и все.
Например:<br>
```javaScript
console.dir(String.prototype.__proto__); // Object
// Прототип любой строки ссылается на объект, так как все в js объекты. Это будет касаться любого типа данных.
// в свою очередь объект ссылается на null - это конечная станция.
console.dir(Object.prototype.__proto__); // null
```
Немного про наследовательность и работу __proto__:<br>
```javaScript

let str = 'hi'; // у нас есть строка.



Object.prototype.fun = function name(params) { // в Object.prototype мы добавили свою функцию.
    return params.toLocaleUpperCase(); // просто делаем капс.
};

console.log(str.fun('hi')); // используем ее на строке и она работает выдовая нам HI
```
__proto__ нашей str ссылается на String.prototype которого __proto__ в свою очередь ссылается на Object.prototype.
Когда js не находит свойство или метод в __proto__ он идет в __proto__ пердыдущего по цепочке. Это называется цепочка прототипов.<br>
И немного наглядных примеров:
```javaScript
let obj = {} // есть obj.__proto__
let arr = [] // arr.__proto__  массив объект так что тоже есть.
let a = 18; // a.__proto__  тоже есть, так как когда мы обращаемся через точку появлятся обертка объект, кторая иммет __proto__
```

// со строкой тоже самое
// функция  - объект, так что __proto__ есть
// у стрелочных тоже самое
// класс тоже функцич, тоже есть __proto__
// булевые значения так же как и строка с числом, черех точку будетв  обертке с __proto__


// по сути __proto__ - это объект и он есть у любого объекта. Prototype в свою очередь есть не у каждого объекта

/*
* Разные __proto__ разных по типу объектов  - совершенно независимые разные объекты.
*  У одинаковых по типу объектов всегда один и тот же объект __proto__ ( они равны)
*/
// Например
const man1 = {};
const man2 = {};

console.log(man1.__proto__ === man2.__proto__ ); //true у них __proto__ один и тот же, какой то 3 объект

const arr1 = [];
const arr2 = [];

console.log(arr1.__proto__ === arr2.__proto__); // true у них __proto__  так же равны 

let age = 19;
let num = 100;

console.log(age.__proto__ === num.__proto__); // true
console.log(arr1.__proto__ === num.__proto__); // false  у них разные типы объекта

let str = '111';
console.log(str.__proto__ === age.__proto__); // false

class Lox {}
let lox = new Lox();

console.log(lox.__proto__ === Function.prototype); // false
// у lox  __proto__  ссылается на класс с помощью которого он создан это Lox()
// поэтому lox.__proto__ ===  Lox.prototype
let bol = true;

console.log(bol.__proto__ === Lox.__proto__); // false и тд


/*
* Любой объект в js создается с помощью класса или функции конструктор

мы можем наглядно создать с помщью new 
но когда мы пишем let obj = {} мы этого не видим но в браузере этот объект создается с помощью new Object(...)
с массивом так же new Array(...)
когда строка или число, когда создаем объекта нет, но когда обращаемся через точку создается объект new Number(..) new String (...)
Поэтому что бы понимать что за __proto__ нужно знать с помощью какой функции конструктора создан данный объект
*/

/*
*  У любого объекта есть __proto__ но prototype есть только у функции конструктор и класса
*/




console.log(Lox.prototype); // они все имею  prototype
console.log(Lox2.prototype);

/*
Это все встроенный классы, они все имеют прототип
Object.prototype
Promise.prototype
Function.prototype
Boolean.prototype
Number.prototype
String.prototype
Array.prototype

Каждый prototype  - это независимый объект, с опр  набором свойств и методов
так как prototype это всегда независимый объект, они сами по себе, поэтому они не равны между собой
*/

console.log(Array.prototype === Object.prototype); // false и тд


/*
* ___proto___  любого объекта ссылается на prototype класса с помощью которого этот объект был создан

еще раз:
__proto__ ссылается на prototype класса с помощтю которого был создан объект
когда мы создали массив то его __proto__ будет равно Array.prototype
потому что __proto__ ссылаеттся на этот прототип
__proto__ у любого объектая
prototype у class либо funcrion
*/
let newArr = []
console.log(newArr.__proto__ === Object.prototype); // false
console.log(newArr.__proto__ === Array.prototype); // true


// __proto__ это как детишки prototype которые ссылаются всегда на prototype
// переменная со сторокой будет ссылаться на прототип new String так как создана она с помощью нее, а прото new String
// будет ссылаться на Function.prototype потому что new String создается с помощтю new Function





