// @flow

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducer';

import type { State } from './types';

export const configureStore = () => createStore(
  rootReducer,
  applyMiddleware(logger)
);
