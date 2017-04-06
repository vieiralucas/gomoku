import React from 'react';
import Row from './Row';

const boardStyle = {
  border: '1px solid #eee',
  background: 'cornsilk',
  maxWidth: '750px'
};

const Board = ({ board, addItem, onHover, onOut }) => {
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

Board.propTypes = {
  board: React.PropTypes.array,
  addItem: React.PropTypes.func.isRequired,
  onHover: React.PropTypes.func.isRequired,
  onOut: React.PropTypes.func.isRequired
};

export default Board;
