import { Typography } from "@mui/material";

interface IPageTitleProps {
    title: string;
} 


const PageTitle = ({title}: IPageTitleProps) => {
    return (
        <div>
            <Typography variant="h4" component="h2">
                {title}
            </Typography>
        </div>
    );
}

export default PageTitle;