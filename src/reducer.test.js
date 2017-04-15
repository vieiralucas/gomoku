// @flow

import reducer from './reducer';
import * as actionCreators from './actionCreators';

import type { Cell } from './types';

const w = (): Cell => ({
  type: 'white',
  hover: null
});

const b = (): Cell => ({
  type: 'black',
  hover: null
});

const e = (): Cell => ({
  type: 'empty',
  hover: null
});

describe('reducer', () => {
  describe('HOVER', () => {
    it('should set hover to currentPlayer', () => {
      const prevState = {
        board: [
          [e(), e(), e()],
          [e(), e(), e()],
          [e(), e(), e()]
        ],
        currentPlayer: 'black',
        win: null
      };
      const expected = {
        board: [
          [e(), e(), e()],
          [e(), e(), e()],
          [e(), e(), e()]
        ],
        currentPlayer: 'black',
        win: null
      };
      expected.board[1][1].hover = 'black';

      const action = actionCreators.hover(1, 1);

      expect(reducer(prevState, action)).toEqual(expected);
    });
  });

  describe('UNHOVER', () => {
    it('should set hover to null', () => {
      const prevState = {
        board: [
          [e(), e(), e()],
          [e(), e(), e()],
          [e(), e(), e()]
        ],
        currentPlayer: 'black',
        win: null
      };
      prevState.board[1][1].hover = 'black';

      const expected = {
        board: [
          [e(), e(), e()],
          [e(), e(), e()],
          [e(), e(), e()]
        ],
        currentPlayer: 'black',
        win: null
      };

      const action = actionCreators.unhover(1, 1);

      expect(reducer(prevState, action)).toEqual(expected);
    });
  });

  describe('ADD_PIECE', () => {
    it('should set type to currentPlayer and select next player', () => {
      const prevState = {
        board: [
          [e(), e(), e()],
          [e(), e(), e()],
          [e(), e(), e()]
        ],
        currentPlayer: 'black',
        win: null
      };
      const expected = {
        board: [
          [e(), e(), e()],
          [e(), e(), e()],
          [e(), e(), e()]
        ],
        currentPlayer: 'white',
        win: null
      };
      expected.board[1][1].type = 'black';

      const action = actionCreators.addPiece(1, 1);

      expect(reducer(prevState, action)).toEqual(expected);
    });

    it('shold checkWin', () => {
      const prevState = {
        board: [
          [b(), e(), e(), e(), e()],
          [e(), e(), e(), e(), e()],
          [e(), e(), b(), e(), e()],
          [e(), e(), e(), b(), e()],
          [e(), e(), e(), e(), b()]
        ],
        currentPlayer: 'black',
        win: null
      };
      const expected = {
        board: [
          [b(), e(), e(), e(), e()],
          [e(), b(), e(), e(), e()],
          [e(), e(), b(), e(), e()],
          [e(), e(), e(), b(), e()],
          [e(), e(), e(), e(), b()]
        ],
        currentPlayer: 'white',
        win: 'black'
      };

      const action = actionCreators.addPiece(1, 1);

      expect(reducer(prevState, action)).toEqual(expected);
    });
  });
});
