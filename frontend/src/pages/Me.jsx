import { Navigate } from "react-router-dom";

export const Me = () => {
    const isAuthenticate = () => {
        const token = localStorage.getItem("token");

        if (!token) {
            return false;
        }
        return true;
    }


    if (isAuthenticate()) {
        return <Navigate to="/dashboard" replace />
    } else {
        return <Navigate to="/signup" replace/>
    }
}