/*
use two for loops to generate grids
in first loop generate a container and put the divs in that.


*/
const parentContainer = document.querySelector('.parentContainer')

for (let j = 0; j < 16; j++) {
    const container = document.createElement('div');
    container.classList.add('container');
    for (let i = 0; i < 16; i++) {
        let element = document.createElement('div');
        element.classList.add('element');
        container.appendChild(element);
    }
    parentContainer.appendChild(container)
}

//add code for hover- create using only one addevent listenter
parentContainer.addEventListener('mouseover',(e)=>{
    e.target.style.backgroundColor = 'green';
})