Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
```javaScript
domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
```

ну че тут сказать, я затупился как даун и высрал полную шляпу
```javaScript
function domainName(url) {
    let dot = url.indexOf('.'),
        twoDot,
        domain,
        slash
    if (url[0] == 'w') {
        twoDot = url.indexOf('.', dot + 1)
        return domain = url.slice(dot + 1, twoDot)
    } 
    
    if (url[0] == 'h') {
        slash = url.indexOf('/');
        domain = url.slice(slash + 2, dot);
        if(domain[0] == '/') {
            return domain.slice(1);
        } 
        if (domain[0] == 'w') {
            twoDot = url.indexOf('.', dot + 1)
            return domain = url.slice(dot + 1, twoDot)
        } else {
            return domain;
        }

        
    } else {
        domain = url.slice(slash + 2, dot); // Тут ваще чет намудрил, но мне так лень это разбирать, ужасное решение. оставлю его, что бы в будущем посмеяться
        return domain.slice(0, dot)
    }

}
```
Я решил вырезать доменое имя от точки к точке или от слеша к слешу и тд. Намудрил полную и нечитабельную шляпу.
Вот решение которое мне очень понравилось. Я не понимаю, почему не додумался использовать replace()

```javaScript

function domainName(url){
url = url.replace("https://", '');
url = url.replace("http://", ''); // replace меняет первый аргумент на второй, вторым у нас стоит ничто, пустая строка, поэтому по сути удаляем строку просто.
url = url.replace("www.", ''); // если запись у нас http://www. - то мы сначала уберем http://, а на этой строке уберем и www.
return url.split('.')[0]; // далле в зависимости от того, что получилось, разбиваем элементы через точку и оставляем первый элемент
};

console.log(domainName('http://www.zombie-bites.com')); // в таком случае в url  у нас будет находиться zombie-bites.com - эту строку разбиваем черех точки split('.')
// мы получим такой массив ['zombie-bites', 'com' ], далее указываем [0] - то есть возвращаем только первый элемент, это будет zombie-bites и все.
```
