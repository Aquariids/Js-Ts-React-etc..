[Глобальные стили в css](#global)<br>
[module css - Локальные стили](#module)<br>
[Инлайн стили](#inline)<br>


## <a name="global"> Глобальные стили </a>
Создаем в проекте css файл:<br>
![image](https://user-images.githubusercontent.com/70824286/163531292-0afe17be-5179-4bea-9d11-1f446ea23a0f.png)<br> 
Указываем нужные стили:<br>
```css
* {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
}

#root {
    display: flex;
    justify-content: center;
}

.App {
    width: 800px;
}

.post {
    display: flex;
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;

    justify-content: space-between;
    align-items: center;
        }


```
Устанавливаем классы:<br>
Для того что бы добавить класс на элемент, нужно использовать слово className, так как в js слово class зарезервировано для создания классов.<br>
```javaScript
import React from "react";

function CssInReact () {

    return (
        <div className="App">
            <div className="post">
                <div className="post__content">
                    <strong> javaScript </strong>
                    <div>
                        javaScript - язык программирования
                    </div>
                </div>
                <div className="post__btns">
                    <button> Удалить </button>
                </div>
            </div>
        </div>
    )
}

export default CssInReact;
```
Теперь в App импортируем классы и добавляем на страницу наш компонент:
```javaScript
import React from 'react';
import CssInReact from './component/CssInReact/CssInReact';
import "./style/App.css"
function App() {
  return(
    <>
   <CssInReact/>
    </>
    
  )
}

export default App;
 
```
Вот что мы имеем:<br>
![image](https://user-images.githubusercontent.com/70824286/163532237-e2933a0b-7e66-4e53-ae79-dfda6295f601.png)<br>
Мы создали css файл, импортировали его в App который собирает в себе компоненты для отрисовки, и стили заработали. То есть в самой компоненте мы не импортировали эти стили, и они все равно работают. Что бы явно показать их глобальность. 
```javascript
// Внутри App
import Counter from './component/Counter/Counter' // в App импортируем другой компонент

// Внутри компонента Counter
import "../../style/App.css" // внутри этого компонента мы импортируем наши стили
```
При этом в App мы даже не пользуемся нашей компонентой.
```javaScript
import React from 'react';
import CssInReact from './component/CssInReact/CssInReact';
import Counter from './component/Counter/Counter' // Это компонент в которым мы импортировали наши стили

function App() {
  return(
    <>
   <CssInReact/>
    </>
    
  )
}

export default App;
```
Смотрим на проект:<br>
![image](https://user-images.githubusercontent.com/70824286/163537100-9dbbf783-94e3-4535-926d-ec71bc2137f6.png)<br>
Все работате так же. App.css глобальные стили, куда бы мы их не запихали, все будет работать.
## <a name="module"> module css </a>
Теперь сделаем все тоже самое, только локально, конкретно для одной компоненты. Здесь мы будем пользовать scss, ничего устанавливать не нужно, просто меняем расширение файла и все будет работать.<br>
Теперь создаем файл со стилями там же где находится нужный компонент, называем так же и добавляем приписку module - мы создаем локальный модуль.<br>
![image](https://user-images.githubusercontent.com/70824286/163538185-1c193c7c-6ac7-422d-88c6-b0251d5329d3.png)<br>
Наш компонент:
```javaScript
import React from "react";
import style from './CssInReact.module.scss'; // импорируем наши стили в объект style - его называть можно как хочется, часто это просто буква s
const {App,post,post__content,post__btns} = style; // с помощью деструктуризации вытаскивыаем из него наши стили, что бы не писать постоянно style.App и тд
function CssInReact () {

    return (
        <div className={App}> // указываем стили в скобках {тут js code} так как это у нас по сути переменные, для их использования нам нужно использовать js.
            <div className={post}>
                <div className={post__content}>
                    <strong> javaScript </strong>
                    <div>
                        javaScript - язык программирования
                    </div>
                </div>
                <div className={post__btns}>
                    <button> Удалить </button>
                </div>
            </div>
        </div>
    )
}

export default CssInReact; 
```
И те же стили :
```css

* {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
}

#root {
    display: flex;
    justify-content: center;
}

.App {
    width: 800px;
}

.post {
            display: flex;
            padding: 15px;
            border: 2px solid teal;
            margin-top: 15px;
        
            justify-content: space-between;
            align-items: center;
        }

```
И почти тот же результат:<br>
![image](https://user-images.githubusercontent.com/70824286/163538692-8b431964-c6d5-455b-8f44-6624fffa4ed0.png)<br>
Разница в том, что тут у нас блок находится с краю, а в прошлых случаях, он был посередине. Связанно это с тем, что в css мы указывали root
```
#root {
    display: flex;
    justify-content: center;
}

```
root находится в нашем html файле и в него помещается весь наш проект. И так как до этого мы использовали глобальные стили, то и на root это действовало.
Теперь же с локальными модулями, эти css свойства уже не работают, поэтому наш проект и не посередине. Теперь все, что мы пишем, помещается в некий объект как свойства, мы их вытаскиваем в нужном компоненте и пользуемся. Таким образом, мы можем даже использовать от компоненты к компоненте одинаковые имена, реакт из наших классов будет делать уникальные имена, поэтому мы можем использовать в разных компонентах одни и те же классы.
## <a name="inline"> Инлайн стили </a>
Мы так же можем указывать инлайн стили сразу в компоненте. Если свойство состоит из двух слов, то мы используем камлКейс, тире здесь не ставится.
```javaScript
    return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Список постов!</h1> // здесь мы использовали инслайн стили

      <div className="post">
        <div className="post__content">
          <strong>
            {props.post.id} - {props.post.title}{" "}
          </strong>
          <div>
            {title} - {body}
          </div>
        </div>
        <div className="post__btns">
          <button> Удалить </button>
        </div>
      </div>
    </div>
  );

```
![image](https://user-images.githubusercontent.com/70824286/164179969-1a43dce5-5e28-481a-a874-1ab714f51ccf.png)<br>
