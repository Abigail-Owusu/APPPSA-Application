import dsc_profile from '../images/profiles/profile2.png';
import reply from '../images/reply.png'
import likes from '../images/likes.png'
import comments_img from '../images/comments.png'

const CommentCard = ({ comments }) => {
    return (
        <div className="user-comments">
            {comments.map((comment) => (
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
                        {comment}
                    </p>
                    <div className="icons">
                        <img src={reply} alt="" />
                        <div className="likes">
                            <img src={likes} alt="" />
                            <h5> 12 </h5>
                        </div>
                        <div className="comments">
                            <img src={comments_img} alt="" />
                            <h5> 6 </h5>
                        </div>

                    </div>
                </div>
            ))}


        </div>
    );
}

export default CommentCard;