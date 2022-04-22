import { createContext, useCallback, useState } from "react";
import { UserModel } from "../services/models/user";

interface IUserPageState {
    isLoading: boolean;
    setIsLoading: (ids: boolean) => void;
    users: UserModel[];
    setUsers: (users: UserModel[]) => void;
}

const initialState : IUserPageState = ({
    isLoading: false,
    setIsLoading: () => null,
    users: [],
    setUsers: () => null,
});

interface IProviderProps {
    children: React.ReactNode;
} 

export const userpageContext = createContext<IUserPageState>(initialState);

const UserPageProvider = ({children}: IProviderProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [users, setUserModels] = useState<UserModel[]>([]);

    const setUsers = useCallback((users: UserModel[]) => {
        setUserModels(users);
    }, [setUserModels, users]);

    const setLoading = useCallback((status: boolean) => {
        setIsLoading(status);
    }, [setIsLoading, isLoading]);

    return (
        // this is the provider providing state
        <userpageContext.Provider value={{
            isLoading: isLoading, 
            setIsLoading: setLoading,
            users: users,
            setUsers: setUsers
        }}>
            {children}
        </userpageContext.Provider>
    );
};

export default UserPageProvider;