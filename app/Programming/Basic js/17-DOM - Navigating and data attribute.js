/*
 *                                                                               1 - Навигация по DOM
 */
//1) document.documentElement
console.log(document.documentElement); // получаем весь html
// Родительский элемент это тот который объеденяет другие, находящийся внутри него
// мы можем получать эти элементы
//2 childNodes - позволяет нам получить все узлы которые находятся в родителе
console.log(document.body.childNodes); // получаем узлы которые являются детьми у body
/*
NodeList(10) [script#__bs_script__, script, text, section.section, text, a, text, div.wrapper, text, script]
0: script#__bs_script__
1: script
2: text // это переносы строки в нашем body (ну или просто текст, они помечаются одинаково)
3: section.section
4: text
5: a
6: text
7: div.wrapper  - если мы в консоли открыли бы эту вкалду, внутри нашли бы и детей
8: text
9: script
10: text
length: 11
__proto__: NodeList

В общем пока так выглядит мое body

каждая сущность находящаяся в DOM по сути будет узлом, но не каждый узел будет элементом, например наш text(перенос) - это узел, он находится в дом дереве, но это не элемент
А если взять например
              <ul>
                <li>1</li>  - Сама li это дом элемент, но 1 внутри это текстовый дом узел

            </ul>
 */

//3) firstChild и lastChild - позволяют получить первого или последнего ребенка родителя
console.log(document.body.firstChild);
console.log(document.body.lastChild);


// Сейчас поработаемс командами которые позволяют получить родителя, соседей и детей

//4) parentNode получаем родителя элемента
console.log(document.querySelector('#current').parentNode); // получаем кнопку по id и затем ее родителя 
// Допустим нам нужно при клике на кнопку получить родителя этой кнопки и родителя diva в котором эта кнопка
console.log(document.querySelector('#current').parentNode.parentNode); // просто дублируем команду два раза
//5)  nextSibling - позволяет получить соседа впереди
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

//1) innerHTML - добавляет html код
div.innerHTML = 'привет'; // Вставили в наш див текст, но так же можно вставлять html струкктуру
div.innerHTML = '<h1> ПРивет </h1>'; // добавили в див h1 с текстом
//2) textContent - Добавляет только текст
div.textContent = 'Привет текст';

// Все это сделано для безопасности. Когды мы получаем данные прямо от пользователя (может ввел в модал окне и тд)
// суть такова, что если мы будем юзать  innerHTML то пользователь сможет менять структуру дома и сломать верстку
//3) insertAdjacentHTML('') - позволяет вставлять html код но так же указывать перед каким элементом или после
div.insertAdjacentHTML('afterbegin', '<h2> hello </h2>'); // 2 аргумента. 1 - это позиция. 2 - тот html код который нужно вставить
// В первый аргумент принимается 4 значения 
/*
 *  1) beforebegin -  вставляет html структуру перед элементом (до открывающего тега )
 *  2) afterbegin -  вставялет структуру вначало ВНУТРИ элемента (перед первым потомком)
 *  3) beforeend - вставляет в конец структуру внутри! (после последнего потомка)
 *  4) afterend - после элемента (после закрывающего тега).

*/


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
