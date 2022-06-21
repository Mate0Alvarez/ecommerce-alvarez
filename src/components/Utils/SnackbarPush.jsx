import React, {useState} from 'react'
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackbarPush = ({ textError, severity }) => {
    const [errorOpen, setErrorOpen] = useState(true);

    const handleErrorClose = (_event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setErrorOpen(false);
    };

    return (
        <Snackbar
            open={errorOpen}
            autoHideDuration={5000}
            onClose={handleErrorClose}
        >
            <Alert
                onClose={handleErrorClose}
                severity={severity}
                sx={{ width: "100%" }}
            >
                {textError}
            </Alert>
        </Snackbar>
    )
}

export default SnackbarPush