const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation() {
    const element = document.querySelector('.wrapper__box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 400) {
            clearInterval(id);
        } else {
            pos++;
            element.style.top = pos + 'px';
            element.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);



// function logger () {
//     if (i === 3) {
        
//     clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }


// let id = setTimeout(function log () {
//     console.log('hello'); 
//     id = setTimeout(log,500);
// }, 500);