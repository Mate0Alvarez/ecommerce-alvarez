import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import ItemCount from "./ItemCount";

export default function ItemCard({ name, description, stock, price, onAdd, onRemove }) {
  const [showAdd, setShowAdd] = useState(true);
  const [countItem, setCountItems] = useState(1);

  const handleAddToCart = () => {
    setShowAdd(false);
    onAdd(countItem);
  };

  const handleRemove = () => {
    setShowAdd(true);
    onRemove(countItem);
  };

  const handleAddItem = () => {
    setCountItems(countItem + 1);
  };

  const handleRemoveItem = () => {
    if(countItem > 0){
      setCountItems(countItem - 1);
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="240"
        image="/monkey1.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {showAdd ? (
        <CardActions>
          <ItemCount
            stock={stock}
            initial={countItem}
            addItem={handleAddItem}
            removeItem={handleRemoveItem}
          />
        </CardActions>
      ) : (
        <></>
      )}
      <CardActions>
        {showAdd ? (
          <Button
            variant="outlined"
            color="info"
            startIcon={<ShoppingCartRounded />}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
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
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
