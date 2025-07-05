
import {
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
import { useNavigate } from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';


function App() {
  const navigate = useNavigate();
  

  const handleRedirect = (e, path) => {
    e.preventDefault(); // Prevent default form submission
    // Your logic here
    navigate(`${path}`);
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path={HOME_PATH} element={<Home />} />
        <Route path={PROFILE_PATH} element={<Profile />} />
        <Route path={SIGN_IN_PATH} element={<SignIn handleRedirect={handleRedirect} />} />
        <Route path={SIGN_UP_PATH} element={<SignUp handleRedirect={handleRedirect} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path={OFFERS_PATH} element={<Offers />} />
      </Routes>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Slide}
/>
    </>
  );
}

export default App;
