class Sudoku {

    grid = [];

    constructor() {
        for (let i = 0; i < 9; i++) {
            let temp = [];
            for (let j = 0; j < 9; j++)
                temp.push(0);
            this.grid.push(temp);
        }
        console.log(this.grid)
    }

    createGrid() {
        let numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (grid[i][j] === 0)
                    numberList = this.shuffle(numberList)
                for (let number in numberList) {
                    if (this.validLocation(i, j, number)) {
                        this.grid[i][j] = number

                    }

                }


            }
        }

    }

    getSudokuGrid() {
        let tempGrid = this.grid;

        return tempGrid;
    }

}