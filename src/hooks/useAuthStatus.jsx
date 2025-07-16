import { 
    useState, 
    useEffect
} from 'react'
import { 
    getAuth, 
    onAuthStateChanged 
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { HOME_PATH, SIGN_IN_PATH } from '../constants';

export function useAuthStatus() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [signOut, setSignOut] = useState(false);
    const navigate = useNavigate();
      const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true);
            } 
            setLoading(false);
        });

        if (signOut) {
            auth.signOut();
            setIsLoggedIn(false);
            navigate(SIGN_IN_PATH);
        }

    }, []);

    useEffect(() => {
      
        if (signOut) {
            auth.signOut();
            setSignOut(false);
            setIsLoggedIn(false);
            navigate(HOME_PATH);     }

    }, [signOut]);

    return (
        { isLoggedIn, signOut, setSignOut, loading }
  )
}

