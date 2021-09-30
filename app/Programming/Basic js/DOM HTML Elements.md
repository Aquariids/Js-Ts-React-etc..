[html как объект и документ или что такое DOM]()<br>
[]

## html как объект ##
html - Это документ со своей структурой.
html может быть представлен как дерево узлов, его мы видим когда в браузере открываем в инспекторе кода Elements.
Узлы связаны между собой отношениями родительскими дочерними.
```html
<!DOCTYPE html>
<html lang="en"> <!-- html родитель head и body -->
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.min.css">
    <title>Document</title>
</head>
<body> <!-- body родитель section -->
    
    <section class="section"> <!-- дочерний элемент body, его ребенок -->
        <div class="bg">Я</div>  <!-- Это дочерние элементы section-->
        <div class="bg">г</div>
        <div class="bg">i</div>
        <div class="bg">й</div> 
    </section>
    
</body>
</html>
```
Когда документ сформирован, то мы можем его представить ввиде обычного объекта поэтому это называется "Объектная Модель Документа - Document Object Model (DOM)".
И как у любого объекта у него могут быть свои методы их мы будем использовать что бы получить доступ к определенным элементам на странице.

//                                                  1 - Обращаюсь к DOM

// обращаемся к DOM мы через document.

// 1) getElementById - получаем элемент через id 
//                        внутри скобок указываем id в виде строки!
const bg = document.getElementById('bg-id'); // обращаемся к объекту нашему дому document, а потом обращаемя к методу getElementById
console.log(bg); // получим весь div <div id="bg-id">Я гей</div>

// 2) getElementsByTagName -  получаем уже ПСЕВДОМАССИВ по тегу (Даже если будет один элемент, мы все равно получим псевдомассив)

const btns = document.getElementsByTagName('button');
console.log(btns); 

/* Вот наш псевдо массив. О них в файле 13 глава 4
HTMLCollection(4)
0: button.btn
1: button.btn
2: button.btn
3: button.btn
length: 4
__proto__: HTMLCollection насоледуется от html коллекции - это спец структура

Получаем нужный элемент
2.1) Указываем при получении нужный индекс
const btns = document.getElementsByTagName('button')[2]; 
console.log(btns);

2.2) Указываем индекс при использовании
console.log(btns[2]);
 */

// 3)  getElementsByClassName('bg'); // получаем по имени класса    

const className = document.getElementsByClassName('bg'); // Точку не ставим, этот метод уже знает, что работает с классом
console.log(className);
/*
HTMLCollection(4)
0: div#bg-id.bg
1: div.bg
2: div.bg
3: div.bg
length: 4
bg-id: div#bg-id.bg
__proto__: HTMLCollection
Получаем так же псевдо массив
*/
//                                                         1.1 - Обращаюсь к DOM (Более современные способы и юзабельные)
// 4)  querySelectorAll - Тут получаем за счет селекторов css
const inSection = document.querySelectorAll('.bg'); // тут мы получаем черз класс, здесь обязательно ставить точку
// const query = document.querySelectorAll('#bg-id'); // через решотку получаем id
// https://learn.javascript.ru/css-selectors тут подробнее о селекторах
// Так же у querySelectorAll есть метод forEach!!  Об этом побробнее в файле 13 глава 2 часть 3
inSection.forEach(item => { // вывели все элементы с классом bg
    console.log(item);   
});

// 5)  querySelector - все тоже самое, только получаем самый первый элемент который встретит (ПОЛУЧАЕМ ЭЛЕМЕНТ, НЕ ПСЕВДОМАССИВ!)
    const inSectionOneElement = document.querySelector('.bg');
console.log(inSectionOneElement); // получили самый первый bg

/*                                                           1.2 Получаем элементы из родителя
1)
Так же если нам нужно получить элемент внутри какого-то родителя, а этого родителя мы уже получили,
то нам не обязательно постоянно юзать document

Например
const section = document.querySelector('.section'); наш родитель
const inSection = section.querySelectorAll(.bg);  мы говорим получить наши элементы которые находятся только  ВНУТРИ section
2) вторая фишка. Мы можем сразу указать нужный тег например:
const section = document.querySelector('.section img');  получаем все картинки в .section
*/

/*
*                                               2 - Действия с элементами на странице         



*                                                2.1 - Методы,объекты, а так же меняем стили!
 */                                                     
// 1)  console.dir(); 

