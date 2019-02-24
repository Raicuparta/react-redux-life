import React from 'react';
import { connect } from 'react-redux';
import t from 'prop-types';

import { actions } from './store';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    const {
      initCells,
      settings,
    } = this.props;

    initCells(settings.width, settings.height);
  }

  render() {
    return (
      <div>{this.props.cells}</div>
    );
  }
}

const mapStateToProps = state => ({
  cells: state.cells,
  settings: state.settings,
});

const mapDispatchToProps = {
  initCells: actions.initCells,
};

App.propTypes = {
  settings: t.objectOf({ width: t.number, height: t.number }).isRequired,
  cells: t.arrayOf(t.arrayOf(t.boolean)).isRequired,
  initCells: t.func.isRequired,
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
