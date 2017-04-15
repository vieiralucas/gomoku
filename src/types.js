// @flow

export type Player = 'black' | 'white';

export type State = {
  board: Array<Array<Cell>>,
  currentPlayer: Player,
  win: ?Player
};

export type CellType = 'black' | 'white' | 'empty';

export type Cell = {
  type: CellType,
  hover: ?Player,
};

export type Action = {
  type: 'HOVER' | 'UNHOVER' | 'ADD_PIECE',
  x: number,
  y: number
};

