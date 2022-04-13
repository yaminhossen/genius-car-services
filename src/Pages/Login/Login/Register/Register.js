import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const navegateLogin = () => {
        navigate('/login')
    }
    if (user) {
        navigate('/home')
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='text-center '>
            <h3>please register</h3>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your name' />
                <br />
                <br />
                <input type="email" name="email" placeholder='Email address' id="" required />
                <br />
                <br />
                <input type="password" name="password" id="" placeholder='password' required />
                <br />
                <br />
                <input type="submit" value="Register" />
            </form>
            <p>Allready have an account? <Link to="/login" className='text-primary text-decoration-none' onClick={navegateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;