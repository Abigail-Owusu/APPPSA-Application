import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import Login from './views/LogIn';
import SignUp from './views/SignUp';
import Discussions from './views/Discussions';
import DiscussionPage from './views/DiscussionPage';
import Donations from './views/Donations';
import DonationPage from './views/DonationPage';
import Profile from './views/Profile';
import EditProfile from './views/EditProfile';
import useAuth from './hooks/useAuth';


function App() {
  return (
    <div className="App">
      <div className="content">
        <Router>
          <Routes>

            <Route element={<RequireAuth />}>
              <Route path="/discussions" element={<Discussions />} />
              <Route path="/discussions/:post_id" element={<DiscussionPage />} />
              <Route path="/donate" element={<Donations />} />
              <Route path="/profile/:email" element={<Profile />} />
              <Route path="/edit-profile" element={<EditProfile />} />
              <Route path={`/donate`} element={<Donations />} /> 
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />

          </Routes>
        </Router>

      </div>

    </div>

  );
}

export default App;
