Для начала создадим папку components в папке src.<br>
![image](https://user-images.githubusercontent.com/70824286/152684905-a40f81e3-9c0a-4a56-aa07-99f7413ea56e.png)<br>
Внутри этой папке под каждый компонент мы будем создавать свою папку, с компонентом.
Создаем компонент Counter.jsx - расширение можно использовать и .js и jsx.<br>
![image](https://user-images.githubusercontent.com/70824286/152702834-dac37f27-945c-4f3e-8064-0f52ec82df6c.png)<br>
Компонент называется так же как и файл в котором он расположен и всегда с большой буквы. Компонент это то, что возвращает нам jsx. [Поэтому всегда импортируем реакт если создаем компоненту](https://github.com/Aquariids/Js-Ts-React-etc../blob/main/React/JSX-indexjs-App.md#-jsx-) (сейчас уже можно и не импортировать и так будет работать).
```javaScript
import React, { useState } from "react"; // Для использования jsx нам нужно импортировать реакт.
// мы можем использовать стрелочную функцию или обычную.
const Counter = () => {
  const [count, setCount] = useState(0); // создаем состояние для счетчика
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count <= 0) return 0;
    else setCount(count - 1);
  };
  return (
    // тут мы возвращаем размету, все что выше просто javaScript
    <div>
      <h1>{count}</h1> {/*Для использования javaScript в разметке, мы всегда указываем скобки {}*/} 
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter; // в конце экспортируем нашу компоненту.

```
Экспортируем нашу компоненту в app.js для отрисовки.<br>
![image](https://user-images.githubusercontent.com/70824286/152703763-176ac5fb-845d-47ac-9de1-6d4c224f214a.png)<br>
Если мы хотим использовать несколько компонент в одном месте, то их нужно поместить в div или пустой блок <> </>
```javaScript
// наш app.js 
import React from 'react';
import Counter from './component/Counter/Counter'


//  Теперь мы можем использовать сколько угодно счетчиков. У каждого будет свое состояние, они независимы.
function App() {
  return(
    <>  
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter/>
    </>
    
  )
}

export default App;
 
```
![counter](https://github.com/Aquariids/React/blob/main/img/conter.gif)<br>
