import { Box, Button, CircularProgress, Stack } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useContext, useRef, useState } from "react";
import { blue } from '@mui/material/colors';
import { authenticationContext } from "../../context/authentication_context";
import { userpageContext } from "../../context/userpage_context";
import { getAllUsers } from "../../services/api/user_service";

const UserCommandBar = () => {    
    const { getToken } = useContext(authenticationContext);
    const { isLoading, setIsLoading, setUsers } = useContext(userpageContext);

    const [loading, setLoading] = useState(false);
    const timer = useRef<number>();

    const handleButtonClick = () => {
        if (!loading) {
            setLoading(true);
            const token = getToken();
            getAllUsers(token).then(response => {
                setUsers(response);
                setLoading(false);
            }); 
        }
    };




    return (
        <Box mt={2}>
            <Stack spacing={2} direction="row">
                <Button startIcon={<PersonAddIcon />} variant="contained">Neuer Administrator</Button>
                <Button startIcon={<DeleteIcon />} variant="outlined">Auswahl löschen</Button>
                <Box sx={{ m: 1, position: 'relative' }}>
                    <Button
                        startIcon={<RefreshIcon />}
                        variant="outlined"
                        disabled={loading}
                        onClick={handleButtonClick}
                    >
                    Aktualisieren
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
            </Stack>
        </Box>
    );
}

export default UserCommandBar;