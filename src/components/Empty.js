import React from 'react';

const outerStyle = {
  display: 'inline-block'
};

const Empty = ({ x, y, hover, onClick, onHover, onOut }) => {
  const innerStyle = {
    background: '#000',
    width: '6px',
    height: '6px',
    margin: '22px'
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

Empty.propTypes = {
  x: React.PropTypes.number.isRequired,
  y: React.PropTypes.number.isRequired,
  hover: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired,
  onHover: React.PropTypes.func.isRequired,
  onOut: React.PropTypes.func.isRequired
};

export default Empty;
