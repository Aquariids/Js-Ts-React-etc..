[Создаем класс](#classes)<br>
[Немного ООП. Наследование и абстракция](#OOP)<br>

По факту класс это красивая обертка [функции конструктора](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/Basic%20js/Constructor%20function.md) - синтаксический сахар.<br>
Нужно все это ради шаблонизации. Вместо того что бы каждый раз по новой создавать какой-нибудь слайдер
статью или еще что-то, описывать все свойства, методы и тд. Мы будем создавать один шаблон, который будет задавать базу
и уже от этого шаблона мы будем создавать экземпляры, отдельных потомков и тд.

## <a name="classes"> Создаем класс </a>
```javaScript
class Rectangle { // пишем ключевое слово class и название класса  с большой буквы

    // Теперь нам нужно его сконструировать. Что он умеет делать, какие изначальные будут свойства.
    // для этого есть свойство constructor

    constructor(height, width) { /*тут аргументы, которые будут приходить из вне при создании экземпляра*/
        
        this.height = height; // далее все как в функции конструктор.
        this.width = width;
    }
    // так же добавим метод
    calcArea() {
        return this.height * this.width;
    }
}


const square = new Rectangle(10, 10); // записываем в переменную наш объект и передаем аргументы. Все, это наш новый экземпляр
const long = new Rectangle(20, 100);

console.log(square.calcArea()); // 100 
console.log(long.calcArea()); // 2000
```
## <a name="OOP"> Немного ООП </a>

### Абстракция -  это когда мы отделяем концепцию от ее экземпляра.
```javaScript
 class Rectangle {

     constructor(height, width) {
         this.height = height;

         //                  ЭТО КОНЦЕПЦИЯ

         this.width = width;
     }
     calcArea() {
         return this.height * this.width;
     }
 }



 // это наш экземпляр созданный на основе нашей концепции. Все это и есть прицип Абстракции
 const long = new Rectangle(20, 100);
```

### Наследование
Наследование это способность нашего объекта или класса базировться на основе другого объекта или класса.
```javaScript

class Rectangle { 

    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle { // прописываем extends (расширяем) далее от чего наследуем, с кем расширяем семейку так сказать)
    constructor(height, width, text, bgColor) { // записываем аргументы, от них никуда не уйдешь)
        super(height, width /*внутри можем указать те свойства которые нам нужны */ ); // этот метод вызывает то же что  было у родителя в constructor, что бы не копировать сто раз
        // есть очень важное правило super должен быть на первом месте в конструкторе

        this.text = text;
        this.bgColor = bgColor;

    }
    showMyProps() {
        console.log(`Текст ${this.text}, цвет: ${this.bgColor}`);
    }
} // все наш класс который наследует все от главного класса готов

const div = new ColoredRectangleWithText(25, 10, 'helolo', 'red');


div.showMyProps(); // юзаем метод из нового класса.
console.log(div.calcArea()); // и юзаем метод нашего главного класса.
```
![](https://github.com/Aquariids/MyJS/blob/main/app/img/classes.png)<br>
