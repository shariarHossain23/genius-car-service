import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Sociallogin from '../shared/SocialLogin/Sociallogin';
import './Regiter.css';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [updateProfile, updating, error1] = useUpdateProfile(auth);
      const navigate = useNavigate()

    const formSubmit = async event =>{
        event.preventDefault()
        const displayName = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        
        await createUserWithEmailAndPassword(email,password)
        await updateProfile({ displayName });
        navigate("/")
        toast.success("regiter successfull", {id:"register"})
    }
    if(user){
       console.log(user);
    }
    const [agree,setAgree] = useState(false)
    return (
        <div className='register-form'>
           <h2 className='text-primary'>Please register</h2> 
           <form onSubmit={formSubmit} action="">
               <input type="text" name="name" id="name" placeholder='Name' required/>
               <input type="email" name="email" id="email" placeholder='Email address' required/>
               <input type="password" name="password" id="password" placeholder='password' required/>
               <input onClick={()=> setAgree(!agree)} type="checkbox" name="terms" id="terms" />
               <label className={`ms-2 ${agree ? '':'text-danger'}`} htmlFor="checkbox">accept term and condition</label>
               <input disabled={!agree} className='mt-4'  type="submit" value="register" />
           </form>
           <p>Already have account? <Link to='/login' className="pe-auto text-danger text-decoration-none">Login</Link></p> 
           <Sociallogin></Sociallogin>
      </div>
    );
};

export default Register;