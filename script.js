const container = document.querySelector('.container');
let input = 16;
const size = document.querySelector('.size');
const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    paintGrid(input);
})
size.addEventListener('click',() => {
    let enter = prompt('Enter number of squares on a side')
    if(enter === null || enter === undefined || enter === '' || enter > 100) return;
    paintGrid(enter);
    input = enter;
});

paintGrid(input);


function paintGrid(input){
    container.replaceChildren();
    for(let i = 0; i < input ** 2; i++){
        const div = document.createElement('div');
        div.style.width = `${container.offsetWidth / input - 4}px`;
        div.style.height = `${container.offsetHeight / input - 4}px`;
        div.classList.add('grid');
        div.addEventListener('mouseover',() => div.style.backgroundColor = 'gray');
        container.appendChild(div);
    }
}