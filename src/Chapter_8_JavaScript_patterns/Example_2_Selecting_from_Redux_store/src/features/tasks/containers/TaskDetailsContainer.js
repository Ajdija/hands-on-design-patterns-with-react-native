import { connect } from 'react-redux';
import TaskDetails from '../views/TaskDetails';
import fetchTask from '../hocs/fetchTask';
import { getTaskById } from '../state/selectors/tasks';

const mapStateToProps = (state, ownProps) => ({
    task: getTaskById(state, ownProps.taskId)
});
const TaskDetailsContainer = connect(mapStateToProps)(fetchTask(TaskDetails));

export default TaskDetailsContainer;
