export const ADD_TASK = 'ADD_TASK';
export const CHECK_TASK = 'CHECK_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const CLEAR_TASKS = 'CLEAR_TASKS';

export function addTask(taskName) {
    return {type:ADD_TASK, name:taskName}
}

export function checkTask(list) {
    return {type:CHECK_TASK, list:list}
}

export function deleteTask(id) {
    return {type:DELETE_TASK, id:id}
}

export function clearTasks() {
    return {type:CLEAR_TASKS}
}