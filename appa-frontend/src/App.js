// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './views/LogIn';
import SignUp from './views/SignUp';
import Discussions from './views/Discussions';
import DiscussionPage from './views/DiscussionPage';
import Donations from './views/Donations';
import DonationPage from './views/DonationPage';
import Profile from './views/Profile';
import EditProfile from './views/EditProfile';


function App() {
  return (
    <div className="App">
      <div className="content">

        {/* <Login /> */}
        {/* <SignUp /> */}
        {/* <Discussions /> */}
        {/* <DiscussionPage /> */}
        {/* <Donations /> */}
        {/* <DonationPage /> */}
        <Profile />
        {/* <EditProfile /> */}
      </div>
    </div>

  );
}

export default App;
