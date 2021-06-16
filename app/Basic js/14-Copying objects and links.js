// Передача данных по ссылке и значению

let a = 5, // запихали 5 в а 
    b = a;  // потом в b запихали a с ее 5

b = b + 5; // потом в b запихали b + 5

console.log(b); // в сумме 10 
console.log(a); // так и осталось 5

// теперь сделаем такую тему с объектом

const obj = {    // делаем все как выше
    a: 5,
    b: 1
};

const copy = obj; // создаем переменную и кладем туда наш объект
copy.a = 10;  // обращаемся к этой переменной и меняем a на 10

console.log(copy); // Выведет два абсолютно одинаковых объекта
console.log(obj);

// по сути мы в copy просто положили ссылку на наш объект, а не создали его копию
// а насчет того, что было выше с переменой b. тема такая:
// Когда мы работаем с примитивными типами данных строки, числа, логические значения
// - Они все передаются по значению

/* let a = 5, 
    b = a; вот тут по сути мы написали вот что b = 5
    мы передали значение !
    Это работа с примитивами!
    
    */

// а работая с объектом, то мы передаем не по значению, а по ссылке
// массивы, функции и все шо объекты по сути, все это передается по ссылке

//                      ТЕПЕРЬ СОЗДАЕМ КОПИЮ ОБЪЕКТА (ПОВЕРХНОСТНЫЕ)

                                                                    // 1 - С ПОМОЩЬЮ ЦИКЛА

function someCopy(mainObj) { // создаем функцию и задаем аргумент, куда будем передавать нашу основную функцию
    let objCopy = {}; // тут будет наша копия

    let key;
    for (key in mainObj) { // перебераем наш основной объект
        objCopy[key] = mainObj[key]; // если имя свойства в переменной то обратиться мы можем только через [] не через точку
        //в objCopy создаем новое свойство key - оно будет содержать такое же значение как и в главном объекте
        // далее просто делаем копию нашего главного объекта.
        // проше говоря мы пройдемся по нашему ос объекту и скопируем все в копию

    }

    return objCopy; // возвращаем наружу
}

const numbers = { // создаем новый объект длдя проверки
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }

};

const newNumbers = someCopy(numbers); // создаем переменую для нашей копии и помещаем в нее функцию копирования и аргумент с нужным объектом

newNumbers.a = 10; // меняем в копии значение

// проверяем

console.log(newNumbers); // { a: 10, b: 5, c: { x: 7, y: 4 } }
// получили два разных объекта
console.log(numbers); // { a: 2, b: 5, c: { x: 7, y: 4 } }
// НО ЕСТЬ ОДНО НО если мы сделаем так:
newNumbers.c.x = 10;

console.log(newNumbers); // x переписалась в обоих случаях 
console.log(numbers);

// Когда мы так клонируем объекты есть два важных понятия!
// Это глубокие и поверхностные копии объектов (О глубоком копировании в Advanced js в 1 файле)
// Выше мы создали поверхностную копию. Она берет все обычные свойства которые были в родителе и создает независимые структуры
// но как только появляется вложенная структура массив или объект как в нашем случаи, то это свойство опять будет иметь ссылочный тип данных
// newNumbers.c.x = 10; здесь когда мы обратились к c мы просто обратились по ссылке - это и есть поверхностная копия объекта
// глубокие объекты пока не буду разбирать, чуть позже

                                                        // 2 - С ПОМОЩЬЮ МЕТОДА  Object.assign() - объеденяет объекты

const numbersTwo = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbersTwo, add)); // 1 - аргумент указываем объект в который мы хотим все поместить
//                                              2 - объект который помещаем
// фишка том, что тоже самое мы можем сделать и с пустым объектом  и получится просто копия
const clone = Object.assign({}, add);
clone.d = 20;
console.log(clone); // { d: 20, e: 20 } наша копия работает
console.log(add); // { d: 17, e: 20 } 

                                                        // Частный случай! (Массивы) ПОВЕРХНОСТНАЯ КОПИЯ!!!!

// Мы можем использовать так же цикл как и с объектом, но есть способ получше

const oldArray = ['a', 'b', 'c']; // наш основной массив

const newArray = oldArray.slice(); // создаем новую переменную и в нее кладем наш массив и обращаемся к методу slice(

newArray[1] = 'asfds';  // менем второй элемемент
console.log(newArray); // [ 'a', 'asfds', 'c' ] Копия работает
console.log(oldArray); // [ 'a', 'b', 'c' ]



// ОПЕРАТОР РАЗВОРОТА!!!!!! НОВЫЕ СТАНДАРТЫ ЕПТА (Spread)
//  В ES6 такой опертор повился для массивов, а в ES9 и для объектов. Но неофициально его уже юзали в ES8

// ПРИМЕР РАБОТЫ Spread оператора:

const video = ['youtube', 'viemo', 'rutube'], // создаем массив
    blogs = ['wordpress', 'livejournal', 'blogger'], // еште один
    /* internet = [...video]; //  ... - это spread оператор, он развернул элементы из video в массив internet 
    video[0] = 'ddddd';
    console.log(internet); // [ 'youtube', 'viemo', 'rutube' ]
    console.log(video); // [ 'ddddd', 'viemo', 'rutube' ] */
    // Еще можем сделать вот так
    internet = [...video, ...blogs, 'vk', 'facebook']; // добавляем 2 массива и кое что свое
console.log(internet);
                /*
[                       Такой вот сочный массив
'youtube',
'viemo',
'rutube',
'wordpress',
'livejournal',
'blogger',
'vk',
'facebook'
]
*/

// еще один пример:

function log (a,b,c) {
    console.log(a); // 2         // создаем простую функцию с 3 - аргументами
    console.log(b); // 5
    console.log(c); // 7
}

const num = [2,5,7];   // и к нам вот пришел такой массив и нужно эти элементы добавить в наши 3 аргумента в функции

log(...num); // вызываем нашу функцию и используем spread оператор на нашем массиве 

// все.

// Теперь spread оператор и копия объекта

const q = {
    one: 1,
    two: 2
};

const newQ = {
    ...q
};

// Все супер просто