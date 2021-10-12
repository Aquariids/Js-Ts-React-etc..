[Навигация по DOM](#navigations)<br>
[Методы получения узлов Родителей, детей, соседей]()<br>
 
 ## <a name='navigations'> Навигация по DOM дереву и узлам. </a> ##
 Сейчас посмотрим на весь наш html документ. Для его получения используется свойство documentElement
```javaScript
console.log(document.documentElement);
```
![documentElement](https://github.com/Aquariids/MyJS/blob/main/app/img/%D0%B2%D0%B5%D1%81%D1%8Chtml.png)<br>
На скриншоте мы видим наше дерево, видим элементы, это все является узлами, но например текст не является элементом, но является узлом. "Каждая сущность в DOM будет узлом, но не каждый узел будет элементом." Теперь посмотрим как выглядят коллекции узлов, для этого используем свойство childNodes
#### childNodes - позволяет нам получить все узлы которые находятся в родителе.
```javaScript
console.log(document.body.childNodes); // получаем узлы которые являются детьми у body.
```
Мы получим такую коллекцию узлов:
![узлы](https://github.com/Aquariids/MyJS/blob/main/app/img/%D0%BA%D0%BE%D0%BB%D0%BB%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%20%D1%83%D0%B7%D0%BB%D0%BE%D0%B2.png)<br>
Под индексом 0 у нас узел 'text' - это перенос строки, далее идет комментарий '\<!-- body родитель section -->', потом опять перенос и так далее. Наши комментарии узлы, но не элементы.

## <a name='methods'> Методы получения узлов </a> ##

#### firstChild и lastChild - позволяют получить первого или последнего ребенка родителя

```javaScript
console.log(document.body.firstChild);
console.log(document.body.lastChild);
```
![firstChild and last](https://github.com/Aquariids/MyJS/blob/main/app/img/first%20and%20end.png)<br>
// Сейчас поработаемс командами которые позволяют получить родителя, соседей и детей

#### parentNode - получаем родителя элемента.
```javaScript
const bg = document.querySelector('.bg').parentNode;
console.log(bg);
```
![section узел](https://github.com/Aquariids/MyJS/blob/main/app/img/section.png)<br>
#### nextSibling - позволяет получить соседа впереди.
```javaScript

```
console.log(document.querySelector('[data-current="3"]').nextSibling); // получили text ( перенос строки)
//6) previousSibling - предыдущий сосед
console.log(document.querySelector('[data-current="3"]').previousSibling); // Тоже text ( перенос)
// мы путшествуем по всему дом дереву, не только по элементам, поэтому нужно помнить обо всех узлах в доме
// для элементов есть аналоги
//7) nextElementSibling.previousElementSibling  - работают также, но с элементами
//8) parentElement - тоже самое, но получаем родителя только элементы
// Такие же аналоги есть и firstChild и  lastChild
//9) firstElementChild и lastElementChild

// childNodes - у него нет такого аналога, но мы можем есго сделать сами с помощью for of

for (let node of document.body.childNodes) { // используем for of, а не forEach потому что в нем мы можем использовать continue и brake
  if (node.nodeName == "#text"){ continue;} // по факту мы получаем наш псевдомассив нодузел и говорим если нода(каждый наш элемент)
// если его свойство nodeName равно #text - (это я зашел в псевдо массив раскрыл ноду text и нашел имя.) То мы пропускаем эту итерацию 
  console.log(node); // в итоге в консоль мы получаем только элементы без  текстовых узлов
}


/*
*                                                                         2 - Дата атрибуты
 */
//1) Зачем?
// в дата атрибутах мы можем хранить информацию разного характера.
// атрибут class например  создан для назначения стилей, в нем не получится хранить, что угодно. в дата атрибутах можно.
// например id какого нибудь товара или здания, если вдруг это какой то поиск или карты и тд
//2) как выглядит 
// выглядит это так: <li data-current = '3'>3</li> Первая часть это всегда data потом дефис и след часть произвольная
//3) немного о data
// Тип хранимых в атрибуте данных должен быть string (строка). 
// Также в data-атрибуте могут храниться любые данные, которые можно перекодировать в строку. Преобразования типов должны выполняться в JS.
// data-атрибуты необходимо использовать только в крайнем случае, если ни один другой HTML-элемент или атрибут не подходит.
// Например, нельзя хранить класс элемента в атрибуте data-class.
//У одного элемента может быть сколько угодно много data-атрибутов с самыми различными значениями.
//4) получаем data
// console.log(document.querySelector('[data-curren="3"]')); // пишем в квадратных скобках имя data атрибута, далее устанавливем значение
