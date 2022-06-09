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

### Небольшой пример работы с checkbox
Наш `html` файл:
```html
<form>
  <input id="checkbox_id" type="checkbox" >
</form>
```
Далее код:
```javaScript
const checkbox = document.querySelector('#checkbox_id'),// получаем инпуты
      form = document.querySelector('form'); // получаем форму
    
      if(localStorage.getItem('isCheked')) { // тут работаем с чекбоксом. Если в хранилище есть isCheked
            checkbox.checked = true; // то ставим чекбокс в положение true то есть с галочкой
        } 

        checkbox.addEventListener('change',(e)=> { // навешиваем событие
            if(localStorage.getItem('isCheked')) { // если в localStorage есть ключ isCheked
                localStorage.removeItem('isCheked'); // то удаляем его
            } else {
                localStorage.setItem('isCheked',true) // иначе устанавливем ключ isCheked и значение true
            }

        });
// Теперь чекбокс будет активен после нажатия и останется в таком состоянии, пока мы еще раз не нажем на него. Он будет активен или не активендаже если мы закроем браузер.        
```

Работа с массивами и объектами. Что бы с ними нормально работать их нужно перевести в формат JSON. Иначе мы будем получать стркоу Object Object.

```javaScript
  const persone = {
            name: 'Alex',
            age: 24
        };

        const serializedPesron = JSON.stringify(persone); // парсим в JSON

        localStorage.setItem('Alex', serializedPesron); // если мы здесь значение впишем presone, то в localStorage будет Object Object.
        console.log(JSON.parse(localStorage.getItem('Alex'))); // парсим обратно и получаем наш обычный объект
        // по сути нам просто нужно превратить объект в строку, что бы хранить его в localStorage
```
