import Navbar from '../components/Navbar';
import '../css/DonationPage.css'
import user_profile from '../images/user_profile.png'
import donationImage from '../images/donationPage-img.png'

const DonationPage = () => {
    return ( 
        <div className="donationPage-container">
            <Navbar />
            <div className="profile-container">
                <p> Jonathon Davis </p>
                <div className="profile-box">
                    <img src={user_profile} alt="" />
                </div>

            </div>

            <div className="donationPage-content">
                <h1> Renovation of Patrick Nutor Research Building </h1>
                <img src={donationImage} alt="" />

                <div className="donation-info">
                    <div className="donationPage-progress-circle">
                        <progress value="75" min="0" max="100">75%</progress>
                    </div>
                    <div className="donationPage-details">
                        <h1> GHC 21,000/<span>GHC 35,000</span></h1>
                        <h4> <span> Deadline: </span> 29th November 2023</h4>
                        <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                        </p>
                        <button> Donate Now </button>
                    </div>
                </div>
            </div>


            
        </div>
     );
}
 
export default DonationPage;