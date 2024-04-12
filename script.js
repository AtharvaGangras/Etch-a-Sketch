/*
use two for loops to generate grids
in first loop generate a container and put the divs in that.


*/
const parentContainer = document.querySelector('.parentContainer')

function createGrid(size){
    parentContainer.innerHTML = '';

for (let j = 0; j < size; j++) {
    const container = document.createElement('div');
    container.classList.add('container');
    for (let i = 0; i < size; i++) {
        let element = document.createElement('div');
        element.classList.add('element');
        container.appendChild(element);
    }
    parentContainer.appendChild(container)
}
}
createGrid(16);
//add code for hover- create using only one addevent listenter
parentContainer.addEventListener('mouseover',(e)=>{
    e.target.style.backgroundColor = 'green';
})


const button = document.querySelector('button');
button.addEventListener('click',()=>{
    let size;
    do{
     size = prompt('grid size:');
    }while(size>100);
    createGrid(size);
    
})