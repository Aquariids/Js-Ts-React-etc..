
// експортируем эту функцию в файл 10. Синтаксис commonJS
function myModule( ) {
    this.hello = function () {
        console.log('hello pediks');
    };

    this.goodbye = function() {
        console.log();
    };
}


// создаем объект module. обращаемся к свойству exports и в него помещаем, то, что экспартируем
module.exports = myModule;

