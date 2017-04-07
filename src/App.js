import _ from 'lodash';
import React, { Component } from 'react';
import Board from './components/Board';
import { checkWin } from './board';

let initialBoard = [];

for (let y = 0; y < 15; y++) {
  initialBoard.push([]);
  for (let x = 0; x < 15; x++) {
    initialBoard[y][x] = { type: 'empty', hover: null };
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: initialBoard,
      currentPlayer: 'black',
      win: null
    };
  }

  update(x, y, diff) {
    const board = _.cloneDeep(this.state.board);
    board[y][x] = {
      ...board[y][x],
      ...diff
    };

    this.setState({ board });
  }

  addItem(x, y) {
    const player = this.state.currentPlayer;
    const board = _.cloneDeep(this.state.board);
    board[y][x] = {
      ...board[y][x],
      type: this.state.currentPlayer
    };

    this.setState({
      board,
      currentPlayer: player === 'black' ? 'white' : 'black',
      win: checkWin(board)
    });
  }

  onHover(x, y) {
    this.update(x, y, { hover: this.state.currentPlayer });
  }

  onOut(x, y) {
    this.update(x, y, { hover: null });
  }

  render() {
    const { board } = this.state;
    return (
      <Board board={board} addItem={this.addItem.bind(this)}
        onHover={this.onHover.bind(this)} onOut={this.onOut.bind(this)} />
    );
  }
}

export default App;
