/*
*                                   Работа с окном и объектом документ
 */



// document - это по факту объект который содержит всю html структуру

//window - это окно в котором показывауется наш документ
// если мы будем уменьшать браузер или откроем консоль и будем ее вытягивать и тд, то меняться будет именно window

// screen - Экран. это именно видимый монитор. У разных людей будут разные мониторы и поэтому screen будет отличаться

// с помощью console dir можно проверить элементы 

console.dir(document); //и смотрим что вообще имеет объект document

// можно так чекнуть и виндов и скрин

/*
*                                   Нужные элементы и их свойства
*/

//1) clientHeight и clientWidth
// Они нам нужны если мы хотим получить высоту и ширину включая педдинги но без бордера, марджина и самого скролла


const box = document.querySelector('.scroll-block'),
        btnScroll = document.querySelector('.btn-scroll');

const width  = box.clientWidth;
const height = box.clientHeight;

console.log(width, height); // 331 и 348 вместе с border-box.
// в css у меня этот блок 350px на 350px 
// 331 выходит потому что скролл занимает 17px и он вычетается, нам показывают блок без скролла!
// если убрать скролл то будет 348 - не ебу где 2 px
/*
    {
        box-sizing: border-box;
    }


    корчое падинги и бордеры расширяют блок

    если ты сделал блок 500 на 500 и сделал паддинг слева 50 то блок уже  будет 550 на 500 
    а border-box позволяет оставить блок таким какой он был с ним, паддинг и бордер уже не будет засчитываться в блок
*/

//2) offsetWidth и offsetHeigth - получаем видимую часть, с учетом прокрутки и тд. как написано в css 

const _2width  = box.offsetWidth;
const _2height= box.offsetHeight;

console.log(_2height); // 350


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