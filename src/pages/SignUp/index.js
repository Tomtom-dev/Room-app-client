import React from 'react'
import{Container,Button,Col, Form, Label, Input, FormGroup} from 'reactstrap'

export default function SignUp() {
    return (
        <div>
            
            <Container >
            
                <Form className="form-size contain">
                <h2>Sign up</h2>
                    <FormGroup>
                        <Input type='text' placeholder="Name"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type='number' placeholder="Age"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type='email' placeholder="Email"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type='password' placeholder="Password"></Input>
                    </FormGroup>

                    <div>
                    <FormGroup >
                        <Label><Input type="checkbox"></Input></Label>
                    <Button color="primary"  type="submit" onClick={()=>{}}>Register</Button>
                    </FormGroup>
                    </div>
                </Form>
            </Container>
            
       
        </div>
        
    )
}
