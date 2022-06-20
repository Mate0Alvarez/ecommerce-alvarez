import React, { useState, useContext } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ItemCount from '../Items/ItemCount';
import { MyContext } from '../../context/CartContext';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({ product }) => {
    const [countItem, setCountItem] = useState(product.quantity);
    const { onRemove, addQuantity, removeQuantity } = useContext(MyContext);

    const handleAddItem = () => {
        setCountItem(countItem + 1);
        addQuantity(product.id);
    };

    function handleRemoveItem() {
        if (countItem > 0) {
            setCountItem(countItem - 1);
            removeQuantity(product.id);
        }
    }

    return (
        <>
            <Grid item sm={12} md={3}>
                <Box
                    sx={{
                        width: {
                            xs: "90%",
                            sm: 200,
                        },
                        margin: "0 auto"
                    }}
                    component="img"
                    alt={product.title}
                    src={product.pictureUrl}
                />
            </Grid>
            <Grid item sm={12} md={9} sx={{ display: "flex", alignItems: "center" }}>
                <Grid container spacing={2} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Grid item xs={9} md={4}>
                        <Typography variant="h5" component="div">{product.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.description_short}
                        </Typography>
                        <Button
                            variant="contained"
                            color="warning"
                            sx={{mt:2}}
                            startIcon={<DeleteIcon />}
                            onClick={() => onRemove(product.id)}
                        >
                            Remove
                        </Button>
                    </Grid>
                    <Grid item xs={3} md={2} sx={{ textAlign: {xs:"right", md:"center"} }}>
                        <Typography variant="h5" component="div">$ {product.price}</Typography>
                    </Grid>
                    <Grid item xs={9} md={4} sx={{ textAlign: "center" }}>
                        <ItemCount
                            stock={product.stock}
                            initial={countItem}
                            addItem={handleAddItem}
                            removeItem={handleRemoveItem}
                        />
                    </Grid>
                    <Grid item xs={3} md={2} sx={{ textAlign: "right" }}>
                        <Typography variant="h5" component="div">$ {countItem * product.price}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>

    )
}

export default CartItem