import dsc_profile_1 from '../images/profiles/profile2.png'
import likes from '../images/likes.png'
import comments from '../images/comments.png'
import { Link } from 'react-router-dom'


/**
 * DiscussionCard component displays a list of discussions.
 * @param {Object} props - The component properties.
 * @param {Array} props.discussions - An array of discussion objects.
 * @returns {JSX.Element} - The rendered DiscussionCard component.
 */
const DiscussionCard = ({discussions, handleClick}) => {
    // console.log(handleClick)
    const handleNewDiscussion = () => {
        // Perform cancel logic
    
        // Call the onCancelEdit function provided by props
        handleClick();
      };
    return ( 
        <div className="discussion-content">
            <div className="discussion-title-row">
                <h1> Discussions </h1>
                <button onClick={handleNewDiscussion}>
                    New Discussion
                </button>

            </div>

            {/* Container for discussion cards */}
            <div className="cards">

                {/* Map through each discussion and create a card */}
                {discussions.map((discussion) => (
                    <div className="discussion-card">

                        {/* Link to the detailed view of the discussion */}
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

// Exporting the DiscussionCard component
export default DiscussionCard;