const container = document.querySelector('#container');
let gridSize = 16;
function gridCreate(gridSize) {
    let divSize = 100 / gridSize;
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement('div');

        row.style.display = 'flex';
        row.style.width = '100%';
        container.appendChild(row);

        for (let j = 0; j < gridSize; j++) {
            let cell = document.createElement('div');
            cell.style.borderColor = 'black';
            cell.style.borderStyle = 'solid';
            cell.style.borderWidth = '1px';
            cell.style.width = `${divSize}%`;
            cell.className = 'cell';
            cell.style.display = 'flex';
            row.appendChild(cell);


            cell.addEventListener('mouseenter', function () {
                this.style.backgroundColor = 'black';
            })
        };
    }
};
gridCreate(gridSize);

const size = document.querySelector('#araara');
size.addEventListener('click', () => {

    gridSize = prompt('Choose a number and it shall be. Min:1 Max:100');
    if (gridSize > 100) {
        gridSize = 100;
        alert('Defaulted to 100.')
    }
    else if (gridSize <= 0) {
        gridSize = 1;
        alert('Defaulted to 1.')
    }
    else if (isNaN(gridSize)) {
        gridSize = 69;
        alert('I pity the fool. Defaulted to 69')
    }
    gridRemove();
    gridCreate(gridSize);
});

function gridRemove() {
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


const black = document.querySelector('#black');
black.addEventListener('click', () => {
    const divs = container.querySelectorAll('.cell');
    divs.forEach(div => {
        div.addEventListener('mouseenter', function () {
            this.style.backgroundColor = 'black';
        })
    })
});

const red = document.querySelector('#red');
red.addEventListener('click', () => {
    const divs = container.querySelectorAll('.cell');
    divs.forEach(div => {
        div.addEventListener('mouseenter', function () {
            this.style.backgroundColor = 'red';
        })
    })
});

const green = document.querySelector('#green');
green.addEventListener('click', () => {
    const divs = container.querySelectorAll('.cell');
    divs.forEach(div => {
        div.addEventListener('mouseenter', function () {
            this.style.backgroundColor = 'green';
        })
    })
});

const blue = document.querySelector('#blue');
blue.addEventListener('click', () => {
    const divs = container.querySelectorAll('.cell');
    divs.forEach(div => {
        div.addEventListener('mouseenter', function () {
            this.style.backgroundColor = 'blue';
        })
    })
});
