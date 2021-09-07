[Имя функции и что такое функция](#functions)<br>
[Переменные внутри функций](#variables)<br>
[Оператор возврата return](#return)<br>
[Функция declaration](#decloration)<br>
[Функция exspression](#exspression)<br>
[Стрелочная функция](#arr)<br>
[Анонимная функция](#anonim)<br>

## <a name='functions'> Что такое функция и как ее назвать </a> ##
Функция - это блок в котором мы можем написать нужный код и использовать его в программе когда нам удобно. Если нам нужно написать одинаковый код, в нескольких местах,
то создается функция и в ней пишется код, далее функция вызывается в нужных местах. Функция как кирпич из которых строится программа.<br>
Имя функции желательно писать глаголом с препиской действия. В примере ниже это глагол показать (Показать какое то сообщение)
```JavaScript
// для создания функции пишем ключевое слово function и задаем ей имя.
function showMessage(/* тут аргументы(параметры)*/) { 
    // тело что-то выполняет.
    console.log('hello 42');
  
  showMessage(); // вызываем функцию. Вызов всегда сопровождается скобками.
  
}
```
Когда функция вызывается, мы можем дать  ей данные которые она бует использовать внутри себя:
```javaScript
function showText(text) {
    console.log(text);
    
  showText('Привет анимешникам');  // эту строку мы передали в параметр(аргумент) text. Аргументов передать можно сколько угодно, через запятую.
}
```
## <a name='variables'> Переменные в функциях </a> ##
Функции имеют доступ к глобальным переменным и могут их менять. Если мы указали переменную внутри и функция ее не нашла, она будет ее искать выше(Это там где мы ее вызвали) в глобальном окружении
```javaScript
let numTwo = 22; // глобальные переменные
let x = 14; 
function showVariables () {
    let num = 20; // это локальная переменная использовать можем только внутри функции
    numTwo = 10; // тут мы используем глобальную переменную, перезаписываем ее.
    let x = 12; // создаем функцию с именм как у глобальной. Но эту не видно! она локальная в функции.
    console.log(x); // мы можем здесь ее посмотреть, тут уже будет 12.
    // но если мы удалим переменную x в функции, то функция будет искать такую переменную выше.
    /* 
     Функция выполняет все поэтапно. Сначала мы создаем num, потом находим numTwo и функция начинает ее искать внутри, она не находит 
     и начинает искать выше, находит ее там, и перезаписывает, потом мы создаем x и обращаемся к ней в console.log, и вот если x она
     не найдет внутри, она начнет искать выше, и тогда у нас покажет 14.
    */ 
   
}
showVariables(); // вызываем функцию. С места вызова она ищет переменные над собой.
console.log(numTwo); // 10
console.log(x); // 14, 
```
## <a name='return'> Оператор возврата return </a> ##
Любая функция нам может вернуть какое-то значение.
Для этого используется return - этот оператор останавливает работу функции и возвращает что-то нам наружу, в то место где мы вызвали функцию(Это может быть и другая функция)
```javaScript
function f1(a,b) { 
    return a * b; // Это функция нам будет возвращать значение получившееся в результате a * b
}
// что бы увидеть результат вызываем внутри console.log()
// Это хорошая демонстрация работы return, он вернул значение внутрь console.log(), так как в нем мы вызвали нашу функцию
console.log(f1(10,2)); // здесь мы передали 10 в a и 2 в b.
```
                                             

## <a name='decloration'> Функция declaration </a> ##
Функция decloration - создается до начала выполнения скрипта, можно вызвать перед объявлением(написанием самой функции). Немного о том, как это работает:<br>
html страница загружается, грузит все по порядку, потом доходит до скрипта. Скрипт начинает загружаться и первом делом браузер находит все переменные var, если они там есть и все функции decloration. Скрипт их объявляет и после этого наш код начинает выполняться по порядку.<br>
Это нам позволяет использовать функцию вот так:
```javaScript
console.log(foo(1,3));  // мы вызвали функцию и задали ей аргументы
function foo (a,b) {     //  И только теперь мы ее создали(объявили)   
    return (a + b);
} // у функции decloration не нужно ставить ;
```

## <a name='exspression'> Функция exspression </a> ##
Функция exspression - создается лишь тогда, когда до нее доходит поток кода(скрипт когда грузит все), можно вызывть, только после объявления. По сути работате как просто переменная, поток ее создает, когда встречает.
```javaScript
let fooo = function () {
    console.log('hello');
    
}; // Здесь нужно ставить ; так как она в переменной, наша функция это внутреннее состояние нашей переменной.
fooo();
// если мы попробуем ее вызвать до объявления будет ошибка.
```


## <a name='arr'> Стрелочная функция </a> ##
Стрелочная функция выглядит как '() =>' - Это более краткий синтаксис функции expression.<br>
```javaScript
let sum = (a,b) => {
return a + b;
}
console.log(sum(1,2)) // 3
```
Если функция в одну строчку, то можно опускать скобки.
```javaScript
let sum = (a,b) => a + b; // Если будет один аргумент, то можно скобки убрать. a => a + b;

console.log(sum(2,2)) // 4
```
## <a name='anonim'> Анонимные функции </a> ##
Анониная функция объявлеяется на месте. Если после function есть идентификатор, другими словами имя, тогда функция именованная, во всех остальных случаях анонимная.
Любая стрелочная функция или функция exspression - это анонимная функция.
```javaScript
let fun = () => { //  Имя у нее есть, но имя это у переменной. Сама же фукнция без имени.
return 'ANONYMOUS';
};
```