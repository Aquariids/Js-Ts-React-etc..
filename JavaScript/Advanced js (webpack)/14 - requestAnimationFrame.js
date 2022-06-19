// в большинстве случаев мы будем делать анимации на css
// но если нужно сделать что-то сложнее, то будем юзать их на js

/*
 Подобное  уже делали c setInterval

function myAnimation() { // создаем функцию
    const elem = document.querySelector('.square'); // получаем наш квадратик на котором будет анимация
    let pos = 0; // наша поцизция квадратика. Равна пока что 0

    const id = setInterval(frame, 10); //! Вот тут задержка в 10 мл секунд

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
*/

/*

 и главная проблема тут мы задаем вручную задержку в 10 миллисекунд
что бы анимация казалась плавной, каждые 10 мл мы вызывали функцию
проблема в том, скорость обновления кадров у монитра и браузера другая
например большинство хотят показать 60 кадров в секунду, второе это браузер постоянно перерисовывает контент на странице
это происходит быстро в райноне 60 кадров в секунду и зависит от нагрузки на пк
и когда мы задаем свое анимацию у нее жестко установленно фреймрейт
все это ведет к нагрузке пк. И если начнем запускать много анимаций с интервалом внутри себя, то пк еще сильнее загрузится
если открыто нескоько вкладок и мы переключимся куда то и вернемся к анимации она будет продолжаться и грузить пк

Для решения всех этих проблем была создана функция requestAnimationFrame
*/

// requestAnimationFrame - позволяет запускать какие то функции в качестве анимации. Самое главное она подстраивает все под частоту браузера


const btn = document.querySelector('.btn-set');
const elem = document.querySelector('.square');
let pos = 0; // переносим pos в глобальное пространство

function myAnimation() {
    pos++;
    elem.style.top = pos + 'px';
    elem.style.left = pos + 'px';


    if (pos < 370) { // если позиция меньше 300 то запускаем анимацию
        requestAnimationFrame(myAnimation);
    }


}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

// и так же как setInterval или setTimeout если их или requestAnimationFrame поместить в переменную они оставляют индетификатор
// с помощью которого мы можем их остановить

let id =  requestAnimationFrame(myAnimation);

cancelAnimationFrame(id); // типо как clearInterval ток для анимации




