import React from 'react';
import google from '../../../images/logo/google.png'
import facebook from '../../../images/logo/facebook.png'
import github from '../../../images/logo/gittu.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error || error1) {
        errorElement =
            <p className='text-danger'>Error:{error?.message} {error1?.message}</p>
    }
    if (user || user1) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
            </div>
            <p>{errorElement}</p>
            <button onClick={() => signInWithGoogle()} className='btn btn-info d-block mx-auto w-75 my-2'>
                <img className='mx-2' style={{ width: "30px" }} src={google} alt="" />
                Google SignIn
            </button>
            <button className='btn btn-info d-block mx-auto w-75 my-2'>
                <img className='mx-2' style={{ width: "30px" }} src={facebook} alt="" />
                Facebook SignIn
            </button>
            <button onClick={() => signInWithGithub()} className='btn btn-info d-block mx-auto w-75 my-2'>
                <img className='mx-2' src={github} alt="" />
                Github SignIn
            </button>
        </div>
    );
};

export default SocialLogin;