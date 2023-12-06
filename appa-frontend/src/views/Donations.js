import Navbar from '../components/Navbar';
import '../css/donations.css'
import user_profile from '../images/user_profile.png'
import info from '../images/info.png'

const Donations = () => {
    return ( 
    <div className="donations-container">
        <Navbar />
        <div className="profile-container">
            <p> Jonathon Davis </p>
            <div className="profile-box">
                <img src={user_profile} alt="" />
            </div>

        </div>

        <div className="donations-content">
            <div className="title-row">
                <h1>Current Initiatives</h1>
                <input type="text" placeholder='Search..'/>
            </div>
            <div className="donation-row">
                <div className="donation-card">
                    <div className="progress-row">
                        <div className="progress-circle">
                            <progress value="75" min="0" max="100">75%</progress>
                        </div>
                        <div className="donation-card-details">
                            <h3> Responsible Growth Initiatives </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliq...</p>
                            <div className="donation-info">
                                <img src={info} alt="" />
                                <h5> More info </h5>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-indicator"></div>
                    </div>
                    <h5 className='target'> GHC 18,000/GHC 65,000 </h5>
                </div>

                <div className="donation-card">
                    <div className="progress-row">
                        <div className="progress-circle">
                            <progress value="75" min="0" max="100">75%</progress>
                        </div>
                        <div className="donation-card-details">
                            <h3> Responsible Growth Initiatives </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliq...</p>
                            <div className="donation-info">
                                <img src={info} alt="" />
                                <h5> More info </h5>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-indicator"></div>
                    </div>
                    <h5 className='target'> GHC 18,000/GHC 65,000 </h5>
                </div>
            </div>

            <div className="donation-row">
                <div className="donation-card">
                    <div className="progress-row">
                        <div className="progress-circle">
                            <progress value="75" min="0" max="100">75%</progress>
                        </div>
                        <div className="donation-card-details">
                            <h3> Responsible Growth Initiatives </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliq...</p>
                            <div className="donation-info">
                                <img src={info} alt="" />
                                <h5> More info </h5>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-indicator"></div>
                    </div>
                    <h5 className='target'> GHC 18,000/GHC 65,000 </h5>
                </div>

                <div className="donation-card">
                    <div className="progress-row">
                        <div className="progress-circle">
                            <progress value="75" min="0" max="100">75%</progress>
                        </div>
                        <div className="donation-card-details">
                            <h3> Responsible Growth Initiatives </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliq...</p>
                            <div className="donation-info">
                                <img src={info} alt="" />
                                <h5> More info </h5>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-indicator"></div>
                    </div>
                    <h5 className='target'> GHC 18,000/GHC 65,000 </h5>
                </div>
            </div>
        </div>
        

    </div> );
}
 
export default Donations;