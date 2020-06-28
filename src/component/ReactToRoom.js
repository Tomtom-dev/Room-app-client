import React from 'react'
import {Container, Button, Form, Input,FormGroup} from 'reactstrap'

export default function ReactToRoom() {
    return (
        <div>
            <Container > 
                <Form className="form-size contain">
                <FormGroup>
                        <Input type='text' placeholder="title">
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type='textarea' placeholder="message">
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary"  type="submit">Send</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    )
}
