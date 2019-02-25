import React from 'react';
import { connect } from 'react-redux';
import t from 'prop-types';

import actions from '../store/actions';
import './Controls.css';

class Controls extends React.Component {
  state = {
    intervalId: null,
  }

  componentDidUpdate(prevProps) {
    const {
      width,
      height,
    } = this.props.settings;

    const prev = prevProps.settings;

    // If the dimensions have been changed, we need to set up
    // whole cells grid again.
    if (width !== prev.width || height !== prev.height) {
      this.props.initCells(height, width);
    }
  }

  handlePlayClick = () => {
    const {
      nextTick,
      settings,
    } = this.props;

    const { intervalId } = this.state;

    if (intervalId) {
      clearInterval(intervalId);
      this.setState({
        intervalId: null,
      });
    } else {
      this.setState({
        intervalId: setInterval(nextTick, settings.interval),
      });
    }
  }

  handleWidthChange = (event) => {
    this.updateDimension('width', event.target.value);
  }

  handleHeightChange = (event) => {
    this.updateDimension('height', event.target.value);
  }

  updateDimension = (key, value) => {
    const numericValue = parseInt(value, 10);

    // Validate input
    if (numericValue < 1) {
      return;
    }

    this.props.updateSetting(key, numericValue);
  }

  render = () => (
    <div className="controls">
      <div className="controls-panel">
        <button className="controls-button" onClick={this.props.nextTick}>Next</button>
        <button className="controls-button" onClick={this.handlePlayClick}>
          {
            this.state.intervalId ? 'Stop' : 'Play'
          }
        </button>
      </div>
      <div className="controls-panel">
        Width
        <input
          className="controls-field"
          type="number"
          onChange={this.handleWidthChange}
          value={this.props.settings.width}
        />
        Height
        <input
          className="controls-field"
          type="number"
          onChange={this.handleHeightChange}
          value={this.props.settings.height}
        />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  settings: state.settings,
});

const mapDispatchToProps = {
  nextTick: actions.nextTick,
  updateSetting: actions.updateSetting,
  initCells: actions.initCells,
};

Controls.propTypes = {
  settings: t.shape({ width: t.number, height: t.number }).isRequired,
  nextTick: t.func.isRequired,
  updateSetting: t.func.isRequired,
  initCells: t.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
