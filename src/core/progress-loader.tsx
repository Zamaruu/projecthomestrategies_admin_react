import { Box, CircularProgress, Grid } from "@mui/material";

interface ILoaderProps {
    isLoading: boolean;
    children: React.ReactNode;
}

const CircularProgressLoader = ({isLoading, children}: ILoaderProps) => {
    
    function Render() {
        if (isLoading) {
          return    <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
          <Grid item xs={3}>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>;
          </Grid>     
        </Grid>  
        }
        return <>
            {children}
        </> ;
    }

    return (
      <Render />
    );
}

export default CircularProgressLoader;