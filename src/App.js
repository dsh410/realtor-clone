
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
import SignOut from './pages/SignOut';
import PrivateRoute from './components/PrivateRoute';
import {
  HOME_PATH,
  PROFILE_PATH,
  SIGN_IN_PATH,
  SIGN_UP_PATH,
  OFFERS_PATH,
  FORGOT_PASSWORD_PATH,
  SIGN_OUT_PATH
} from './constants';
import { ToastContainer, Slide } from 'react-toastify';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={HOME_PATH} element={<Home />} />
        <Route
            path={PROFILE_PATH} element={<PrivateRoute/>} >
            <Route  path={PROFILE_PATH} element={<Profile/>}/>
        </Route>
        <Route />
        <Route path={SIGN_IN_PATH} element={<SignIn />} />
        <Route path={SIGN_UP_PATH} element={<SignUp />} />
        <Route path={SIGN_OUT_PATH} element={<SignOut />} />
        <Route path={FORGOT_PASSWORD_PATH} element={<ForgotPassword />} />
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
