import React from 'react'
import Container from "@mui/material/Container";
import ItemDetail from "./ItemDetail";
import Grid from "@mui/material/Grid";

const ItemDetailContainer = ({ onAdd, onRemove }) => {
    return (
        <Container
            maxWidth="xl"
            sx={{
                flexGrow: 1,
                width: "90%",
                margin: "auto",
                mt: { sm: "105px", xs: "55px", md: "55px" },
            }}
        >
            <Grid container spacing={2} sx={{ justifyContent: { xs: "center" }, minHeight: "630px" }}>
                <ItemDetail onAdd={onAdd} onRemove={onRemove} />
            </Grid>
        </Container>
    )
}

export default ItemDetailContainer