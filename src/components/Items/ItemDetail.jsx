import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ItemDetailDescription from "./ItemDetailDescription";

const ItemDetail = ({ product }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                container
                spacing={2}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 3,
                }}
            >
                <Grid
                    item
                    sm={10}
                    md={4}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            width: {
                                xs: "90%",
                                sm: 400,
                            },
                        }}
                        component="img"
                        alt={product.title}
                        src={product.picture_url}
                    />
                </Grid>
                <Grid
                    item
                    sm={10}
                    md={4}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ItemDetailDescription
                        product={product}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default ItemDetail;
