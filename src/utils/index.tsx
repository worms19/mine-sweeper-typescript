import {BOMBS, MAX_COLS, MAX_ROWS} from "../constants";
import {Cell, CellState, CellValue} from "../types";

export const generateCells = (): Cell[][] => {
  let cells: Cell[][] = [];

  for (let row=0; row < MAX_ROWS; row++){
    cells.push([]);
    for (let col=0; col < MAX_ROWS; col++){
      cells[row].push({
        value: CellValue.none,
        state: CellState.visiblem
      });
    }
  }

  //Randomly ten bombs
  let bombPlaced = 0;
  while (bombPlaced < BOMBS){
    const randomRow = Math.floor(Math.random() * MAX_ROWS);
    const randomCol = Math.floor(Math.random() * MAX_COLS);
    if(cells[randomRow][randomCol].value !== CellValue.bomb){
      cells[randomRow][randomCol].value = CellValue.bomb;
      bombPlaced++;
    }
  }

  for (let rowIndex=0; rowIndex < MAX_ROWS; rowIndex++){
    for (let colIndex=0; colIndex < MAX_ROWS; colIndex++){
      if(cells[rowIndex][colIndex].value === CellValue.bomb){
        continue;
      }else{
      let bombNumber = 0;
      if( (cells[rowIndex - 1] && cells[rowIndex - 1][colIndex - 1] ? cells[rowIndex - 1][colIndex - 1].value : 0) === CellValue.bomb){
        bombNumber ++;
      }
      if( (cells[rowIndex - 1] && cells[rowIndex - 1][colIndex] ? cells[rowIndex - 1][colIndex].value : 0) === CellValue.bomb){
        bombNumber ++;
      }
      if( (cells[rowIndex - 1] && cells[rowIndex - 1][colIndex + 1 ] ? cells[rowIndex - 1][colIndex + 1].value : 0) === CellValue.bomb){
        bombNumber ++;
      }
      if( (cells[rowIndex] && cells[rowIndex][colIndex - 1] ? cells[rowIndex][colIndex - 1].value : 0) === CellValue.bomb){
        bombNumber ++;
      }
      if( (cells[rowIndex] && cells[rowIndex][colIndex + 1] ? cells[rowIndex][colIndex + 1].value : 0) === CellValue.bomb){
        bombNumber ++;
      }
      if( (cells[rowIndex + 1] && cells[rowIndex + 1][colIndex - 1] ? cells[rowIndex + 1][colIndex - 1].value : 0) === CellValue.bomb){
        bombNumber ++;
      }
      if( (cells[rowIndex + 1] && cells[rowIndex + 1][colIndex] ? cells[rowIndex + 1][colIndex].value : 0) === CellValue.bomb){
        bombNumber ++;
      }
      if( (cells[rowIndex + 1] && cells[rowIndex + 1] [colIndex + 1] ? cells[rowIndex + 1][colIndex + 1].value : 0) === CellValue.bomb){
        bombNumber ++;
      }
      if(bombNumber > 0){
        cells[rowIndex][colIndex].value = bombNumber;
      }
      }
    }
  }

  //calculate the number
  return cells;
};

