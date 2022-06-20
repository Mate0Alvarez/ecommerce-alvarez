import React, { useContext, useState, useEffect } from 'react';
import { MyContext } from "../../context/CartContext";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import CartItem from './CartItem';


const Cart = () => {
  const { addedProducts } = useContext(MyContext);
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
      let total = 0;
      for (let i = 0; i < addedProducts.length; i++) {
        total += addedProducts[i].quantity * addedProducts[i].price;
      }
      return setTotalPrice(total);
  }, [addedProducts])
  
 
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          flexGrow: 1,
          width: "90%",
          margin: "auto",
          mt: { sm: "105px", xs: "55px", md: "25px" },
          minHeight: "85vh"
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h4" component="div">Shopping Cart</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5" component="div" sx={{ textAlign: "right" }}>{addedProducts.length} {addedProducts.length === 1 ? `Item` : `Items`}</Typography>
          </Grid>
          {(addedProducts.length !== 0) ?
            addedProducts.map((product) => (
              <CartItem product={product} key={product.id} />
            )) :
            <Grid item xs={8} >
              <Typography variant="h4" component="div" sx={{ mt: 10 }}>Hey! Your cart is empty</Typography>
            </Grid>}
          {(addedProducts.length !== 0) && (
            <Grid item xs={8} >
              <Typography variant="h4" component="div" sx={{ mt: 10 }}>Total: $ {totalPrice}</Typography>
            </Grid>
          )}
        </Grid>

      </Container>
    </>
  );
};

export default Cart;
