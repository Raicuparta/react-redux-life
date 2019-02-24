import { combineReducers, createStore } from 'redux';

const types = {
  INIT_CELLS: 'INIT_CELLS',
  TOGGLE_CELL: 'TOGGLE_CELL',
};

const DEFAULT_SETTINGS = {
  width: 10,
  height: 10,
};

const settingsReducer = (state = DEFAULT_SETTINGS) => state;

const cellsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.INIT_CELLS:
      return new Array(payload.width).fill(new Array(payload.height).fill(false));
    case types.TOGGLE_CELL:
      return state.map((row, x) => row.map((cell, y) => {
        if (x === payload.x && y === payload.y) {
          return !cell;
        }
        return cell;
      }));
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
  payload: {
    width,
    height,
  },
});

const toggleCell = (x, y) => ({
  type: types.TOGGLE_CELL,
  payload: {
    x,
    y,
  },
});

export const actions = {
  initCells,
  toggleCell,
};

export default createStore(
  reducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
