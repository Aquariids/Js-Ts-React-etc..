
/*
*                                   1 - Замыкания
*/
function one () {   // ебашим функцию
    let a = 0;  // ее лексияеское оркужение

    return function () {    // ебашим анонимную функцию
      return  a += 1;
    };
}

let b = one(); // в переменную добавляем нашу функцию one
console.log(b()); // 1
console.log(b()); // 2
let c = one(); // ебюашим еще одну переменную и кидаем в нее нашу one
console.log(c()); // выдает 1,
console.log(b());  // выдаст 3
console.log(c()); // 2  ничего не переписав.
// счетчик такой)
// и только эта анонимная функция может использовать облость видимости функции one
// по сути внутрености one приватны и открыты только для нашей анонимной фушнкции

// тьы спросишь меня брат, а че так нельзя что ли?

function two () {

  let a = 0;

    a += 1;
    return a;
}


console.log(two()); // и тут брат будет 1
console.log(two()); // а тут брат Тоже будет 1)
// а прикол весь в том, что переменная внутри функции живет только во время ее вызова
// то есть при вызове мы каждый раз делаем нашу а
// если же мы ее вытащим наружу, то тогда ее можно переписать.
// такая пляска


//                                  римеры с какого то сайта!
/*
Обратите внимание — когда функция выполняется,
 её контекст выполнения удаляется из стека, 
 но её лексическое окружение может или не может быть удалено из памяти, 
 в зависимости от того, ссылается ли на это лексическое окружение другое лексическое окружение.


 function person() {
  let name = 'Peter';
  
  return function displayName() {
    console.log(name);
  };
}
let peter = person();
peter(); // prints 'Peter'

Когда выполняется функция person,
 JavaScript создаёт новый контекст выполнения и лексическое окружение для функции.
  После того, как эта функция завершится, 
  она вернёт displayName функцию и назначится на переменную peter.

  Когда функция person завершится, её контекст выполнения выкинется из стека.
   Но её лексическое окружение всё ещё останется в памяти,
    так как на него ссылается лексическое окружение его внутренней функции displayName. 
    Таким образом, её переменные всё ещё будут доступны в памяти.
*/