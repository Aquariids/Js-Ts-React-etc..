'use strict';
//                      МАССИВЫ - СТРУКТУРА СОДЕРЖИТ ЭЛЕМЕНТЫ ПО ПОРЯДКУ



//                                          0.1 - Создание массива 

const arr = [1,2,3,8,9]; // все в квадратныых скобках - массив
// обращаться к элементам можем через индекс
console.log(arr[0]); // Мы выбрали 0 индекс = первый элемент
// такая же хуета и со строками кстати
console.log('012345'[4]); // 4

// length в массивах
console.log(arr.length); // выдаст нам 5
// что сделал length? Он взял последний индекс и прибавил к нему 1 
// length - состоит из посл индекса +1
// немного наебем массив
// arr[99] = 0; // мы поместили на позицию 99 нолик, но у нас нет индекса 99

// подтверждение работы length
// console.log(arr.length); // выдает 100, потому что length взяло посл индекс и +1
// console.log(arr); // [ 1, 2, 3, 8, 9, <94 empty items>, 0 ] вот что в массиве -  6 элементов и 94 пустых ячейки
//                     5 - элементов потом 94 пустых и 99 = 0

//                                              1 - МЕТОДЫ МАССИВА

// 1 - pop() удаляет посл элемент из массива

arr.pop();

console.log(arr); // [ 1, 2, 3, 8 ]

// 2 - push() Добавляет элемент в конец массива

arr.push(10);

console.log(arr); // [ 1, 2, 3, 8, 10 ]

// 3 - shift() – извлекает элемент из начала,
// 4 - unshift(...items) – добавляет элементы в начало. 
// эти методы редко юзаются в реал проектах, так как после них все индексы смещаются
// и вам придется все менять. То что было под индексом 0 после unshift станет под индексом 1 и так по цепочке
// и тд
    
// 5 - split('тут разделитель') разбивает объект String на массив строк путём разделения строки указанной подстрокой.
    const str = prompt('','');
    const products = str.split(','); // здесь мы указали (,) и если строки будут через (,) то они образуют массив
    console.log(products);
    // и элементы в нем будут по порядку те, что была через запятую
    // то есть если мы в промпт введем 1 2 3 4 5 то нам выдаст массив с элементом под индексом 0 - 0: "1 2 3 4 5"
    // но если мы разделим строки разделителем 1,2,3,4,5 что указали в split("тут") то нам выдаст вот что:
    /*
    0: "1"
    1: "2"
    2: "3"
    3: "4"
    4: "5" 

    теперь у нас в массиве 5 элементов, а не один слипшейся кусок
    Мы сформировали на основании строки массив, так же мы можем сделать и на оборот об этом ниже
    */
    
    // 6 - join('тут разделитель') - объеденяет элементы массива
    console.log(products.join(';')); // теперь все наши элементы будут через (;)
    // сверху мы разделили строчку на массив split(',') а потом здесь обратно склеили в строку join(';') через (;)
    
    // 7 - sort() Метод сортировки
    // если мы его просто применем в таком виде sort() то он отсортирует все по алфавиту если это массив из строчных элементов
    // а что будет если массив будет из цифр?

    const arrNew = [2,13,26,8,10];
    arrNew.sort();
    console.log(arrNew);
    // кажется что все отсортирует по возрастанию (логично) но нет, все немного по другому
    // вот что мы получим [10, 13, 2, 26, 8] - фишка в том, что sort все сортирует как строки
    // все числа начинающиеся с 1 (если бы был 0 - он был бы первым) встали на первое место далее сравниваются вторые числа 
    // идет 10 и 13. ноль меньше трех по этому оно и впереди потом 2 - она больше 1 
    // потом 26 и 8 самое большое. Все отсортировалось как строки. по сути сравнивается каждая отдельная цифра от числа, а не число целиком
    // способ как этого избежать: 
    // применим колбек функцию
    arrNew.sort(compareNum);
    console.log(arrNew); // [2, 8, 10, 13, 26] Все отсортировалось как нужно
    function compareNum (a, b) { // создаем такую функцию и передаем её в sort
        return a - b;
        // короче sort () внутри юзает алгоритм быстрой сортировки
        // и че то как то поэтому эта функция работает - это сложно и пока я этого не знаю
        // пока что все как есть( просто используем и не ебем голову)
    }


//                                 2 - ПЕРЕБЕРАЕМ МАССИВ for или forEach или for of

// 1) for 

for (let i = 0; i < arr.length; i++) {   // в обычном for создаем i c 0(индекс), потом указываем в условии, что юзать будет 
//                                          до тех пор пока i меньше arr.length( кол элементов в массиве)
    console.log(arr[i]); // здесь обращаемся к i в массиве. сначала в i = 0 - мы обратимся к 1 элементу
    //                            потом  i++ (ув на 1 ед) и тогда уже обратимся ко второму элементу и так далее пока не выполнится условие
    //                               пока не закончатся все элементы (i < arr.length)
}

// 2) for of

for (let value of arr) {    // создаем переменную, в ней будет храниться каждый элемент массива, обычно называют ее value
//              Далее указываем массив в котором будем работать
    console.log(value);
} // Такая конструкция работает только с массиво подобными сущностями
// можем перебрать массив, псевдоМассив, строку и тд
// так же у for of есть преимущество перед forEach. Здесь можно использовать breake и continue

const arrTwo = ['piska', 2,1, 5, 3,];


//  3) forEach () - Это кстати метод и его фишка в том,что его можно подробнее настроить
// forEach принимает в себя еще одну функцию, так как метод это функция то выходит, что наша функция внутри это - (callback)
// так же метод forEach () есть у псевдомассива получаемым с помощью querySelectorAll()
arrTwo.forEach (function (item, i , arrTwo) { // callback функция может принимать в себя 3 аргумента
    // 1 - тот элемент, что перебираем
    // 2 - это номер по порядку (индекс)
    // 3 - это ссылка на тот массив который перебираем
        // наша функция внунтри будет выполняться для каждого элемента массива
        // forEach будет проходить по каждому элементу и применять эту функцию

        console.log(`${i}: ${item} внутри массива ${arrTwo}`);
}); 

                                            // 3 - ДЕСТРУКТУРИЗАЦИЯ МАССИВА


// Так же как и объекты по сути
// learn.js

// у нас есть массив с именем и фамилией
let arrT = ["Ilya", "Kantor"]

// деструктурирующее присваивание
// записывает firstName=arr[0], surname=arr[1]
let [firstName, surname] = arrT;

console.log(firstName); // Ilya
console.log(surname);  // Kantor

//                         4 - Псевдо массивы  - это сруктура которая просто хранит данные по порядку! Без всяких методов и преколов выше!

// когда будем получать элементы со страницы там дивы хуивы теги хуеги
// мы все будем получать в псевдо массивах! У них нету методов которые мы разбирали выще. КТо мы? я тут один ебобо
// В псевдо массивах есть свойство length

// ПРИМЕР: 

const bg1 = document.getElementsByTagName('button'); // получили все кнопки со страницы в виде псевдо массива  (об этом в файле 16)
// и нам нужно например обратиться к первому элементу, а там допустим всего один элемент и мы такие пишем
bg1.style.borderRadius = '100%'; // Почему будет ошибка? А потому что мы обращаемся к псевдомассиву, он ничего не знает про объект style
// Поэтому нам нужно указать индекс даже если у нас всего один элемент 
bg1[0].style.borderRadius = '100%'; // вот теперь мы обратились к первому элементу у которого уже есть внутри объект style и тд