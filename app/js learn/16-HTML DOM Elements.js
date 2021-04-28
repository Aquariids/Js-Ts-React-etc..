//                                       0.1 - Об html как объекте и документе

/*
Html - Это документ со своей структурой.
и html может быть представлен как дерево узлов, его мы видим когда в браузере
открываем в инспекторе кода Elements.
Узлы связаны между собой отношениями родительскими дочерними
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.min.css">
    <title>Document</title>
</head>
<body>                                      <-  Родитель
    
    <section class="section">
        <div class="bg">Я гей</div>
        <div class="bg">Я гей</div>
        <div class="bg">Я гей</div>
        <div class="bg">Я гей</div>        <-   Дочерние элементы body
    </section>
    <script src="js/script.js"></script>
    
    
</body>
</html>

Когда документ сформирован как выше например, мы можем его представить ввиде обычного объекта
Поэтому и называется Объектная Модель Документа 
Document Object Model (DOM)
и как у любого объекта у него могут быть свои методы
их мы будем использовать что бы получить доступ к определенным элементам на странице
*/

//                                      1 - Обращаюсь к DOM

// обращаемся к DOM мы через document.

// 1) getElementById - получаем элемент через id 
//                        внутри скобок указываем id в виде строки!
const bg = document.getElementById('bg-id'); // обращаемся к объекту нашему дому document, а потом обращаемя к методу getElementById
console.log(bg); // получим весь div <div id="bg-id">Я гей</div>

// 2) getElementsByTagName -  получаем уже ПСЕВДОМАССИВ по тегу

const btns = document.getElementsByTagName('button');
console.log(btns); 
/* Вот наш псевдо массив. О них в файле 13 глава 4
HTMLCollection(4)
0: button.btn
1: button.btn
2: button.btn
3: button.btn
length: 4
__proto__: HTMLCollection
 */