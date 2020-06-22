import React from 'react'
import{Container,Button,Col, Form, Label, Input, FormGroup} from 'reactstrap'

export default function SignUp() {
    return (
        <div>
            
            <Container >
            
                <Form className="form-size contain">
                <h2>Sign up</h2>
                    <FormGroup>
                        <Input type='email' placeholder="Name"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type='email' placeholder="Age"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type='email' placeholder="Email"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type='email' placeholder="Password"></Input>
                    </FormGroup>

                    <div>
                    <FormGroup >
                    <Button color="primary"  type="submit" onClick={()=>{}}>Register</Button>
                    </FormGroup>
                    </div>
                </Form>
            </Container>
            
       
        </div>
        
    )
}
