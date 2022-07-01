import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from '../../firebase/api';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CircularLoading from '../Utils/CircularLoading';
import Grid from '@mui/material/Grid';

const CategoriesListContainer = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getCategories()
            .then((result) => {
                setIsLoading(false);
                return setCategories(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Container
            maxWidth="xl"
            sx={{
                flexGrow: 1,
                width: "90%",
                margin: "auto",
                mt: { sm: "105px", xs: "55px", md: "15px" },
                minHeight: "85vh"
            }}
        >
            <Grid
                container
                spacing={2}
                sx={{ justifyContent: { xs: "center" } }}
            >
                {isLoading && (<CircularLoading />)}
                {categories.map((category) => (
                    <Grid item xs={12}>
                        <Link to={("/category/") + category.key} key={category.id}>
                            <Box
                                sx={{
                                    width: "100%"
                                }}
                                component="img"
                                alt={category.name}
                                src={category.banner_image}
                            />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Container>

    );
};

export default CategoriesListContainer;
