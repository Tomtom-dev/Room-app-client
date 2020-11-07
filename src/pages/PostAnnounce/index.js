import React, {useState} from 'react'
import {Container, Button, Form, Input,FormGroup} from 'reactstrap'
// import { selectRoomDetails } from '../../store/roomPageDetail/selector'
import {createNewPost} from '../../store/roomPageDetail/action'
import { useDispatch, useSelector } from "react-redux";
import {selectUserId} from '../../store/user/selector'
import { useHistory } from "react-router-dom";
import './index.css'

export default function PostAnnounce() {

    const [title, setTitle] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const dispatch = useDispatch();
    const history = useHistory();

    const userId = useSelector(selectUserId)

    // add the image with cloudinary
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState("")

   const uploadImage = async event =>{
       const files= event.target.files
       const data = new FormData()
       data.append('file', files[0])
       data.append('upload_preset','geekyimages')
       setLoading(true)

       const res = await fetch("https://api.cloudinary.com/v1_1/djstug8i6/image/upload",
       {
            method:'POST',
            body:data
       })

       const file =await res.json()
       setImage(file.secure_url)
       setLoading(false)
   }
    
    function submitForm (event){
        event.preventDefault();
        console.log("submit the new post")
        console.log(title, location, description, userId, image)
        dispatch(createNewPost({title, location, description, image, history}))

        setTitle("")
        setLocation("")
        setDescription("")
        setImage("")
    }

    return (
        <div className="post-page">
            <Container >
            <h1 className="title-page">Post a room</h1>
                <Form className="form-size contain">
                    
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
                    {loading?(<h3 className="lds-dual-ring">Loading</h3>):(<img src={image} alt="selected" id="img-preview" style={{maxWidth:'350px'}}/>)}
                    <Input type="file" name="file" id="file-upload"  onChange={uploadImage}/>
                    <p style={{marginLeft:"3px", textAlign:"left", fontSize:"13px"}}>upload one picture to illustrate your post size-max: 3mo </p>
                    <Button color="primary"  type="submit" onClick={submitForm}>Post</Button>
                    </FormGroup>
                </Form>
            </Container>
            
        </div>
    )
}
