import '../css/login.css';
import logo from '../images/appa_logo.png'
import svg from '../images/login_svg.png'

const Login = () => {
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
                <form action="">
                    <p> Email </p>
                    <input type="text" />
                    <p> Password </p>
                    <input type="text" />
                    <br />
                    <div className="forgot-box">
                        <div className="remember-me">
                            <input type="checkbox" />
                            <p> Remember Me </p>
                        </div>
                        <a href=""> Forgot Password? </a>
                    </div>
                    <button> Submit </button>
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