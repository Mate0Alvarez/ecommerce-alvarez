import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ItemCard from "./ItemCard";

const name = "Lorem ipsum";
const description =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ad, voluptates consectetur ut earum dolor assumenda. Reiciendis quis quas, repellat molestias, delectus rerum iusto perferendis natus quam voluptates cumque architecto!";

const ItemListContainer = ({ onAdd, onRemove }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "90%",
        margin: "auto",
        mt: { sm: "105px", xs: "55px", md: "15px" },
      }}
    >
      <Grid container spacing={2} sx={{ justifyContent: { xs: "center" } }}>
        {["", "", ""].map((_, index) => (
          <Grid
            item
            sm={6}
            md={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            key={index}
          >
            <ItemCard
              name={name}
              description={description}
              stock={8}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ItemListContainer;
