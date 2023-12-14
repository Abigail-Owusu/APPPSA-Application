// Importing necessary libraries
import { useContext } from "react";

// Importing the AuthContext created in AuthProvider
import AuthContext from "../context/AuthProvider";

/**
 * Custom hook to access the authentication context
 * @returns current value of the authentication context
 */
const useAuth = () => {
    return useContext(AuthContext);
}

// Exporting the custom hook for use in other components
export default useAuth;