const container= document.querySelector('#container');
let gridSize = 16;
function gridCreate(gridSize){
    let divSize = 100 / gridSize;
    for (let i = 0; i < gridSize; i++){
        let row = document.createElement('div');
    
        row.style.display = 'flex';
        row.style.width = '100%';
    container.appendChild(row);

    for (let j = 0; j < gridSize; j++){
        let div = document.createElement('div');
        div.style.borderColor = 'black';
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '1px';
        div.style.width = `${divSize}%`;

        div.style.display = 'flex';
        row.appendChild(div);


        div.addEventListener('mouseenter', function(){
        this.style.backgroundColor= 'black';
        })};
}};
gridCreate(gridSize);

const size = document.querySelector('#araara');
    size.addEventListener('click', () => {
        
        gridSize = prompt('Choose a number and it shall be. Min:1 Max:100');
        if (gridSize > 100){
            gridSize = 100;
            alert('Defaulted to 100.')
        }
        else if (gridSize <= 0){
            gridSize = 1;
            alert('Defaulted to 1.')
        }
        else if (isNaN(gridSize)){
            gridSize = 69;
            alert('I pity the fool. Defaulted to 69')
        }
        gridRemove();
        gridCreate(gridSize);
    });

    function gridRemove(){
        const divs = container.querySelectorAll('div');
        divs.forEach(div => {
            div.remove();
        })
    }

const reset = document.querySelector('#reset');
    reset.addEventListener('click', () => {
        const divs = container.querySelectorAll('div');
        divs.forEach(div => {
            div.style.backgroundColor = 'white';
        })

    })

