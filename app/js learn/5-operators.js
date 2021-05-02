'use strict';

/*                                                             0-ОПЕРАТОРЫ В JS 
    тут буду юзать learn js само собой,  ну и отсебятину
*/


//                                  0.1 - Термины


/*
1) (ОПЕРАНД) – то, к чему применяется оператор (5 * 2) - два операнда(5 и 2) или аргументы*

2) (УАРНЫЙ) - Унарным называется оператор, который применяется к одному операнду

                Например, оператор унарный минус "-" меняет знак числа на противоположный: 
*/
let x = 1;

x = -x;
alert(x); // -1, применили унарный минус

/*
3) (БИНАРНЫЙ) - Бинарным называется оператор,
    который применяется к двум операндам. Тот же минус существует и в бинарной форме:
*/
let a = 1, b = 3;
alert(b - a); // 2, бинарный минус вычитает значения

/*Формально, в последних примерах мы говорим о двух разных операторах, использующих один символ: оператор отрицания (унарный оператор,
 который обращает знак) и оператор вычитания (бинарный оператор, который вычитает одно число из другого */



//                                                  1 - Операторы присваивания


//  1) ПРИСВАИВАНИЕ = 

let j = 1; // присвоили переменной j единицу!
let h = 20;

let k = j + h; //присвоили k j + h в k сейчас 21
//  2) Присваивание со сложением +=
let o = 5;
// o = o + j + h; // 26. Вот что бы так не писать, есть оператор +=
o += j + h; // сейчас мы j и h прибавили к числу которое было в o, мы не перезаписали его, а дополнили!
// тоже самое *= сразу умножаем и присваиваем!
// Вместо  o = o * 5 // 25!
o *= 5; // 25
// 3) Присваивание с вычитанием  -=
// 4) Присваивание с умножением  *= 
// 5) Присваивание с делением   /=
// их там дохуя работают одинаково(просто сокращенная форма x = x (оператор) y)
console.log(o);
//                                              2 - Операторы сравнения



// 1) ОПЕРАТОР РАВНО ==

console.log(2 * 5 == 10); // Выдаст true/ Мы умножали 2 на 5 вышло 10, а потом спросили равно ли это 10

// и нам вернуло булевое значение, Да равно!

// 2) Строгое равно ===

// строгое равно, Так же проверяет и тип!
console.log(2 * 5 === '10'); // false  (но если мы сделаем так '2' * '5' === 10 - будет true, так как умножение является более приоритетным,
// сначала js умножит все и переведет в числа, а только потом сравнит
// да  у всех операторов есть приоритеты, как и в матиматике умножение и деление приоритетней например прибавляения! 

// 3) Не равно !=

console.log(2 + 2 !== 4); // false, так как 2 + 2 равняется 4
// по сути мы спрашиваем равняется ли 2 + 2  не четырем? 


// 4) Строго не равно !==
console.log(2 + 2 !== '4'); // true - так как 2 + 2 = 4 потом он проверяет эту 4 с '4'
// и так как у нас строгое не, то дает true, так как 4 и '4' - разные вещи,
// но если мы используем != не строгое,  то выдаст false

// 5) Больше >
// Возвращает true, если операнд слева больше операнда справа.
    console.log(2 > 1); // true
// 6) Больше или равно >=
// Возвращает true, если операнд слева больше или равен операнду справа.
    console.log(2>=1); // true (2 больше одного!)
    console.log(2>=2); // true (2 равно 2!)
// 7) Меньше <
// Возвращает true, если операнд слева меньше операнда справа.
    console.log(1 < 2); // true (1 меньше 2)
    console.log(1 < 0); // false ( 1 не меньше 0)
// 8) Меньше или равно <=
// Возвращает true, если операнд слева меньше или равен операнду справа
    console.log(1 <= 1); // true (1 равен 1)
    console.log(10 <= 2); // false (2 меньше 10)

