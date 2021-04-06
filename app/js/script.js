'use strict';



const blocks = document.querySelectorAll('.block'),
		  wrapper = document.querySelector('.wrapper');


wrapper.addEventListener ('click', (event) => {
	if (event.target && event.target.tagName == 'SECTION') {
  	blocks[0].classList.add('red');
  	blocks[0].classList.contains('red');
  }
})


