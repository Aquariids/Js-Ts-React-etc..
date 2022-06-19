[types]()<br>
[interface]()<br>

## types

`type` - Это ключевое слово для вынесения псевдонимов типов отдельно от перменных функций и так далее. Вот функция из урока по базовым типам.

```ts
function sum(a: number[] | number) {
  // у нас есть union тип
  if (Array.isArray(a)) {
    let num = a.reduce((sum: number, current: number) => { // здесь не нужно указывать тип, так как мы  в любом случае можем получить только number
      return sum + current;
    });
    return num;
  } else {
    return a;
  }
}
```
Так вот с помощью `type` мы можем наши типы вынести отдельно.
```ts
type Calc = number[] | number; // создали псевдоним для типов

function sum(a:Calc) { // указали тут и все
    if(Array.isArray(a)) {
        let num = a.reduce((sum,current) => {
            return sum + current; 
        })
        return num;
    } else {
        return a; 
    }
}
```
Можно создать объект с типами.
```ts
type Point = { // представление нашего будущего объекта.
    x:number,
    y:number
}
function print (coord:Point):string { // функция ждет, что получит, объект типа Point
return `x:${coord.x}, y:${coord.y}`;
}

// мы передаем объект с x и y. То чего от нас и ждали!
console.log(print({x:10,y:11})); // x:10, y:11
```

## interfaces 

