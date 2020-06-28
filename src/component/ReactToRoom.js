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
        console.log(title,message);
        
        dispatch(createNewMessage({title,message}))

        setTitle("")
        setMessage("")

    }

    return (
        <div>
            <Container > 
                <Form className="form-size contain">
                <FormGroup>
                        <Input type='text' placeholder="title" value={title}
                        onChange={event=> setTitle(event.target.value)}>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type='textarea' placeholder="message" value={message}
                        onChange={event=> setMessage(event.target.value)}>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary"  type="submit" onClick={submitForm}>Send</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    )
}
