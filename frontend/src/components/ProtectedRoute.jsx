import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";
import { useEffect, useState } from "react";

// the idea is we need to check if we are authorize before we
// allow someone to access this route
// otherwise we need to re-direct them and tell them
// that they need to login before they can view this
//NO CAN LOGIN TO THE FRONT-END UTIL THEY ARE AUTHORIZE
// THIS PART WILL MAKE SURE OF IT - HENCE WRITING MY OWN CUSTOM FRONTEND PROTECTION HERE
function ProtectedRoute({ children }) {
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        auth().catch(() => setIsAuthorized(false))
    })

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        try {
            const res = await api.post("/api/token/refresh/", {
                refresh: refreshToken,
            });

            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                setIsAuthorized(true)
            }
            else {
                setIsAuthorized(false)
            }

        } catch (error) {
            console.log(error);
            setIsAuthorized(false);
        }
    };

    //look for the access token, see it is present
    //if present : check if it is expired or not
    //              if expired : automatically refresh the token so that user doesn't have to worry about it
    // if we cannot refersh the token or if it is expired,
    // then we will say, hey u are not authorize and u have to login again
    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            setIsAuthorized(false);
            return;
        }
        //if token is there, we decode the token to get the expiration date
        const decoded = jwtDecode(token);
        const tokenExpiration = decoded.exp;
        const now = Date.now() / 1000; //converting dated to seconds

        if (tokenExpiration < now) {
            await refreshToken();
        } else {
            setIsAuthorized(true);
        }
    };

    if (isAuthorized === null) {
        return <div>Loading...</div>;
    }

    return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
