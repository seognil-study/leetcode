type Char = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type Board = (Char | '.')[][];
type Pos = [number, number];

// * ----------------------------------------------------------------

/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = (board: Board): void => {
  // * ['76 ms', '84.73 %', '37.4 MB', '100 %']

  solveSudokuWithFlag(board, 0);
};

const solveSudokuWithFlag = (board: Board, fromRow: number): boolean => {
  const pos = findEmptySlot(board, fromRow);
  if (pos === null) return true;

  const [row, col] = pos;
  const list = getCandidates(board, row, col);
  for (let i = 0; i < list.length; i++) {
    board[row][col] = list[i];
    if (solveSudokuWithFlag(board, row)) return true;
    board[row][col] = '.';
  }

  return false;
};

const getCandidates = (board: Board, row: number, col: number): Char[] => {
  const candidates: (Char | null)[] = [null, '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const removeCandi = (c: Char | '.') => {
    if (c !== '.') candidates[Number(c)] = null;
  };

  for (let i = 0; i < 9; i++) {
    removeCandi(board[row][i]);
    removeCandi(board[i][col]);
  }

  const blockX = Math.floor(row / 3) * 3;
  const blockY = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      removeCandi(board[blockX + i][blockY + j]);
    }
  }

  return candidates.filter((c) => c !== null) as Char[];
};

const findEmptySlot = (board: Board, fromRow: number): Pos | null => {
  for (let row = fromRow; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === '.') return [row, col];
    }
  }
  return null;
};

// @lc code=end

export { solveSudoku };
