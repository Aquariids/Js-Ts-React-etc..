// работа с пользователем на странице епти 

console.log(); // выводит в консоль в браузере, шо за хош
alert(); // модальное окошко вылезет на страинце епти !

let sesult = confirm(/* тут вопросик */);  // вылезет модал окно, с 'Ok' и 'Отмена' 
console.log(sesult);
// если нажать отмену, то в переменную добавится false, Ok - true. 
let prom = prompt('ты педик?', ''); // тут короче пустые ковычки всегда !! 
// короче, вылезет окно в котором пользователь может, что то ввести, Ответить.
// Это и попадет в перемнную prom

document.write(/* текст */) // Все на ст заменит на то, шо напишешь! (не юзается нигде этот метод!!!) jshint опять охуеват

console.dir ();// Отображает список свойств указанного JavaScript объекта





//                                                      Работа с консолью!!!!


/**            В инспеторе кода есть интересные вкладки
 * 1-Elements - Это html структура, стили которые применяются к каждому отдельному тегу
 * 2-Console
 * 3-Sources -  Здесь все исходные материалы которые нам доступны в проекте (На любом сайте можно открыть и глянуть из чего он состоит)
 * Так же здесь дебажим
 * 4-Network - Отвечает за работу с сетью, там можно отследить как быстро загружаются файлы (скрипты, картинки, html структуры и тд)
 *  так же можно отслеживать запросы которые будут уходить на сайты
 * 5-Performance
 * 6-Memory
 * 7-Application
 * 8-Security
 * 9-Audits
 * 
 */


function hello () {
    console.log('Hello World');
}

hello();

function hi () {
    console.log('Say hi');
}

hi();

const arr = [1,14,4,30,54 ],
        sorted = arr.sort(compareNum);

function compareNum (a,b) {
    return a - b
}