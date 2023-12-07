import Navbar from '../components/Navbar';
import DonationCard from '../components/donationCard';
import '../css/donations.css'
import user_profile from '../images/user_profile.png'
import info from '../images/info.png'

const Donations = () => {
    return ( 
    <div className="donations-container">
        <Navbar />
        <div className="profile-container">
            <p> Jonathon Davis </p>
            <div className="profile-box">
                <img src={user_profile} alt="" />
            </div>

        </div>

        <div className="donations-content">
            <div className="title-row">
                <h1>Current Initiatives</h1>
                <input type="text" placeholder='Search..'/>
            </div>
            <div className="donation-row">
                <DonationCard />
                <DonationCard />
            </div>

            <div className="donation-row">
                <DonationCard />
                <DonationCard />
            </div>
        </div>
        

    </div> );
}
 
export default Donations;