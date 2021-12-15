[описание document, window,screen]()<br>
[Свойства получаемых элементов]()<br>

## Описание
document - это по факту объект который содержит всю html структуру.<br>
window - это окно в котором показывается наш документ.
Если мы будем уменьшать браузер или откроем консоль и будем ее вытягивать и тд, то меняться будет именно window<br>
screen - Экран. Это именно видимый монитор. У разных людей будут разные мониторы и поэтому screen будет отличаться.<br>



## <a name="elements"> Элементы и их свойства </a>
У элементов которые мы получаем со страницы, есть свойства для получения разных метрик.

#### clientHeight и clientWidth
Они нам нужны если мы хотим получить высоту и ширину включая padding, но без border и margin, а scroll отнимает нашу ширину и высоту. 
```javaScript
const box = document.querySelector('.block');
const width = box.clientWidth,
      height = box.clientHeight;

console.log(width, height); // 386 336
// в css у меня этот блок 400px на 350px и есть scroll который отнимает 14px.
// если мы например пропишем padding: 5px; , то будет 396 и 346. Но если пропишем border или margin ничего не изменится.
```
#### offsetWidth и offsetHeigth 
- получаем видимую часть, с учетом прокрутки и тд. Как написано в css 
```javaScript
const box = document.querySelector('.block');
const width = box.offsetWidth;
const height = box.offsetHeight;

console.log(width, height); // 404 354. У меня border 2px поэтому на 4px больше с каждой стороны. Scroll при этом уже не отнимает px так как он учитывается.
```



//3) scrollWidth и scrollHeight - получаем ширину и высоту полностью, то есть внутренний элемент который нужно проскроллить
//4) scrollTop - показывает сколько скрыто вне скролла ( с помощью этой штуки можно сделать шкалу сколько пользователь уже пролистал что то)

const _3width  = box.scrollWidth;
const _3height= box.scrollHeight;

console.log(_3height); // 642 - это вот с учетом всего текста внутри!

btnScroll.addEventListener('click', () =>{  // вешаем событие на кнопку
   // box.style.height = box.scrollHeight + 'px';  // и изменяем высоту блока при нажатии 

   console.log(box.scrollTop); // при нажатии будет показывать сколько пикселей осталось вне нашего поля зрения 

});


// кусочек кода с работой всякиш штук
function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        showModal();
        // window.pageYOffset - это свойство показывает сколько прокрученно
        // document.documentElement.clientHeight - а здесь видимая часть окна 
        // здесь мы их складываем и сравниваем scrollHeight.  тое сть если прокрученная часть и видимая совпадают с scrollHeight, значит мы прокрутили страницу до самого конца  
        window.removeEventListener('scroll',showModalByScroll);
    }
}
    window.addEventListener('scroll', showModalByScroll);


    console.log(new Date());

/*
*                                                   Координаты
*/
