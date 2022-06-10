[Установка через npm](#установка-через-npm)<br>
[Инициализация ts в проект](#инициализация-ts-в-проект)<br>
[]()<br>

## Установка через npm
Для установки через npm, сначала нужно установить [node js](https://nodejs.org/en/).<br>
Для установки ts пишем в коносоль:
```code
npm install -g typescript
```
Если установлено, то можно обновить:
```javaScript
npm update -g typescript
```
Для проверки версий:
```javaScript
tsc -v
```
## Инициализация  ts в проект
Для инициализации ts в проект, нужно создать файл с расширением `.ts`.<br>
Для запуска компиляции файла пише `tsc имя файла`. Например `tsc script`.
После этого в директории создастся файл с точным именем вашего `.ts` файла, но с расширением `.js`<br>
![image](https://user-images.githubusercontent.com/70824286/172856394-d9726ce7-9f80-4757-afc9-83f9a31ad497.png)<br>
Так же у вас в каталоге появится файл `tsconfig.json`, но что бы его увидеть нужно ввести команду `tsc --init`.
Внутри этого файла находятся разные настройки.
Компилировать рекомендую сразу с несколькими командами:
```code
tsc --watch --target es6 
```
Таким образом, нам не нужно каждый раз самим компилировать код, за это отвечает `--watch`, а `--target es6` указывает в какую спецификацию ECMAScript мы будем компилировать код, то есть в нашем случае es6.


