// @flow

import React from 'react';

import Black from './Black';
import White from './White';
import Empty from './Empty';

import type { Cell } from '../types';

const Item = ({ item, x, y, onClick, onHover, onOut }: ItemProps) => {
  switch (item.type) {
    case 'black':
      return <Black />
    case 'white':
      return <White />
    default:
      return <Empty x={x} y={y} hover={item.hover}
        onClick={onClick} onHover={onHover} onOut={onOut} />
  }
};

type ItemProps = {
  item: Cell,
  x: number,
  y: number,
  onClick: (x: number, y: number) => void,
  onHover: (x: number, y: number) => void,
  onOut: (x: number, y: number) => void
};


export default Item;
