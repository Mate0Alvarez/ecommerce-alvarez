import React, { useState, useEffect } from 'react';
import OrderStepper from './OrderStepper';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import ItemCheckout from '../Checkout/ItemCheckout';


const OrderDetail = ({ order }) => {
    const [stepActive, setStepActive] = useState(1);
    const { buyer } = order;
    const { cart } = order;

    useEffect(() => {
        const steps = {
            CREATED: 1,
            PAYED: 2,
            DELIVERED: 3
        };

        setStepActive(steps[order.status]);
    }, [order])

    return (
        <>
            <Grid item xs={12} sx={{mb:2}}>
                <OrderStepper active={stepActive} />
            </Grid>
            <Grid item xs={12} >
                <Box sx={{ background: 'linear-gradient(117deg, rgba(2,136,209,1) 27%, rgba(2,119,189,1) 48%, rgba(14,30,40,1) 100%)', p: 2, borderRadius: 2, display: 'flex', justifyContent:'space-between', alignItems:'center', flexDirection: {xs:'column',sm:'row'} }}>
                    <Typography variant="h5" component="div" sx={{textAlign:'center', m:1}}>Order ID: {order.id}</Typography>
                    <Typography variant="h5" component="div">Total amount: ${order.totalAmount}</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box sx={{ background: 'linear-gradient(30deg, rgba(14,30,40,1) 30%, rgba(2,136,209,1) 100%)', p: 2, borderRadius: 2 }}>
                    <Typography variant="h5" component="div" sx={{ mb: 3 }}>Your items:</Typography>
                    {cart.map((product) => (
                        <Grid item xs={12} key={product.id} sx={{mb:1}}>
                            <ItemCheckout product={product} />
                        </Grid>
                    ))}
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box sx={{ background: 'linear-gradient(117deg, rgba(2,136,209,1) 27%, rgba(2,119,189,1) 48%, rgba(14,30,40,1) 100%)', p: 2, borderRadius: 2 }}>
                    <Typography variant="h5" component="div" sx={{ mb: 3 }}>Your information:</Typography>
                    <Typography variant="body1" component="div" sx={{ mb: 2 }}>Name: {buyer.name}</Typography>
                    <Typography variant="body1" component="div" sx={{ mb: 2 }}>Phone: {buyer.phone}</Typography>
                    <Typography variant="body1" component="div" sx={{ mb: 2 }}>E-mail: {buyer.email}</Typography>
                </Box>
            </Grid>
        </>
    );
}

export default OrderDetail;