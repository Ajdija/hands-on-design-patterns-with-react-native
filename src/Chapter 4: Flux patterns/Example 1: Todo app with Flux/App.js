import App from './src/App';
import data from './src/data/tasks.json';
import TaskActions from './src/data/TaskActions';

export default App;

data.tasks.map(TaskActions.addTask);
