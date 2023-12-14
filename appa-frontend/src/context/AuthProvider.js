// Importing necessary libraries
import { createContext, useState, useEffect } from "react";

// Creating a context to manage authentication state
const AuthContext = createContext({});

/**
 * AuthProvider component to wrap the application and provide authentication context
 * @param {*} param0 
 * @returns 
 */
export const AuthProvider = ({ children }) => {

    // Using useState hook to store authentication state
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

    // Rendering the AuthContext.Provider, providing auth state and setAuth function to its children
    return(
        <AuthContext.Provider value={{auth, setAuth}} >
            {children}
        </AuthContext.Provider>
    )
}

// Exporting the AuthContext
export default AuthContext;