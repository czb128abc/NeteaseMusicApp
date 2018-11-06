import React from 'react';
import dva, { connect } from './dva';
import * as dvaModels  from './models';
import App from './App';
const dvaApp = dva({
  models: Object.values(dvaModels),
});

export default dvaApp.start(<App />);
