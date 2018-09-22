enum TasksActionType {
    ADD_TASK = 'ADD_TASK',
    TASKS_FETCH_START = 'TASKS_FETCH_START',
    TASKS_FETCH_COMPLETE = 'TASKS_FETCH_COMPLETE',
    TASKS_FETCH_ERROR = 'TASKS_FETCH_ERROR',
    TASK_FETCH_START = 'TASK_FETCH_START',
    TASK_FETCH_COMPLETE = 'TASK_FETCH_COMPLETE',
    TASK_FETCH_ERROR = 'TASK_FETCH_ERROR'
}

export type TaskAddFormData = {
    name: string,
    description: string
}

export type TaskType = TaskAddFormData & {
    likes: number,
    id: number
}

export type AddTaskActionType = {
    type: TasksActionType.ADD_TASK,
    task: TaskAddFormData
};

export default TasksActionType;
