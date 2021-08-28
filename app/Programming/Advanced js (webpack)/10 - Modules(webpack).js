
/*
*                           В общем о модулях
*/

// Модули используется что бы скрыть и разделить реализацию скрипта.
// очень удобно когда разные части в разных модулях и при этом не конфликтуют с собой у каждого свое лексическое окружение
// модули позволяют создать чистое глобальное пространство.
// не очень хорошо создавать глобальные переменные.  А у модулей свое окружение и свои имена. Если будет два модуля в которых одинаковые переменные
// они ни как не будут конфликтовать между собой, так как они существуют только в собственных обл видимсоти
// если мы просто подкл сторонний файл и в нем будет просто переменная и мы ее экспортируем, у нас будет конфликт в случае если в глоб коде есть такая же переменная
// для решения этой проблемы сторонний файл мы поместим в самовызывающаася анонимную функцию. (одие из способов)


const number = 1;
(function(){ // Анонимная функция которая сама себя вызывает
    let number = 2;
    console.log(number); // 2 
    console.log(number + 3); // 5
}()/*вот тута она и вызывается*/); 
// она находится внутри скобок, это потому что без них это будет функция деклорейшн, а она обязана иметь имя.
// А внутри скобок она превращается в функцию експрешн, она может быть без имени.

console.log(number); // 1


// следущий подход это создание объектного интерфейса
// мы записываем модуль в переменную и из нее возвращаем нужные методы которые будут доступны снаружи

const user = (function(){
    const privat = function() {
        console.log('i am pediks');
    };


    return {
        heIsPediks: privat
    };
}());

user.heIsPediks();
/*
*                               Соборка модулей

Браузеры не умеют собирать модули самостоятельно.
Любая модульная система должна собрана в один файл  
Для этого мы будем испоьзовать webpack

Разница между gulp и webpack

gulp - сам галп нихуя не умеют, он просто подкл опр модули и запускает их когда нам это нужно. по сути сборку на галп мы пишем сами
webpack - это уже сборщик модулей. Он собирает проект и делает всякие штуки, анализирует js код  и тд. Мы можем на галпе запускать webpack

Установка webpack
Заходим https://webpack.js.org/guides/getting-started/

Сначала устанавливаем в npm 
mkdir webpack-demo - создаем папку
cd webpack-demo - переходим в нее
npm init -y - устанавливаем
npm install webpack webpack-cli --save-dev (тут сам webpack и webpack-cli - это позволяет запускать через консоль вебпак)

у вебпак аесть два режима работы
1 -это использование стандартных заводских настроек.
2 - это когда мы сами прописываем конфиг

в случае с 1 варинтом: {
   1- src/index.js наш главный файл который принимает в себя все импорты должен называться index.js и находиться в папке src
}
в случае с 2 вариантом: {
    Создаем конфиг webpack.config.js
    Внутри создаем свои настройки: ПРимер


    let path = require('path');  это техническая переменная для правильной работы

module.exports = {     Объект настроект
  mode: 'development',    1 - режим в котором будет работать вебпак. Их всего два development и production  в дефолтном варика исп продакшен. а если сами собираем то исп develp
  entry: './js/script.js', 2 - путь к главному файлу где все импорты находятся
  output: {               3 - файл выхода. Тут создается тот файл который получится в итоге
    filename: 'bundle.js',  - название
    path: __dirname + '/js' - куда его пихаем
  },
  watch: true,    4 - будет автоматом следить

  devtool: "source-map", 5 -соур мап это штука которая хранит исходник нашего кода

  module: {}  6 - разные модули в вебпаке есть документация подробная, об этом чуть позже
};

}

*/

/*
!                       Синтаксис CommonJS
*/
// создаем переменную и используем синтаксис require. Внутри указываем путь к файлу
const myModule = require('./10.1 - example(CommonJS)'); // без .js  Сборщик сам поймет, что за файл будет

// проверяем нащу функцию

const myModuleInstance = new myModule();
myModuleInstance.hello(); // hello pediks

/*
!                           Синтаксис export import
*/
// Экспорт происходит с помощью слово export
// мы можем написать перед тем что нужно экспортировать
export let one = 1;
// или так
let two = 2;
export{two}; // обязательно в фигурных скобках


// так же есть экспорт по дефолту
export default // это можно использовать только в одном модуле.
// export default class User{ тут ббла бла конструктор все дела}
// в импорте мы пишем import User from './' - бещ фигурных скобок
/*
*                       import
*/
// пишем ключевое слово import{ тут то что экспартируем}
// import{one,two} from './' // тут путь откуда

// так же при import можно переименовать то, что импортируем.
// import {one as first} from './' - вот так. тут мы переименовали one в first. То есть в том файле куда мы импортируем, там уже будем обращаться к first

// можно при импорте создать объект в который импортируется все что экспортируем.
// import * as data from './' - через звездочку экспортируем все. Это  все будет в объекте data.
// Для обращения просто используем обычный синтаксис. data.one, data.two и тд