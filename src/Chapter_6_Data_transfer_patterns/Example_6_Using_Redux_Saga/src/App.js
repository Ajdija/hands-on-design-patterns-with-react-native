import React from 'react';
import { Provider, connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from './data/AppStore';
import AppView from './views/AppView';
import TaskActions from './data/TaskActions';
import { TasksPropTypes } from './data/TasksActionTypes';

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
    fetchTasks: TaskActions.fetchStart(dispatch),
    addTask: TaskActions.addTask(dispatch)
});
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(TasksFetchWrapper);
const TasksApp = () => (
    <Provider store={store}><AppContainer /></Provider>
);

export default TasksApp;
