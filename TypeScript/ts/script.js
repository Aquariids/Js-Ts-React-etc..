function move(distance, direction) {
    return console.log(` I walk ${distance == 1 ? `${distance} meter` : `${distance} meters`} ${direction}`);
}
move(2, ''); // Здесь мы ничего не можем указать, кроме указанных нами типов
