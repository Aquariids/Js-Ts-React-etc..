function hiDima(myName) {
    return `Hello ${myName.name} ${myName.surname}`;
}
// получаем строку hello Dima Chernomashentsev
console.log(hiDima({ name: 'Dima', surname: 'Chernomashentsev' }));
