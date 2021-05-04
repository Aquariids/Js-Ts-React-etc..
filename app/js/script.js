let i = 0;
const btn = document.querySelector('button');
const deleteElement = (event) => {                     // наша функция          
  console.log(event.target);            // выводим наш элемент в консоль при каждом нажатии
  i++; // прибавляем 1 в i
  if(i == 2) {  // пишем условие, что если i равна 1 
      btn.removeEventListener('click',deleteElement);   // то мы удаляем наш обработчик события
  }
};
btn.addEventListener('click',deleteElement);