import React from 'react';
import dva, { connect } from './dva';
import * as dvaModels from './models';
import App from './App';
import Reactotron from './utils/ReactotronConfig';
import {createLogger} from 'redux-logger';

const dvaApp = dva({
  models: Object.values(dvaModels),
  onAction: createLogger({
    collapsed: (getState, action, logEntry) => {return !logEntry.error},
    colors: {
      title: () => '',
      prevState: () => '',
      action: () => '',
      nextState: () => '',
      error: () => '',
    }
  })
});

export default dvaApp.start(<App />);
