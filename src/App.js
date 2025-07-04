
import {  
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';  
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';
import Header from './components/Header';
import { 
  HOME_PATH, 
  PROFILE_PATH, 
  SIGN_IN_PATH, 
  SIGN_UP_PATH, 
  OFFERS_PATH 
} from './constants';


function App() {
  return (
   <>
    <Router>
      <Header/>
      <Routes>
        <Route path={HOME_PATH} element={<Home/>} />
        <Route path={PROFILE_PATH} element={<Profile />} />
        <Route path={SIGN_IN_PATH} element={<SignIn />} />
        <Route path={SIGN_UP_PATH} element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path={OFFERS_PATH} element={<Offers />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
