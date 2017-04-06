import React from 'react';

import Black from './Black';
import White from './White';
import Empty from './Empty';

const Item = ({ item, x, y, onClick, onHover, onOut }) => {
  switch (item.type) {
    case 'black':
      return <Black />
    case 'white':
      return <White />
    default:
      return <Empty x={x} y={y} hover={item.hover} onClick={onClick} onHover={onHover} onOut={onOut} />
  }
};

Item.propTypes = {
  item: React.PropTypes.object.isRequired,
  x: React.PropTypes.number.isRequired,
  y: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func.isRequired,
  onHover: React.PropTypes.func.isRequired,
  onOut: React.PropTypes.func.isRequired
};


export default Item;
