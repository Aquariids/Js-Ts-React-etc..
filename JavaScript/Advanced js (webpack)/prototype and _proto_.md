[Что такое \_\_proto__ и prototype?](#protoAndPrototype)<br>
[Примеры \_\_proto__](#proto)<br>
[Цепочка прототипов](#цепь)<br>
[Примеры prototype](#prototype)<br>

## <a name="protoAndPrototype"> Что такое \_\_proto__ и prototype </a>
\_\_proto___ и prototype - это всё свойства объекта.
Любой объект в javaScript имеет свойство \_\_proto__<br>
Но свойство prototype имеют только функции конструкторы или классы. 
### <a name ="proto"> \_\_proto__ </a>
Каждое свойство \_\_proto__ ссылается на prototype класса с помощью которого был создан объект.
Например мы создаем строку и \_\_proto__ этой строки будет ссылаться на функцию с помощью которой она была создана. Строки появляются с помощью new String().
[О работе примитивовов здесь.](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/Basic%20js/OOP%20and%20prototype.md#-%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BF%D1%80%D0%B8%D0%BC%D0%B8%D1%82%D0%B8%D0%B2%D1%8B-%D0%B2-js-)<br>
```javaScript
let str = 'я строка'; // new String оборачивает нашу строку и у нее появляется __proto__

// new String() - это экземпляр встроенного класса String, поэтому прото экземпляра равно прототипу своего класса.
console.log(str.__proto__ === String.prototype); // true

```
\_\_proto__ хранит в себе свойства и методы prototype именно поэтому мы можем использовать методы и свойства на объекте даже если он их не имеет.
```javaScript
let str = 'я строка'.toLocaleUpperCase(); // строка оборачивается new String и имеет __proto__ ссылающее нас на главную функцию String.prototype.
// И просто берет наш метод из String.prototype использует и возвращает нам измененную строку.
console.log(str); // Я СТРОКА
```
\_\_proto__ Есть у всех, поэтому классы и функции имеющие prototype тоже имеют \_\_proto__.<br>
Например:<br>
```javaScript
console.dir(String.prototype.__proto__); // Object
// Прототип любой строки ссылается на объект, так как все в js объекты. Это будет касаться любого типа данных.
console.log(Function.prototype.__proto__); // Object
console.log(Array.prototype.__proto__); // Object
// у всех них прото ссылается на  Object.prototype
console.log(Array.prototype.__proto__ === Object.prototype); // true

// в свою очередь __proto__ объекта ссылается на null - это конечная станция.
console.dir(Object.prototype.__proto__); // null
```
Так же если мы создадим свой класс и с помощью него сделаем экземпляр, то \_\_proto__ этого экземпляра будет ссылаться на prototype нашего класса.
```javaScript
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    userSay() {
        return `Я ${this.name} и мой возраст ${this.age}`
    }
}


let ivan = new User('Иван', 45); // сделаем нашего ивана

console.log(ivan.userSay()); // Я Иван и мой возраст 45. Все работает.
// теперь проверим чему равен __proto__ ивана
console.log(ivan.__proto__ === User.prototype); // true
// в тоже время наш класс по сути функция поэтому
console.log(User.__proto__ === Function.prototype); // true
```
### <a name="цепь"> Немного про наследовательность и цепочку прототипов </a>
```javaScript

let str = 'hi'; // у нас есть строка.

Object.prototype.fun = function name(params) { // в Object.prototype мы добавили свою функцию.
    return params.toLocaleUpperCase(); // просто делаем капс.
};

console.log(str.fun('hi')); // используем ее на строке и она работает выдовая нам HI
```
\_\_proto__ нашей str ссылается на String.prototype которого \_\_proto__ в свою очередь ссылается на Object.prototype.
Когда js не находит свойство или метод в \_\_proto__ он указывает на следующий \_\_proto__  по цепочке. Это называется цепочка прототипов.<br>
### И немного наглядных примеров:
```javaScript
// Помним что разные __proto__ разных по типу объектов  - совершенно независимые разные объекты.
// У одинаковых по типу объектов всегда один и тот же объект __proto__ ( они равны)

const man1 = {};
const man2 = {};


console.log(man1.__proto__ === man2.__proto__ ); //true у них __proto__ один и тот же, какой то 3 объект


const arr1 = [];
const arr2 = [];

console.log(arr1.__proto__ === arr2.__proto__); // true у них __proto__  так же равны 

let age = 19;
let num = 100;

console.log(age.__proto__ === num.__proto__); // true

// проверим теперь массив и число
console.log(arr1.__proto__ === num.__proto__); // false  у них разные типы объекта


// и так далее
let str = '111';
console.log(str.__proto__ === age.__proto__); // false
```
## <a name="prototype"> prototype </a>
У любого объекта есть \_\_proto__ но prototype есть только у функции конструктор и класса. \_\_proto__ позволяет перемещаться по цепочке прототипов. А prototype это свойство функции  которое позволяет добавлять что-то в конструктор. Например выше я уже добавлял в Object.prototype свою функцию. prototype будет так же и у простых функций, внутри функций всегда есть конструктор, даже если мы не используем его. prototype ссылается на конструктор!.
```javaScript
// Это все встроенный классы, они все имеют прототип
Object.prototype;
Promise.prototype;
Function.prototype;
Boolean.prototype;
Number.prototype;
String.prototype;
Array.prototype;
```
Каждый prototype  - это независимый объект, с определенным  набором свойств и методов
так как prototype это всегда независимый объект, они сами по себе, поэтому они не равны между собой
```javaScript
console.log(Array.prototype === Object.prototype); // false и тд
```
Еще раз:
\_\_proto__ ссылается на prototype класса с помощью которого был создан объект.
Когда мы создали массив то его \_\_proto__ будет равно Array.prototype
потому что \_\_proto__ ссылается на этот прототип.
\_\_proto__ есть у любого объекта,
а prototype у class либо function. Так же и \_\_proto__ есть у функций и классов это свойство есть У ВСЕХ!
```javaScript
// Немного примеров.
console.dir(Function.__proto__ === Function.prototype); // true
// функция создается с помощью функции, поэтому вот так, но 
// прото протоипа все равно приходит к объекту.
console.dir(Function.prototype.__proto__ === Object.prototype); // true

// наша конечная станция null.
console.log(Object.prototype.__proto__ === null); true
```
Когда мы обсуждали ООП, то уже касались [прототипов и как работает наследование](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/OOP%20and%20prototype.md#-%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D1%82%D0%B8%D0%BF%D0%BD%D0%BE%D0%B5-%D0%BD%D0%B0%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-)<br>
