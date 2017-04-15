// @flow

import React from 'react';
import Item from './Item';

import type { Cell } from '../types';

const Row = ({ row, y, addItem, onHover, onOut }: RowProps) => {
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

type RowProps = {
  row: Array<Cell>,
  y: number,
  addItem: (x: number, y: number) => void,
  onHover: (x: number, y: number) => void,
  onOut: (x: number, y: number) => void
};

export default Row;
