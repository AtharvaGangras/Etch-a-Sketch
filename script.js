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
        element.style.opacity = 1;
        container.appendChild(element);
    }
    parentContainer.appendChild(container)
}
}
createGrid(16);
//add code for hover- create using only one addevent listenter
//extra credit
parentContainer.addEventListener('mouseover',(e)=>{
    
    let red = random(255);
    let green = random(255);
    let blue = random(255);
    e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
    
    e.target.style.opacity -= 0.1; 
})
function random(n){
    return Math.floor(Math.random() * (1 + n)) 
}


const button = document.querySelector('button');
button.addEventListener('click',()=>{
    let size;
    do{
     size = prompt('grid size:',16);
     if(size === null) return;
    }while(size>100);
    createGrid(size);
    
})