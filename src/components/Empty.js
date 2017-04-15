// @flow

import React from 'react';
import type { Player } from '../types';

const outerStyle = {
  display: 'inline-block'
};

const Empty = ({ x, y, hover, onClick, onHover, onOut }: EmptyProps) => {
  const innerStyle = {
    background: '#000',
    width: '6px',
    height: '6px',
    margin: '22px',
    borderRadius: '0'
  };


  if (hover) {
    innerStyle.width = '40px';
    innerStyle.height = '40px';
    innerStyle.margin = '5px';
    innerStyle.borderRadius = '100%';

    if (hover === 'black') {
      innerStyle.background = 'rgba(0, 0, 0, 0.5)';
    } else if (hover === 'white') {
      innerStyle.background = 'rgba(255, 255, 255, 0.5)';
    } else {
      throw new Error(`Unexpected hover type: ${hover}`);
    }
  }

  return (
    <div onClick={() => onClick(x, y)}
      onMouseOver={() => onHover(x, y)}
      onMouseOut={() => onOut(x, y)}
      style={outerStyle} >
      <div style={innerStyle} />
    </div>
  );
};

type EmptyProps = {
  x: number,
  y: number,
  hover: ?Player,
  onClick: (x: number, y: number) => void,
  onHover: (x: number, y: number) => void,
  onOut: (x: number, y: number) => void
};

export default Empty;
