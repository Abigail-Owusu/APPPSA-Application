// Importing necessary components, styles, and images for the Profile page
import Navbar from '../components/Navbar';
import Messages from '../components/Messages';
import '../css/Profile.css'
import location from '../images/location-icon.png'
import organization from '../images/organization-icon.png'
import house from '../images/house-icon.png'
import noti_profile1 from '../images/profiles/profile1.png'
import noti_profile2 from '../images/profiles/profile2.png'
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

import { useProfile, ProfileProvider } from '../context/ProfileContext';
import EditProfile from './EditProfile';
/**
 * Component representing a user's profile page.
 * @returns {JSX.Element} React component
 */
const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveChanges = () => {
        // Save changes logic
    
        // After saving, switch back to profile view
        setIsEditing(false);
    };

    const handleCancelEdit = () => {
        // Cancel edit logic
    
        // After canceling, switch back to profile view
        setIsEditing(false);
    };

    // Using custom hooks for authentication and URL parameters
    const { auth, setAuth } = useAuth();
    const {postId} = useParams();

    // Extracting post_id from the URL parameters using React Router
    const { email } = useParams();

    // Fetching user profile data from the API using custom hook useFetch
    const { data: profile, error, isPending } = useFetch("http://127.0.0.1:8000/api/profile?email=" + email, auth.accessToken);
    console.log(profile)



    // const { setProfile } = useProfile(); // Get the setProfile function from the context

    // // Call setProfile when the profile data is available
    // useEffect(() => {
    //   if (profile) {
    //     setProfile(profile);
    //   }
    // }, [profile, setProfile]);




    // Rendering the component
    return (
        // <ProfileProvider>
        <div className="userProfile-container">
            {/* Navbar component for navigation */}
            <Navbar />
            {isPending && <div> Loading </div>}

            
            {/* Displaying user profile content if data is available */}
            {!isEditing && profile && (

                <div className="userProfile-content">
                    <div className="background-photo">
                        <div
                            className="userProfile-photo"
                        // style={{ backgroundImage: `url('../APPSA_Backend/media/profile_pics/amy_rose2_profile.jpeg')` }} 
                        >
                        </div>
                    </div>
                    <div className="edit-div">
                        <button id='editProfile-btn' onClick={handleEditClick}>
                            Edit Profile
                            {/* <Link to="/edit-profile"> Edit Profile </Link> */}
                        </button>
                    </div>

                    {/* User details section */}
                    <div className="user-details">
                        <h4 className='mainh4'> {profile?.data?.first_name + " " + profile?.data?.last_name} </h4>
                        {/* <h4 className='mainh4'> Jane Doe </h4> */}
                        <div className="user-details-info">
                            <div className="location-info">
                                <img src={location} alt="" />
                                <h4> {profile?.data?.city}, {profile?.data.country} </h4>
                            </div>

                            <div className="organization-info">
                                <img src={organization} alt="" />
                                <h4> {profile?.data?.current_organization} </h4>
                            </div>

                            <div className="house-info">
                                <img src={house} alt="" />
                                <h4> {profile?.data.house1} </h4>
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
            )}

            {isEditing && profile && <EditProfile profileData= {profile} onSaveChanges={handleSaveChanges} onCancelEdit={handleCancelEdit}/>}

            {/* Sidebar with messages component */}
            <Messages />
        </div>
        // </ProfileProvider>

    );
}

// Exporting the component for use in other files
export default Profile;