import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Item from "./Item";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const productsArray = [
  {
    id: "7628490239",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ad, voluptates consectetur ut earum dolor assumenda. Reiciendis quis quas, repellat molestias, delectus rerum iusto perferendis natus quam voluptates cumque architecto!",
    pictureUrl: "/monkey1.png",
    price: 500,
    stock: 5,
  },
  {
    id: "3356107710",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ad, voluptates consectetur ut earum dolor assumenda. Reiciendis quis quas, repellat molestias, delectus rerum iusto perferendis natus quam voluptates cumque architecto!",
    pictureUrl: "/monkey2.png",
    price: 1500,
    stock: 8,
  },
  {
    id: "2354913213",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ad, voluptates consectetur ut earum dolor assumenda. Reiciendis quis quas, repellat molestias, delectus rerum iusto perferendis natus quam voluptates cumque architecto!",
    pictureUrl: "/monkey3.png",
    price: 50,
    stock: 1,
  },
];
export default function ItemList({ onAdd, onRemove }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);

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
    const productsResult = new Promise((res, rej) => {
      setTimeout(() => {
        res(productsArray);
        //rej("Sorry, something happened loading the products.");
      }, 2000);
    });
    productsResult.then((result) => {
      setLoading(false);
      setProducts(result);
    });
    productsResult.catch((error) => {
        setLoading(false);
        handleErrorOpen();
        console.log(error);
      });
  }, []);

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
      {products && products.map((product) => (
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
          <Item product={product} onAdd={onAdd} onRemove={onRemove} />
        </Grid>
      ))}
    </>
  );
}
