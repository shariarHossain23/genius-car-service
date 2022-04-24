import React from "react";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import auth from "../../../firebase.init";
import facebooklogo from '../../../images/logo/facebook.png';
import githublogo from '../../../images/logo/github.png';
import googlelogo from '../../../images/logo/google.png';

const Sociallogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if(user || user1){
      navigate(from, { replace: true });
    }
    let errorHandle;
    if(error || error1){
        errorHandle = <p>{error?.message} {error1?.message}</p>
    }
  return (
    <div>
        {errorHandle}
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="w-50 bg-primary"></div>
        <p className="mx-2 mt-2">or</p>
        <div style={{ height: "1px" }} className="w-50 bg-primary"></div>
      </div>
      <div>
        <button onClick={()=> signInWithGoogle()} className="btn w-50 mx-auto d-block bg-info text-white"> <img width={20} src={googlelogo} alt="" />  signin with google</button>
        <button className="btn w-50 mx-auto d-block bg-info text-white mt-3"> <img width={40} src={facebooklogo} alt="" />  signin with facebook</button>
        <button onClick={()=> signInWithGithub() } className="btn w-50 mx-auto d-block bg-info text-white mt-3"> <img width={50} src={githublogo} alt="" />  signin with github</button>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Sociallogin;
