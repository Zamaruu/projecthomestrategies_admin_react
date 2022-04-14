import BasePage from "../../core/basepage/basepage";
import UserCommandBar from "./users_commandbar";
import UsersList from "./users_list";


const UsersPage = () => {
    return (
        <BasePage title="Benutzer">
            <UserCommandBar></UserCommandBar>
            <UsersList></UsersList>
        </BasePage>
    );
}

export default UsersPage;