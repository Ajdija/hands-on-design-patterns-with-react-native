import { connect } from 'react-redux';
import TaskListView from '../views/TaskList';
import fetchTasks from '../hocs/fetchTasks';
import {
    tasksEntitiesSelector,
    tasksErrorMsgSelector,
    tasksHasErrorSelector,
    tasksIsLoadingSelector
} from '../state/selectors/tasks';

const mapStateToProps = state => ({
    tasks: tasksEntitiesSelector(state).val(),
    isLoading: tasksIsLoadingSelector(state).val(),
    hasError: tasksHasErrorSelector(state).val(),
    errorMsg: tasksErrorMsgSelector(state).val()
});

const TasksContainer = connect(mapStateToProps)(fetchTasks(TaskListView));

export default TasksContainer;
