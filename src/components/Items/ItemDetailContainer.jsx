import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Container from "@mui/material/Container";
import ItemDetail from "./ItemDetail";
import Grid from "@mui/material/Grid";
import CircularLoading from "../Utils/CircularLoading";
import SnackbarPush from "../Utils/SnackbarPush";


const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    const [product, setProduct] = useState({});
    const { id } = useParams();

    const handleErrorOpen = () => {
        setError(true);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch("https://mocki.io/v1/e610ac09-f815-4219-8b0f-32d73743e81d")
            .then((response) => response.json())
            .then((result) => {
                setTimeout(() => {
                    const productFiltered = result.find(
                        (productFilter) => productFilter.id === id
                    );

                    if (productFiltered !== undefined) {
                        setProduct(productFiltered);
                    }

                    return setLoading(false);
                }, 1500);
            })
            .catch((err) => {
                setLoading(false);
                handleErrorOpen();
                console.log(err);
            });
    }, [id]);
    return (
        <Container
            maxWidth="xl"
            sx={{
                flexGrow: 1,
                width: "90%",
                margin: "auto",
                mt: { sm: "105px", xs: "55px", md: "55px" },
                minHeight: "80vh",
            }}
        >
            <Grid
                container
                spacing={2}
                sx={{ justifyContent: { xs: "center" }, minHeight: "630px" }}
            >
                {loading && <CircularLoading />}
                {error && <SnackbarPush textError="Sorry, something happened loading the products." severity="error" />}
                {(!loading && product.length === 0) && (
                    <Navigate to="/notFound" replace={true} />
                )}
                {!loading && (
                    <ItemDetail product={product} />
                )}
            </Grid>
        </Container>
    );
};

export default ItemDetailContainer;
