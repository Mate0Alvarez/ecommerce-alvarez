import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ItemCheckout = ({product}) => {
  return (
    <Card sx={{ display: 'flex'}}>
            <CardMedia
                component="img"
                sx={{ width: 90 }}
                image={product.picture_url}
                alt={product.title}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="body1">
                        {`${product.quantity} x ${product.title}`}
                    </Typography>
                    <Typography variant="subtitle1" color="body2" component="div" sx={{ mt: 1 }}>
                        {`${product.quantity} x $${product.price} - $${product.quantity * product.price}`}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
  )
}

export default ItemCheckout