import { connect } from 'react-redux';
import TaskListView from '../views/TaskList';
import fetchTasks from '../hocs/fetchTasks';

const mapStateToProps = state => ({
    tasks: state.tasks.get('entities'),
    isLoading: state.tasks.get('isLoading'),
    hasError: state.tasks.get('hasError'),
    errorMsg: state.tasks.get('errorMsg')
});

const TasksContainer = connect(mapStateToProps)(fetchTasks(TaskListView));

export default TasksContainer;
