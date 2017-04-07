import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducer';

export const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(logger)
);
