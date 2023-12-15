// Importing necessary React components, images, styles, and external libraries
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


// Main functional component representing the Login page
const Login = () => {

    // Custom hook to handle authentication
    const { setAuth } = useAuth();

    // State variables for email, password, form submission status, and password visibility
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState(false);


    // React Router hooks for navigation
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/discussions";

    /**
     * Function to handle password visibility
     */
    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };

    /**
     * Function to handle form submission using axiosInstance
     * @param {*} e 
     */
    const handleSubmit = async(e) => {
        e.preventDefault();

        //Validation before making the request
        if (validate()){

            const credentials = { email, password };
            try{
                
                // Making a POST request to the login API endpoint
                const response = await axiosInstance.post('api/login/', credentials)            
    
                // Extracting the access token and email from the response
                const accessToken = response?.data.token;
                const email = response?.data.email;

                // Setting authentication state with email, password, and access token
                setAuth({email, password, accessToken});

                // Displaying success toast message
                toast.success("Login Successful", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                    style: {
                        width: '400px',
                    },
                });
                
                // Navigating to the intended destination after a delay
                setTimeout(() => {
                    navigate(from, {replace: true});
                }, 2000);
                // setEmail('');
                // setPassword('')
    
            }
            catch (err) {
                console.log({err})

                // Handling different error scenarios and displaying appropriate toast messages
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
    
    /**
     * Function to perform client-side validation of form fields
     * @returns {boolean} result of form validation (true or false)
     */
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

    // Rendering the main content of the Login component
    return ( 
        <div className="login-container">

            {/* Left section containing the login form */}
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

            {/* Right section containing a slogan and an illustration */}
            <div className="right">
                <h3> Puritas Mentis et Corporis... </h3>
                <div className="svg-container">
                    <img src={svg} alt="" />
                </div>
            </div>


        </div>
     );
}
 
// Exporting the component for use in other files
export default Login;