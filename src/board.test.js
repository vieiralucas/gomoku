// @flow

import * as board from './board';

const w = () => ({
  type: 'white',
  hover: null
});

const b = () => ({
  type: 'black',
  hover: null
});

const e = () => ({
  type: 'empty',
  hover: null
});

describe('.checkWin', () => {
  it('should return null when no win', () => {
    const input = [
      [b(), w(), b(), w(), b()],
      [w(), b(), w(), b(), w()],
      [b(), w(), w(), w(), b()],
      [w(), b(), w(), b(), w()],
      [b(), w(), b(), w(), b()]
    ];

    expect(board.checkWin(input)).toBeNull();
  });

  describe('type black', () => {
    it('works horizontal', () => {
      const input = [
        [b(), b(), b(), b(), b()],
        [e(), e(), e(), e(), e()],
        [e(), e(), e(), e(), e()],
        [e(), e(), e(), e(), e()],
        [e(), e(), e(), e(), e()],
      ];

      expect(board.checkWin(input)).toEqual('black');
    });

    it('works vertical', () => {
      const input = [
        [b(), e(), e(), e(), e()],
        [b(), e(), e(), e(), e()],
        [b(), e(), e(), e(), e()],
        [b(), e(), e(), e(), e()],
        [b(), e(), e(), e(), e()],
      ];

      expect(board.checkWin(input)).toEqual('black');
    });

    it('works diagonal 1', () => {
      const input = [
        [b(), e(), e(), e(), e()],
        [e(), b(), e(), e(), e()],
        [e(), e(), b(), e(), e()],
        [e(), e(), e(), b(), e()],
        [e(), e(), e(), e(), b()],
      ];

      expect(board.checkWin(input)).toEqual('black');
    });

    it('works diagonal 2', () => {
      const input = [
        [e(), e(), e(), e(), b()],
        [e(), e(), e(), b(), e()],
        [e(), e(), b(), e(), e()],
        [e(), b(), e(), e(), e()],
        [b(), e(), e(), e(), e()],
      ];

      expect(board.checkWin(input)).toEqual('black');
    });
  });

  describe('type white', () => {
    it('works horizontal', () => {
      const input = [
        [w(), w(), w(), w(), w()],
        [e(), e(), e(), e(), e()],
        [e(), e(), e(), e(), e()],
        [e(), e(), e(), e(), e()],
        [e(), e(), e(), e(), e()],
      ];

      expect(board.checkWin(input)).toEqual('white');
    });

    it('works vertical', () => {
      const input = [
        [w(), e(), e(), e(), e()],
        [w(), e(), e(), e(), e()],
        [w(), e(), e(), e(), e()],
        [w(), e(), e(), e(), e()],
        [w(), e(), e(), e(), e()],
      ];

      expect(board.checkWin(input)).toEqual('white');
    });

    it('works diagonal 1', () => {
      const input = [
        [w(), e(), e(), e(), e()],
        [e(), w(), e(), e(), e()],
        [e(), e(), w(), e(), e()],
        [e(), e(), e(), w(), e()],
        [e(), e(), e(), e(), w()],
      ];

      expect(board.checkWin(input)).toEqual('white');
    });

    it('works diagonal 2', () => {
      const input = [
        [e(), e(), e(), e(), w()],
        [e(), e(), e(), w(), e()],
        [e(), e(), w(), e(), e()],
        [e(), w(), e(), e(), e()],
        [w(), e(), e(), e(), e()],
      ];

      expect(board.checkWin(input)).toEqual('white');
    });
  });
});
