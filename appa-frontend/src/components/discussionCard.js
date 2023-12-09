import dsc_profile_1 from '../images/profiles/profile2.png'
import likes from '../images/likes.png'
import comments from '../images/comments.png'
import { Link } from 'react-router-dom'

const DiscussionCard = ({discussions}) => {
    return ( 
        <div className="discussion-content">
            <h1> Discussions </h1>
            <div className="cards">
                {discussions.map((discussion) => (
                    <div className="discussion-card">
                        <Link to={`/discussions/${discussion.post_id}`}>
                            <h3> {discussion.title} </h3>
                        </Link>
                        <a href="">
                            <div className="discussion-profile">
                                <div className="disc-profile-img">
                                    <img src={dsc_profile_1} alt="" />
                                </div>
                                <h5> Jane Doe </h5>
                            </div>
                            <p> Posted: {discussion.timestamp} </p>
                        </a>
                        <div className="interactions">
                            <div className="likes">
                                <img src={likes} alt="" />
                                <h6> {discussion.likes.length} </h6>
                            </div>
                            <div className="comments">
                                <img src={comments} alt="" />
                                <h6> 95 </h6>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
     );
}
 
export default DiscussionCard;