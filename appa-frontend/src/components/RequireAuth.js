import { useLocation, Navigate, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";


const RequireAuth = () => {
    let { auth, setAuth } = useAuth();

    const location = useLocation();

    return (
        auth?.accessToken
            ? <Outlet />
            : <Navigate to="/login" />
            // <Navigate to="/login" state={{from: location}} replace />
    );
}
 
export default RequireAuth;