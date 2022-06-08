import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import ItemDetailDescription from "./ItemDetailDescription";


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ItemDetail = ({ onAdd, onRemove }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [product, setProduct] = useState({});
    const { productId } = useParams();

    const handleErrorOpen = () => {
        setError(true);
    };
    const handleErrorClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setError(false);
    };

    useEffect(() => {
        fetch("https://mocki.io/v1/e610ac09-f815-4219-8b0f-32d73743e81d")
            .then((response) => response.json())
            .then((result) => {
                setTimeout(() => {
                    setLoading(false);
                    for (let i = 0; i < result.length; i++) {
                        if (result[i].id === productId) {
                            return setProduct(result[i]);
                        }
                    }
                }, 1500);

            })
            .catch((error) => {
                setLoading(false);
                handleErrorOpen();
                console.log(error);
            });
    }, [productId]);
    return (
        <>
            {loading && (
                <Box sx={{ mt: "55px", display: "flex" }}>
                    <CircularProgress color="info" />
                </Box>
            )}
            {error && (
                <Snackbar
                    open={error}
                    autoHideDuration={5000}
                    onClose={handleErrorClose}
                >
                    <Alert
                        onClose={handleErrorClose}
                        severity="error"
                        sx={{ width: "100%" }}
                    >
                        Sorry, something happened loading the products
                    </Alert>
                </Snackbar>
            )}
            {!loading && (
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={10}>
                        <Grid item xs={4}>
                            <Box
                                component="img"
                                alt={product.title}
                                src={product.pictureUrl}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <ItemDetailDescription product={product} onAdd={onAdd} onRemove={onRemove} />
                        </Grid>
                    </Grid>
                </Box>
            )}
        </>
    )
}

export default ItemDetail