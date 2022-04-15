import { useContext, useEffect } from "react";
import { authenticationContext } from "../../context/authentication_context";
import AppRouter from "../../core/routing/app_router";
import LoginPage from "./login_page";

const AuthenticationHandler = () => {
    const { setIsAuthenticated, isAuthenticated } = useContext(authenticationContext)
    
    useEffect(() => {
        const authed = TokenValid();
        if(authed){
            console.log("Token is Valid");
        }
        else{
            console.log("Token not Valid");
        }
    }, []);
    
    const TokenValid = () : boolean => {
        const token = window.sessionStorage["local_hs_token"];

        if(token === null || token === undefined){
            setIsAuthenticated(false);
            return false;
        }

        setIsAuthenticated(true);
        return true;
    }
    
    const RenderComponentWhenAuthenticated = () : JSX.Element => {
        if (isAuthenticated) {
            return <AppRouter />;
        }
        return <LoginPage />;
    }

    return (
        <div>
            <RenderComponentWhenAuthenticated />
        </div>
    );
}

export default AuthenticationHandler;