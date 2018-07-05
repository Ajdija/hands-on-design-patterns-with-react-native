import { configure, observable, action } from 'mobx';
import data from './tasks.json';

// don't allow state modifications outside actions
configure({ enforceActions: true });

export class TaskStore {
    @observable tasks = [...data.tasks]; // default state
    @action addTask(task) {
        this.tasks.push({
            name: task.name,
            description: task.description,
            likes: 0
        });
    }
}

const observableTaskStore = new TaskStore();

export default observableTaskStore;
