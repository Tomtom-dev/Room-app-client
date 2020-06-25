import React, {useState} from 'react'
import{Container,Button, Form, Label, Input, FormGroup} from 'reactstrap'
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import {signUp} from '../../store/user/action'

export default function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("")
    const dispatch = useDispatch();
    const history = useHistory();

    function submitForm(event){
        event.preventDefault();

        console.log(name,email,password,age);
        
        dispatch(signUp(name,email,password,age,history))
        setEmail("");
        setPassword("");
        setName("");
        setAge("");
    }

    return (
        <div>
            
            <Container >
            
                <Form className="form-size contain">
                <h2>Sign up</h2>
                    <FormGroup>
                        <Input type='text' placeholder="Name" 
                        value={name} onChange={event => setName(event.target.value)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type='number' placeholder="Age" 
                        value={age} onChange={event => setAge(event.target.value)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type='email' placeholder="Email" 
                        value={email} onChange={event => setEmail(event.target.value)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type='password' placeholder="Password" 
                        value={password} onChange={event => setPassword(event.target.value)}></Input>
                    </FormGroup>

                    <div>
                    <FormGroup >
                        <Label><Input type="checkbox"></Input></Label>
                    <Button color="primary"  type="submit" onClick={submitForm}>Register</Button>
                    </FormGroup>
                    
                    </div>
                </Form>
            </Container>
            
       
        </div>
        
    )
}
