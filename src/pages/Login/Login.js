import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from "../../firebase.init";
import Sociallogin from "../shared/SocialLogin/Sociallogin";



const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const navigate = useNavigate()
  if(user){
    navigate(from, { replace: true });
    toast.success("welcome back",{id:'welcome'})
  }
  let errorHandle;
  if(error){
    errorHandle =<p className="text-danger">error :{error.message}</p>
  }


  const emailRef = useRef("");
  const passRef = useRef("");

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    signInWithEmailAndPassword(email,password)
  };
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );
  const forgetPassword =async () =>{
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email)
    toast("email send")
  }

  return (
    <div>
      <div className="w-50 mx-auto mt-5">
        <h1 className="text-center text-primary">LogIn</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {errorHandle}
        <p>
          New to genius car?{" "}
          <Link
            to="/register"
            className="pe-auto text-danger text-decoration-none"
          >
            Please Register
          </Link>
        </p>
        <button onClick={forgetPassword} className="btn btn-link">forgot password</button>
        <Sociallogin></Sociallogin>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
