// Тут будут некоторые вопросы которые могут попасться на собеседовании
// и по html и по  css



                        // ! Вопросы по html
/*
1) - Что такое Doctype.
<!Doctype html> - используется для указания типа документа
Указывается первой строкой для html документа или Xml документа
Служит для того, что бы браузер мог понять как ему интерпретировать страницу и в соответствии с каким стандартом  парсить документ
исходя из этого он будет опр какие теги валидные, а какие уже устарели

2) - Опишите базувую структуру html страницы



<!DOCTYPE html>  В самом верху идет Doctype
<html lang="en"> За ним идет основной тег html - это корневая обертка страницы внутри идет head и body
<head>   - имеет все необходимые данные об html документе. Это может быть заголовок, подкл стилей шрифтов, описание, мета инфармация
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>  - содержит всю разметку html Документа именно она будет отображаться в браузере
    
</body>
</html>




3) - что такое семантика. Какие семантичные теги есть

Семантика в контексте html - это использование правильных тегов описывающих содержимое контентов внутри себя
типо короче если надо сделать шапку не пиши div class header - используй сразу тег header
то же самое для section, ul,p, nav, и тд


4) Какая разница между тэгами  <strong> <em> и <br> <i>

Этот вопрос очень хорошо иллюстрирует симантичность элементов
<strong> и <b>  - делают текст жирным
<em> и <i> - курсивным

однако тэги strong и em - не только меняю визуальную часть.
Они служат для добавления обернотому элементу логического выделения 
Например внутри параграфа обернутое слово будет не только выделено, но и при чтении страницы поисковыми робатами или скрин ридерами
на нем будет сделан акцент в то время как <b> и <i> - просто меняют визуальную вид

5) Что такое валидация? типы проверок html документа?

Валидация - это проверка документа специальной программой валидатором на соответствие установленым веб стандартом и ищит ошибки
Эти стандарты называются спецификациями. Они разработаны консорциумом world wide deb (W3C) ( консорциум всемирной паутины)

Валидатор работает следующим образом: Сначала проверяется тип документа, который указывается с помощью Doctype
Затем проверяется html код на правильность и отсутствие ошибок  при этом проверятс правильность имен тегов и их вложенности


6) Какой тэг использовать, что бы сверстать кнопку?

Смотря какую именно кнопку нужно сделать?

1 -  simple button (Обычная кнопка) функциональность который может добавиться через js
<button> Button </button>

2  - Form submit button (Кнопка подтверждения формы)
либо так:
<button> type ="submit"> Button</button>

либо так:
<input type ="submit"> value="button"

3 - input type ="button" старый вариант

4 - <a href="#"> Button </a> тут ссылка и мы ее с помощью css мутим под кнопочку

7) есть ли у html свои дефолтные стили

да, почти каждый html элемент обладает своими стилями
у h1 h2 и тд меняется размер у p добавляется margin свой i и b например преднозначены только для изменения визуал контента
нюанс в том, что данные стили отлличаются в браузерах, для кроссбраузерности используется нормалайз или ресет для сбрасывание стандартных стилей


8) для какого тэга используется атрибут alt и зачем он нужен

атрибут alt ддобавляется для тега img и нужен для того, что бы если вдруг картинка не отображается, там будет выводиться текст из alt
атрибут alt обязателен!

*/


                        // ! Вопросы по css


/*
1) - что такое css и для чего он используется
css расшифровывается как - Cascading Style Sheets — каскадные таблицы стилей
преднозначен для добавления различных стилей  на html страницу
селектор    свойство   значение
    p       {color:   blue}


2) - варианты добавления css на страницу 

существует 4 способа добавления стилей на html страницу 
1 - инлайн стили. Когда css свойство с помощью атрибута style прописывается прямо в html документе на конкретном элементе
<div style="background-color:red;"> </div>

2 - использование глобальных стилей.
в тэг head добавляется тэг <head><style>  внутри которого описываются стили div {background-color: red;}</style> </head>

3 -  использование внешнего файла css подключаемый в head с помощью link

4 - импорт внутри файла css
@import "style/main.css";


3) - типы позиционирования в css

В css существует 5 основных типов позиционирования

1 - Static - дефолтный тип позиционирования. Он присваивается всем элементам по умолчанию. Элементы находятся в основном потоке документа и перемещать их нельзя

2 - Relative -  Элемент позиционируется относительно своего текущего положения
типо если мы поставим relative мы сможет с помощью left/right/top/bottom. поменять его позицию относительно его обычного положения
 есть вот элемент в потоке и мы к ниму ебашим position: relative; top: 10px; - и он просто сдивется вниз
 сверху типо добавится 10px, их не будет видно, это не margin и не padding и относится будет только к нашему элементу

 3 - Absolute - асболютное позиционирование, элемент можно перемещать и он формирует новый поток 
 позиционируетя относительно элемента у которого позиция не static, если такого нет то окна браузера

 4 - fixed  - позиция только относительно браузера  

 5 - sticky - не ебу че такое


 4) Блочная модель Css  

 Блочная модель позволяет расчитать какое итоговое пространтство будет занимать элемент на странице
 в нее входит сам контент, паддинг, бордер, марджин и сумарный размер элемента будет состоять из этих параметров
 


 5) что такое селектор. Какие селекторы существуют

 Селектор это часть css правила, который сообщает браузеру к какому элементу или элементам будет применен стиль
 Все селекторы делятся на две большие группы
 Simple selectors ( Простые
     .class {}
     #id {}
     p {} обычный одиночный селектор
     a[href="test"] {} селектор атрибута
     * {} универсальный селектор
 )

 complex Selectors ( состовные селекторы
     h1,h2, span {} групповые селекторы
     div p {} Селектор потомка
     li > a {} селектор только дочеренего элемента
     a:hover {} селектор псевдо класса
     li:nth-last-child(2n){} псевдо класса
 )


 6) Что такое специфичность селектора. Как считать вес селектора

 Специфичность - это способ с помощью которого браузеры опр какие значение css свойств будут применены к элементу
*/



//                  ! Вопросы по JavaScript 

/*
1)


*/