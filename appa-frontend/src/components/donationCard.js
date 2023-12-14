import '../css/donations.css'
import user_profile from '../images/user_profile.png'
import info from '../images/info.png'
import { Link } from 'react-router-dom'


/**
 * DonationCard component displays a card with information about a donation initiative.
 * @returns {JSX.Element} - The rendered DonationCard component.
 */
const DonationCard = () => {
    return ( 
    

        <div className="donation-card">
            <div className="progress-row">
                <div className="progress-circle">
                    <progress value="75" min="0" max="100">75%</progress>
                </div>
                <div className="donation-card-details">
                    <h3> Responsible Growth Initiatives </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliq...</p>
                    <div className="donation-card-info">
                        <img src={info} alt="" />
                        <Link to="/donate/:id" className='donation-nav-link'> 
                            More info
                        </Link>
                    </div>
                </div>
            </div>
            <div className="progress-bar">
                <div className="progress-indicator"></div>
            </div>
            <h5 className='target'> GHC 18,000/GHC 65,000 </h5>
        </div> 
    

     );
}

// Exporting the DonationCard component
export default DonationCard;