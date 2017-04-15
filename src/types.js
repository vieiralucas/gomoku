// @flow

export type Player = 'black' | 'white';

export type CellType = 'black' | 'white' | 'empty';

export type Cell = {
  type: CellType,
  hover: ?Player,
};

export type Board = Array<Array<Cell>>;

export type State = {
  board: Board,
  currentPlayer: Player,
  win: ?Player
};

export type Action = {
  type: 'HOVER' | 'UNHOVER' | 'ADD_PIECE',
  x: number,
  y: number
};

