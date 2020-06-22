import React from 'react'
import {Container, Button, Form, Input,FormGroup} from 'reactstrap'

export default function PostAnnounce() {
    return (
        <div>
            <Container >
                <Form className="form-size contain">
                    <h1>Post announce</h1>
                    <FormGroup>
                        <Input type='text' placeholder="title"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type='text' placeholder="location"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type="textarea" rows="7" name="text" placeholder="description" />
                    </FormGroup>
                    <FormGroup>
                    <Input type="file" name="file" id="exampleFile" />
                    <Button color="primary"  type="submit" onClick={()=>{}}>Post</Button>
                    </FormGroup>
                </Form>
                
            </Container>
            
        </div>
    )
}
