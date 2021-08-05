import React from 'react'
import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {add_task,delete_task,isNotDone_task,isDone_task,complete_task} from '../actions/Actions'
import {Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalEdit from './ModalEdit'

function Todolist(){
const [myInput,setMyInput]=useState("")
const todos=useSelector(state=> state.todos)
const dispatch=useDispatch()
const handleChange=(e)=>{setMyInput(e.target.value)}
return (
        <div>
<Card style={{ width: '50rem' }}  border="warning" bsPrefix="input">
            <Card.Body >
            <input onChange={handleChange} placeholder="Add a New Task" className="in"/>
            <Button  variant="warning" onClick={()=>dispatch(add_task({id:Math.random(),description:myInput}))}><span className="plus">+</span></Button>
            <Button className="done"   onClick={()=>dispatch(isDone_task())}><span className="plus">Is Done</span></Button>
            <Button  className="notdone"  onClick={()=>dispatch(isNotDone_task())}><span className="plus">Is Not Done</span></Button>
            </Card.Body>  </Card>
            <table >
            <div>
              {todos.map(todo=>
              <Card style={{ width: '100rem' }} bsPrefix="input2" ><Card.Body>
<tr>
  <td>
    <Card.Title bsPrefix="button1"  style={{textDecoration:todo.isDone?"line-through":""}}>{todo.description}</Card.Title>
    </td>
  <div className="button">
    <td > 
      <Button  bsPrefix="delete_btn"  onClick={()=>dispatch(delete_task(todo.id))}>Delete</Button>
      </td>
  <td>
<Button bsPrefix="complete_btn" onClick={()=>dispatch(complete_task(todo.id))} >Complete</Button>
  </td>
    <td>
    <ModalEdit todo={todo}/>
    </td>
    </div>
  </tr> 
  </Card.Body>
  </Card>)}
    </div>
</table>
        </div>
    )
}

export default Todolist
