// @flow

import { HOVER, UNHOVER, ADD_PIECE } from './actions';

export const hover = (x: number, y: number) => ({
  type: HOVER,
  x, y
});

export const unhover = (x: number, y: number) => ({
  type: UNHOVER,
  x, y
});

export const addPiece = (x: number, y: number) => ({
  type: ADD_PIECE,
  x, y
});
