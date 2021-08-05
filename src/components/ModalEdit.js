import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {edit_task} from '../actions/Actions'

function ModalEdit({todo}) {

            const [show, setShow] = useState(false);
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
            const dispatch=useDispatch();
            const [description, setDescription] = useState(todo.description);
          
            return (
              <>
                <Button bsPrefix="edit_btn" onClick={handleShow}>Edit</Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Edit text</Modal.Title>
                  </Modal.Header>
               <Modal.Body> <input value={description} onChange={(e)=>setDescription(e.target.value)}/></Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={()=>{dispatch(edit_task({id:todo.id,description:description})); handleClose()}}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            );
          }
export default ModalEdit
