import Navbar from '../components/Navbar';
import Messages from '../components/Messages';
import DiscussionCard from '../components/discussionCard';
import '../css/discussions.css'
import dsc_profile_1 from '../images/profiles/profile2.png'
import dsc_profile_2 from '../images/profiles/profile3.png'
import dsc_profile_3 from '../images/profiles/profile4.png'
import likes from '../images/likes.png'
import comments from '../images/comments.png'

import useFetch from '../hooks/useFetch';
import useAuth from '../hooks/useAuth';

const Discussions = () => {
    const {auth, setAuth} = useAuth();

    const {data: blogs, isPending, error} = useFetch('http://127.0.0.1:8000/api/posts/', auth.accessToken);
    // console.log(blogs);
    return ( 
        <div className='discussions-container'>
            <Navbar />
            {/* <div className="discussion-content">
                <h1> Discussions </h1> */}
                {isPending && <div> Loading... </div>}
                {blogs && <DiscussionCard discussions={blogs}/>}
                {/* <div className="cards">
                    <DiscussionCard />

                    <DiscussionCard />

                    <DiscussionCard />

                    <DiscussionCard />
                </div> */}
            {/* </div> */}
            <Messages/>


        </div> 
    );
}
 
export default Discussions;