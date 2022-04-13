import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Regiter.css';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const formSubmit = event =>{
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        createUserWithEmailAndPassword(email,password)
    }
    return (
        <div className='register-form'>
           <h2 className='text-primary'>Please register</h2> 
           <form onSubmit={formSubmit} action="">
               <input type="text" name="name" id="name" placeholder='Name' required/>
               <input type="email" name="email" id="email" placeholder='Email address' required/>
               <input type="password" name="password" id="password" placeholder='password' required/>
               <input type="submit" value="register" />
           </form>
           <p>Already have account? <Link to='/login' className="pe-auto text-danger text-decoration-none">Login</Link></p> 
      </div>
    );
};

export default Register;