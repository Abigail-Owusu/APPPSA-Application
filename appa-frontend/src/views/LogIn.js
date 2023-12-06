import React, { useState } from 'react';
import logo from '../images/appa_logo.png'
import svg from '../images/login_svg.png'
import '../css/login.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [loginError, setLoginError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const credentials = {email, password};

        setIsPending(true)

        fetch('http://127.0.0.1:8000/api/login/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(credentials)
        })
        .then(response => {
            if (!response.ok){
                throw new Error('Login failed');
            }
            const data = response.json();
            console.log(data)
        })
        .then(data => {
            console.log("Login successful");
        })
        .catch(error => {
            console.error("Login error: ", error.message);
            setLoginError(true);
        })
        .finally(() => {
            setIsPending(false)
        });
    };

    return ( 
        <div className="login-container">
            <div className="left">
                <div className="logo">
                    <div className="logo-box">
                        <img src={logo} alt="" />
                    </div>
                    <div className="text-box">
                        <p> Archbishop Porter Past </p>
                        <p> Students Association </p>
                    </div>
                </div>

                <h1> Welcome back! </h1>
                <h5> Log in to your account </h5>
                <form onSubmit={handleSubmit}>
                    <p> Email </p>
                    <input 
                    type="text" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                    <p> Password </p>
                    <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required

                    />
                    <br />
                    <div className="forgot-box">
                        <div className="remember-me">
                            <input type="checkbox" />
                            <p> Remember Me </p>
                        </div>
                        <a href=""> Forgot Password? </a>
                    </div>
                    <button> {isPending ? 'Logging in...' : 'Login'} </button>
                </form>    

            </div>
            <div className="right">
                <h3> Puritas Mentis et Corporis... </h3>
                <div className="svg-container">
                    <img src={svg} alt="" />
                </div>
            </div>


        </div>
     );
}
 
export default Login;