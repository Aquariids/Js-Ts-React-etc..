[Факториал](#Факториал)<br>
[Разные решения](#Разные-решения)<br>

## Факториал
Факториал натурального числа - короче это произведение(результат умнажения) чисел от `1` до `n`. Например `5 = 1*2*3*4*5` что даст нам `120`. И тд..
## Разные решения
### Самое мудреное что я встречал.
```javaScript
const factorial = (n) => {
    const iter = (current, acc) => {
        if (current === 0) {
            return acc;
        }
        return iter(current - 1, acc * current);
    };

    return iter(n, 1);
}

console.log(factorial(5)); // 120
```
### Уже попроще 
Ну выглядит зато сочно.
```javaScript
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(5)); // 120
```
### Ну и наверное самое популярное решение, хотя может и нет, просто я дурак(
Понятное условие.Тоже рекурсия, но как по мне намного легче читается.
```javaScript
function fact(n) {
    if (n === 1) { 
        return n;
    } else {
        return n * fact(n - 1);
    }
}

console.log(fact(5)); //120
```
Ну вот и все, просто хотел записать.
