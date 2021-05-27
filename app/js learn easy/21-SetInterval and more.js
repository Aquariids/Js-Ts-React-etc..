/*
*                                       1 - setTimeout
setTimeout позволяет вызвать функцию один раз через определённый интервал времени
 */
const timeId = setTimeout(function(text) {  // создаем переменную для нашего setTimeout
    // Переменная нужна для того что бы  определять сет тай маут, что бы в будущем мы могли бы его остановить
    // когда мы помещаем сет в переменную мы записываем числовой  индетификатор этого таймера 
 // setTimeout принимает в себя ту функию которая должна запуститься через опр промежуток времени
 // сейчас у нас анонимная функция
    console.log(text); // это наш первый аргумент (функция)
}, 2000, 'text'); // это наш второй аргумент (время через сколько функция выполнится) указывается в миллисекундах
// 2000 - это 2 секунды

// так же мы можем передавать в setTimeout аргумент из функции которую она выполняет (наш третий аргумент)
// так же мы можем передавать готовую функцию

function logger () {
    console.log('keks');
}
const timeIdTwo = setTimeout(logger, 2000); // передаем именно ссылку, не вызываем !

/*
*                                               2 - setInterval
setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.
*/

const btn = document.querySelector('.btn');
let time,
i = 0;
function logger (){
    if(i == 3){
        clearInterval(time);
    }
    console.log('hello');
    i++;
}


btn.addEventListener('click', ()=>{
        time = setInterval(logger, 2000); // setInterval с опр интервалом что то делает
        //  в нашем случае после нажатия кнопки каждые 2 секунды будет выполняться функция logger
        // без остановки

    
}) ;



/*
*                                                      3 - методы для интервала и таймаута
*/

//1) clearInterval - сбрасывает наш таймер

clearInterval(timeIdTwo); // передаем переменную с нашим таймером 



/*
*                                                   4 - небольшая рекурсия
подробнее в файле 22
*/

const btn = document.querySelector('.btn');
let time,
i = 0;
function logger (){
    if(i == 3){
        clearInterval(time);
    }
    console.log('hello');
    i++;
}


btn.addEventListener('click', ()=>{
        time = setInterval(logger, 500); // короче сначала проходит 500мл сек, потом выполняется logger и так далее
        // но logger  у нас выполняется 3 сек(если функция тяжелая и долгая по времени, то этот алгоритм нарушается
        // сначала будет задержка в 500 потом logger выполнится и не будет ждать 500 снова. интервал будет тдумать, что эти пол секунды уже
        // прошли во время выполнения функции
        // для решения такой проблемы можно использовать рекурсивный вызов setTimeout
    
});

//                                              рекурсивный вызов setTimeout
let id  = setTimeout(function log(){ // запускаем наш stTimeout
    console.log('hello gay'); // тут выполняютсся опр действия
    id = setTimeout(log, 500); // этот setTimeout ждет когда выполнится код выше, ждет  пол секунды и опять выполняет функцию log
},500); // код ждет пол секунды и потом запускает код выше

/*
*                                       Анимация с помощью setInterval
 */



function myAnimation() { // создаем функцию
    const elem = document.querySelector('.square'); // получаем наш квадратик на котором будет анимация
    let pos = 0; // наша поцизция квадратика. Равна пока что 0

    const id = setInterval(frame, 10);

    function frame (){ // это функция которая будет запускаться через опр промежуток времени
        if (pos == 370) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left =   pos + 'px';
            elem.style.right = pos + 'px';
        }

    }
}    


const btn = document.querySelector('.btn-set');
btn.addEventListener('click', myAnimation);