import _ from 'lodash';
import { checkWin } from './board';
import { HOVER, UNHOVER, ADD_PIECE } from './actions';

let initialBoard = [];

for (let y = 0; y < 15; y++) {
  initialBoard.push([]);
  for (let x = 0; x < 15; x++) {
    initialBoard[y][x] = { type: 'empty', hover: null };
  }
}

const initialState = {
  board: initialBoard,
  currentPlayer: Math.random() > 0.5 ? 'black' : 'white',
  win: null
};

const update = (b, x, y, diff) => {
  const board = _.cloneDeep(b);
  board[y][x] = {
    ...board[y][x],
    ...diff
  };

  return board;
};

const addPiece = (state, action) => {
  const player = state.currentPlayer;
  const diff = {
    type: player
  };
  const { x, y } = action;

  const board = update(state.board, x, y, diff);
  const currentPlayer = player === 'black' ? 'white' : 'black';
  const win = checkWin(board);

  return { ...state, board, currentPlayer, win };
};

const hover = (state, action) => {
  const { x, y } = action;
  const diff = {
    hover: state.currentPlayer
  };

  const board = update(state.board, x, y, diff);

  return { ...state, board };
};

const unhover = (state, action) => {
  const { x, y } = action;
  const diff = {
    hover: null
  };
  const board = update(state.board, x, y, diff);

  return { ...state, board };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIECE:
      return addPiece(state, action);
    case HOVER:
      return hover(state, action);
    case UNHOVER:
      return unhover(state, action);
    default:
      return state;
  }
};

export default reducer;
