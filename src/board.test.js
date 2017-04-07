import { expect } from 'chai';

import * as board from './board';

const w = () => ({
  type: 'white'
});

const b = () => ({
  type: 'black'
});

const e = () => ({
  type: 'empty'
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

    expect(board.checkWin(input)).to.be.null;
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

      expect(board.checkWin(input)).to.equal('black');
    });

    it('works vertical', () => {
      const input = [
       [b(), e(), e(), e(), e()],
       [b(), e(), e(), e(), e()],
       [b(), e(), e(), e(), e()],
       [b(), e(), e(), e(), e()],
       [b(), e(), e(), e(), e()],
      ];

      expect(board.checkWin(input)).to.equal('black');
    });

    it('works diagonal 1', () => {
      const input = [
       [b(), e(), e(), e(), e()],
       [e(), b(), e(), e(), e()],
       [e(), e(), b(), e(), e()],
       [e(), e(), e(), b(), e()],
       [e(), e(), e(), e(), b()],
      ];

      expect(board.checkWin(input)).to.equal('black');
    });

    it('works diagonal 2', () => {
      const input = [
       [e(), e(), e(), e(), b()],
       [e(), e(), e(), b(), e()],
       [e(), e(), b(), e(), e()],
       [e(), b(), e(), e(), e()],
       [b(), e(), e(), e(), e()],
      ];

      expect(board.checkWin(input)).to.equal('black');
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

      expect(board.checkWin(input)).to.equal('white');
    });

    it('works vertical', () => {
      const input = [
       [w(), e(), e(), e(), e()],
       [w(), e(), e(), e(), e()],
       [w(), e(), e(), e(), e()],
       [w(), e(), e(), e(), e()],
       [w(), e(), e(), e(), e()],
      ];

      expect(board.checkWin(input)).to.equal('white');
    });

    it('works diagonal 1', () => {
      const input = [
       [w(), e(), e(), e(), e()],
       [e(), w(), e(), e(), e()],
       [e(), e(), w(), e(), e()],
       [e(), e(), e(), w(), e()],
       [e(), e(), e(), e(), w()],
      ];

      expect(board.checkWin(input)).to.equal('white');
    });

    it('works diagonal 2', () => {
      const input = [
       [e(), e(), e(), e(), w()],
       [e(), e(), e(), w(), e()],
       [e(), e(), w(), e(), e()],
       [e(), w(), e(), e(), e()],
       [w(), e(), e(), e(), e()],
      ];

      expect(board.checkWin(input)).to.equal('white');
    });
  });
});