//                                                  3 - Математические операторы 
/* 1) ВЗЯТИЕ ОСТАТКА % 

оставялет остаток после деления.
например моя супер функция минуты в часы:
function getHours (allSum) {
let minutes = allSum % 60;
let hours = (allSum - minutes) / 60 + `:${minutes}`;
return hours;

мы при вызове функции указываем минуты, которые деляетс на 60 с остатком, так как в часу 60 минут)
после деления остается остаток например: 30 % 60 (какой остаток? а никакого, поэтому нам просто выведет 30)
а если 61 % 60 с остатком? остаток 1, очевидно, да? по сути наше первое число нужно уместить в 60 ящиках(представим это так)
60 % 60 все очень просто у нас 60 пуписичек и 60 ящиков, остатка нет) но тут бах не 60, а 61 и все 1 лишний - это и есть остаток
68 % на 60 Даст остаток 8
80 % на 60 даст остаток 20 ( что в моей функции дает нам 1 час и 20 минут)
до сих пор не понимаю, почему в калькух в гугле, просто делят на 60. ужас конечно
и так деланее пока мы не придем к 120, что опять дает 0 а 119 дает нам наши 1 час и 59 минут
а возьме 50, То все у нас 50 ящиков, те же 80 % 50 давать теперь будет 30
по сути мы начиная от 50 и до опять 50 то есть уже 100 потмо 150 и тд(мы по ступенькам как бы идем) 50 и 50 дают 0 остатка 51 и 50 уже 1 и так до 100, пока мы не пройдет эти 50 ступеней
52 и 50  дадут 2 остаток и тд( на всякий объясняю прям супер просто)

если по математике, то все деление просто пытается все четко уместить 153 / 50 будет 3,06 ( деление просто пытается все уместить в 50 ящиков
что в сумме выходит 3 ящика это наше 50 + 50 + 50(150) а 3 тоже пытается разбить по всем ящикам и выходит 3 / 50 = 0,06 в сумме всех чисел = 3,06  
Наше деление просто раскинуло все по ящикам а остаток в 3 разделила так, что бы они тоже там уместились.
а оператор % просто нам показывает остаток, без дальнейшего развития и не пытается ничего уместить. в отличии от обычного деления которе наш остаток в 3, тоже пытается разделить по ящикам
153 % 50 = просто даст 3 и все  - это то, что не уместилось в ящиках. 
так как говорим только о остатках остальную часть функции не вижу смысла объяснять, к тому же это увижу только я сам, капец
зачем я все это пишу?





                2) Возведение в степень **
В выражении a ** b оператор возведения в степень умножает a на само себя b раз.

Например:

alert( 2 ** 2 ); // 4  (2 умножено на себя 2 раза)
alert( 2 ** 3 ); // 8  (2 * 2 * 2, 3 раза)
alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2, 4 раза)


            3) Сложение строк при помощи бинарного +


Обычно при помощи плюса '+' складывают числа.

Но если бинарный оператор '+' применить к строкам, то он их объединяет в одну:
let s = "моя" + "строка";
alert(s); // моястрока

alert (2 + '2'); если есть хотя бы один операнд, то второе автомаом переведет тоже в число.  (тут двойка строка)
выведет: 4

            4) Унарный плюс и минус

Преобразует не числа в числа

console.log(5 + +'5') = 10
console.log(+""); = 0
console.log(+true); = 1

    вот так работаем со строками

let apples = "2";
let oranges = "3";

оба операнда предварительно преобразованы в числа
alert( +apples + +oranges ); // 5

Унарный минус:
Если z равно 3, тогда -z вернёт -3.
*/
let z = 3;
console.log(-z); // -3



//  5) ИНКРЕМЕНТ - ДЕКРЕМЕНТ
//                     

let incr = 10,
    decr = 10;

//постфиксная форма:

//    incr++; // прибавил 1
//    decr--; // отнял 1

// Префиксная форма:

//    ++incr; // прибавил 1
//    --decr; // отнял 1


// РАзница между ними!

console.log(incr++); // будет 10.  постфиксная форма, сначала возвращает старое значение
console.log(decr--); // Будет 10 если делать сразу как здесь в логе, то везде еще будет по 10
// но если начать ими сейчас пользоваться, То значения уже будут изменены, как пример ниже
console.log(++incr); // 12.  Префексная форма сразу нам возвращает значение!
console.log(--decr); // 8. но если тут ее изменить на постфиксную форму, то будет 11 и 9 и тд
//                      оно работает с числом как нужно , но сначала возвращает старое число, а после уже новое!

/*
Инкремент/декремент можно применить только к переменной.
Попытка использовать его на значении, типа 5++, приведёт к ошибке. */





//                              4 - Логические Операторы  && и || (и - или)

// 1) && - И

const isCheck = true,
    isClose = true;
console.log(isCheck && isClose); // выдаст true!
// если хотя бы одно значение будет false, то мы будем получать всегда false
// по сути это звучит так 'если и там и там true то мы делаем что то!'
// Логическое и! и то и то должно быть верным 

//  у && есть небольшое правило связанное с возвратом значения
console.log(2 && 1 && null && 0 && undefined); // null
// оператор слева на право проверяет 2 - дает true 1 - тоже ture
// далее null - false. Оператор запинается на первом false  и его взвращает

// 2) || - или 

const isOpen = true,
    isclosed = false;
console.log(isOpen || isclosed);
// тут если хотя бы одно есть true то будет выдавать true
// мы как бы говорим: есть хотя бы ЭТО или ЭТО и если есть одно из них, мы получаем true!
// Все логично

// тут тоже правило что и с && только запинается на первом true
console.log(0 || 3 || 0); // 3



// совсем для маленьких:
и
// пися && пися = это два одинаковых слова? (да)
и
// пися && ПупаЛупа = это два одинаковых слова? (нет)
или
// пися || Пупалупа - что то из них является - 'пися' (да)
или
// пИпа || Пупалупа - что то из них является - 'пися' (нет)

// в примерах везде два аргумента,но можно их делать сколько душе угодно (пися && пися && пися && пися)



// 3) НЕ ! - меняет true на false и на оборот 
console.log(2 + 2 != 4); // false
console.log(2 + 3 != 4); // true




//                                                          5 - ТЕРНАРНЫЙ оператор ? :
// тернарный потому что -  в нем участвует 3 аргумента
// единственный тернарный оператор в js
// в условиях про if and swith более подробно все!
