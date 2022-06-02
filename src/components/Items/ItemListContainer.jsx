import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ItemList from "./ItemList";

const ItemListContainer = ({ onAdd, onRemove }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        flexGrow: 1,
        width: "90%",
        margin: "auto",
        mt: { sm: "105px", xs: "55px", md: "15px" },
      }}
    >
      <Grid container spacing={2} sx={{ justifyContent: { xs: "center" }, minHeight : "630px" }}>
        <ItemList onAdd={onAdd} onRemove={onRemove} />
      </Grid>
    </Container>
  );
};

export default ItemListContainer;
