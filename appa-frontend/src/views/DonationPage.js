// Importing necessary components and styles for the DonationPage
import Navbar from '../components/Navbar';
import '../css/DonationPage.css'
import user_profile from '../images/user_profile.png'
import donationImage from '../images/donationPage-img.png'
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import CircularProgress from '@mui/joy/CircularProgress';


/**
 * Component representing the Donation detail page.
 * @returns {JSX.Element} React component
 */
const DonationPage = () => {

    const { auth, setAuth } = useAuth();

    const { initiative_id } = useParams();
    const { data: initiative, error, isPending } = useFetch("http://127.0.0.1:8000/api/get_initiative_by_id?initiative_id=" + initiative_id, auth.accessToken);
    console.log(initiative);
    // Rendering the component
    return (
        <>
            {(
                <div className="donationPage-container">
                    {/* Navbar component for navigation */}
                    <Navbar />

                    {isPending &&
                        <div className="loading-bar">

                            <CircularProgress
                                color="primary"
                                determinate={false}
                                size="lg"
                                variant="solid"

                            />
                        </div>}
                    {/* User profile section */}
                    <div className="profile-container">
                        <p> Jonathon Davis </p>
                        <div className="profile-box">
                            <img src={user_profile} alt="" />
                        </div>

                    </div>

                    {/* Main content of the donation page */}
                    {initiative && (
                        <div className="donationPage-content">
                            <h1> {initiative.data.name}</h1>
                            <img src={donationImage} alt="" />

                            <div className="donation-info">
                                <div className="donationPage-progress-circle">
                                    <progress value="75" min="0" max="100"> {initiative.percentage} </progress>
                                </div>
                                <div className="donationPage-details">
                                    <h1> {initiative.current_amt}/<span> {initiative.target_amount} </span></h1>
                                    <h4> <span> Deadline: </span> 29th November 2023</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                                    </p>
                                    <button> Donate Now </button>
                                </div>
                            </div>
                        </div>

                    )}




                </div>
            )}
        </>

    );
}

// Exporting the component for use in other files
export default DonationPage;