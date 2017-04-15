// @flow

import { createStore } from 'redux';
import rootReducer from '../reducer';

export const configureStore = () => createStore(
  rootReducer
);
