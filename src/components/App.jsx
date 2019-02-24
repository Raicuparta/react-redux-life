import React from 'react';
import { connect } from 'react-redux';
import t from 'prop-types';

import { actions } from '../store';
import Grid from './Grid';
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
      <Grid />
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
});

const mapDispatchToProps = {
  initCells: actions.initCells,
};

App.propTypes = {
  settings: t.shape({ width: t.number, height: t.number }).isRequired,
  initCells: t.func.isRequired,
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
