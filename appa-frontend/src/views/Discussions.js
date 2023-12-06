import Navbar from '../components/Navbar';
import Messages from '../components/Messages';
import '../css/discussions.css'
import dsc_profile_1 from '../images/profiles/profile2.png'
import dsc_profile_2 from '../images/profiles/profile3.png'
import dsc_profile_3 from '../images/profiles/profile4.png'
import likes from '../images/likes.png'
import comments from '../images/comments.png'

const Discussions = () => {
    return ( 
        <div className='discussions-container'>
            <Navbar />
            <div className="discussion-content">
                <h1> Discussions </h1>
                <div className="cards">
                    <div className="discussion-card">
                        <h3> Thoughts on the current state of the canteen? </h3>
                        <a href="">
                            <div className="discussion-profile">
                                <div className="disc-profile-img">
                                    <img src={dsc_profile_1} alt="" />
                                </div>
                                <h5> Jane Doe </h5>
                            </div>
                            <p> Posted: 21st Januray 2023 </p>
                        </a>
                        <div className="interactions">
                            <div className="likes">
                                <img src={likes} alt="" />
                                <h6> 136 </h6>
                            </div>
                            <div className="comments">
                                <img src={comments} alt="" />
                                <h6> 95 </h6>
                            </div>
                        </div>

                    </div>

                    <div className="discussion-card">
                        <h3> New President Elections </h3>
                        <a href="">
                            <div className="discussion-profile">
                                <div className="disc-profile-img">
                                    <img src={dsc_profile_2} alt="" />
                                </div>
                                <h5> Jane Doe </h5>
                            </div>
                            <p> Posted: 21st Januray 2023 </p>
                        </a>
                        <div className="interactions">
                            <div className="likes">
                                <img src={likes} alt="" />
                                <h6> 136 </h6>
                            </div>
                            <div className="comments">
                                <img src={comments} alt="" />
                                <h6> 95 </h6>
                            </div>
                        </div>

                    </div>

                    <div className="discussion-card">
                        <h3> Upcoming speech day preparations </h3>
                        <a href="">
                            <div className="discussion-profile">
                                <div className="disc-profile-img">
                                    <img src={dsc_profile_3} alt="" />
                                </div>
                                <h5> Jane Doe </h5>
                            </div>
                            <p> Posted: 21st Januray 2023 </p>
                        </a>
                        <div className="interactions">
                            <div className="likes">
                                <img src={likes} alt="" />
                                <h6> 136 </h6>
                            </div>
                            <div className="comments">
                                <img src={comments} alt="" />
                                <h6> 95 </h6>
                            </div>
                        </div>

                    </div>

  

                </div>


            </div>
            <Messages/>


        </div> 
    );
}
 
export default Discussions;