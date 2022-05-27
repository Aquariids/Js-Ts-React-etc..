[Массив в реакт элементы](#array)<br>
[key](#key)<br>
[Явное проявление новых компонентов](#newComp)<br>
## <a name="array"> Массив в реакт элементы </a>
Преобразуем массивы объектов в массив React элементов. Берем пример из предыдущего конспекта.
```javaScript
import React from 'react';
import './style/App.css';
import { useState } from 'react';
import PostItem from './component/PostItem/PostItem';
function App() {
  const [posts,setPosts] = useState([  // используем состояние, помещаем туда наши объекты внутри массива
    {id:1, title:'JavaScript 1',body:'Description'}, // теперь у нас массив posts с объектами внутри
    {id:2, title:'JavaScript 2',body:'Description'},
    {id:3, title:'JavaScript 3',body:'Description'},

  ])


  return(
    <div className='App'>
    {/*с помощью map отрисовываем компоненты */}
    {posts.map(post => <PostItem post={post}/>)} 
    {/*Внутри post каждый наш объект из массива */}
    </div>
    
  );
};

export default App;
```
![image](https://user-images.githubusercontent.com/70824286/164177037-0226fb0e-1841-4ed0-bf21-4964a39a5824.png)<br>
## <a name="key"> Ключ - Key </a>
При создании списков, есть условие - указание некоторого ключа! Этот ключ должен хранить уникальное значение, в основном это id объекта который используется.
Если ключ не указывется, то в консоли можно увидеть такую ошибку.<br>
![image](https://user-images.githubusercontent.com/70824286/164177790-c37f9857-584d-483c-9911-1ac1104f387f.png)<br>
Укажем ключ при отрисовке компонент:
```javaScript
return(
    <div className='App'>
    {posts.map(post => <PostItem post={post} key={post.id}/>)} 
    </div>
  );
```
 Теперь ошибок нет. В общих словах ключи нужны, что бы реакт лучше следил за элементами и отрисовывал постоянно не весь список, а только те в которых произшли изменения.
 ## <a name="newComp"> Явное проявление новых компонент.</a>
 Добавим к нашим элементам еще заголовок и теперь можно увидеть, что таким образом  у нас появился новый компонент - список с заголовком и массив.
 ```javaScript
 return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Список постов!</h1>

      {posts.map((post) => (
        <PostItem post={post} key={post.id} /> // список постов!
      ))}
    </div>
  );
 ```
 Перенесем все это в новый компонент:
 ```javaScript
import React from "react";
import PostItem from "../PostItem/PostItem";
const PostList = ({posts}) => { // здесь мы используем деструктуризацию {posts} без этого у нас передасться объект с массивами и внутри еще объектами.
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Список постов!</h1>

      {posts.map((post) => ( // Тогда без деструктуризации тут мы писали бы posts.posts.map и тд
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
 ```
 А внутри app мы отобразим наш новый компонент и передадим props:
 ```javaScript
 function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript 1", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ]);

  return (
    <div className="App">
        <PostList posts={posts}/> {/*передаем пропс в компонент*/}
    </div>
  );
}
 
 ```
Все работает как надо!<br>
![image](https://user-images.githubusercontent.com/70824286/164185161-50aaa820-a15a-4fd9-91e6-ae0168cbd12a.png)

 
