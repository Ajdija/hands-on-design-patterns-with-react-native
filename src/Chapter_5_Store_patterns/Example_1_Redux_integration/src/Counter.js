import React from 'react';
import { Provider, connect } from 'react-redux';
import store from './flux/AppStore';
import CounterView from './views/CounterView';
import dispatch from './flux/AppDispatcher';
import types from './flux/AppActionTypes';

const increaseAction = () => dispatch({ type: types.INC_COUNTER });
const decreaseAction = () => dispatch({ type: types.DEC_COUNTER });

const mapStateToProps = state => ({
    count: state.count,
    inc: increaseAction,
    dec: decreaseAction
});

const CounterContainer = connect(mapStateToProps)(CounterView);

const CounterApp = () => (
    <Provider store={store}><CounterContainer /></Provider>
);

export default CounterApp;
