const container = document.querySelector('.container');
let input = 16;
paintGrid(input);

container.addEventListener('dragstart', e => e.preventDefault());


const size = document.querySelector('.size');
const clear = document.querySelector('.clear');
const rainbow = document.querySelector('.rainbow');
const darker = document.querySelector('.darker')

clear.addEventListener('click', () => {
    paintGrid(input);
    container.addEventListener('mousedown',blackListenerOn);
    container.addEventListener('mouseup',blackListenerOff);
    const divs = document.querySelectorAll('.container div');
    divs.forEach(div =>{
        div.addEventListener('mousedown',changeColorToBlack);
    });
})

size.addEventListener('click',() => {
    let enter = prompt('Enter number of squares on a side')
    if(enter === null || enter === undefined || enter === '' || enter > 100) return;
    paintGrid(enter);
    container.addEventListener('mousedown',blackListenerOn);
    container.addEventListener('mouseup',blackListenerOff);
    const divs = document.querySelectorAll('.container div');
    divs.forEach(div =>{
        div.addEventListener('mousedown',changeColorToBlack);
    });
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

function blackListenerOn(){
    const divs = document.querySelectorAll('.container div');
    divs.forEach(div =>{
        div.addEventListener('mouseover',changeColorToBlack);
    })
}

function blackListenerOff(){
    const divs = document.querySelectorAll('.container div');
    divs.forEach(div =>{
        div.removeEventListener('mouseover',changeColorToBlack);
    })
}


function rainbowListenerOn(){
    const divs = document.querySelectorAll('.container div');
    divs.forEach(div =>{
        div.removeEventListener('mousedown',changeColorToBlack);
        div.addEventListener('mouseover',changeColorToRainbow);
    });
}

function rainbowListenerOff(){
    const divs = document.querySelectorAll('.container div');
    divs.forEach(div =>{
        div.removeEventListener('mouseover',changeColorToRainbow);
    });
}

function darkerListenerOn(){
    const divs = document.querySelectorAll('.container div');
    divs.forEach(div =>{
        div.removeEventListener('mousedown',changeColorToBlack);
        div.addEventListener('mouseover',changeColorToDarker);
    });
}

function darkerListenerOff(){
    const divs = document.querySelectorAll('.container div');
    divs.forEach(div =>{
        div.removeEventListener('mouseover',changeColorToDarker);
    });
}

container.addEventListener('mousedown',blackListenerOn);
container.addEventListener('mouseup',blackListenerOff);
const divs = document.querySelectorAll('.container div');
divs.forEach(div =>{
    div.addEventListener('mousedown',changeColorToBlack);
});

rainbow.addEventListener('click',() =>{
    container.removeEventListener('mousedown',blackListenerOn);
    container.removeEventListener('mouseup',blackListenerOff);
    container.removeEventListener('mousedown',darkerListenerOn);
    container.removeEventListener('mouseup',darkerListenerOff);
    const divs = document.querySelectorAll('.container div');
    divs.forEach(div =>{
        div.removeEventListener('mousedown',changeColorToDarker);
        div.addEventListener('mousedown',changeColorToRainbow);
    });
    container.addEventListener('mousedown',rainbowListenerOn);
    container.addEventListener('mouseup',rainbowListenerOff);
});

darker.addEventListener('click',() => {
    container.removeEventListener('mousedown', blackListenerOn);
    container.removeEventListener('mouseup', blackListenerOff);
    container.removeEventListener('mousedown',rainbowListenerOn);
    container.removeEventListener('mouseup',rainbowListenerOff);
    const divs = document.querySelectorAll('.container div');
    divs.forEach(div =>{
        div.removeEventListener('mousedown',changeColorToRainbow);
        div.addEventListener('mousedown',changeColorToDarker);
    });
    container.addEventListener('mousedown',darkerListenerOn);
    container.addEventListener('mouseup',darkerListenerOff);
});