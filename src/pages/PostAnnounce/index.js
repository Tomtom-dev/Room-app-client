import React, {useState} from 'react'
import {Container, Button, Form, Input,FormGroup} from 'reactstrap'
import { selectRoomDetails } from '../../store/roomPageDetail/selector'
import {createNewPost} from '../../store/roomPageDetail/action'
import { useDispatch, useSelector } from "react-redux";
import {selectUserId} from '../../store/user/selector'


export default function PostAnnounce() {

    const [title, setTitle] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [file, setFile] = useState("")
    const dispatch = useDispatch();
    

    const userId = useSelector(selectUserId)

    function submitForm (event){
        event.preventDefault();
        console.log("submit the new post")
        console.log(title, location, description, file,userId)

        dispatch(createNewPost({title, location, description, file}))

        setTitle("")
        setLocation("")
        setDescription("")
        setFile("")
    }

    return (
        <div>
            <Container >
                <Form className="form-size contain">
                    <h1>Post a room</h1>
                    <FormGroup>
                        <Input type='text' placeholder="title"
                         value={title} onChange={event => setTitle(event.target.value)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type='text' placeholder="location"
                         value={location} onChange={event => setLocation(event.target.value)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type="textarea" rows="7" name="text"
                         placeholder="description" value={description} onChange={event => setDescription(event.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                    <Input type="file" name="file" id="exampleFile" value={file} onChange={event => setFile(event.target.value)}/>
                    <Button color="primary"  type="submit" onClick={submitForm}>Post</Button>
                    </FormGroup>
                </Form>
                
            </Container>
            
        </div>
    )
}
