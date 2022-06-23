import React, { useEffect, useState } from "react";
import { getProducts } from '../../firebase/api';
import MuiAlert from "@mui/material/Alert";
import { Navigate  } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import Item from "./Item";
import CircularLoading from "../Utils/CircularLoading";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ItemList({ category }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [items, setItems] = useState([]);

    const handleErrorOpen = () => {
        setError(true);
    };

    const handleErrorClose = (_event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setError(false);
    };

    useEffect(() => {
        setLoading(true);
        getProducts(category)
        .then(itemsResult => {
            if (itemsResult === null) {
                return handleErrorOpen();
            }
            setItems(itemsResult);
            setLoading(false);
        })
    }, [category]);

    return (
        <>
            {loading && <CircularLoading />}
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
            {(!loading && (items.length === 0)) && (
                <Navigate to="/notFound" replace={true} />
            )}
            {items &&
                items.map((product) => (
                    <Grid
                        item
                        sm={6}
                        md={4}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        key={product.id}
                    >
                        <Item product={product} />
                    </Grid>
                ))}
        </>
    );
}
