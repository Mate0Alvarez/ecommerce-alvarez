import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import ItemCount from "./ItemCount";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ItemDetailDescription = ({ product, onAdd, onRemove }) => {
    const [showAdd, setShowAdd] = useState(true);
    const [countItem, setCountItems] = useState(1);
    const [stockError, setStockError] = useState(false);
    const { title, description, price, stock } = product;

    const handleOpenStockError = () => {
        setStockError(true);
    };

    const handleCloseStockError = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setStockError(false);
    };

    const handleAddToCart = () => {
        if (stock >= countItem) {
            setShowAdd(false);
            onAdd(countItem);
        } else {
            handleOpenStockError();
        }
    };

    const handleRemove = () => {
        setShowAdd(true);
        onRemove(countItem);
    };

    const handleAddItem = () => {
        setCountItems(countItem + 1);
    };

    const handleRemoveItem = () => {
        if (countItem > 0) {
            setCountItems(countItem - 1);
        }
    };

    return (
        <Card
            sx={{
                minWidth: 275,
                height: 400,
                padding: "0 30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "start"
            }}
        >
            <CardContent sx={{ mt: 4 }}>
                <Typography variant="h4" component="div">
                    {title}
                </Typography>
                <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
                    {description}
                </Typography>
                <Typography variant="body1" sx={{ mt: 2}}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions sx={{mt:2, ml:1}}>
                <Typography variant="h5" sx={{ mr: 3 }}>
                    {`$${price}`}
                </Typography>
                {showAdd ? (
                    <>
                        <ItemCount
                            stock={stock}
                            initial={countItem}
                            addItem={handleAddItem}
                            removeItem={handleRemoveItem}
                        />
                        <Button
                            sx={{width:"60%"}}
                            variant="outlined"
                            color="info"
                            startIcon={<ShoppingCartRounded />}
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </Button>
                    </>
                ) : (
                    <Button
                        variant="contained"
                        color="warning"
                        startIcon={<DeleteIcon />}
                        onClick={handleRemove}
                    >
                        Remove
                    </Button>
                )}
            </CardActions>
            <Snackbar
                open={stockError}
                autoHideDuration={2000}
                onClose={handleCloseStockError}
            >
                <Alert
                    onClose={handleCloseStockError}
                    severity="warning"
                    sx={{ width: "100%" }}
                >
                    Ups! There are not more products in stock
                </Alert>
            </Snackbar>
        </Card>
    );
};

export default ItemDetailDescription;
