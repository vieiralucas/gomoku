// @flow

import type { Board, Player } from './types';

const walk = (board, x, y, dx, dy) => {
  const type = board[y][x].type;
  let qt = 0;
  x += dx;
  y += dy;

  while (board[y] && board[y][x]) {
    if (board[y][x].type === type) {
      qt++;
    } else {
      return qt;
    }

    x += dx;
    y += dy;
  }

  return qt;
};

export const checkWin = (board: Board): ?Player => {
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      if (board[y][x].type === 'empty') {
        continue;
      }

      const player = board[y][x].type === 'black' ? 'black' : 'white';

      const horizontal = walk(board, x, y, -1, 0) + 1 + walk(board, x, y, 1, 0);
      if (horizontal >= 5) {
        return player;
      }

      const vertical = walk(board, x, y, 0, -1) + 1 + walk(board, x, y, 0, 1);
      if (vertical >= 5) {
        return player;
      }

      const diag1 = walk(board, x, y, -1, -1) + 1 + walk(board, x, y, 1, 1);
      if (diag1 >= 5) {
        return player;
      }

      const diag2 = walk(board, x, y, -1, 1) + 1 + walk(board, x, y, 1, -1);
      if (diag2 >= 5) {
        return player;
      }
    }
  }

  return null;
};

