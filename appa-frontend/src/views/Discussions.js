import Navbar from '../components/Navbar';
import Messages from '../components/Messages';
import DiscussionCard from '../components/discussionCard';
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
                    <DiscussionCard />

                    <DiscussionCard />

                    <DiscussionCard />

                    <DiscussionCard />

  

                </div>


            </div>
            <Messages/>


        </div> 
    );
}
 
export default Discussions;