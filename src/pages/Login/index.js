import React,{useState} from 'react'
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
// import { Col } from "react-bootstrap";
import "./index.css"

export default function Login() {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function submitForm (event){
        console.log('hi');
        event.preventDefault();
    }

    return (
        <div>
            <Container>
                <Form >
                <h2 >Login</h2>
                    <Form.Group  controlId="formBasicEmail" className="form-size">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                        value={email}
                        onChange={event=>setEmail(event.target.value)}
                        type="email" 
                        placeholder="Enter email"
                        required
                        />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>    
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="form-size">
                        <Form.Label>Password</Form.Label>
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
                        <Link to="/signup" style={{ textAlign: "center" }}>
                            Sign Up
                        </Link>
                    </Form.Group>
        
                </Form> 
            </Container>
            
        </div>
    )
}
