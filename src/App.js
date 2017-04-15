// @flow

import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Board from './components/Board';
import Stats from './components/Stats';
import * as actionCreators from './actionCreators';

import type { Action } from './types';
import type { Dispatch } from 'redux';

const containerStyle = {
  display: 'flex',
  flexDirection: 'row'
};

class App extends Component {
  addItem(x, y) {
    if (!this.props.win)
      this.props.actions.addPiece(x, y);
  }

  onHover(x, y) {
    if (!this.props.win)
      this.props.actions.hover(x, y);
  }

  onOut(x, y) {
    if (!this.props.win)
      this.props.actions.unhover(x, y);
  }

  render() {
    const { board, currentPlayer, win } = this.props;
    return (
      <div style={containerStyle}>
        <Board board={board} addItem={this.addItem.bind(this)}
          onHover={this.onHover.bind(this)} onOut={this.onOut.bind(this)} />
        <Stats currentPlayer={currentPlayer} win={win} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(App);
