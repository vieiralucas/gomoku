import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Board from './components/Board';
import * as actionsCreators from './actionsCreators';

class App extends Component {
  addItem(x, y) {
    this.props.actions.addPiece(x, y);
  }

  onHover(x, y) {
    this.props.actions.hover(x, y);
  }

  onOut(x, y) {
    this.props.actions.unhover(x, y);
  }

  render() {
    const { board } = this.props;
    return (
      <Board board={board} addItem={this.addItem.bind(this)}
        onHover={this.onHover.bind(this)} onOut={this.onOut.bind(this)} />
    );
  }
}

const mapStateToProps = ({ board }) => ({
  board
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionsCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
