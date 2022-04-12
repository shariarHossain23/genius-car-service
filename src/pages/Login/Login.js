import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
    const emailRef = useRef('')
    const passRef = useRef('')
    const handleSubmit = event =>{
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passRef.current.value;
        console.log(email,password);
    }
  return (
    <div>
      <div className="w-50 mx-auto mt-5">
      <h1 className="text-center text-primary">LogIn</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={passRef} type="password" placeholder="Password" required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p>New to genius car? <Link to='/register' className="pe-auto text-danger text-decoration-none">Please Register</Link></p> 
      </div>
    </div>
  );
};

export default Login;
