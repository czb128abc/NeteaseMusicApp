import React from 'react'
import dva, { connect } from './dva';
import App from './App';
const routerModel = {
    namespace: 'count',
    state: 0,
    reducers: {
        add(state) { return state + 1 },
    },
    effects: {
        *addDelay(action, { call, put }) {
            yield call(delay, 1000);
            yield put({ type: 'add' });
        },
    },
    subscriptions: {
        setup({ dispatch }) {
            dispatch({ type: 'add' });
        },
    },
};
const dvaApp = dva({
    models: [routerModel],
});

export default dvaApp.start(<App />);