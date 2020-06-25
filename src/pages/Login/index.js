import React,{useState} from 'react'
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector} from "react-redux";
import { Link,useHistory } from "react-router-dom";
import {login} from "../../store/user/action"
import { selectToken } from "../../store/user/selector";
// import {selectUserName} from "../../store/user/selector";
// import {selectUserEmail} from "../../store/user/selector";
import "./Login.css"

export default function Login() {

    const dispatch = useDispatch();
    const token = useSelector(selectToken);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    function submitForm (event){
       
        event.preventDefault();
        dispatch(login(email,password))
      
        setEmail("");
        setPassword("");
    }

    return (
        <div>
            <Container>
                <Form className="contain" >
                <h2 >Login</h2>
                    <Form.Group  controlId="formBasicEmail" className="form-size">
                        
                        <Form.Control 
                        value={email}
                        onChange={event=>setEmail(event.target.value)}
                        type="email" 
                        placeholder="Email"
                        required
                        />
                            
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="form-size">
                        <Form.Control 
                        value={password}
                        onChange={event=>setPassword(event.target.value)}
                        type="password" 
                        placeholder="Password"
                        required
                        />
                    </Form.Group>

                    <Form.Group className="mt-5">
                        <Button variant="primary" type="submit" onClick={submitForm}>
                            Log in
                        </Button>
                        <span> | Not registered ? </span>
                        <Link to="/signup" style={{ textAlign: "center" }}>
                            Sign Up
                        </Link>
                    </Form.Group>
                    
                </Form> 
            </Container>
        </div>
    )
}
