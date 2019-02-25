import React from 'react';
import { connect } from 'react-redux';
import t from 'prop-types';

import { actions } from '../store';
import './Controls.css';

class Controls extends React.Component {
  state = {
    intervalId: null,
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

  render() {
    return (
      <div className="controls">
        <button type="button" onClick={this.props.nextTick}>Next</button>
        <button type="button" onClick={this.handlePlayClick}>
          {
            this.state.intervalId ? 'Stop' : 'Play'
          }
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
});

const mapDispatchToProps = {
  nextTick: actions.nextTick,
};

Controls.propTypes = {
  settings: t.shape({ width: t.number, height: t.number }).isRequired,
  nextTick: t.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
