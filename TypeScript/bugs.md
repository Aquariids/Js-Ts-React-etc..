# TypeScript
Тут немного будет про ошибки typeScript<br>
[Ошибка: cannot find module or its corresponding type declarations.](#cannot)<br>
[Ошибка стратегии разрешения модулей]()<br>

    "moduleResolution": "node",


### <a name="cannot"> cannot find module or its corresponding type declarations </a>
У меня такая ошибка вылезла, когда я решил использовать `svg` и `scss` в `react` c `ts`.
Короче при использовании разных сторонних библиотек на Js или в нашем случае svg, импортируемому модулю нужно указать типы данных. Иначе тс не находит тип и выдает об этом ошибку. Я могу ошибаться!!!!.<br>
В общем суть такова, что нужно самому создать декларацию с нужным типом данных.<br>
Обычно для кастомных деклараций создается в корне папка `types`, внутри подпапки с нужным именем и внутри файл `index.d.ts`.
![image](https://user-images.githubusercontent.com/70824286/170338913-fb7f52e6-35aa-4b3d-9b55-bcb529c40c77.png)<br>
Внутри index.d.ts пишем свою декларацию.<br>
Первый вариант:
```typeScript
declare module '*.svg' { // декларируем модули с расширением .svg
    const content: any; // контент внутри будет с типом any 
    export default content;
  }
```
Второй вариант:
```typeScript
// Для декларирования расширения можно написать просто так:
declare module '*.svg'; // в таком случае тип автоматом будет any

```
Далее переходим в файл `tsconfig.json`<br>
Если в корне нет этого файла, пишем в консоли `tsc --init`<br>
![image](https://user-images.githubusercontent.com/70824286/170343464-f0a684d3-dee1-4daf-aa89-b4d6f3a878c6.png)<br>
Внутри будет `json` объект. <br> Нужно после объекта `"compilerOption"` дописать через запятую строчку `"include": ["src","src/component","types/svg/index.d.ts"]`<br>
Вот как это должно выглядеть:
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src","src/component","types/svg/index.d.ts"] // тут путь того, что будет участвовать в компиляции и указываем путь до нашей декларации.
}
```
### Ошибка с разрешением стратегии модулей
Такая ошибочка у меня вылезла при работе с `nextjs`, по идеи ее не должно быть, так как по умолчанию используется стратегия `node`.<br>
В `tsconfig.json` у нас будет здесь ошибочка.
![image](https://user-images.githubusercontent.com/70824286/176172279-72863be7-4890-403a-ad50-776917c86e79.png)<br>
И при импорте в `index.tsx`.<br>
![image](https://user-images.githubusercontent.com/70824286/176172506-6b309163-fc46-48ff-b591-c0876ad4d340.png)<br>
Нам в ошибке уже напсали, что нужно указать опцию `moduleResolution:node`. Так мы и сделаем.<br>
![image](https://user-images.githubusercontent.com/70824286/176173506-9d828171-2e4d-4b77-8f43-8a6a984a7328.png)<br>
Все ошибка исчезла.
