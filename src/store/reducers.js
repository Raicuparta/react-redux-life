import { combineReducers } from 'redux';

import { actionTypes } from './actions';

const defaults = {
  SETTINGS: {
    width: 30,
    height: 30,
    interval: 50,
  },
  CELLS: [],
};

// positive mod function to wrap index around array
const mod = (index, length) => ((index % length) + length) % length;

const initCellsReducer = payload => (
  new Array(payload.width).fill(new Array(payload.height).fill(0))
);

const toggleCellReducer = (state, payload) => (
  state.map((row, y) => row.map((cell, x) => {
    if (x === payload.x && y === payload.y) {
      return cell ? 0 : 1;
    }
    return cell;
  }))
);

const nextTickReducer = state => state.map((row, y) => row.map((cell, x) => {
  const prevRow = state[mod(y - 1, row.length)];
  const nextRow = state[mod(y + 1, row.length)];

  const nextColumnIndex = mod(x + 1, row.length);
  const prevColumnIndex = mod(x - 1, row.length);

  // count the living neighbours
  const aliveCount = prevRow[prevColumnIndex]
    + prevRow[x]
    + prevRow[nextColumnIndex]
    + row[prevColumnIndex]
    + row[nextColumnIndex]
    + nextRow[prevColumnIndex]
    + nextRow[x]
    + nextRow[nextColumnIndex];

  // actual game of life logic, so simple!
  if (aliveCount < 2 || aliveCount > 3) {
    return 0;
  } if (aliveCount === 3) {
    return 1;
  }
  return cell;
}));

const cellsReducer = (state = defaults.CELLS, { type, payload }) => {
  switch (type) {
    case actionTypes.INIT_CELLS:
      return initCellsReducer(payload);
    case actionTypes.TOGGLE_CELL:
      return toggleCellReducer(state, payload);
    case actionTypes.NEXT_TICK:
      return nextTickReducer(state);
    default:
      return state;
  }
};

const settingsReducer = (state = defaults.SETTINGS, { type, payload }) => {
  if (type === actionTypes.UPDATE_SETING) {
    return {
      ...state,
      [payload.key]: payload.value,
    };
  }
  return state;
};

export default combineReducers({
  cells: cellsReducer,
  settings: settingsReducer,
});
