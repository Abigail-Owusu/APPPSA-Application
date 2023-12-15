// Importing necessary components and styles for the DonationPage
import Navbar from '../components/Navbar';
import '../css/DonationPage.css'
import user_profile from '../images/user_profile.png'
import donationImage from '../images/donationPage-img.png'
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import CircularProgress from '@mui/joy/CircularProgress';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import axiosInstance from '../api/axiosInstance';


/**
 * Component representing the Donation detail page.
 * @returns {JSX.Element} React component
 */
const DonationPage = () => {

    const { auth, setAuth } = useAuth();
    const [modal, setModal] = useState(false);

    const { initiative_id } = useParams();
    const { data: initiative, error, isPending } = useFetch("http://3.80.101.10:80/api/get_initiative_by_id?initiative_id=" + initiative_id, auth.accessToken);
    console.log(initiative);

    const toggleModal = () => {
        // console.log('here');
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }


    const [paymentData, setPaymentData] = useState({
        amount: '',
        momo_number: '',
        initiative: initiative_id,

    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Convert 'amount' value to an integer
        const intValue = name === 'amount' ? parseInt(value, 10) : value;

        setPaymentData({ ...paymentData, [name]: intValue });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(paymentData)

        try {
            const response = await axiosInstance.post('/api/send_payment/', paymentData);
            const url = response.data.data.authorization_url

            toast.success("Payme successfully made. Click here to visit the website.", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 5000,
                style: {
                    width: '400px',
                },
                onClick: () => {
                    // Handle the click on the toast (e.g., navigate to an external website)
                    window.open(url, '_blank');
                },
            });

        }
        catch (error) {
            console.log(error.response);
        }

    }
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
                                <div className="donationPage-progress-circle" data-content={`${initiative.percentage}%`}>
                                    <progress value="75" min="0" max="100"> {initiative.percentage} </progress>
                                </div>
                                <div className="donationPage-details">
                                    <h1> GHC {initiative.current_amt}/<span> GHC {initiative.target_amount} </span></h1>
                                    <h4> <span> Deadline: </span> 29th November 2023</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                                    </p>
                                    <button onClick={toggleModal}> Donate Now </button>
                                </div>
                            </div>
                        </div>

                    )}




                </div>
            )}


            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content payment">
                        <h2> Make a payment </h2>

                        <div className="create-discussion-form">
                            <form onSubmit={handleSubmit}>
                                <h4> Enter amount <span> * </span> </h4>
                                <input
                                    type="text"
                                    name="amount"
                                    id="amount"
                                    placeholder='$100'
                                    value={paymentData.title}
                                    onChange={handleChange}
                                />

                                <h4> Enter your number <span> * </span></h4>
                                <input
                                    name="momo_number"
                                    id="momo_number"
                                    placeholder='056000000'
                                    value={paymentData.content}
                                    onChange={handleChange}
                                />
                                <br />
                                <button> Submit </button>
                            </form>


                        </div>
                        <button className="close-modal" onClick={toggleModal}>
                            X
                        </button>
                        <ToastContainer />
                    </div>
                </div>
            )}
        </>

    );
}

// Exporting the component for use in other files
export default DonationPage;