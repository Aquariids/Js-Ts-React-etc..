[Объект props](#props)<br>
[props.children]()<br>

## <a name="props">Пропсы </a>

Компонент может принимать в себя входные данные - props. Как функция принимает аргументы, так и тут. Только в случае с props это объект, он есть всегда, даже если мы ничего не передавали, в таком случае будет пустой props.

```javaScript
import React from "react";

const PostItem = (props) => { // называть можно как угодно, но обычно это просто props
      console.log(props); // выведем в консоль пропс и посмотрим, что там.
  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong> javaScript </strong>
          <div>javaScript - язык программирования</div>
        </div>
        <div className="post__btns">
          <button> Удалить </button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
```
Мы увидим пустой объект:<br>
![image](https://user-images.githubusercontent.com/70824286/163752600-29da2344-2433-40a3-be3b-49799d91d0b2.png)<br>
Передавать туда данные можем как с функцией при вызове. Только в этом случае мы не вызываем, а передаем в компонент в виде атрибутов, как в html коде.

```javaScript
import React from 'react';
import './style/App.css';
import PostItem from './component/PostItem/PostItem';
function App() {
  return(
    <>
    
    <PostItem post={{id:1, title:'JavaScript',body:'Description'}}/> {/*Теперь у нас два одинаковых компонента, но с разными входными данными*/}
     <PostItem post={{id:2, title:'Java',body:'Description'}}/>
    

    </>
    
  )
}

export default App;
```
В консоли мы видим сам объект props, внутри него объект post внутри которого идут свойства.<br>
![image](https://user-images.githubusercontent.com/70824286/163765721-81ad00e6-3af8-497d-b0c3-60faf75e0a3b.png)<br>

Далее попробуем их использовать в компоненте.
```javaScript
import React from "react";

const PostItem = (props) => {
const {post:{id,title,body}} = props; {/*Вариант с деструктуризацией*/}
  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>{props.post.id} - {props.post.title} </strong> {/*Мы из props достаем объект post из него уже нужные свойства*/}
          <div>{title} - {body}</div> {/*Но проще использовать деструктуризацию*/}
        </div>
        <div className="post__btns">
          <button> Удалить </button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
```
![image](https://user-images.githubusercontent.com/70824286/163766554-722a4e27-4416-4e23-9da9-cd1cab927cbe.png)

