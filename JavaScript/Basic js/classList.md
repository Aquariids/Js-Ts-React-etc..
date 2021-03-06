[Методы classList](#classList)<br>
[Что внутри у метода toggle](#toggle)<br>


Ранее мы использовали один метод add у classList для добавления класса, сейчас же мы будем работать в полную силу.
Что бы обратиться к списку классов пишем .classList это свойство которое есть у дом узла!
Например можно использовать свойство length:
```javaScript
// допустим у нас есть коллекция кнопок.
console.log(btns[0].classList.length); // так мы узнаем сколько классов у нашей первой кнопки их 2.
// так как у нас псевдо массив, мы не можем просто обратиться так btns.classList, нам нужно обращаться к элементу
```
### <a name="classList"> Методы classList </a>
```html
<button class="red yellow">  кнопка 1 </button>
<button class="blue"> кнопка 2 </button>
<button class="green"> кнопка 3</button>
<!-- Наши кнопки которые мы будем использовать. -->
```
```javaScript
btns = document.querySelectorAll('button'); // получаем псевдо массив с нашими кнопоками, для работы ниже
```
#### item( ) - позволяет получить класс с помощью индекса.
```javaScript
btns[0].classList.item(0); //  получим red - первый класс у элемента
```
#### add( ) - уже знакомы с этим методом. Добавляет класс.
```javaScript
btns[1].classList.add('hi', 'bb'); // через запятую можно передавать несколько классов
// теперь у второй кнопки 3 класса blue hi bb
```
![add](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/img/Add.png)<br>
#### remove( ) - удаляет классы
```javaScript
btns[1].classList.remove('blue'); // удалили класс blue.
```
### toggle( ) - позволяет тоглить классы, что значит переключать. 
Если у нас есть класс, он его удаляет, если нет, он его добавляет.
```javaScript
btns[1].classList.remove('blue'); // сначала мы удалили класс.
btns[1].classList.toggle('blue'); // потом затоглили и класс blue добавился.
// если мы не будем удалять класс, а сразу затоглим, то он удалится.
```
#### contains() - позволяет проверять есть ли класс, если есть то нам вернет true если нет false.
C пощью item() мы можем ипользовать классы в условиях, но мы не всегда знаем под каким индексом класс, для этого есть метод contains().
```javaScript
if (btns[0].classList.contains('red')) { // проверяет на наличие класса, получили правду 
    console.log('red'); // выполнили код
}
```
### <a name="toggle"> Что внутри toggle(Небольшая практика) </a>
```javaScript
btns[0].addEventListener('click', () => {
    if (!btns[2].classList.contains('red')) { // мы проверяем, если у btns[2] нету класса red, то мы его добавляем
        // contains проверяет на существование класса и возрвращает true если его нет, потому что мы использвуем оператор ! - не
        btns[2].classList.add('red'); // выполняетс это условие
    } else {
        btns[2].classList.remove('red'); // если же класс есть, то мы его убираем
    }
});
```
С использованием toggle:
```javaScript
btns[0].addEventListener('click', () => {
    btns[2].classList.toggle('red'); // работает точно так же
});
```
Иногда нужно делать все вручную, поэтому этим нужно уметь пользоваться.
