// Importing necessary components, styles, and images for the Discussions page
import Navbar from '../components/Navbar';
import Messages from '../components/Messages';
import DiscussionCard from '../components/discussionCard';
import '../css/discussions.css'
import dsc_profile_1 from '../images/profiles/profile2.png'
import dsc_profile_2 from '../images/profiles/profile3.png'
import dsc_profile_3 from '../images/profiles/profile4.png'
import likes from '../images/likes.png'
import comments from '../images/comments.png'
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';


// Importing custom hooks for data fetching and authentication
import useFetch from '../hooks/useFetch';
import useAuth from '../hooks/useAuth';
import '../css/Modal.css';
import axiosInstance from '../api/axiosInstance';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/joy/CircularProgress';


/**
 * Component representing the Discussions page.
 * This page displays a list of discussion cards.
 * @returns {JSX.Element} React component
 */
const Discussions = () => {
    // Using custom hooks for authentication
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();


    const [postData, setPostData] = useState({
        title: '',
        content: '',
        image: null,

    });

 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostData({ ...postData, [name]: value });
    };

    // Fetching blog data from the API using custom hook useFetch
    const { data: blogs, isPending, error } = useFetch('http://127.0.0.1:8000/api/posts/', auth.accessToken);

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        // console.log('here');
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const createDiscussion = async (e) => {
        e.preventDefault();

        if (validate()) {
            try {
                const response = await axiosInstance.post('api/posts/create/', postData);

                toast.success("Discussion created successfully", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                    style: {
                        width: '400px',
                    },
                });

            }
            catch (error) {
                console.log(error);
            }
        }
    }

    const validate = () => {
        let result = true;

        if (postData.title === '' || postData.title === null) {
            result = false;
            toast.warning('Please enter a title', {
                position: toast.POSITION.TOP_CENTER,
            });
        }


        if (postData.content === '' || postData.content === null) {
            result = false;
            toast.warning('Please enter a description', {
                position: toast.POSITION.TOP_CENTER,
            });
        }

        return result;
    };


    // Rendering the component
    return (
        <>
            <div className='discussions-container'>
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
                {blogs && <DiscussionCard discussions={blogs} handleClick={toggleModal} />}

                <Messages />


            </div>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2> What's on your mind? </h2>

                        <div className="create-discussion-form">
                            <form onSubmit={createDiscussion}>
                                <h4> Discussion title <span> * </span> </h4>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder='Enter a title for your discussion'
                                    value={postData.title}
                                    onChange={handleChange}
                                />

                                <h4> Discussion details <span> * </span></h4>
                                <textarea
                                    name="content"
                                    id="content"
                                    cols="30"
                                    rows="10"
                                    placeholder='Enter details for your discussion'
                                    value={postData.content}
                                    onChange={handleChange}
                                ></textarea>

                                <h4> Upload an Image (Optional) </h4>
                                <input
                                    type="file"
                                    name=""
                                    id=""

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

// Exporting the Discussions component
export default Discussions;