// функция генератор - генерирует какой то результат и делает это последовательно.
// вызвали ее 1 раз она дала один результат, вызвали во 2 раз, уже другой результат

function* generator () {  // у ключевого слова function ставим звездочку. так же можно и перед названием ставить, но в основном делют так.
yield 'S';   // за последовательность отвечает слово yield. В первый вызов мы получим S
yield 'O';  // во второй вызов мы получим O
yield 'K';  // в третий K
}

const str = generator(); // поместим функцию в переменную
 // для использования последовательности нашей функции нужно использовать метод next
console.log(str.next());
console.log(str.next());
console.log(str.next()); 
console.log(str.next()); 

 /* РЕЗУЛЬТАТ
{ value: 'S', done: false } 
{ value: 'O', done: false }
{ value: 'K', done: false }
{ value: undefined, done: true }

мы получили объект в котором есть два поля. Сначала это value наше значение
done - говорит выполнился ли наш генератор полностью.  Когда он уше не нашел значение, значит все выполнилось и выдает true
для получения чисто значения просто пишем str.next().value - так как это объект
 */




// !            ЕЩЕ ОДИН ПРИМЕР

function* count(n) { // значение здесб куртится как парасенок
    for (let i = 0; i<n; i++) { // итерация цикла работает только при каждом вызове функции
        yield i;
    }
}

const counter = count(5); // передаем значение

console.log(counter.next()); // 0
console.log(counter.next()); // 1
console.log(counter.next()); // 2
console.log(counter.next()); // 3


// генератор можно перебрать for of 

for (let k of count(7)) {
    console.log(k);
}
// для  максимального  запуска раз. так сказать