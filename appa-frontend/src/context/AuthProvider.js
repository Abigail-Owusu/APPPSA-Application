import { createContext, useState, useEffect } from "react";



const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(() => {
        // Check if authentication info is stored in localStorage
        const storedAuth = localStorage.getItem('auth');
        return storedAuth ? JSON.parse(storedAuth) : {};
      });
    
      useEffect(() => {
        // Update localStorage whenever auth changes
        localStorage.setItem('auth', JSON.stringify(auth));
      }, [auth]);

    // const [auth, setAuth] = useState({});

    return(
        <AuthContext.Provider value={{auth, setAuth}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;