// @flow

import React from 'react';

import type { Player } from '../types';

const containerStyle = {
  marginLeft: '1em'
};

const Stats = ({ currentPlayer, win }: StatsProps) => (
  <div style={containerStyle}>
    <h2>Current player: {currentPlayer}</h2>
    { win && <h1>{win} won!</h1> }
  </div>
);

type StatsProps = {
  currentPlayer: Player,
  win: ?Player
};

export default Stats;
