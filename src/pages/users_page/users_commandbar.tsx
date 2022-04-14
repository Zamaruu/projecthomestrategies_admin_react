import { Box, Button, CircularProgress, Stack } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useRef, useState } from "react";
import { blue } from '@mui/material/colors';

const UserCommandBar = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const timer = useRef<number>();

    const handleButtonClick = () => {
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            timer.current = window.setTimeout(() => {
            setSuccess(true);
            setLoading(false);
            }, 2000);
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