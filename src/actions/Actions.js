import {ADD_TASK, DELETE_TASK,ISDONE_TASK,ISNOTDONE_TASK,COMPLETE_TASK,EDIT_TASK} from '../constants/actionsTypes'

export function add_task(payload){
    return{type:ADD_TASK,payload}
}
export function delete_task(payload){
    return{type:DELETE_TASK,payload}
}
export function isDone_task(payload){
    return{type:ISDONE_TASK,payload}
}
export function isNotDone_task(payload){
    return{type:ISNOTDONE_TASK,payload}
}
export function complete_task(payload){
    return{type:COMPLETE_TASK,payload}
}
export function edit_task(payload){
    return{type:EDIT_TASK,payload}
}
