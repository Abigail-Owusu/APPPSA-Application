import '../css/messages.css'
import user_profile from '../images/user_profile.png'
import msg_profile_1 from '../images/profiles/profile1.png'
import msg_profile_2 from '../images/profiles/profile2.png'
import msg_profile_3 from '../images/profiles/profile3.png'
import msg_profile_4 from '../images/profiles/profile4.png'
import msg_details from '../images/msg-detail.png'


/**
 * Messages component displays a list of messages.
 * @returns {JSX.Element} - The rendered Messages component.
 */
const Messages = () => {
    return ( 
        <div className="message-container">
            <div className="profile-container">
                <p> Jonathon Davis </p>
                <div className="profile-box">
                    <img src={user_profile} alt="" />
                </div>

            </div>
            <div className="messages">
                <h1> Messages </h1>

                {/* Message card for a new message */}
                <div className="message-card new">    
                    <div className="message-img">
                        <img src={msg_profile_1} alt="" />
                    </div>
                    <div className="msg-content">
                        <h5> Jane Doe</h5>
                        <p> Lol!! Cannot wait to s... </p>
                    </div>
                    <div className="msg-info">
                        <h5> .2m  </h5>
                        <span> . </span>
                        <img src={msg_details} alt="" />
                    </div> 
                </div>

                <div className="message-card new">    
                    <div className="message-img">
                        <img src={msg_profile_2} alt="" />
                    </div>
                    <div className="msg-content">
                        <h5> Omar Basheer</h5>
                        <p> Shared a post </p>
                    </div>
                    <div className="msg-info">
                        <h5> .2m  </h5>
                        <span> . </span>
                        <img src={msg_details} alt="" />
                    </div> 
                </div>

                <div className="message-card">    
                    <div className="message-img">
                        <img src={msg_profile_3} alt="" />
                    </div>
                    <div className="msg-content">
                        <h5> Jason Smith</h5>
                        <p> Yes Indeed! </p>
                    </div>
                    <div className="msg-info">
                        <h5> .1d  </h5>
                        <span> . </span>
                        <img src={msg_details} alt="" />
                    </div> 
                </div>

                <div className="message-card">    
                    <div className="message-img">
                        <img src={msg_profile_4} alt="" />
                    </div>
                    <div className="msg-content">
                        <h5> Jordan Bark</h5>
                        <p> Shared a post </p>
                    </div>
                    <div className="msg-info">
                        <h5> .3w  </h5>
                        <span> . </span>
                        <img src={msg_details} alt="" />
                    </div> 
                </div>
            </div>

        </div>
     );
}
 
// Exporting the Messages component
export default Messages;