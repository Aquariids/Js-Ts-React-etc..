// шо за токе свойста и методы в файле 12

//                                          0 - СВОЙСТВО length
// позволяет нам узнать кол элементов
const test = 'text';
const arr = [1,4,5,6,7];
console.log(test.length); // 4 - 4 буквы, 4 элемента
console.log(arr.length); // так же можем узнать кол элементов в массиве = 5

// свойствам не нужно указывать скобки как методам(вспом функциям)
// все методы пишутся со скобками, так как они выполняюсь какое то действие
// как узнать свойства и методы?
// 1 - либо в оф документации
// 2 - либо с помощью console. dir  в  консоли браузера

// ПОЛучаем часть строки через индекс

console.log(test[2]); // x 2 символ строки text

// изменить вот так test[2] = 'e' мы не можем!!!!
// Для этого есть методы!

//                                          1 - МЕТОДЫ строк


console.log(test.toUpperCase()); // этот метод переводит строку  в верхний регистр
console.log(test.toLowerCase()); // этот в нижний регистр

                                        // 1) indexOf


let fruit = 'Some fruit';
console.log(fruit.indexOf('fruit')); // этот метод принимает аругмент!
// Этот метод  позволяет увидеть есть ли искомое значение и позволяет увидеть с какого индекса оно начинается 
// если мы в аругумент поставим не существующию строку, нам выдаст -1
// вслучае с fruit он нам показывает в консоле 5 - это индекс с которого fruit начинается
/*           012345
let fruit = 'Some fruit';
*/
// можно указать даже пробел, можно одну букву, можно часть строки и тд
// но если указывать одну букву, а у вас их там много. то выводить он будет самую первую, которую найдет
// просто юзайте часть строки или же узнавайте есть ли ваше искомое там вообще

                                    //2) slice

const logg = 'Hello world';

console.log(logg.slice(6,11)); // (world) возвращает часть строки, здесь 2 аргумента
// 1 первый аргумент, с какой позиции вырезаем, а 2 аргумент, где заканчиваем вырезание!
//  во втором аргументе мы указываем то, что не включается. До кого-то момента, Но не включая!
// если мы там обрежем с 6 по 10, то будет worl, 6 - это w, а 10 - это d, но он не включает в себя d
// поэтому юзаем 6, 11
console.log(logg.slice(6,10)); // worl
// если мы укажем один аргумент, то мы просто указываем с чего вырезать и до конца
console.log(logg.slice(6)); // world
// так же можем юзать через отрицательные значения и тогда они будут начинаться с конца строки

console.log(logg.slice(-5)); // world. C конца строки счет начинается
console.log(logg.slice(-11,-6)); // Hello


                                // 3) substring

console.log(logg.substring(6,11)); // типо как slice, но нельзя юзать отрицательные числа и 
// можно первый аргумент задавать больше чем второй, Но это бесполезная хуета

                                //4) substr

console.log(logg.substr(6,5)); // этот метод просто вырезает кол символов, которе мы укажем
// в первом аругменте мы указывает откуда, а во втором кол символом которые вырезаем (длину)
// с 6 символа вырезать 5! выходит world



                                        // 2 - Методы numbers

// в js для работы с числами есть своя мини библиотека, которая существует внутри браузера, внутри js

// Если написать в консоли Math, то сразу увидим все методы, там всякие матиматические операции
// НАПРИМЕР:
//1) Math.round()
const num = 12.2;
console.log(Math.round(num)); // округлила до 12. Округляет до ближайшего целого
//2) Math.floor()
console.log(Math.floor(num)); // floor обрезает все после точки

const tesT = '12.2';
//3) parseInt()
console.log(parseInt(tesT,5)); // 7  принимает строку в качестве аргумента и возвращает целое число в соответствии
//  с указанным основанием системы счисления - указывается вторым аргументом
//4)  parseFloat ()
console.log(parseFloat(tesT)); // возвращает с плавающей точкой



//5) Метод  Math.abs();
console.log(Math.abs(-2)); // 2
console.log(Math.abs(2)); // 2
console.log(Math.abs(null)); // 0
console.log(Math.abs("string")); // NaN
console.log(Math.abs()); // NaN
/* Этот метод возвращает абсолютное значение числа, то есть иными словами - если число неотрицательное,
то его и возвращает, а если отрицательное - отбрасывает знак "минус".
 Передача нечисловой строки или undefined/пустой переменной вернет NaN. Передача null вернет 0. */

