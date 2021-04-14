//                            Объекты это ассоциативные массивы


// создание Объекта

// const obj = new Object();  // устаревший способ 

const options = {           // второй и более удобный способ, просто открыть фигурные скобки
    // внутри ключи и их значения
        name:'test',
        width: 1024,
        height: 1024, 
        colors: {       // объект в объекте и это норм
            border:'black',
            bg: 'red'
        }
    
    };
                    // напоминаю как обращаться!!
    // console.log(options.name); // обращаемся к значению name через ключ name! 
    
                            // Уаление свойст delete
    
    // delete options.name; 
    // console.log(options); // удалили свойство name
    
    
                                                    // Перебераем свойства объекта (for in)
    
    for (let key in options) {  // создаем переменную в которую будут складываться свойства( ключи) и указываем в каком объекте мы будем лазить
    
    //    console.log(`Свойства ${key} имеет значение ${options[key]} `); // в key помещается наше свойство (ключ)
    //                                             options[key] - по сути мы обращаемся к значению ключа, который находится в key;
    // то есть, Свойство (тут будет наш ключ) имеет значение (и тут будет значение этого ключа)
    // Такая конструкция все выведет, кроме ключа colors, так как это тоже объект
    // он нам просто выведет 'Свойства colors имеет значение [object Object]'
    // мы просто выводим значение в виде строк, но так как наш ключ вложенный объект, js не может его превратить в строку
    // и он просто нам выводит строковое представление объекта
    // решение проблемы
    // при помощи условия мы можем сказать, что если внутри объекта есть другой объект, то мы можем запустить перебор
    // по сути это перебор внутри другого перебора
    if (typeof(options[key]) === 'object') { // мы проверяем тип значения на объект
        for (let i in options[key]) { // и если мы находим объект, то юзаем еще один перебор
        //                 так как key у нас занята, мы используем i и копаемся мы уже не в options, а в объекте внутри options
        //             этот объект будет внутри key, поэтому и пишем options[key]
        console.log(`Свойства ${i} имеет значение ${options[key][i]} `); // здесь меняем key на i, так как ключи нашего вложенного объекта
        //  будут находиться внутри i. Далее у нас будет двойной доступ, выглядит это так options[key][i]
        // мы обращаемся к объекту options далее к key ключу, так как в key сейчас лежит вложенный объект
        // внутри него нам тоже нужно обратиться к ключу, который у нас находится в i
        // таким образом мы просто просим показать значение i внутри key который внутри options
        } 
        
    } else {  // иначе, если наш ключ не объект, то продолжаем выводить как было
        console.log(`Свойства ${key} имеет значение ${options[key]} `);
    }
    
    }
    
    //                                 ПРИМЕР ОБРАЩЕНИЯ К ОБЪЕКТУ К ЕГО КЛЮЧУ И К ЕГО ЗНАЧЕНИЮ
    
    // console.log(options['colors']['border']); // мы получим black
    
    
    
                                                // методы и свойства объекта
    
    
    // как всегда, можем перейти к оф документации и посмотреть или же открыть в
    console.dir(Object); // замечу, что у объекта нет свойства length, что бы узнать кол элементов 
    
    // здесь другие способы
    // НАПРИМЕР:
    
    /* let counter= 0;  // создаем переменную которая будет подсчитывать сколько свойст было внутр
        а сейчас мы просто будем переберать их как делали это выше,  добавляя наш счетчик
    
    for (let key in options) {
    
        counter++;
        
    }
    console.log(counter); // будет 4
    */
                                            // есть способ лучше! (МЕТОД)
    // console.log(Object.keys(options)); // мы получим массив со всеми нашими ключами
    console.log(Object.keys(options).length); // так как этот метод нам дает массив, из строк, мы можем приминить к нему length
    // и получим  сумму наших ключей на верхнем урвоне объекта
    
    
                                                    // СОЗДАЕМ СВОЙ МЕТОД ОБЪЕКТА
    