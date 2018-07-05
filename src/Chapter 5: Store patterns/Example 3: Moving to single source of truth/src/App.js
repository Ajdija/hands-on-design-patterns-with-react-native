import React from 'react';
import { Provider, connect } from 'react-redux';
import store from './data/AppStore';
import AppView from './views/AppView';

const mapStateToProps = state => ({
    tasks: state.tasks,
    taskForm: state.taskForm
});
const AppContainer = connect(mapStateToProps)(AppView);
const TasksApp = () => (
    <Provider store={store}><AppContainer /></Provider>
);

export default TasksApp;
