/*
use two for loops to generate grids
in first loop generate a container and put the divs in that.


*/
const parentContainer = document.querySelector('.parentContainer')

const container = document.createElement('div');
container.classList.add('container');
for(let i = 0; i<16;i++)
{
    let element = document.createElement('div');
    element.classList.add('element');
    container.appendChild(element);
}
parentContainer.appendChild(container)