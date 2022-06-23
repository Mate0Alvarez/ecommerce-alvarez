import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from '../../firebase/api';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Container from "@mui/material/Container";

function OpenBannerDesktop() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((result) => {
                setCategories(result);
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
                mt: { sm: "105px", xs: "55px", md: "15px" },
            }}>
            <Carousel showThumbs={false} showStatus={false} showArrows={false} emulateTouch={true} transitionTime={1500} autoPlay={true} interval={6500}>
                {categories.map((category) =>
                (
                    <Link to={("/category/") + category.key} key={category.id}>
                        <div>
                            <img src={category.banner_image} alt={category.name} />
                        </div>
                    </Link>
                )
                )}
            </Carousel>
        </Container>
    );
}

export default OpenBannerDesktop;
