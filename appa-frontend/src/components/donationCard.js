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
                        <div className="progress-circle" style={{ width: '35%', height: '75%', borderRadius: '50%', background: `radial-gradient(closest-side, #F4F4F4 90%, transparent 70% 100%), ${initiative.percentage}` }} data-content={`${initiative.percentage}%`}>
                            <progress value="75" min="0" max="100"> 0 </progress>
                        </div>
                        <div className="donation-card-details">
                            <h3> {initiative.data.name} </h3>
                            <p> {initiative.description} </p>
                            <div className="donation-card-info">
                                <img src={info} alt="" />
                                {console.log(initiative.data.initiative_id)}
                                <Link to={`/donate/${initiative.data.initiative_id}`} className='donation-nav-link'> More info </Link>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-indicator"></div>
                    </div>
                    {/* {console.log(initiative.current_amount)} */}
                    <h5 className='target'> {initiative.current_amount}/{initiative.data.total_target_amount} </h5>
                </div>


            ))}

        </div>




    );
}

// Exporting the DonationCard component
export default DonationCard;