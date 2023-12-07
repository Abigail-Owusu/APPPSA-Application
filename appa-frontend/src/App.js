import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
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
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/discussions" element={<Discussions />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/donate" element={<Donations />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/donate/:id" element={<DonationPage />} />

          {/* <Switch> */}
          {/* <Route exact path="/">
                      <Home />
                    </Route> */}

          {/* <Route path="*">
                      <NotFound />
                    </Route> */}
          {/* </Switch> */}

        </Routes>

      </div>

    </div>



    // {/* <SignUp /> */}
    // {/* <Discussions /> */}
    // {/* <DiscussionPage /> */}
    // {/* <Donations /> */}
    // {/* <DonationPage /> */}
    // {/* <Profile /> */}
    // {/* <EditProfile /> */}

  );
}

export default App;
