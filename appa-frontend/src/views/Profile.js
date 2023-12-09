import Navbar from '../components/Navbar';
import Messages from '../components/Messages';
import '../css/Profile.css'
import location from '../images/location-icon.png'
import organization from '../images/organization-icon.png'
import house from '../images/house-icon.png'
import noti_profile1 from '../images/profiles/profile1.png'
import noti_profile2 from '../images/profiles/profile2.png'

const Profile = () => {
    return ( 
        <div className="userProfile-container">
            <Navbar />
            <div className="userProfile-content">
                <div className="background-photo">
                    <div className="userProfile-photo">
                    </div>
                </div>
                <div className="edit-div">
                    <button id='editProfile-btn'> Edit Profile </button>
                </div>
                <div className="user-details">
                    <h4 className='mainh4'> John Manful </h4>
                    <div className="user-details-info">
                        <div className="location-info">
                            <img src={location} alt="" />
                            <h4> Accra, Ghana </h4>
                        </div>

                        <div className="organization-info">
                            <img src={organization} alt="" />
                            <h4> Ashesi University </h4>
                        </div>

                        <div className="house-info">
                            <img src={house} alt="" />
                            <h4> House 1</h4>
                        </div>
                    </div>
                    <div className="followers">
                        <a> <span> 100 </span> followers </a>
                        <a> <span> 72 </span>  following </a>
                    </div>
                    <h4 className='bio'> Bio </h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

                    </p>

                    <h4 className='recent-notis'> R<span>ecent</span>s </h4>
                </div>
                <div className="noti new">
                    <div className="noti-img">   
                        <img src={noti_profile1} alt="" />
                    </div>
                    <h4> You have 2 new messages </h4>
                </div>

                <div className="noti">
                    <div className="noti-img">   
                        <img src={noti_profile2} alt="" />
                    </div>
                    <h4> John replied to your comment </h4>
                </div>
            </div>
            <Messages />
        </div>
     );
}
 
export default Profile;