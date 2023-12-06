import '../css/nav.css'
import logo from '../images/appa_logo.png'
import home from '../images/home-icon.png'
import profile from '../images/profile.png'
import discussions from '../images/discussions.png'
import donate from '../images/donate.png'
import help from '../images/help.png'


const Navbar = () => {
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
                    <a href=""> Home </a>
                </div>

                <div className="menu-item">
                    <div className="menu-img-box">
                        <img src={profile} alt="" />
                    </div>
                    <a href=''> Profile </a>
                </div>

                <div className="menu-item">
                    <div className="menu-img-box">
                        <img src={discussions} alt="" />
                    </div>
                    <a href=''> Discussions </a>
                </div>

                <div className="menu-item">
                    <div className="menu-img-box">
                        <img src={donate} alt="" />
                    </div>
                    <a href=''> Donate Now </a>
                </div>

                <div className="menu-item">
                    <div className="menu-img-box">
                        <img src={help} alt="" />
                    </div>
                    <a href=''> Help </a>
                </div>
            </div>

        </div> 
    );
}
 
export default Navbar;