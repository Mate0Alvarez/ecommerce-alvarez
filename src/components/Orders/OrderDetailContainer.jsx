import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import {getOrder} from '../../firebase/api';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CircularLoading from "../Utils/CircularLoading";
import SnackbarPush from "../Utils/SnackbarPush";
import OrderDetail from "./OrderDetail";

const OrderDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    const [order, setOrder] = useState(false);

    const { id } = useParams();

    const handleErrorOpen = () => {
        setError(true);
    }

    useEffect(() => {
        setLoading(true);
        getOrder(id)
        .then(orderFiltered => {
            if (orderFiltered) {
                setOrder(orderFiltered);
            }
            return setLoading(false);
        })
        .catch((err) => {
                setLoading(false);
                handleErrorOpen();
                console.log(err);
            });
    }, [id]);
    
    return (
        <Container
            maxWidth="md"
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
                sx={{ justifyContent: { xs: "center" } }}
            >
                {loading && <CircularLoading />}
                {error && <SnackbarPush textError="Sorry, something happened loading the products." severity="error" />}
                {(!loading && !order) && (
                    <Navigate to="/notFound" replace={true} />
                )}
                {(!loading && order) &&(
                    <OrderDetail order={order} />
                )}
            </Grid>
        </Container>
    )
}

export default OrderDetailContainer