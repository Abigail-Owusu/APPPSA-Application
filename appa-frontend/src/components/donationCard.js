import '../css/donations.css'
import user_profile from '../images/user_profile.png'
import info from '../images/info.png'
import { Link } from 'react-router-dom'
import CircularProgress from '@mui/joy/CircularProgress';



/**
 * DonationCard component displays a card with information about a donation initiative.
 * @returns {JSX.Element} - The rendered DonationCard component.
 */
const DonationCard = ({initiatives}) => {
    return (
        <div className="donation-row">
            {initiatives.map((initiative) => (
                <div className="donation-card">
                    <div className="progress-row">
                        {console.log(initiative)}
                        <div className="progress-circle" data-content={`${3}%`}>
                            <progress value="75" min="0" max="100">75%</progress>
                        </div>
                        <div className="donation-card-details">
                            <h3> {initiative.name} </h3>
                            <p> {initiative.description} </p>
                            <div className="donation-card-info">
                                <img src={info} alt="" />
                                {/* {console.log(intiative)} */}
                                <Link to={`/donate/${initiative.initiative_id}`} className='donation-nav-link'> More info </Link>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-indicator"></div>
                    </div>
                    <h5 className='target'> GHC 18,000/{initiative.total_target_amount} </h5>
                </div>


            ))}

        </div>




    );
}

// Exporting the DonationCard component
export default DonationCard;