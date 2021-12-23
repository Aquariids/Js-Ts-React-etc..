[Почему? зачем? а как?]()<br>

## <a name=""> Свойства - геттеры и сеттеры </a>
              
Есть два типа свойств у объекта.<br>
1 - это свойства данные (data properties)<br>
это все обычные свойства ключ:значение.<br>
2 - это свойства аксессоры (accessor properties).<br>
это уже функции которые во внешнем коде будут выглядеть как обычные свойства<br>
```javaScript
// get and set
const user = {
    name: 'Dima',
    age:'24',

    get userAge () { // ключевое слово get (мы получаем значение)
        return this.age; // получаем наш возраст
    },

    set userAge(num){  // в пару к get идет set, он уже что то должен в себя принимать (мы устанавливаем значение)
        this.age = num;
    }
};

console.log(user.userAge); // при вызове мы не пишем userAge(), геттер предпологает что внутри у нас уже есть какой то функционал и он нам позволяет работать с этим меотодом как с обычным совйством. Поэтому это называется свойство аксессор

console.log(user.userAge = 30);
console.log(user.userAge); // 30
``` 