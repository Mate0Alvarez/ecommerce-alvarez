import React from 'react'
import { Box, Container } from '@mui/material'
import Typography from '@mui/material/Typography';
import { GitHub } from "@mui/icons-material";

const Footer = () => {
    return (
        <Box sx={{
            mt: 5,
            backgroundColor: "#272727",
            boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
        }}>
            <Container maxWidth="xl" sx={{
                p: 3,
                backgroundColor: "#272727",
                display: "flex",
                flexDirection: "column"
            }}>
                <Box
                    component="img"
                    sx={{
                        height: 55,
                        mb: 1
                    }}
                    alt="NFT Commerce logo."
                    src="/logo.svg"
                />
                <Typography component="div" variant="h6" sx={{ textAlign: "center", mb: 1 }}>
                    Master Ape - NFT's e-commerce
                </Typography>
                <hr style={{ width: "50%", marginBottom: "15px" }} />
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", textAlign:"center" }}>
                    E-commerce created by Mateo&nbsp;Alvarez for the Coderhouse React.JS course
                </Box>
                <a href='https://github.com/Mate0Alvarez/ecommerce-alvarez' target='_blank' rel='noreferrer' style={{textAlign: "center", marginTop: "10px"}}>
                    <GitHub fontSize='large' sx={{ color: '#ffffff' }} />
                </a>
            </Container>
        </Box>
    )
}

export default Footer