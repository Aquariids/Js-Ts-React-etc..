[rest оператор](#rest)<br>
[Пример использования](#aye)<br>

## <a name="rest"> rest оператор </a>

`rest` оператор это брат оператора `spread`, только [spread](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/Basic%20js/Copying%20objects%20and%20links.md#%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80-spread) может взять массив и раскинуть его по аргументам. 
```javaScript
function spread(a,b,c) {
    console.log(a); //1
    console.log(b); //20
    console.log(c); //3
}

const arr = [1,20,3];
spread(...arr);
```
`rest` - он же на оборот аргументы превращает в массив:
```javaScript
function rest(a, b, ...rest) { // rest оператор можно назвать как угодно, главное его добавлять после нужных аргументов
    console.log(a); // привет
    console.log(b); // 10
    console.log(rest); // [1,2,3,4,5]
}

rest('привет', 10, 1, 2, 3, 4, 5) // вызываем функцию и передаем аргументы.
// сначала все как всегда, аргументы идут по очереди. Но когда наши основные заканчиваются, все остальное идет в rest
// rest по сути пустой массив для аргументов.
```
## <a name="aye"> Пример использования </a>
Сделаем у элемента класс по умолчанию.<br>
Добавим нужные классы элементу.<br>
```javaScript
class User { // создаем класс

    constructor(element = '.block',...classes) { // тут используем rest. classes теперь пустой массив
        this.classes = classes; // записываем новому экземпляру свойство classes.
        this.element = element; // записываем наш элемент в свойсва экземпляра.
        const el = document.querySelector(this.element); // получаем элемент.
       

        if (this.classes.length === 0) { // если classes пуст, то мы добавляем элементу класс по умолчанию.
            this.classes = 'поумолчанию'; // тут добавляем в массив само название класса.
            el.classList.add(this.classes); // и добавляем его к элементу через classList
        } else { // иначе если у нас там, что-то есть, то перебираем массив с аргументами и добавляем к элементу.
            this.classes.forEach(className => {
                el.classList.add(className);
            });
        }

    }

}


let newUser = new User('.block');// в таком случае у элемента будет класс 'поумолчанию'. Потому что при вызове в classes мы ничего не передали.
let twoNewUser = new User('.btnscroll','hi','friend')// в этом случае к элементу добавятся классы 'hi' и 'friend',


```
![rest](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/JavaScript/img/rest.png)<br>
