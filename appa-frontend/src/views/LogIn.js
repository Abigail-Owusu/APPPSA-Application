import React, { useState, useContext } from 'react';
import logo from '../images/appa_logo.png'
import svg from '../images/login_svg.png'
import '../css/login.css';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../hooks/useAuth';
import axiosInstance from '../api/axiosInstance';
import axios from 'axios';



const Login = () => {

    const { setAuth } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/discussions";

    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (validate()){

            const credentials = { email, password };
            try{
                
    
                const response = await axiosInstance.post('api/login/', credentials)            
    
                const accessToken = response?.data.token;
                const email = response?.data.email;
                setAuth({email, password, accessToken});
                toast.success("Login Successful", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                    style: {
                        width: '400px',
                    },
                });
                
                setTimeout(() => {
                    navigate(from, {replace: true});
                }, 2000);
                // setEmail('');
                // setPassword('')
    
            }
            catch (err) {
                console.log({err})
                if (!err?.response){
                    toast.error("No Server Response", {
                        position: toast.POSITION.TOP_CENTER,
                    });
                }
    
                if (err.response?.status === 404){
                    toast.error("User not found", {
                        position: toast.POSITION.TOP_CENTER,
                    });
                    
                }
    
                else if (err.response?.status === 401){
                    toast.error("Invalid Credentials", {
                        position: toast.POSITION.TOP_CENTER,
                    });
                }
                else{
                    toast.error(err.response, {
                        position: toast.POSITION.TOP_CENTER,
                    });
    
                }
    
            }
        }

    }

    const handleSubmitt = (e) => {
        e.preventDefault();
    
        if (validate()) {
            const credentials = { email, password };
    
            setIsPending(true);
    
            fetch('http://127.0.0.1:8000/api/login/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            })
                .then(response => {
                    if (!response.ok) {

                        if (response.status === 404){
                            throw new Error("User not found")
                        }

                        else if (response.status === 401){
                            throw new Error("Wrong password")
                        }
                        else{
                            throw new Error('Login failed');

                        }
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data)
                    if (data.message === "Login successful") {
                        toast.success(data.message, {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 2000,
                            style: {
                                width: '400px',
                            },
                        });
                        
                        setTimeout(() => {
                            navigate('/discussions');
                        }, 2000);
                    } 
                })
                .catch(error => {
                    console.error("Login error: ", error.message);
                    setLoginError(true);
    
                    toast.error("Login failed due to: " + error.message, {
                        position: toast.POSITION.TOP_CENTER,
                    });
                })
                .finally(() => {
                    setIsPending(false);
                });
        }
    };
    

    const validate = () => {
        let result = true;

        if (email === '' || email == null){
            console.log("false")
            result = false;
            toast.warning('Please enter username', {
                position: toast.POSITION.TOP_CENTER,
            }
            )
        }

        if (password === '' || email == null){
            result = false;
            toast.warning('Please enter password', {
                position: toast.POSITION.TOP_CENTER,
            }
            )
        }

        return result;
    }

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
                    // required
                    />
                    <p> Password </p>
                    <input 
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    // required

                    />
                    <br />
                    <div className="forgot-box">
                        <div className="remember-me">
                            <input type="checkbox" checked={showPassword} onChange={handleCheckboxChange} />
                            <p> Show password </p>
                        </div>
                        <a href=""> Forgot Password? </a>
                    </div>
                    <button> {isPending ? 'Logging in...' : 'Login'} </button>
                    <ToastContainer />
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