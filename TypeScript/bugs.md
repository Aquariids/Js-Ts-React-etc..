# TypeScript
Тут немного будет про ошибки typeScript<br>
[Ошибка: cannot find module or its corresponding type declarations.](#cannot)<br>

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
На этом все.


