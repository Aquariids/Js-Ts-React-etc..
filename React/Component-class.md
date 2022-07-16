Сделаем счетчик теперь с помощью класса
```javaScript
// В классовой компоненте использовать хуки нельзя.
// И классовые компоненты это уже устаревший способ.
import React from "react";
class ClassCounter extends React.Component { // Наследуемся от реакт компонента
    // Для создания состояния создаем конструктор
    constructor(props) {
        super(props);
        this.state = { // в компоненте есть свойство state, здесь мы его инициализируем
            count:0  // Создаем поле count 
        }

        this.inc = this.inc.bind(this); // биндим контекст для наших функций
        this.dec = this.dec.bind(this);
    }

    inc() {
        this.setState({count: this.state.count + 1})
    }
    dec() {
        this.setState({count: this.state.count - 1})
    }

    render() { // в классовой компоненте мы реализуем функцию render, она будет возвращать jsx.
               // в функциональной компоненте это происходит без промежуточных функций,сразу.
        return (
            <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.inc}> Плюс </button>
            <button onClick={this.dec}> Минус </button>
            </div>
        )
    }
}

export  default ClassCounter;
```
