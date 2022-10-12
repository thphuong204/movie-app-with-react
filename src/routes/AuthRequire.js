import { Navigate, useLocation } from "react-router-dom";
import { isLoggedIn } from "../apis/auth";

function AuthRequire({ children }) {

    const location = useLocation();

    if (!isLoggedIn()) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default AuthRequire;