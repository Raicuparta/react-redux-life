import { combineReducers, createStore } from 'redux';

const types = {
  INIT_CELLS: 'INIT_CELLS',
};

const DEFAULT_SETTINGS = {
  width: 10,
  height: 10,
};

const settingsReducer = (state = DEFAULT_SETTINGS) => state;

const cellsReducer = (state = [], { type, width, height }) => {
  switch (type) {
    case types.INIT_CELLS:
      return new Array(width).fill(new Array(height).fill(false));
    default:
      return state;
  }
};

export const reducer = combineReducers({
  cells: cellsReducer,
  settings: settingsReducer,
});

const initCells = (width, height) => ({
  type: types.INIT_CELLS,
  width,
  height,
});

export const actions = {
  initCells,
};

export default createStore(
  reducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
