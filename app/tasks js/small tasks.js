// 1 Какое будет выведено значение ?
    let x = 5; console.log(x++); // 5 (Так как юзается постфиксная форма подробнее в файле 5 глава 3 часть 5)
// 2 Чему равно такое выражение ?
    console.log([] + false - null + true); // NaN -  (Потому что юзаем математические операторы) в файле 2 глава 2.1 часть 3
    // маленькая особенность Js 
    console.log(typeof([] + false )); // string Когда мы работаем с пустым массивом в таких операциях, он будет приведен к строковому типу
    // по сути у нас тут написано '' - пустая строка и false = 'false'
    console.log([] + false); // строка 'false' подробнее в файле 2 глава 0.1 часть 2
    console.log(typeof({} + {})); // С объектами так же
// 3 Что выведет этот код? 
    let y = 1; let a = y = 2; console.log(a); // 2 
    // Так как число у нас примитив, то оно передается по значению. Мы просто переписали y = 2
// 4 Чему равна сумма ?
    console.log([] + 1 + 2); // Строка '12' об этом было чуть выше
// 5 Что выведет код?
    console.log('1'[0]); // 1 
    // здесь мы обратились к индексу строки, так как у нас всего 1 элемент, его мы и получили
// 6 Чему равно?
    console.log(2 && 1 && null && 0 && undefined); // null об этом в файле 5 глава 3 часть 1 и 2
// 7 Есть ли разница между выражениями 
let c = 1,
    b = 7;
console.log(!!(c&&b)); // true (!! превращает в boolean )
console.log(c&&b); // 7 ( вернет последнее, что проверял) && проверил с - true, потом b - true, тут он и закончил работу!
// Разница есть)

// 8 Что выведет код ?

console.log(null || 2 && 3 || 4); // 3  Приоритет && выше чем у ||
// && проверил 2 - true потом 3 - тоже true и на ней он закончил работу и получилось 3
// А потом проверяется null || (3) - наше решение с && и тут || (или) запинается на правде и выдает 3
// А потом  наша все та же (после операции с предудыщим ||) - 3 || 4 и вот тут опять || запинается на первой правде и так и выдает нашу 3
// в итоге у нас 3

// 9 Правда ли что arr1 == arr2
let arr1 = [1,2,3];
let arr2 = [1,2,3];

console.log(arr1 == arr2); // нет не правда епта очевидно же.
// Даже не знаю надо ли тут что-то объяснять
// arr1 и  arr2 это два разных хранилища инфы и не важно если она похожа
console.log(arr1 == arr1); // а вот так даст true. Потому что сравниваем первый ящик и епта как видите тоже первый

// 10 что выведет код
console.log(+'Infinity'); // выведет числовой тип данных Infinity
// тут есть маленький подовох унарный плюс превращает в число и Infinity числовой тип поэтому выдаст Infinity
// но если там будет написанно infinity - с мал буквы, то как мы помним будет NaN
// потому что мы пытаемся превратить непонятную строку в число и само собой ничего не получится
// а вот когда там '2' или 'Infinity' то js  сможет это переварить и создать из таких строк числовой тип данных
// ДА КТО МЫ????

// 11 Верно ли сравнение?

console.log('Ёжик'>'Яблоко'); // false

// Если мы сравниваем строки, то у нас идет по символьное сравнение
// нужно открывать таблицу unicode кириллица и смотреть их номера
// например большая А - 1040 а маленькая а - 1072
console.log('a' > 'A'); // true

// 12 Чему равно
console.log(0 || '' || 2 || undefined || true || false); // 2 || спотыкается на первой правде тут это 2