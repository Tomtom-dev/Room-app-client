import React, {useState} from 'react'
import {Container, Button, Form, Input,FormGroup} from 'reactstrap'
import { useDispatch } from "react-redux";
import {createNewMessage} from '../store/room_respond/action'

export default function ReactToRoom() {

    const dispatch = useDispatch();
    const [title, setTitle] = useState("")
    const [message, setMessage] = useState("")

    function submitForm(event){
        event.preventDefault();
        console.log("submit new post");
        console.log(message);
        
        dispatch(createNewMessage({message}))

        setTitle("")
        setMessage("")

    }

    return (
        <div>
                <Form className="form-size button">
                    <FormGroup>
                        <Input type='textarea' placeholder="message" value={message}
                        onChange={event=> setMessage(event.target.value)}>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary"  type="submit" onClick={submitForm}>Send</Button>
                    </FormGroup>
                </Form>
            
        </div>
    )
}
