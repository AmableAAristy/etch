const container= document.querySelector('#container');
for (let i = 0; i < (16); i++){
    let row = document.createElement('div');
    
    row.style.display = 'flex';
    row.style.flexDirection = 'column';
    container.appendChild(row);

    for (let j = 0; j < 16; j++){
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
    };