import { combineReducers, createStore } from 'redux';

const actionTypes = {
  INIT_CELLS: 'INIT_CELLS',
  TOGGLE_CELL: 'TOGGLE_CELL',
  NEXT_TICK: 'NEXT_TICK',
};

const defaults = {
  SETTINGS: {
    width: 50,
    height: 50,
  },
  CELLS: [],
};

const settingsReducer = (state = defaults.SETTINGS) => state;

// positive mod function to wrap index around array
const mod = (index, length) => ((index % length) + length) % length;

const nextTickReducer = state => state.map((row, y) => row.map((cell, x) => {
  const prevRow = state[mod(y - 1, row.length)];
  const nextRow = state[mod(y + 1, row.length)];

  const nextColumnIndex = mod(x + 1, row.length);
  const prevColumnIndex = mod(x - 1, row.length);

  const count = prevRow[prevColumnIndex]
    + prevRow[x]
    + prevRow[nextColumnIndex]
    + row[prevColumnIndex]
    + row[nextColumnIndex]
    + nextRow[prevColumnIndex]
    + nextRow[x]
    + nextRow[nextColumnIndex];

  if (count < 2 || count > 3) {
    return 0;
  } if (count === 3) {
    return 1;
  }
  return cell;
}));


const cellsReducer = (state = defaults.CELLS, { type, payload }) => {
  switch (type) {
    case actionTypes.INIT_CELLS:
      return new Array(payload.width).fill(new Array(payload.height).fill(0));
    case actionTypes.TOGGLE_CELL:
      return state.map((row, y) => row.map((cell, x) => {
        if (x === payload.x && y === payload.y) {
          return cell ? 0 : 1;
        }
        return cell;
      }));
    case actionTypes.NEXT_TICK:
      return nextTickReducer(state);
    default:
      return state;
  }
};

export const reducer = combineReducers({
  cells: cellsReducer,
  settings: settingsReducer,
});

const initCells = (width, height) => ({
  type: actionTypes.INIT_CELLS,
  payload: {
    width,
    height,
  },
});

const toggleCell = (x, y) => ({
  type: actionTypes.TOGGLE_CELL,
  payload: {
    x,
    y,
  },
});

const nextTick = () => ({
  type: actionTypes.NEXT_TICK,
});

export const actions = {
  initCells,
  toggleCell,
  nextTick,
};

export default createStore(
  reducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
