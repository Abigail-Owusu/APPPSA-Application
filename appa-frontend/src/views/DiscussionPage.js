// Importing necessary components and styles for the DiscussionsPage
import Navbar from '../components/Navbar';
import Messages from '../components/Messages';
import '../css/DiscussionsPage.css'

// Importing images used in the component
import msg_details from '../images/discussion-details.png'
import dsc_profile from '../images/profiles/profile2.png'
import reply from '../images/reply.png'
import likes from '../images/likes.png'
import comments from '../images/comments.png'

// Importing React hooks and libraries
import { useParams } from 'react-router';
import useFetch from '../hooks/useFetch';
import useAuth from '../hooks/useAuth';
import CommentCard from '../components/commentCard';
import { useState, useEffect, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import CircularProgress from '@mui/joy/CircularProgress';
/**
 * Component representing the DiscussionsPage.
 * This page displays a main discussion post and user comments.
 * @returns {JSX.Element} React component
 */
const DiscussionPage = () => {
    // Extracting post_id from the URL parameters using React Router
    const { post_id } = useParams();
    const [userComment, setUserComment] = useState('');
    const buttonRef = useRef(null);

    const handleCommentChange = (e) => {
        setUserComment(e.target.value);
        console.log(userComment);
    };


    // Using custom hooks for authentication and data fetching
    const { auth, setAuth } = useAuth();
    const { data: discussion, error, isPending } = useFetch("http://127.0.0.1:8000/api/posts/post?post_id=" + post_id, auth.accessToken);
    // console.log(discussion?.comments[0]);

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();

        if (userComment === '') {
            toast.error('Comment cannot be empty');

        }

    }
    // Rendering the component
    return (

        <div className="discussion-pg-cont">
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

            {discussion && (

                <div className="page-content">
                    <h1> Discussions </h1>
                    <div className="discussion-info">
                        <a href=''>
                            <div className="discussion-header">
                                <img src={msg_details} alt="" />
                            </div>
                        </a>
                        <div className="content">
                            <div className="discussion-profile">
                                <div className="discussion-profile-img">
                                    <img src={dsc_profile} alt="" />
                                </div>
                                <div className="profile-text">
                                    <h3> {discussion.title} </h3>
                                    <h5> Jane Doe </h5>
                                </div>
                            </div>
                            <div className="details">
                                <p>
                                    {discussion.content}

                                </p>
                            </div>
                        </div>
                        <div className="comment-box">
                            <div className={`input-container ${isFocused ? 'focused' : ''}`}>
                                <form onSubmit={handleCommentSubmit}>
                                    <textarea
                                        id='expandingInput'
                                        placeholder='Make a comment...'
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        value={userComment}
                                        onChange={handleCommentChange}
                                    />

                                    {isFocused && (
                                        <div id='comment-submit-box'>
                                            <button 
                                            ref={buttonRef}
                                            className="comment-submit-button">
                                                Submit
                                            </button>
                                            <ToastContainer />
                                        </div>
                                    )}

                                </form>

                            </div>
                        </div>
                    </div>
                    <div className="user-comments">
                        {discussion.comments && <CommentCard comments={discussion.comments} />
                        }


                    </div>
                </div>
            )

            }

            {/* Sidebar with messages component */}
            <Messages />

        </div>
    );
}

// Exporting the component for use in other files
export default DiscussionPage;