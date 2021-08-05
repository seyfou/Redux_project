import {ADD_TASK,DELETE_TASK,ISDONE_TASK,ISNOTDONE_TASK,COMPLETE_TASK, EDIT_TASK} from '../constants/actionsTypes'

const InitialState={todos:[{id:Math.random(),description:"Learn react redux ",isDone:true},{id:Math.random(), description:"Doing checkpoint",isDone:false}]}
const Reducer=(state=InitialState,action)=>{
    switch(action.type)
    {
        case ADD_TASK:
        return ({...state,todos:[...state.todos,action.payload]})
        case DELETE_TASK:
            return {...state,todos:state.todos.filter(item => item.id!== action.payload)}
        case ISDONE_TASK:
            return ({...state,todos:state.todos.filter(el=>el.isDone)})
        case ISNOTDONE_TASK:
                return ({...state,todos:state.todos.filter(el=>!el.isDone)})
        case COMPLETE_TASK:
            {
                let newtab=state.todos.map(el=>el.id===action.payload?{...el,isDone:!el.isDone}:el);
                return {...state,todos:newtab} 
            }
    case EDIT_TASK:
                return {...state,todos:state.todos.map(el=> el.id===action.payload.id?{...el,description:action.payload.description}:el)}   
        
               default: return(state)
    }
}
export default Reducer