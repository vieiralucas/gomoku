import React from 'react';
import Item from './Item';

const Row = ({ row, y, addItem, onHover, onOut }) => {
  const items = row
    .map((item, i) => 
      <Item item={item} x={i} y={y} key={i}
        onClick={addItem} onHover={onHover} onOut={onOut} />
    );

  return (
    <div>
      { items }
    </div>
  );
};

Row.propTypes = {
  row: React.PropTypes.array,
  y: React.PropTypes.number.isRequired,
  addItem: React.PropTypes.func.isRequired,
  onHover: React.PropTypes.func.isRequired,
  onOut: React.PropTypes.func.isRequired
};

export default Row;
