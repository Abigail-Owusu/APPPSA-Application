import Navbar from '../components/Navbar';
import Messages from '../components/Messages';
import '../css/DiscussionsPage.css'
import msg_details from '../images/discussion-details.png'
import dsc_profile from '../images/profiles/profile2.png'
import reply from '../images/reply.png'
import likes from '../images/likes.png'
import comments from '../images/comments.png'


const DiscussionPage = () => {
    return ( 
        <div className="discussion-pg-cont">
            <Navbar />
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
                                <h3> New Presidential Elections</h3> 
                                <h5> Jane Doe </h5>
                            </div>
                        </div>
                        <div className="details">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

                            </p>
                        </div>
                    </div>
                    <div className="comment-box">
                        <input type="text" placeholder='Comment' />
                    </div>
                </div>
                <div className="user-comments">
                    <div className="comment-card">
                        <div className="comment-profile">
                            <div className="comment-img">
                                <img src={dsc_profile} alt="" />
                            </div>
                            <div className="user">
                                <h5> Jane Doe </h5>
                                <p> .22h ago </p>
                            </div>
                        </div>
                        <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
                        </p>
                        <div className="icons">
                            <img src={reply} alt="" />
                            <div className="likes">
                                <img src={likes} alt="" />
                                <h5> 12 </h5>
                            </div>
                            <div className="comments">
                                <img src={comments} alt="" />
                                <h5> 6 </h5>
                            </div>

                        </div>
                    </div>


                    <div className="comment-card">
                        <div className="comment-profile">
                            <div className="comment-img">
                                <img src={dsc_profile} alt="" />
                            </div>
                            <div className="user">
                                <h5> Jane Doe </h5>
                                <p> .22h ago </p>
                            </div>
                        </div>
                        <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
                        </p>
                        <div className="icons">
                            <img src={reply} alt="" />
                            <div className="likes">
                                <img src={likes} alt="" />
                                <h5> 12 </h5>
                            </div>
                            <div className="comments">
                                <img src={comments} alt="" />
                                <h5> 6 </h5>
                            </div>

                        </div>
                    </div>

                    <div className="comment-card">
                        <div className="comment-profile">
                            <div className="comment-img">
                                <img src={dsc_profile} alt="" />
                            </div>
                            <div className="user">
                                <h5> Jane Doe </h5>
                                <p> .22h ago </p>
                            </div>
                        </div>
                        <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
                        </p>
                        <div className="icons">
                            <img src={reply} alt="" />
                            <div className="likes">
                                <img src={likes} alt="" />
                                <h5> 12 </h5>
                            </div>
                            <div className="comments">
                                <img src={comments} alt="" />
                                <h5> 6 </h5>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Messages />
            
        </div>
     );
}
 
export default DiscussionPage;