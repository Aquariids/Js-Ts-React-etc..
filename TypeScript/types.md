[number]()<br>
[string]()<br>
[boolean]()<br>
[Без типа]()<br>
[any]()<br>
[null и undefined]()<br>
## Базовые типы в typeScript

#### number
Для объявления переменной типа число используется простой синтаксис `let a:number = 1;`.
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
let c = undefined;
let b = null;
b = 1; // Ошибок нет. 
```
