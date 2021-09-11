[Цикл while](#while)<br>
[Цикл for](#for)<br>
[Цикл for of](#forOf)<br>
[Цикл for in](#forIn)<br>


Циклы - это конструкции которые выполняют многократно определенный блок кода. Если нам нужно много раз сделать однотипное действие, то привет циклы.
## <a name ='while'> Цикл while и do while </a> ##
while дословно передводится 'пока....(что то делается)'.<br>
Пример:
```javaScript
let num = 50;

while (num <= 55 ) {   // пока num меньше или равно 55, мы будем выполнять код.
    // выполняться он будет вечно, так как у нас всегда num меньше 50, по этому используем инкремент
    console.log(num);
    num++;
}

```
do while - тот же цикл, только здесь do выполнится в любом случае как минимум один раз, даже если в условии будет false.<br>
Пример :
```javaScript
let num = 50;
do {
    console.log('привет'); // выведет один раз привет, потом проверит условие, оно не выполнится и прервется, 
    // если условие будет true, то будет работать как обычный цикл while.
    numTwo++;
}

while(num >= 55 ); 
```
## <a name ='for'> Цикл for </a> ##

Цикл for - самый популярный, его можно более точно настроить, так как в нем может быть 3 аргумента.<br>
 1. То, с чего начинается цикл. Обычно это создание перменной, ну или добавляем туда нужную переменную.
 2. Условие при котором цикл остановит свою работу. В нашем случае пока i меньше или равна 8 будет работать.
 3. Шаг цикла - то что будет происходить в каждой итерации(последующее повторение) цилка, обычно это инкремент, просто увеличиваем i на единицу.
```javaScript
//      1        2      3
for (let i = 0; i <= 8; i++) {
 console.log(i) // выведет от 0 до 8
}
```
Операторы break и continue:
break:
```javaScript 
for (let i = 0; i <= 8; i++) {

    if (i === 6) { // пишем условие, что если i равна 6, то прерываем цикл!
        break; // прерывает цикл!! выведет с 1 до 5, так как на самой 6 произошел break и все прервалось!
    }
    console.log(i);
}
```
continue:
```javaScript
for (let i = 0; i <= 8; i++) {
    console.log(i) // выведет от 0 до 8

    if (i === 6) { // пишем условие, что если i равна 6, то прерываем цикл!!
        continue; // делает тоже что и break, но не прерывается, когда он доходит до 6 он сбрасывает цикл, а потом продолжает его опять
        // здесь выведет с 1 до 8 пропустив 6(1.2.3.4.5.7.8) (пропускает нужный шаг, по сути)
    }
    console.log(i);
}
```

## <a name = 'forOf'> Цикл for of </a> ##
Цикл for of перебирает значения. Используется в основном на массивах. 
```javaScript
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
for (let key of arr) { // создаем переменную в которую будут складываться наши ключи(значения) и указываем ключевое слово of и после него массив который перебираем.

    console.log(key); // выдаст наши значения от 1 до 8.
}
```
## <a name = 'forIn'> Цикл for in </a> ##
Цикл for in перебирает свойства и значения. Используется на объектах
```javaScript
const obj = { // объект
    a: 1,
    b: 2,
    c: 3
};

for (let key in obj) {
    Через [] скобки мы обращаемся к key, внутрь key складываются свойства, таким синтаксисам мы получаем именно значения этих свойств
    console.log(obj[key]); // выдаст нам значения 1,2,3. 
    А для получениях самих свойств, просто указываем key
    console.log(key); // выдаст свойства a,b,c
}
```
- [*Консоль разработчика и общение с пользователем*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Browser%20Methods%20and%20console.md 'Консоль разработчика и общение с пользователем')<br>
- [*Строгий режим (Strict mode)*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/use%20strict.md 'Строгий режим в js')<br>
- [*Переменные*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Variables.md 'переменные')<br>
- [*Динамическая типизация и типы данных*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Data%20types%20and%20dynamic%20typing.md 'Типы данных')<br>
- [*Интерполяция*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Interpolation.md 'Интерполяция')<br>
- [*Операторы*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Operators.md 'Операторы')<br>
- [*Условные операторы*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/if%20and%20switch.md 'Условные операторы')<br>
- [*Функции*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Functions.md 'Функции')<br>
- [*Callback функции*](https://github.com/Aquariids/MyJS/blob/main/app/Programming/Basic%20js/Callback%20functions.md 'callback функции')<br>
  
   
    
   

