
/*                                          0-Динамическая типизация и статическая! */


// (Динамическая типизация это возможность одного типа данных превращаться в другой
// Число может стать строкой, строка числом) 
// объект может стать boolean значением. Подробнее ниже.
/*

 */

//                                         0.1-To String! Превращаем в строку

 // 1) Самый старый и редкий вариант
        console.log(typeof(String(null))); // string
        // Можем запустить без typeof  и нам выдаст null - но это будет строка!!!!
        console.log(String(4)); // 4 - строка!
        

//  2) Конкатенация - сложение строк или строки с чем то
        console.log(typeof(5 + '')); // string
        // Мы сложили число с пустой строкой
        console.log(typeof(undefined + '')); // string
        // Пустые массивы в операциях с конкатенацией равняются путой строке
        console.log(typeof([]+[])); // string
        console.log(typeof({}+{})); // string // объект тоже превращает в строку
        console.log([] + 5); // даст строку 5
        console.log({} + 5); // даст вот такую строку [object Object]5
        // при конкатенации объект не совсем равен пустой строке. Это все приведет к строке и типу данных
        // но не получится как с помощью массива превратить 5 в "5"

        // Пример старого кода!
        const num = 5;
        console.log('http://vk.com/catalog' + num); // Вот нам нужно создать путь(Сейчас для этого есть интерполяция)
        //  нам нужна строка, вот мы ее и получаем с помощью конкатенации
        const fontSize = 26 + 'px'; // вот характеристика для стилей например
        console.log(fontSize); // 26px
//                                        0.2-To Number  Превращаем в число

//  1) Так же как и с строкой( даже реже чем String)
        console.log(typeof(Number('4'))); // number
//  2)  Унарный + 
        console.log(typeof(+ '5')); // number
//  3)  parseInt() 1 - аргумент это строка, а 2 - система исчесления
        console.log(parseInt('15px', 10)); // 15(число)
        // Пример Унарного плюса
        let answ = +prompt('hello',''); // ВСЕ ЧТО МЫ ПОЛУЧАЕМ ОТ ПОЛЬЗОВАТЕЛЯ - ЭТО СТРОКИ
        // если здесь введут число, то мы его преобразуем из строки в тип число
        // если ведут буквы, то будет NaN
//                                         0.3-To boolean превращаем в логический тип
  // 1) первый такой нативный способ!
/** Все что превращается в false!!
 *  - 0 = ноль
 *  - '' = Пустота
 *  - null = null
 *  - undefined = андефаинд
 *  - NaN = Not a Number
 *  Все остальное будет true */
 // Любой объект в логическом контексте – true, даже если это пустой массив [] или объект {} 
  
  if ({} && []) {
   console.log("Все объекты - true!"); // alert сработает
  } 

  // Пример:
  let switcher = null; // null = false

  if (switcher) { // не сработает
    console.log('working...');
  }

  switcher = 1; // 1  В логическом контексте = true (не только 1, любая цифра или число кроме 0)

  if (switcher) { // работает
    console.log('working...');
  }

  // 2)  как и с строкой и числом и тоже супер редкий
        console.log(typeof(Boolean('4'))); // boolean
  // 3) !! - два знака отрицания
  console.log(typeof(!!'42432')); // boolean
//                                              Типы данных  в js!!

//                                         1 - метод! проверка на тип данных

typeof (/*тут переменная или шо там */); // вроде и без скобок можно)

// есть парочка интересных ошибков  в js
// если в typeof добавить null, то он выведет object - это ошибка, но куда без них

/*                                          2 -ПРОСТЫЕ ТИПЫ  */

/* 1 - Числа (numbers) - 1,2,3 */ // макс число 2 в 53 степени!
const numbers = 1;
/* 2 - СТРОКИ(String) */
const string = 'Привет, я пэдик'; // Строки всегда в ковычках! '123' - Это СТРОКА!!
/* 3 - Логичискйи тип(boolean) */
const booleanTypes = true; // либо да брат!
const __booleanTypes = false; // либо нет брат!
/* 4 - Тип данных НАЛ(null) */ // НИЧЕГО НЕ СУЩЕСТВУЕТ 
const eternal = null; // 
console.log(pisa);
/* 5 - тип андефаинд(undefined) */ //ЧТО_ТО СУЩЕСТВУЕТ НО ХЕР ПОДИ РАЗБЕРИ ЧЕ
const NotEternal = undefined; //JShint в ахуе просто
console.log(NotEternal); // undefined
/* 6 - СИМВОЛ(Symbol) */
const id = Symbol('символ'); // создаешь символы! и хуй знает зачем))
/* 7 - BigInt(бигИНТ) */ // позволяет работать с числами больше чем 2 в 53!
const theBiggestInt = 9007199254740991n; //JShint живи!
const alsoHuge = BigInt(9007199254740991);

//                                      2.1-ЕЩЕ ЕСТЬ ЧИСЛОВЫЙ ТИП ДАННЫХ ИФИНИТИ и NaN (примитив!)

// 1)
const inf = Infinity; // - бесконечность
console.log(4 / 0); // Infinity
// 2)
const __inf = -Infinity; // - минус бесконечность вау!
console.log(-4 / 0); // -Infinity
// 3)
const nAn = NaN; // not a number (короче если всякую хуету с числами мутишь, 
// то, будет такая шляпа. Умножаешь, то, что нельзя умножать и тд)
console.log('string' * 19); // NaN




 /*                                    3-Комплексный тип данных (ОБЪЕКТЫ)  */

/*                                      3.1-СПец Объекты  */
/*                                      3.2-МАССИВЫ */

const arr = ['ss', 1, {}, []]; // - массивы частный случай объекта!
/* А с хуя это частный случай объекта? а вот с того, что здесь такие же
    знаения и ключи, просто тут  ключи фиксированные!  
    массивы нужны для того, что бы строго по порядку распологать элементы
    если написать индекс эелемента, то увидим, что это очень похоже на объект
        просто ключ фиксированный! */
0   1  2  3
const arr = ['ss', 1, {}, []];
//хранит любой тип данных
//хранит данные строго по порядку!

console.log(arr[0]); // 'ss' - так мы берем из массива нужный элемент,
//через индекс. нумерация в прогр начинается с 0 -  первый элемент!!!


/*                                  3.3-Функции! */

let fun = function () { };

() => {

};
function func() { }; // ну вы поняли))))

/* Объект Даты */
let now = new Date();

/* регулярные выражения! и ошибки! */

//                                  3.4-ОБЫЧНЫЕ ОБЪЕКТЫ

let obj = {
    // Описываем объект ключ: значение!
    // ключ - это свойство, а после : Значение этого свойства!      
    /*  свойство объекта(name) и значение('димка')! - */
    name: 'димка',
    age: 24,
    gay: false

};

console.log(obj.name); // через точку обращаемся к свойству! или же [''], но лучше точка


