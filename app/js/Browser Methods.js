/* работа с пользователем на странице епти */

console.log(); // выводит в консоль в браузере, шо за хош
alert(); // модальное окошко вылезет на страинце епти !

let sesult = confirm(/* тут вопросик */);  // вылезет модал окно, с 'Ok' и 'Отмена' 
console.log(sesult);
// если нажать отмену, то в переменную добавится false, Ok - true. 

let prom = prompt('ты педик?', ''); // тут короче пустые ковычки всегда !! 
// короче, вылезет окно в котором пользователь может, что то ввести, Ответить.
// Это и попадет в перемнную prom

document.write(/* текст */) // Все на ст заменит на то, шо напишешь! (не юзается нигде этот метод!!!) jshint опять охуеват