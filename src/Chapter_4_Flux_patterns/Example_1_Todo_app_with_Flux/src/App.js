import { Container } from 'flux/utils';
import TaskStore from './data/TaskStore';
import AppView from './views/AppView';

const getStores = () => [TaskStore];
const getState = () => ({ tasks: TaskStore.getState() });

export default Container.createFunctional(AppView, getStores, getState);
