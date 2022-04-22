import { useContext, useEffect, useState } from "react";
import { authenticationContext } from "../../context/authentication_context";
import { userpageContext } from "../../context/userpage_context";
import BasePage from "../../core/basepage/basepage";
import CircularProgressLoader from "../../core/progress-loader";
import { getAllUsers } from "../../services/api/user_service";
import UserCommandBar from "./users_commandbar";
import UsersList from "./users_list";


const UsersPage = () => {
    const { getToken } = useContext(authenticationContext);
    const { isLoading, setIsLoading, setUsers } = useContext(userpageContext);

    useEffect(() => {
        setIsLoading(true);
        const token = getToken();
        getAllUsers(token).then(response => {
            setUsers(response);
            setIsLoading(false);
        });
    }, []);

    return (
        <BasePage title="Benutzer">
            <CircularProgressLoader isLoading={isLoading}>
                <UserCommandBar></UserCommandBar>
                <UsersList></UsersList>
            </CircularProgressLoader>
        </BasePage>
    );
}

export default UsersPage;