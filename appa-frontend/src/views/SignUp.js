import '../css/signUp.css';
import logo from '../images/appa_logo.png'
import arrow from '../images/Arrow 1.png'
import { Link } from 'react-router-dom'
import { useState } from "react";


const SignUp = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [middlename, setMiddlename] = useState('')
    const [maidenName, setMaidenName] = useState('')
    const [nationality, setNationality] = useState('')
    const [postalCode, setPostalCode] = useState('')
    
    return ( 
        <div className="sign-up-container">
            <div className="left">
                <h3> Archbishop Porter Past Students Association </h3>
                <h4> Online <span>Platform </span> </h4>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="sign-up-link">
                    <img className='arrow-img' src={arrow} alt="" />
                    <a href='/'> Sign Up </a>
                </div>
            </div>
            <div className="right">
                <h1> Create an Account </h1>
                <h4> Let's get you signed up! </h4>
                <form action="">
                    <div className="field-row">
                        <div className="field-box">
                            <label htmlFor=""> First name </label>
                            <input type="text" required/>
                        </div>

                        <div className="field-box">
                            <label htmlFor=""> Middle names </label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="field-row">
                        <div className="field-box">
                            <label htmlFor=""> Last name </label>
                            <input type="text" required/>
                        </div>

                        <div className="field-box">
                            <label htmlFor=""> Other names </label>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="field-row">
                        <div className="field-box">
                            <label htmlFor=""> Maiden name </label>
                            <input type="text" />
                        </div>

                        <div className="field-box">
                            <label htmlFor=""> Nationality </label>
                            <input type="text" required/>
                        </div>
                    </div>
                    <div className="field-row">
                        <div className="field-box">
                            <label htmlFor=""> Postal code </label>
                            <input type="text" />
                        </div>

                        <div className="field-box">
                            <label htmlFor=""> Zip code </label>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="field-row">
                        <div className="field-box">
                            <label htmlFor=""> City/Town </label>
                            <input type="text" />
                        </div>

                        <div className="field-box">
                            <label htmlFor=""> District </label>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="field-row">
                        <div className="field-box">
                            <label htmlFor=""> Country </label>
                            <input type="text" />
                        </div>

                        <div className="field-box">
                            <label htmlFor=""> Profession </label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="button">
                        <button> Proceed </button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default SignUp;