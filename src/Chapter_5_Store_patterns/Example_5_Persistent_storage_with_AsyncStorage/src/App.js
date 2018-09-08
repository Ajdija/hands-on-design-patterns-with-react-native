import React from 'react';
import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './data/AppStore';
import AppView from './views/AppView';

const mapStateToProps = state => ({
    tasks: state.tasks,
    taskForm: state.taskForm
});
const AppContainer = connect(mapStateToProps)(AppView);
const TasksApp = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AppContainer />
        </PersistGate>
    </Provider>
);

export default TasksApp;
