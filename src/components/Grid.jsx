import React from 'react';
import { connect } from 'react-redux';
import t from 'prop-types';

import { actions } from '../store';
import './Grid.css';

const Grid = ({ cells, handleCellClick }) => (
  <div className="grid">
    {
      cells.map((row, y) => (
        <div
          key={y}
          className="row"
        >
          {
            row.map((cell, x) => (
              <div
                key={x}
                className={`cell ${cell ? 'active' : ''}`}
                onClick={() => handleCellClick(x, y)}
              />
            ))
          }
        </div>
      ))
    }

  </div>
);

const mapStateToProps = state => ({
  cells: state.cells,
});

const mapDispatchToProps = {
  handleCellClick: actions.toggleCell,
};

Grid.propTypes = {
  cells: t.arrayOf(t.arrayOf(t.number)).isRequired,
  handleCellClick: t.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
