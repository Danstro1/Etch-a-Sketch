const container = document.querySelector('.container');
let input = 16;
paintGrid(input);

const size = document.querySelector('.size');
const clear = document.querySelector('.clear');
const rainbow = document.querySelector('.rainbow');
const darker = document.querySelector('.darker')
const divs = document.querySelectorAll('.grid')

rainbow.addEventListener('click',() => {
    divs.forEach(div =>{
        div.removeEventListener('mouseover',changeColorToBlack);
        div.removeEventListener('mouseover',changeColorToDarker);
        div.addEventListener('mouseover',changeColorToRainbow);
    })
})

darker.addEventListener('click',() => {
    divs.forEach(div =>{
        div.removeEventListener('mouseover',changeColorToBlack);
        div.removeEventListener('mouseover',changeColorToRainbow);
        div.addEventListener('mouseover',changeColorToDarker);  
    })
})

clear.addEventListener('click', () => {
    paintGrid(input);
})
size.addEventListener('click',() => {
    let enter = prompt('Enter number of squares on a side')
    if(enter === null || enter === undefined || enter === '' || enter > 100) return;
    paintGrid(enter);
    input = enter;
});

function paintGrid(input){
    container.replaceChildren();
    let size = `${container.offsetWidth / input - 4}px`;
    for(let i = 0; i < input ** 2; i++){
        const div = document.createElement('div');
        div.style.width = size;
        div.style.height = size;
        div.dataset.darken = 100;
        div.classList.add('grid');
        div.addEventListener('mouseover',changeColorToBlack);
        container.appendChild(div);
    }
}

function changeColorToRainbow(){
    this.style.backgroundColor = `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`;
}

function changeColorToBlack(){
    this.style.backgroundColor = 'black';
}

function changeColorToDarker(){
    this.style.filter = `brightness(${this.dataset.darken - 10}%)`
    this.dataset.darken -= 10;
}