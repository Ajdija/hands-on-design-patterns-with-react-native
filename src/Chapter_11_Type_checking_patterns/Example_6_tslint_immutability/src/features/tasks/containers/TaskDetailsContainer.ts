import { connect } from 'react-redux';
import TaskDetails from '../views/TaskDetails';
import fetchTask from '../hocs/fetchTask';
import { getTaskById } from '../state/selectors/tasks';
import { State } from '../../../flux/types';

const mapStateToProps = (state:State , ownProps: { readonly taskId: number }) => ({
    task: getTaskById(ownProps.taskId)(state).val()
});
const TaskDetailsContainer = connect(mapStateToProps)(fetchTask(TaskDetails));

export default TaskDetailsContainer;
