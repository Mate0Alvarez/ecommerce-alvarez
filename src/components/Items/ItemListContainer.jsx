import React from "react";
import Box from "@mui/material/Box";
import "./ItemListContainer.css";

const ItemListContainer = ({greeting})=>{
    return(
        <Box sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent:"center",
            minHeight : "450px"
        }}>
            <h2>{`WELCOME ${greeting}`}</h2>
        </Box>
        
    )
};

export default ItemListContainer;