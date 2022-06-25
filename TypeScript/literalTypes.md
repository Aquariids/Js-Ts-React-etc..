## Литеральные типы
Глянем сразу на примере, что это
```ts
let b = 'hi';
```
Если мы глянем на переменную, ее тип будет `string`<br>
![image](https://user-images.githubusercontent.com/70824286/174760931-5c7429ea-0df8-43ef-8076-00147bb4c792.png)<br>
Но мы можем задать по сути кастомный тип, например вот так:
```ts
let b:'hello' = 'hello';
```
Теперь переменная `b` может принимать только `'hello'`, и ничего больше. <br>
![image](https://user-images.githubusercontent.com/70824286/174761116-2d691797-396a-4b5f-9faf-4c8670e01f39.png)<br>
Теперь посмотрим как это можно применить на практике
```ts
type CardinalDirection = 'North' | 'East' | 'South' | 'West'; // у нас есть тип с литеральными значениями

function move(distance: number, direction: CardinalDirection) {
    return console.log(` I walk ${distance == 1 ? `${distance} meter`: `${distance} meters`} ${direction}`);
  }

move(2,'West'); // I walk 2 meters West
move(3 '') // // Здесь мы ничего не можем указать, кроме указанных нами типов

```
Ide нам сразу подсказывает, что мы можем указать.<br>
![image](https://user-images.githubusercontent.com/70824286/174765836-06a951df-5a73-4802-9c8d-4e443b7e8e8b.png)<br>
