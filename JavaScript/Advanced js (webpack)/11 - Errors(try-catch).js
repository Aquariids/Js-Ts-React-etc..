// Учимся обрабатывать ошибки
// для этого существует конструкция которая называется try catch

//Синтаксис:

try {
    console.log('Normal'); // normal
    console.log(a); // Error тут наткнулся на ошибку и вывил Error
    console.log('result');
} catch(error) { // аргумент (объект ошибки) у этого объекта есть 3 свойтства внутри(name,message,stack)
    console.log(error); 
    console.log(error.name); // название ошибки (ReferenceError)
    console.log(error.message); // сообщение в этой ошибке (a is not defined)
    console.log(error.stack); // тут будут скрипты которые привели к ошибке ( в нашем случае script.js:8)
} finally { // блок который выполнится всегда(завершает операции при любом развитии процесса)

}

console.log('Still normal');  // still normal - тут пошел дальше и вывел все коректно

// Когда скрипт видит конструкцию try catch он сначала берет весь код который находится в try, он пытается его выполнить, выполняет
// и если все прошло хорошо то блок catch игнорируется. Но если в try будет ошибка(любая) то мы переместимя в блок catch. 
// САМОЕ ВАЖНОЕ  - наш код после такой конструкции продолжит свое выполнение, скрипт не поломается
// Обычно после ошибки дальнейшая работа скрипта прекращается



// try catch так же используется для многостраничных сайтов, где есть много html страниц и на каждой разные элементы.
// например на одной кнопка, а на другой ее нету. И если мы созадем событие для нее, то на той где она есть оно будет происходить
// а на второй странице будет ошибка. тут вот и используют try catch



try {
    document.querySelector('.какаятокнопка').addEventListener('click',() => {
        console.log('click');
    });
} catch (e) {
    console.log(e);
}  // Вот в таком случае на второй странице ошибка будет, но скрипт не перестанет работать.