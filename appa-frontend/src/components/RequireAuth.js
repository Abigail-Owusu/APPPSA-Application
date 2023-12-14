import { useLocation, Navigate, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";


/**
 * RequireAuth component ensures that the user is authenticated before rendering the child components.
 * If the user is authenticated, it renders the child components (using Outlet).
 * If the user is not authenticated, it navigates to the login page.
 * @returns {JSX.Element} - The rendered RequireAuth component.
 */
const RequireAuth = () => {
    // Getting authentication information using the useAuth hook
    let { auth, setAuth } = useAuth();

    // Getting information about the current location (URL) using the useLocation hook
    const location = useLocation();

    return (
        auth?.accessToken
            // If authenticated, render the content inside the Outlet component
            ? <Outlet />
            // If not authenticated, navigate to the login page
            : <Navigate to="/login" />
            // <Navigate to="/login" state={{from: location}} replace />
    );
}
 
// Exporting the RequireAuth component
export default RequireAuth;