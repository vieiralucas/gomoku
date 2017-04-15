import React from 'react';

const containerStyle = {
  marginLeft: '1em'
};

const Stats = ({ currentPlayer, win }) => (
  <div style={containerStyle}>
    <h2>Current player: {currentPlayer}</h2>
    { win && <h1>{win} won!</h1> }
  </div>
);

Stats.propTypes = {
  currentPlayer: React.PropTypes.string.isRequired,
  win: React.PropTypes.string
};

export default Stats;
