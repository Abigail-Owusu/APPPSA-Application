import dsc_profile_1 from '../images/profiles/profile2.png'
import likes from '../images/likes.png'
import comments from '../images/comments.png'

const DiscussionCard = () => {
    return ( 
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
     );
}
 
export default DiscussionCard;