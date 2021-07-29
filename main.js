const grids = document.querySelectorAll('.outer-square');

grids.forEach((grid, i) => {
    let gridIndex = i;
    let squares = grid.querySelectorAll('.inner-square');
    squares.forEach((square, j) => {
        let squareIndex = j;
        square.id = `${gridIndex}${squareIndex}`;
        square.innerHTML = '';
    });

});

let sudoku = new Sudoku();