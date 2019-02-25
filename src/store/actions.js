export const actionTypes = {
  INIT_CELLS: 'INIT_CELLS',
  TOGGLE_CELL: 'TOGGLE_CELL',
  NEXT_TICK: 'NEXT_TICK',
  UPDATE_SETING: 'UPDATE_SETING',
};

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

const updateSetting = (key, value) => ({
  type: actionTypes.UPDATE_SETING,
  payload: {
    key,
    value,
  },
});

const nextTick = () => ({
  type: actionTypes.NEXT_TICK,
});

export default {
  initCells,
  toggleCell,
  nextTick,
  updateSetting,
};
