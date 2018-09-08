import React from 'react';
import { Provider, connect } from 'react-redux';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import store from './data/AppStore';
import AppView from './views/AppView';
import TaskActions from './data/TaskActions';
import { TasksPropTypes } from './data/TasksActionTypes';

export const fetchTasks = (dispatch, getState) => {
    if (!getState().tasks.isLoading) {
        TaskActions.fetchStart(dispatch)();
        return fetch('http://localhost:3000/tasks')
            .then(response => response.json())
            .then(responseJSON =>
                TaskActions.fetchComplete(dispatch)(Immutable.List(responseJSON)))
            .catch(TaskActions.fetchError(dispatch));
    }
    return null;
};

class TasksFetchWrapper extends React.Component {
    componentDidMount = () => this.props.fetchTasks();
    render = () => <AppView {...this.props} />;
}

TasksFetchWrapper.propTypes = {
    fetchTasks: PropTypes.func.isRequired,
    tasks: TasksPropTypes.isRequired
};

const mapStateToProps = state => ({ tasks: state.tasks });
const mapDispatchToProps = dispatch => ({
    fetchTasks: () => dispatch(fetchTasks),
    addTask: () => dispatch(TaskActions.addTask)
});
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(TasksFetchWrapper);
const TasksApp = () => (
    <Provider store={store}><AppContainer /></Provider>
);

export default TasksApp;
