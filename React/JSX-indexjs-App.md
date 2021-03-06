[index.html](#indexhtml)<br>
[index.js - App js](#indexjs)<br>
[JSX](#jsx)<br>




## <a name='indexhtml'> index html </a>
После установки проекта в папке public мы увидим Index.html. Это единственный html файл который будет подгружаться при работе приложения.
Внутри будет такая картина:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
```
Здесь мы видим разные мета теги, иконочка, комментариии. Все это можно удалить и оставить главные теги.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React app</title>
     </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
   <!-- Здесь будет помещаться наше REACT приложение-->
  </body>
</html>
```
## <a name="indexjs"> index js и App js </a>
### App js
В папке src мы увидим наши компоненты:<br>
![src](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/React/img/src.png)<br>
Именно App.js будет помещаться в нашем index.html внутри дива с id root.
Здесь мы можем все удалить кроме App.js и index.js.<br>
Внутри App.js удаляем все ненужное и импортируем сам реакт. Реакт импортируется там, где используются компоненты.<br>
Так без лишних вещей будет выглядеть App.js:<br>
```javaScript
import React from 'react';

function App() {
  return(
    <div className='App'>

    </div>
  )
}

export default App;
```
### index js
Внутри индекса так же удаляем ненужное:<br>
```javaScript
import React from 'react'; // импорт самого реакта и создания компоненты
import ReactDOM from 'react-dom'; // здесь мы импортируем реакт дом, он посзволяет вмонтировать наш компонент в приложение
import App from './App';

ReactDOM.render( // у реакт дом вызываем функцию render
    <App />, // первый аргумент это компонент который необходимо отрисовать
  document.getElementById('root') // второй аргумент это блок куда мы будет помещать или вмонтировать этот компонент.
);
// то есть мы импортируем App сюда в index, здесь мы этот компонент и помещаем в наш index.html с помощью ReactDOM.render.
```

## <a name="jsx"> JSX </a>
Jsx - это специальный синтаксис для написания html кода внутри javaScript. jsx это некое расширение для javaScript.
Мы в компоненте используем обычный html код, в свою очередь он компилируется в почти обычный js где мы использовали интерфейс document, а здесь с использованием библиотеки React. Именно поэтому если мы создаем компонент, то нам обязательно нужно будет импортировать реакт.
```javaScript
// JSX синтаксис

ReactDOM.render(
  <div> 
    <button> sss </button>
  <div>
);
```
Вот во что он превращается.
```javaScript
ReactDOM.render(
  React.createElement('div', {},
    React.createElement('button', {}, 'sss')),

  document.getElementById('root')
);
// Как видим лучше использовать JSX и не волноваться.
```
В нашем случае, что бы все заработало, нужно jsx написать в отдельном файле, это и будет наша компонента. А потом вставить компоненту в ReactDOM.
```javaScript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
<App/>,
document.getElementById('root')
);
```
В свою очередь внутри App будет такой jsx код:
```javaScript
import React from 'react';

function App() {
  return(
    <div>
      <button>sss</button>
    </div>
  )
}

export default App;
```
Так и пишется реакт приложения, от компоненты к компоненте.
