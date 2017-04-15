// @flow

import React from 'react';
import Row from './Row';
import type { Board } from '../types';

const boardStyle = {
  border: '1px solid #eee',
  background: 'cornsilk',
  maxWidth: '750px'
};

const BoardComponent = ({ board, addItem, onHover, onOut }: BoardProps) => {
  const rows = board
    .map((row, i) =>
      <Row row={row} y={i} key={i} 
        addItem={addItem} onHover={onHover} onOut={onOut} />
    );

  return (
    <div style={boardStyle}>
      { rows }
    </div>
  );
};

type BoardProps = {
  board: Board,
  addItem: (x: number, y: number) => void,
  onHover: (x: number, y: number) => void,
  onOut: (x: number, y: number) => void
};

export default BoardComponent;
