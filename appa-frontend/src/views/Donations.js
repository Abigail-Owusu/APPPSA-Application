// Importing necessary components, styles, and images for the Donations page
import Navbar from '../components/Navbar';
import DonationCard from '../components/donationCard';
import '../css/donations.css'
import user_profile from '../images/user_profile.png'
import info from '../images/info.png'
import useAuth from '../hooks/useAuth';
import useFetch from '../hooks/useFetch';
import CircularProgress from '@mui/joy/CircularProgress';



/**
 * Component representing the Donations Page.
 * @returns {JSX.Element} React component
 */
const Donations = () => {

    const { auth, setAuth } = useAuth();

    const { data: inititatives, isPending, error } = useFetch('http://127.0.0.1:8000/api/get_initiatives', auth.accessToken);
    console.log(inititatives);

    // Rendering the component
    return (
        <>
            <div className="donations-container">
                <Navbar />
                {isPending &&
                    <div className="loading-bar donate-bar">

                        <CircularProgress
                            color="primary"
                            determinate={false}
                            size="lg"
                            variant="solid"
                        />
                    </div>}

                {inititatives && (
                    <>
                        <div className="profile-container">
                            <p> Jonathon Davis </p>
                            <div className="profile-box">
                                <img src={user_profile} alt="" />
                            </div>

                        </div>

                        <div className="donations-content">
                            <div className="title-row">
                                <h1>Current Initiatives</h1>
                                <input type="text" placeholder='Search..' />
                            </div>

                            {inititatives && (<DonationCard initiatives={inititatives} />)}

                        </div>
                    </>

                )}





            </div>
        </>
    );
}

// Exporting the component for use in other files
export default Donations;