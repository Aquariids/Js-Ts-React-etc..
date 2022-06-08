[localStorage](#localstorage)<br>
[Методы localStorage](#методы-localstorage)<br>
[Пример работы с формой](#небольшой-пример-работы-с-формой)<br>
### localStorage
localStorage - это свойство глобального объекта window, локальное хранилище.<br>
Именно тут все соохраняется когда мы закрываем страницу, а потом снова открываем и все сохранилось, вот это все именно тут и хранится.
Если мы будем обновлять страницу или закрывать, данные из хранилища будут на месте.<br>
localStorage имеет несколько нужных свойств. Данные в нем хранятся в виде ключ: значение.<br>
Посмотреть на localStorage и что в нем находится можно в консоли разработчика в application / Storage

### Методы localStorage
#### setItem()
- добавляем в хранилище ключ и значение.
```javaScript
localStorage.setItem('number',5); // записываем number со значением 5. Если такое свойство есть, то значение просто перезапишется
```

#### getItem()
 - получаем значение ключа.
```javaScript
console.log(localStorage.getItem('number')); // получим 5
```
#### removeItem()
- удаляем ключ
#### clear()
- очищает хранилище

### Небольшой пример работы с формой
```javaScript
const checkbox = document.querySelector('#checkbox_id'), // получаем наши элементы 
        form = document.querySelector('form'),
        change = document.querySelector('.btn-color');

        
        if(localStorage.getItem('isCheked')) { // тут работаем с чекбоксом. Если в хранилище есть isCheked
            checkbox.checked = true; // то ставим чекбокс в положение true то есть с галочкой
        } 
        checkbox.addEventListener('change',()=> { // навешиваем событие, при нажатии добавляем в хранилище наш isCheked
            localStorage.setItem('isCheked', true);
        });




        if(localStorage.getItem('bg') === 'changed'){ // проверяем если в хранилище есть bg равное changed
            form.style.backgroundColor = 'red'; // то красим форму в красный цвет

        }
        change.addEventListener('click',(e)=> { // теперь событие на кнопку
            e.preventDefault();
            if(localStorage.getItem('bg') === 'changed'){ // если в хранилище есть bg в котором changed
                localStorage.removeItem('bg');   // мы удаляем bg из хранилища
                form.style.backgroundColor = '#fff'; // и красим форму в белый цвет

            } else {
                localStorage.setItem('bg','changed'); // иначе добавлем bg в позиции changed 
                form.style.backgroundColor = 'red'; // и красим в красный цвет
            } // тут цвет добавляем при нажатии, а выше в if, добавляем именно проверку, если мы удалим там выще, то при обновлении ст, цвет спадет
        });

```

        // Работа с массивами и объектами. Что бы с ними норм работать их нужно перевести в формат JSON
        // иначе мы будем получать стркоу Object Object


        const persone = {
            name: 'Alex',
            age: 24
        };


        const serializedPesron = JSON.stringify(persone);

        localStorage.setItem('Alex', serializedPesron);
        console.log(JSON.parse(localStorage.getItem('Alex')));
