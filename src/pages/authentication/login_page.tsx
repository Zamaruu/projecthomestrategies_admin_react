import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from '@mui/icons-material/Key';
import { Box, Button, CircularProgress, Grid, Paper, TextField, Typography } from "@mui/material";
import { blue } from '@mui/material/colors';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useContext, useRef, useState } from "react";
import { Login } from "../../services/api/authentication_service";
import { authenticationContext } from "../../context/authentication_context";

const LoginPage = () => {
    const { setIsAuthenticated } = useContext(authenticationContext)

    const [loading, setLoading] = useState(false);
    const timer = useRef<number>();

    const [username, setUsername] = useState<string>(''); // for dev env: admin@hs.de
    const [password, setPassword] = useState<string>(''); // for dev env: xxl1234

    const handleButtonClick = () => {
        if (!loading) {
            setLoading(true);
            
            console.log(username + ", " + password);
            Login(username, password)
            .then(response => {
                console.log(response);
                setLoading(false);
                response.json().then((json: any) => {
                    window.sessionStorage["local_hs_token"] = json.token;
                    setIsAuthenticated(true);
                });
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
        }
    };

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            <Grid item xs={3}>
                <Paper elevation={3}>
                    <Box m={3}>
                        <Box pt={3}>
                            <Typography variant="h5" component="h5">
                                Homestrategies Admin
                            </Typography>
                            v0.0.1
                        </Box>
                        <Box pt={3} pb={3} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField id="input-username" label="Nutzername" variant="standard" value={username} onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setUsername(ev.target.value)}/>
                        </Box>
                        <Box pb={3} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField id="input-password" label="Passwort" variant="standard" type="password" value={password} onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setPassword(ev.target.value)}/>
                        </Box>
                        <Box pb={3}>
                            <Box sx={{ m: 1, position: 'relative' }}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    disabled={loading}
                                    onClick={handleButtonClick}
                                >
                                Anmelden
                                </Button>
                                {loading && (
                                <CircularProgress
                                    size={24}
                                    sx={{
                                    color: blue[900],
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    marginTop: '-12px',
                                    marginLeft: '-12px',
                                    }}
                                />
                                )}
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Grid>   
        </Grid> 
    );
}

export default LoginPage;