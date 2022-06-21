type CardinalDirection = 'North' | 'East' | 'South' | 'West'; // у нас есть тип с литеральными значениями

function move(distance: number, direction: CardinalDirection) {
    return console.log(` I walk ${distance == 1 ? `${distance} meter`: `${distance} meters`} ${direction}`);
  }

move(2,'West'); // Здесь мы ничего не можем указать, кроме указанных нами типов