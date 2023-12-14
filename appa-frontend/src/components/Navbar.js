import '../css/nav.css'
import logo from '../images/appa_logo.png'
import home from '../images/home-icon.png'
import profile from '../images/profile.png'
import discussions from '../images/discussions.png'
import donate from '../images/donate.png'
import logout from '../images/logout.png'
import help from '../images/help.png'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'


/**
 * Navbar component represents the navigation bar of the application.
 * @returns {JSX.Element} - The rendered Navbar component.
 */
const Navbar = () => {
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();

    /**
     * Handles the logout functionality.
     */
    const logoutFunc = async () => {
        setAuth({});
        navigate('/')
    }

    // Rendering the component
    return ( 
        <div className="nav-box">
            <div className="img-row">
                <div className="logo-box">
                    <img src={logo} alt="" />   
                </div>
                <div className="text-box">
                    <p> Archbishop Porter Past </p>
                    <p> Students Association </p>
                </div> 
            </div>
            <div className="menu-items">
                <div className="menu-item">
                    <div className="menu-img-box">
                        <img src={home} alt="" />
                    </div>
                    <Link to="/"> Home </Link>
                </div>

                <div className="menu-item">
                    <div className="menu-img-box">
                        <img src={profile} alt="" />
                    </div>
                    <Link to={`/profile/${auth.email}`}> Profile </Link>
                </div>

                <div className="menu-item">
                    <div className="menu-img-box">
                        <img src={discussions} alt="" />
                    </div>
                    <Link to='/discussions'> Discussions </Link>
                </div>

                <div className="menu-item">
                    <div className="menu-img-box">
                        <img src={donate} alt="" />
                    </div>
                    <Link to='/donate'> Donate Now </Link>
                </div>

                <div className="menu-item">
                    <div className="menu-img-box">
                        <img src={help} alt="" />
                    </div>
                    <Link to='/'> Help </Link>
                </div>
            </div>
            
            <div className="logout-box" onClick={logoutFunc}>
                <div className="menu-img-box">
                    <img src={logout} alt="" />
                </div>
                
                <Link> Logout </Link>

            </div>
            


        </div> 
    );
}
 
// Exporting the component for use in other files
export default Navbar;