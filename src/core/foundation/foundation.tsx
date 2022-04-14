import MenuAppBar from "./appbar";
import MenuAppDrawer from "./menudrawer";

interface IBasePageProps {
    children: React.ReactNode;
} 

const AppFoundationPage = ({children}: IBasePageProps) => {
    return (
        <div>
            <MenuAppBar></MenuAppBar>
            <MenuAppDrawer></MenuAppDrawer>
            {children}
        </div>
    );
}

export default AppFoundationPage;