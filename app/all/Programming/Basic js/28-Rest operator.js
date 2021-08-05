// rest оператор это брат оператора spread, только spread  мог взять массив и раскинуть его по аргументам 
// вот так

function spread(a,b,c) {
    console.log(a); //1
    console.log(b); //20
    console.log(c); //3
}

const arr = [1,20,3];
spread(...arr);

// rest - он же на оборот аргументы превращает в массив

const log  = function (a,b, ...rest)  { // rest оператор можно назвать как угодно, главное его добавлять после нужных аргументов
    console.log(a,b,rest);  
};

log(1,2, 22222,'fdsa',11); // в a = 1 в b = 2, а далее все идет в rest, он собрал отдельные сущности в едино!! ГАНДАМ ЭТО СИЛА, ВЕДЬ МЫ ВЕДЬ Я ГУРЕН ЛАГАН







//                                   Параметры по умолчанию

function dablCalco(num,basis = 2) { // ТАК ДЕЛАЮТ СЕЙЧАС. Просто присваеваем аргументу
    // раньше использовали логический оператор ||

    basis = basis || 2; // если аргумент не был передан, то в аргументе будет undefiend 
    //                 поэтому || споткнется на первой правде и в этом случае выдаст 2,
    // но это не надежный варик!
    console.log(num * basis);    
}

dablCalco(5,5);
// вот как можно осуществить класс по умолчанию в конструкторе
// допустим у нас есть аргумент ...classes
// this.classes = classes;

// пишем условие, что если длина равна 0, то есть внутри ничего нет (classes это будет массив, даже если ничего нет это будет пустой массив)
// далее просто записываем в classes нужный класс, и добавляем его в нужный нам елемент, а иначе просто перебираем все и добавляем в элемент
if (this.classes.length === 0) {
    this.classes = 'menu__item';
    element.classList.add(this.classes);
} else {
    this.classes.forEach(className => {
        element.classList.add(className);
    });
}

