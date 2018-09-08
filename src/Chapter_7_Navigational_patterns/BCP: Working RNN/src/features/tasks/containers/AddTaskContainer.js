import { connect } from 'react-redux';
import AddTaskFormView from '../views/AddTaskForm';
import TaskActions from '../actions/TaskActions';
import fetchTasks from '../hocs/fetchTasks';

const mapDispatchToProps = dispatch => ({
    addTask: TaskActions.addTask(dispatch)
});
const AddTaskContainer = connect(null, mapDispatchToProps)(fetchTasks(AddTaskFormView));

export default AddTaskContainer;
