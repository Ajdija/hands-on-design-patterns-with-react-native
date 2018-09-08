import { connect } from 'react-redux';
import TaskDetails from '../views/TaskDetails';
import fetchTask from '../hocs/fetchTask';

const mapStateToProps = (state, ownProps) => ({
    task: state.tasks
        ? state.tasks
            .get('entities')
            .find(task => task.id === ownProps.taskId)
        : null
});
const TaskDetailsContainer = connect(mapStateToProps)(fetchTask(TaskDetails));

export default TaskDetailsContainer;
