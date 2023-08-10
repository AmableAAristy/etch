const container= document.querySelector('#container');
let gridSize = 16;
function gridCreate(gridSize){
for (let i = 0; i < gridSize; i++){
    let row = document.createElement('div');
    
    row.style.display = 'flex';
    row.style.flexDirection = 'column';
    // row.style.width = '10px'
    container.appendChild(row);

    for (let j = 0; j < gridSize; j++){
        let div = document.createElement('div');
        div.style.borderColor = 'black';
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '1px';
        div.style.width = '20px';
        div.style.height = '20px';
        div.style.display.flex;
        row.appendChild(div);


        div.addEventListener('mouseenter', function(){
        this.style.backgroundColor= 'black';
        })};
}};
gridCreate(gridSize);

const size = document.querySelector('#araara');
    size.addEventListener('click', () =>{
        // alert('Choose a number and it shall be. Min:1 Max:100');
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