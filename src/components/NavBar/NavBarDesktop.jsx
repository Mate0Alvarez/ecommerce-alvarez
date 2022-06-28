import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CartWidget from "../Cart/CartWidget";

const NavBarDesktop = ({ pages }) => {
  return (
    <Toolbar
      disableGutters
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Link to="/">
        <Box
          component="img"
          sx={{
            height: 55,
            display: { xs: "none", md: "flex" },
          }}
          alt="NFT Commerce logo."
          src="/logo.svg"
        />
      </Link>

      <Box sx={{ ml: 2, flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page, index) => (
          <div key={index}>
            {page.link_desktop}
          </div>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: 90,
        }}
      >
        <Box>
          <CartWidget />
        </Box>
      </Box>
    </Toolbar>
  );
};

export default NavBarDesktop;
