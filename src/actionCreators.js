import { HOVER, UNHOVER, ADD_PIECE } from './actions';

export const hover = (x, y) => ({
  type: HOVER,
  x, y
});

export const unhover = (x, y) => ({
  type: UNHOVER,
  x, y
});

export const addPiece = (x, y) => ({
  type: ADD_PIECE,
  x, y
});
