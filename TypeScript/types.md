[Числа, строки, булевые и тд](#числа-строки-булевые-и-тд)<br>
[Без типа](#без-типа)<br>
[any](#any)<br>
[null и undefined](#null-и-undefined)<br>
[Массивы](#массивы)<br>
[Типизация функций](#типизация-функций)<br>
[Знак | (union тип)](#знак--union-тип)<br>
[Типизация объекта](#объекты)<br>
[Знак ?](#знак)<br>
[Проверка типов](#проверка-на-тип)<br>
[void](#void)<br>
# Базовые типы в typeScript
## Числа, строки, булевые и тд
#### number
Для объявления переменной типа число используется простой синтаксис, где тип ставится после двоеточия. `let a:number = 1;`.
```ts
let a:number = 1; // В этой переменной может хораниться только числовой тип!
```
#### string
Аналогично и для строк.
```ts
let b:string = 'str';
```
Если же мы попытаемся записать туда число, то ts нам выдаст об этом ошибку.
```ts
let b:string = 1; // Type 'number' is not assignable to type 'string'
```
#### boolean
Все тоже самое.
```ts
let c:boolean = false;
```
#### Без типа
В таком случае ts на основе значения будет автоматически выставлять тип.
```ts
let c = false;
c = 'str'; // Type 'string' is not assignable to type 'boolean'.
```
#### any
`any` - это когда тип неизвестен на момент написания. Произвольный тип данных.
```ts
let hi:any = 1; // number
hi = 'hi'; // теперь string. Ошибок нет.
```
#### null и undefined
null и undefined: соответствуют значениям null и undefined в javascript,
но в ts их тип будет `any`
```ts
let c:undefined = undefined;
let b:null = null;
b = 1; // Ошибка
```
Если мы просто положим их в переменные, то автоматически они будут равны типу `any`
```ts
let c = undefined;
let b = null;
b = 1; // Ошибок нет. 
```
И так далее.
## Массивы
Синтаксис такой же как и был, но добавляем две скобки `const arr:string[]` 
#### string
```ts
const arr:string[] = ['hi','bro']; // массив только из строк 
```
#### number 
Тоже самое и для чисел.
```ts
const arr:number[] = [1,2,3,4,5];
```
## Типизация функций
Объявим обычную функцию
```ts
function test (a) { // здесь у аргумента a вы увидите предупреждение о том, что аргумент типа any
return ''
}
```
Так происходит когда у нас нет явного типа, везде будет `any` как с `null` и `undefined`.
Эту подсказку можно отключить в `tsconfig.json`.
В строке `"noImplicitAny": true` нужно просто указать `false`. Но лучше не нужно)
#### Аргументы
Давайте теперь зададим аргументам тип, делается все так же через двоеточие.
```ts
function test (a:number,b:number) {
return ''
}

```
Теперь эта функция принимает только строку и число. Так же мы можем указать, что функция должна вернуть.
#### Тип возвращаемого функцией
Для это ставится двоеточие после аргументов и сам тип.
```ts
function test (a:number,b:number): number {
return 0;//  здесь была бы ошибка, мы возвращали пустую строку, поэтому ставим 0.
}
```
Теперь наша фукнция принимает два числа и возвращает тоже только число!
## Знак | (union тип)
Так же мы можем и функциям и переменным и аргументам и так далее, указать, что тип будет или такой или сякой. 
```ts
function test (a:number,b:number): number | string {
return ''; // вернули строку, но ошибок нет
}
```
Теперь ошибки нет, потому что мы указали, что ждем число или строку.
```ts
let a:string | number = 2; // ошибок нет
```
Мы можем сделать например вот так.
```ts
let a:string[] | number = 's'; // тут будет ошибка. 
// у нас должен быть или массив строк или число
let b:string[] | number = ['s'];  // все ошибок нет
```
## Объекты
Создадим функцию которая принимает в себя объект.
```ts
function countCoord (coord: {lat:number, long:number}) {
    
}
```
Тем самым мы объявили, что наша функция ожидает объект из двух свойств с числами. Так же мы можем указать, что какое-то из этих свойств не является обязательным.
## Знак ?
Знак `?` указывает, что свойство не обязательное.Ставится перед двоеточием.
```ts
function countCoord (coord: {lat:number, long?:number}) {
    
}
```
По сути этот знак, это короткая запись `тип который указали | undefined`.<br>
Вот что мы увидим, если наведем на наш аргумент<br>
![image](https://user-images.githubusercontent.com/70824286/174483541-e36777de-b2e0-4c96-98cc-bb387a7842cf.png)<br>
## Проверка на тип
Например у нас в функции аргумент union тип.
Нам нужно применить к аргументу какой нибудь метод, в нашем случае для числа или строки.
```ts
function a (id: string | number) {   
    console.log(id.toUpperCase); // будет ошибка 
}
```
Сначала нам нужно явно узнать, что находится в `id` строка или все же число. Поэтому проверяем.
```ts
function a (id: string | number) { 
    if(typeof id === "string") {
        console.log(id.toUpperCase);
    }  
}
```
#### Проверим на массив
Например у нас будет в аргументе массив чисел или число. Нам нужно в случае если это массив, что-то сделать, использовать какой-то метод.
```ts
// мы просто проверяем аргумент методом isArray() на массив.
function sum(a:number[] | number) {
    if(Array.isArray(a)) {
        let num = a.reduce((sum:number,current:number) => {
            return sum + current; // если массив, то вернем сумму чисел
        })
        return num;
    } else {
        return a; // если одно число, то его и вернем.
    }
}
```
## void
Если наша функция ничего не возвращает, то мы можем указать тип `void`, что будет значит, что эта функция ничего не возвращает.
```ts
function some(a:number):void {
    return;
}
```