console.dir(inSectionOneElement); // смотрим на элемент в качестве объекта
// в консоле браузера мы с помощью этой команды можем увидеть все свойства этого элемента(все что можем с ним сделать! )
// так же и узнать нужные стили и поменять их.
// Внутри это выглядит вот так style: CSSStyleDeclaration ( внутри этого объекта все свойства inline) (inline стили самые важные!
// не важно, что будет в css, inline перебивают остальные. Сделано это для того, что бы вот так вот с помощью js мы могли манипулировать
// такими стилями)
// 2) style - это наш объект который мы нашли внутри нашего элемента
inSectionOneElement.style.backgroundColor = 'green'; // обращаемся к нашему элементу к объекту style внутри него и к backgroundColor внутри style
// в js css свойства пишем через CamelCase.
inSectionOneElement.style.width = '100px'; // указываем все строками и с четкими ед измерениями
btns[0].style.borderRadius = '100%'; // выбираем нашу первую кнопочку из псевдо массива.. 
// 3) cssText - вставляем прямо строки в css
let red = 'red';
inSectionOneElement.style.cssText = `background-color: ${red}; width: 400px;`; // пишем уже обычный css код. Так же можем пользоваться интерполяцией
// 4) меняем сразу несколько элементов! цикл for (редкая тема)

for (let i = 0; i < btns.length; i++) { // говорим, что перебераем пока не закончатся элементы в нашем псевдо массиве
    btns[i].style.backgroundColor ='green';  // обращаемся к нашему псевдомассиву и будем получать каждый элемент начиная с 0 (так как i = 0)
}

// 5) forEach() только для querySelectorAll. о forEach() в файле 13 глава 2 часть 3

inSection.forEach(item => {
    item.style.backgroundColor ='green';
});
/*
 *                                                     2.2 Создаем свои элементы! (методы)
*/                                                           

// 1)  createElement()

const div = document.createElement('div'); // Обращаемся к документу, к методу createElement('Тут элемент который хотим создать') 
// после элемент создан, но он хранится только внутри js файла

// 2) createTextNode() Текстовый узел - это элемент без оболочки тега
const text = document.createTextNode('Тут был я'); // создали текст

/*
 *                                                                   2.3 Работаем с css Селекторами! уже не inline! (методы)
*/                                                        

// 1) СУПЕР СТАРАЯ ТЕМА НЕ ЮЗАЕТСЯ className

// 2) classList - юзабельная тема

div.classList.add('black'); // add - это метод у свойства classList  
//add() - добавляет класс к элементу
// Все, наш элемент создан. ВСЕ ЭТО ПОКА В JS ФАЙЛЕ

/*
 *                                                                      2.4 - А теперь добавляем элемент в наш DOM дерево (методы)
*/                                                    
// 1) append(тут наш элемент) - запихивает в самый конец элемент
// в нашем случае мы в конец body кладем div который создали выше
document.body.append(div);
// так же можем при получении родителя, добавить в него элемент
// document.querySelector('.section').append(div); // Мы получили наш элемент по селектору и в него сразу добавили див
    const section = document.querySelector('.section'); // мне еще нужен будет наш элемент, поэтому в переменную добавим)
// если мы сейчам перейдем в консоль, то в конце body увидим это <div class="black"></div>
// Теперь наш элемент уже в доме!
//2) prepend() - пихает элемент в самое начало
    section.prepend(div); 

//3) before and after - говорим перед (before) каким элементом вставить наш элемент или после(after) какого
inSection[1].before(div); // ставим наш див перед 1 элементом (по индексу)
inSection[2].after(div); // ставим после 2 элемента наш див ( все по индексу!) 
//4) remove() - удаляем элемент
inSection[0].remove();
//5) replaceWith() - заменяет один элемент на другой
inSection[0].replaceWith(btns[0]); // мы заменили первый элемент псевдомассива другим первым элементом из другого псевдомассива

/*
 *                                                                      2.5 Старые методы!!!!!!!!
*/                                                      

//1) appendChild() - тот же append
document.appendChild(div);
//2)  insertBefore () - указываем перед каким эдементом вставить наш, 2 аргумента первый - это, то что вставляем, а второй, перед чем
section.insertBefore(div,inSection[1]); // обращаемся к родителю, указываем что вставляем и перед каким элементом
//3) раньше вот так удаляли removeChild()
section.removeChild(inSection[1]); //  опять обращаемся через родителя и указываем элемент
//4)  replaceChild - тот же replaceWith() только супер неудобный
section.replaceChild(div,inSection[0]); // два аргумента 1 - тот элемент на который хотим менять 2 - то, что меняем. 
// и опять через родителя ебучего все

/*
 *                                                                      2.6 - Работаем с элеметами! (методы)
 */

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
