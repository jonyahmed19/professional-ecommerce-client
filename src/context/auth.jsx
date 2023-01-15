import {useState, createContext, useEffect, useContext} from 'react';


const AuthContext = createContext();


const AuthProvider = ({children})=> {
    const [auth, setAuth] = useState({
        user: null,
        token: ''
    });


    useEffect(() => {
        const localData = localStorage.getItem('auth');
        if (localData) {
            const parsed = JSON.parse(localData);
            setAuth({...auth, user: parsed.user, token: parsed.token})
        }
    }, []);

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )

}


const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };