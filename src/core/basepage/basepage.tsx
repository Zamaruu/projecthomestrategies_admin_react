import { Box } from "@mui/material";
import PageTitle from "./pageheader/pagetitle";

interface IBasePageProps {
    title: string;
    children: React.ReactNode;
} 

const BasePage = ({children, title}: IBasePageProps) => {
    return (
        <Box m={3}>
            <PageTitle title={title} />
            {/* <MenuAppDrawer></MenuAppDrawer> */}
            {children}
        </Box>
    );
}

export default BasePage;