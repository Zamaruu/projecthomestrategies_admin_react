import { createContext, useCallback, useState } from "react";

interface IAuthenticationState {
    isAuthenticated: boolean;
    setIsAuthenticated: (ids: boolean) => void;
    getToken: () => void;
    signOut: () => void;

}

const initialState : IAuthenticationState = ({
    isAuthenticated: false,
    setIsAuthenticated: () => null,
    getToken: () => null,
    signOut: () => null,
});

interface IProviderProps {
    children: React.ReactNode;
} 

export const authenticationContext = createContext<IAuthenticationState>(initialState);

const AuthenticationProvider = ({children}: IProviderProps) => {
    const [authenticated, setIsAuthenticated] = useState<boolean>(false);

    const setAuthenticated = useCallback((status: boolean) => {
        setIsAuthenticated(status);
    }, [setIsAuthenticated, authenticated]);

    const getToken = () => {
        return window.sessionStorage['local_hs_token'];
    }

    const signOut = () => {
        setIsAuthenticated(false);
        window.sessionStorage.removeItem('local_hs_token');
    }

    return (
        // this is the provider providing state
        <authenticationContext.Provider value={{
            isAuthenticated: authenticated,
            setIsAuthenticated: setAuthenticated,
            getToken: getToken,
            signOut: signOut
        }}>
            {children}
        </authenticationContext.Provider>
    );
};

export default AuthenticationProvider;