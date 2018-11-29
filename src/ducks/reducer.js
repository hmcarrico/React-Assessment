import * as tasks from '../service/taskApi';

const GET_TASKS = 'GET_TASKS'
const GET_TASKS_FULFILLED = 'GET_TASKS_FULFILLED'
const DELETE_TASK = 'DELETE_TASK'
const COMPLETE_TASK = 'COMPLETE_TASK'
const ADD_TASK = 'ADD_TASK'
const EDIT_TASK = 'EDIT_TASK'

const initialState = {
    tasks: [],
}

export default function taskReducer(state=initialState, action){
    switch(action.type){
        case GET_TASKS_FULFILLED:
        return {...state, tasks: action.payload}
        case DELETE_TASK:
        console.log('delete====>', action.payload)
        return {...state, tasks: action.payload}
        case COMPLETE_TASK:
        console.log('complete======>', action.payload)
        return {...state, tasks: action.payload}
        case EDIT_TASK:
        console.log('edit======>', action.payload)
        return {...state, tasks: action.payload}
        default:
        return state
    } 
}

export function getTasks(){
    return {
        type: GET_TASKS,
        payload: tasks.getTasks
    }
}

export function deleteTask(id){
    return {
        type: DELETE_TASK,
        payload: tasks.deleteTask(id)
    }
}

export function completeTask(id){
    return {
        type: COMPLETE_TASK,
        payload: tasks.completeTask(id)
    }
}

export function addTask(title){
    return {
        type: ADD_TASK,
        payload: tasks.addTasks(title)
    }
}

export function editATask(title, description, id){
    return {
        type: EDIT_TASK,
        payload: tasks.editTask(title, description, id)
    }
}